import nodemailer from "nodemailer";

// Chạy trên Node.js (Nodemailer cần môi trường Node, không chạy được ở Edge)
export const runtime = "nodejs";

const LIMITS = { name: 100, email: 200, topic: 100, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Giới hạn số lần gửi theo IP (đơn giản, lưu trong bộ nhớ): tối đa 5 lần / 10 phút
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

const tooMany = (ip: string) => {
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent);
    return recent.length > MAX_PER_WINDOW;
};

// Chống chèn mã HTML vào nội dung email
const escapeHtml = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// Bỏ xuống dòng trong các trường dùng làm tiêu đề email
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function POST(request: Request) {
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    const to = process.env.CONTACT_TO || user;
    if (!user || !pass || !to) {
        return Response.json({ ok: false, error: "Máy chủ chưa được cấu hình gửi email." }, { status: 500 });
    }

    let data: Record<string, unknown>;
    try {
        data = await request.json();
    } catch {
        return Response.json({ ok: false, error: "Dữ liệu không hợp lệ." }, { status: 400 });
    }

    // Ô ẩn chống bot: người thật không nhìn thấy nên luôn để trống
    if (typeof data.website === "string" && data.website.trim() !== "") {
        return Response.json({ ok: true });
    }

    const name = oneLine(String(data.name ?? ""));
    const email = oneLine(String(data.email ?? ""));
    const topic = oneLine(String(data.topic ?? "Lời nhắn"));
    const message = String(data.message ?? "").trim();

    if (!name || !message) {
        return Response.json({ ok: false, error: "Vui lòng nhập họ tên và nội dung." }, { status: 400 });
    }
    if (email && !EMAIL_RE.test(email)) {
        return Response.json({ ok: false, error: "Email không hợp lệ." }, { status: 400 });
    }
    if (name.length > LIMITS.name || email.length > LIMITS.email || topic.length > LIMITS.topic || message.length > LIMITS.message) {
        return Response.json({ ok: false, error: "Nội dung quá dài." }, { status: 400 });
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
    if (tooMany(ip)) {
        return Response.json({ ok: false, error: "Bạn gửi hơi nhiều, vui lòng thử lại sau ít phút." }, { status: 429 });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass },
    });

    try {
        await transporter.sendMail({
            from: `"Portfolio – ${name}" <${user}>`,
            to,
            ...(email ? { replyTo: `"${name}" <${email}>` } : {}),
            subject: `[Portfolio] ${topic} – ${name}`,
            text: `Chủ đề: ${topic}\nHọ tên: ${name}\nEmail: ${email || "(không để lại)"}\n\n${message}`,
            html: `
                <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;border:1px solid #fde4e4;border-radius:16px;overflow:hidden">
                    <div style="background:linear-gradient(90deg,#f43f5e,#f472b6);color:#fff;padding:18px 24px">
                        <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:.85">Lời nhắn mới từ Portfolio</div>
                        <div style="font-size:20px;font-weight:bold;margin-top:4px">${escapeHtml(topic)}</div>
                    </div>
                    <div style="padding:20px 24px;color:#3a2420">
                        <p style="margin:0 0 6px"><b>Họ tên:</b> ${escapeHtml(name)}</p>
                        <p style="margin:0 0 16px"><b>Email:</b> ${email ? escapeHtml(email) : "<i>không để lại</i>"}</p>
                        <div style="background:#fff8f5;border-left:4px solid #fb7185;padding:14px 16px;border-radius:8px;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</div>
                        <p style="margin:16px 0 0;font-size:12px;color:#a88a80">Bấm “Trả lời” để phản hồi trực tiếp cho người gửi.</p>
                    </div>
                </div>`,
        });
        return Response.json({ ok: true });
    } catch (err) {
        console.error("[contact] Gửi email thất bại:", err);
        return Response.json({ ok: false, error: "Chưa gửi được, vui lòng thử lại sau." }, { status: 502 });
    }
}
