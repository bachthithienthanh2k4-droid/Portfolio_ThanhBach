"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from "framer-motion";
import { Mail, Phone, MapPin, Send, Copy, Check, X } from "lucide-react";
import Image from "next/image";
import { FacebookIcon, GithubIcon } from "../components/icons";

const EMAIL = "bachthithienthanh2k4@gmail.com";
const ease = [0.16, 1, 0.3, 1] as const;

const socials = [
    { Icon: FacebookIcon, href: "https://www.facebook.com/thanh.bach.395/", label: "Facebook", handle: "thanh.bach.395" },
    { Icon: GithubIcon, href: "https://github.com/bachthithienthanh2k4-droid", label: "GitHub", handle: "bachthithienthanh2k4-droid" },
];

const topics = ["Hợp tác dự án", "Cơ hội việc làm", "Nghiên cứu AI", "Trò chuyện"];

// Tỉ lệ thật (rộng / cao) của từng ảnh, để khung luôn khớp ảnh và không bị cắt
const RATIO: Record<string, number> = {
    "/pictures/Ảnh đại diện.jpg": 1536 / 2560,
    "/pictures/Ảnh profile.jpg": 1706 / 2560,
    "/pictures/anhtotnghiep.jpg": 2560 / 1437,
    "/pictures/anhtotnghiep_2.jpg": 1706 / 2560,
    "/pictures/anhhusc.jpg": 2560 / 1707,
    "/pictures/totnghiep.jpg": 2560 / 1706,
    "/pictures/Miss.jpg": 1,
    "/pictures/hueict.jpg": 2048 / 1365,
    "/pictures/mc.png": 913 / 609,
};
const ratioOf = (src: string) => RATIO[src] ?? 4 / 3;

// Ảnh của Thanh dùng trong trang
const collage = [
    { src: "/pictures/anhtotnghiep.jpg", caption: "Tốt nghiệp 2026", className: "-left-6 top-8 w-48 -rotate-6 md:-left-16", delay: 0 },
    { src: "/pictures/anhhusc.jpg", caption: "HUSC", className: "-right-4 top-1/3 w-44 rotate-6 md:-right-14", delay: 0.8 },
    { src: "/pictures/anhtotnghiep_2.jpg", caption: "Tốt nghiệp 2026", className: "-bottom-8 -left-4 w-28 rotate-3 md:-left-12", delay: 1.6 },
];

const moments = [
    { src: "/pictures/Ảnh profile.jpg", caption: "Mùa Giáng sinh" },
    { src: "/pictures/totnghiep.jpg", caption: "Lễ tốt nghiệp 2026" },
    { src: "/pictures/Miss.jpg", caption: "Top 30 HUSC Miss & Mister" },
    { src: "/pictures/hueict.jpg", caption: "Giải Nhì Hue-ICT 2026" },
    { src: "/pictures/anhtotnghiep_2.jpg", caption: "Ngày ra trường" },
    { src: "/pictures/anhtotnghiep.jpg", caption: "Khoảnh khắc tốt nghiệp" },
    { src: "/pictures/anhhusc.jpg", caption: "Đại học Khoa học Huế" },
    { src: "/pictures/mc.png", caption: "Dẫn chương trình" },
];

// Dải ảnh tự chạy, rê chuột để dừng
const MomentsRibbon = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const paused = useRef(false);
    useAnimationFrame((_, delta) => {
        const track = trackRef.current;
        if (!track || paused.current) return;
        const half = track.scrollWidth / 2;
        if (!half) return;
        let next = x.get() - 40 * (delta / 1000);
        if (next <= -half) next += half;
        x.set(next);
    });
    return (
        <div className="relative overflow-hidden py-4" onMouseEnter={() => { paused.current = true; }} onMouseLeave={() => { paused.current = false; }}>
            <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-5 pr-5">
                {[...moments, ...moments].map((m, i) => (
                    <div key={i} className={`group relative shrink-0 rounded-2xl bg-white p-2 pb-9 shadow-[0_20px_40px_-20px_rgba(150,50,70,0.5)] transition-transform duration-500 hover:-translate-y-2 ${i % 2 ? "rotate-2" : "-rotate-2"}`}>
                        <div className="relative h-[220px] overflow-hidden rounded-xl md:h-[260px]" style={{ aspectRatio: ratioOf(m.src) }}>
                            <Image src={m.src} alt={m.caption} fill sizes="460px" quality={85} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <p className="absolute bottom-2.5 left-0 right-0 text-center text-xs font-semibold italic text-[#8a6f66]">{m.caption}</p>
                    </div>
                ))}
            </motion.div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fbf5f1] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fbf5f1] to-transparent" />
        </div>
    );
};

export default function ContactPage() {
    const [copied, setCopied] = useState(false);
    const [topic, setTopic] = useState(topics[0]);
    const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [showThankYou, setShowThankYou] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    // Gửi lời nhắn tới máy chủ, máy chủ tự gửi email về Gmail của Thanh
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, topic }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.ok) throw new Error(data.error || "Chưa gửi được, vui lòng thử lại sau.");
            setStatus("idle");
            setForm({ name: "", email: "", message: "", website: "" });
            setShowThankYou(true);
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Chưa gửi được, vui lòng thử lại sau.");
        }
    };

    const infoCards = [
        { icon: Mail, label: "Email", value: EMAIL, action: copyEmail, actionLabel: copied ? "Đã sao chép" : "Sao chép" },
        { icon: Phone, label: "Điện thoại", value: "033.231.xxxx" },
        { icon: MapPin, label: "Địa chỉ", value: "Thành phố Huế, Việt Nam" },
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#fbf5f1] pb-24 pt-32 text-[#3a2420] selection:bg-rose-200">
            {/* Nền trang trí */}
            <div className="pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full bg-rose-200/50 blur-[140px]" />
            <div className="pointer-events-none absolute top-[45%] -left-60 h-[560px] w-[560px] rounded-full bg-[#fde4dc]/80 blur-[140px]" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[800px] opacity-40"
                style={{
                    backgroundImage: "radial-gradient(rgba(190,80,100,0.18) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                    maskImage: "radial-gradient(ellipse at top, black 15%, transparent 65%)",
                    WebkitMaskImage: "radial-gradient(ellipse at top, black 15%, transparent 65%)",
                }}
            />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                {/* ================= MỞ ĐẦU ================= */}
                <section className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
                    <div className="order-2 lg:order-1 lg:col-span-7">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-rose-300" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500">Liên hệ</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease }}
                            className="text-5xl font-black leading-[0.95] tracking-tighter md:text-7xl"
                        >
                            Kết nối <br />
                            <motion.span
                                animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="bg-clip-text font-normal italic text-transparent"
                                style={{
                                    backgroundImage: "linear-gradient(110deg, #f43f5e 20%, #f9a8d4 40%, #fff1f2 50%, #f9a8d4 60%, #f43f5e 80%)",
                                    backgroundSize: "200% 100%",
                                }}
                            >
                                với Thanh
                            </motion.span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease, delay: 0.2 }}
                            className="mt-8 max-w-lg border-l-2 border-rose-300 pl-5 italic leading-relaxed text-[#6e5249]"
                        >
                            Một lời hỏi thăm, một ý tưởng dự án hay một cơ hội hợp tác — mình luôn sẵn lòng lắng nghe và phản hồi trong vòng 24 giờ làm việc.
                        </motion.p>

                        {/* Thẻ liên hệ */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease, delay: 0.35 }}
                            className="mt-10 space-y-3"
                        >
                            {infoCards.map(({ icon: Icon, label, value, action, actionLabel }) => (
                                <div key={label} className="group flex items-center gap-4 rounded-2xl border border-white bg-white/80 p-3 pr-4 shadow-[0_15px_40px_-25px_rgba(190,80,100,0.5)] backdrop-blur transition-colors hover:bg-white">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500 transition-colors group-hover:bg-rose-500 group-hover:text-white">
                                        <Icon size={20} />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a88a80]">{label}</p>
                                        <p className="truncate font-bold text-[#3a2420]">{value}</p>
                                    </div>
                                    {action && (
                                        <button
                                            onClick={action}
                                            className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition-colors ${copied ? "bg-emerald-50 text-emerald-600" : "bg-[#fff1f2] text-rose-500 hover:bg-rose-500 hover:text-white"}`}
                                        >
                                            {copied ? <Check size={14} /> : <Copy size={14} />} {actionLabel}
                                        </button>
                                    )}
                                </div>
                            ))}
                        </motion.div>

                        {/* Mạng xã hội */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease, delay: 0.5 }}
                            className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
                        >
                            {socials.map(({ Icon, href, label, handle }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 rounded-2xl bg-[#4a1f2a] p-3 pr-4 text-white transition-colors hover:bg-rose-500"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10"><Icon size={18} /></span>
                                    <div className="min-w-0">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-200 group-hover:text-white/80">{label}</p>
                                        <p className="truncate text-sm font-semibold">{handle}</p>
                                    </div>
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Bộ ảnh của Thanh */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease, delay: 0.15 }}
                        className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:col-span-5"
                    >
                        <div className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-b from-rose-200/70 to-[#fde4dc]/40 blur-2xl" />
                        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[3rem] border-2 border-rose-200" />
                        <div style={{ aspectRatio: ratioOf("/pictures/Ảnh đại diện.jpg") }} className="group relative overflow-hidden rounded-[3rem] border-[8px] border-white shadow-[0_40px_80px_-30px_rgba(150,50,70,0.5)]">
                            <Image src="/pictures/Ảnh đại diện.jpg" alt="Bạch Thị Thiện Thanh" fill priority sizes="400px" quality={90} className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#4a1f2a]/70 via-transparent to-transparent" />
                            <div className="absolute bottom-6 right-6 text-right text-white">
                                <p className="text-2xl font-black">Thiện Thanh</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose-100/90">Huế · Việt Nam</p>
                            </div>
                        </div>

                        {collage.map((c) => (
                            <motion.div
                                key={c.src}
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                                transition={{
                                    opacity: { duration: 0.6, delay: 0.5 + c.delay / 2 },
                                    scale: { duration: 0.6, delay: 0.5 + c.delay / 2 },
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: c.delay },
                                }}
                                whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
                                className={`absolute hidden rounded-2xl bg-white p-1.5 pb-7 shadow-[0_25px_50px_-20px_rgba(150,50,70,0.55)] sm:block ${c.className}`}
                            >
                                <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: ratioOf(c.src) }}>
                                    <Image src={c.src} alt={c.caption} fill sizes="200px" quality={85} className="object-cover" />
                                </div>
                                <p className="absolute bottom-1.5 left-0 right-0 text-center text-[11px] font-semibold italic text-[#8a6f66]">{c.caption}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* ================= FORM ================= */}
                <section className="mt-28 grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#4a1f2a] via-[#5c2633] to-[#3a1820] p-8 text-white shadow-[0_50px_100px_-40px_rgba(74,31,42,0.7)] md:p-10 lg:col-span-5"
                    >
                        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-rose-400/25 blur-[90px]" />
                        <div className="relative">
                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-300">Gửi lời nhắn</p>
                            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight md:text-4xl">
                                Bạn muốn <span className="font-normal italic text-rose-300">trò chuyện</span> về điều gì?
                            </h2>
                            <p className="mt-4 leading-relaxed text-rose-100/75">
                                Điền vài dòng bên cạnh và bấm gửi, lời nhắn sẽ đến thẳng hộp thư của mình.
                            </p>
                            <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border-4 border-white/15" style={{ aspectRatio: ratioOf("/pictures/totnghiep.jpg") }}>
                                <Image src="/pictures/totnghiep.jpg" alt="Lễ tốt nghiệp 2026" fill sizes="460px" quality={85} className="object-cover" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease, delay: 0.1 }}
                        className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white/85 p-8 shadow-[0_30px_70px_-40px_rgba(190,80,100,0.55)] backdrop-blur md:p-10 lg:col-span-7"
                    >
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#a88a80]">Chủ đề</p>
                        <div className="mb-7 flex flex-wrap gap-2">
                            {topics.map((t) => (
                                <button
                                    type="button"
                                    key={t}
                                    onClick={() => setTopic(t)}
                                    className={`relative rounded-full px-4 py-2 text-xs font-bold transition-colors ${topic === t ? "text-white" : "bg-[#fff8f5] text-[#6e5249] ring-1 ring-rose-100 hover:text-rose-500"}`}
                                >
                                    {topic === t && <motion.span layoutId="topic" className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-pink-400" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                                    <span className="relative z-10">{t}</span>
                                </button>
                            ))}
                        </div>

                        <input
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            value={form.website}
                            onChange={(e) => setForm({ ...form, website: e.target.value })}
                            className="absolute left-[-9999px] h-0 w-0 opacity-0"
                        />
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <Field label="Họ tên" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Nguyễn Văn A" />
                            <Field label="Email của bạn" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="ban@gmail.com" />
                        </div>
                        <label className="mt-5 block">
                            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#a88a80]">Nội dung</span>
                            <textarea
                                rows={5}
                                required
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                placeholder="Nhập lời nhắn của bạn..."
                                className="w-full resize-none rounded-[1.5rem] border border-rose-100 bg-[#fffaf8] px-5 py-4 text-[#3a2420] outline-none transition-all placeholder:text-[#c4aaa2] focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
                            />
                        </label>
                        {status === "error" && (
                            <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm text-rose-600">
                                {errorMsg} Bạn cũng có thể gửi trực tiếp tới{" "}
                                <a href={`mailto:${EMAIL}`} className="font-bold underline">{EMAIL}</a>.
                            </div>
                        )}
                        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs italic text-[#a88a80]">Lời nhắn sẽ được gửi thẳng tới Gmail của Thanh.</p>
                            <motion.button
                                type="submit"
                                disabled={status === "sending"}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-400 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-rose-200 transition-colors hover:from-[#4a1f2a] hover:to-[#4a1f2a] disabled:cursor-wait disabled:opacity-60"
                            >
                                {status === "sending" ? "Đang gửi…" : "Gửi lời nhắn"} <Send size={16} />
                            </motion.button>
                        </div>
                    </motion.form>
                </section>

                {/* ================= KHOẢNH KHẮC ================= */}
                <section className="mt-28">
                    <div className="mb-6 flex items-end justify-between gap-6">
                        <div>
                            <div className="mb-3 flex items-center gap-3">
                                <span className="h-px w-10 bg-rose-300" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500">Khoảnh khắc</span>
                            </div>
                            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                                Một chút <span className="font-normal italic text-rose-500">về Thanh</span>
                            </h2>
                        </div>
                        <p className="hidden max-w-xs text-right text-sm italic text-[#a88a80] md:block">Rê chuột để dừng lại ngắm ảnh.</p>
                    </div>
                </section>
            </div>
            <MomentsRibbon />

            {/* ================= THÔNG BÁO ================= */}
            <AnimatePresence>
                {showThankYou && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2a1216]/50 p-4 backdrop-blur-sm" onClick={() => setShowThankYou(false)}>
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] bg-[#fffaf8] p-10 text-center shadow-2xl"
                        >
                            <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-rose-400 to-pink-400" />
                            <button onClick={() => setShowThankYou(false)} className="absolute right-5 top-5 rounded-full p-2 text-[#a88a80] hover:bg-rose-50" aria-label="Đóng"><X size={20} /></button>
                            <div className="relative mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                <Image src="/pictures/Ảnh đại diện.jpg" alt="" fill sizes="80px" className="object-cover object-top" />
                            </div>
                            <h2 className="text-3xl font-black tracking-tight">Cảm ơn bạn!</h2>
                            <p className="mt-3 leading-relaxed text-[#6e5249]">
                                Lời nhắn của bạn đã được gửi tới Thanh. Mình sẽ phản hồi trong vòng 24 giờ làm việc nhé!
                            </p>
                            <button onClick={() => setShowThankYou(false)} className="mt-8 w-full rounded-full bg-[#4a1f2a] py-3.5 font-bold text-white transition-colors hover:bg-rose-500">Đóng</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function Field({ label, value, onChange, type = "text", placeholder, required }: {
    label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string; required?: boolean;
}) {
    return (
        <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#a88a80]">{label}</span>
            <input
                type={type}
                required={required}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-full border border-rose-100 bg-[#fffaf8] px-5 py-3.5 text-[#3a2420] outline-none transition-all placeholder:text-[#c4aaa2] focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
            />
        </label>
    );
}
