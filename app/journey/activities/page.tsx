"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from 'framer-motion';
import {
    Lightbulb, Users, Trophy, GraduationCap, Building2, Sparkles, Flame, Music,
    X, ChevronLeft, ChevronRight, Images, ArrowUpRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang, pick } from '../../i18n';

// Nội dung song ngữ: { vi, en }
type L = { vi: string; en: string };

type Activity = {
    title: L;
    subtitle: L;
    lesson: L;
    icon: React.ElementType;
    images: (string | undefined)[];
};

const rawActivities: Activity[] = [
    {
        title: { vi: "Câu lạc bộ Hỗ trợ lập trình - SPIT", en: "Programming Support Club - SPIT" },
        subtitle: { vi: "Nơi khơi nguồn đam mê kỹ thuật", en: "Where my passion for tech took off" },
        lesson: { vi: "Kỹ năng sư phạm, làm việc nhóm và tư duy giải thuật hệ thống.", en: "Teaching skills, teamwork and systematic algorithmic thinking." },
        icon: Users,
        images: ["/pictures/clb_@.jpg", "/pictures/clb.jpg", "/pictures/clb_2.jpg", "/pictures/hotro.jpg",
            "pictures/tapthespit.jpg", "pictures/giangdayspit.jpg", "pictures/hoatdongngoaikhoa.jpg"
        ]
    },
    {
        title: { vi: "Câu lạc bộ Kỹ năng Lửa xanh", en: "Lửa Xanh (Blue Flame) Skills Club" },
        subtitle: { vi: "Nơi khơi nguồn kỹ năng", en: "Where my soft skills took shape" },
        lesson: { vi: "Kỹ năng mềm, tổ chức hội nhóm và truyền lửa cộng đồng.", en: "Soft skills, group organization and inspiring the community." },
        icon: Flame,
        images: [
            "/pictures/490070218_1281060920546314_125788188183515812_n.jpg",
            "/pictures/z7719744982821_bec8c1f05bd8453427cd4c0ecb84948f.jpg",
            "/pictures/z7719745005691_068e26110d4d7cda31bfa8e6f735029d.jpg",
            "/pictures/z7719745007812_d26bfd9a89756d51c9c90d2a50635886.jpg",
            "/pictures/486508798_1262650255720714_581671144975890167_n.jpg",
        ]
    },
    {
        title: { vi: "Cống hiến & Hỗ trợ Khoa", en: "Service & Faculty Support" },
        subtitle: { vi: "Gắn kết cộng đồng sinh viên", en: "Bringing the student community together" },
        lesson: { vi: "Khả năng điều phối sự kiện quy mô lớn và quản lý nhân sự dưới áp lực.", en: "Coordinating large-scale events and managing people under pressure." },
        icon: Trophy,
        images: [
            "/pictures/Hỗ_trợ_ICPC.jpg",
            "/pictures/thanhlap30.jpg",
            "/pictures/DHKH1103-07471.jpg",
            "/pictures/z7706776986346_80839b68a1c9a0923802171d661751ca.jpg",
            "/pictures/mc.png"
        ]
    },
    {
        title: { vi: "Hội thảo Khoa học & Seminar", en: "Scientific Conferences & Seminars" },
        subtitle: { vi: "Cập nhật tri thức công nghệ mới", en: "Staying current with new technology" },
        lesson: { vi: "Tư duy phản biện, cách đặt vấn đề và nắm bắt xu hướng công nghệ tương lai.", en: "Critical thinking, framing the right questions and spotting where technology is heading." },
        icon: GraduationCap,
        images: ["/pictures/hoithaoKH.jpg", "/pictures/seminar.jpg", "/pictures/seminar_2.jpg", "/pictures/seminar_3.jpg", "/pictures/tapthehueict.jpg"]
    },
    {
        title: { vi: "Văn nghệ & Nghệ thuật", en: "Performing Arts" },
        subtitle: { vi: "Tự tin tỏa sáng trên sân khấu", en: "Shining with confidence on stage" },
        lesson: { vi: "Sự tự tin trước đám đông và khả năng biểu đạt cảm xúc qua ngôn ngữ hình thể.", en: "Confidence in front of an audience and expressing emotion through body language." },
        icon: Music,
        images: [
            "/pictures/VanNghe.jpg",
            "/pictures/z7706777017285_3edda6686d13e489d1bd22cc44f3ad82.jpg",
            "/pictures/z7706777119229_e39c17c51e1158bf0c63db7251d751b8.jpg",
            "/pictures/z7706777127210_2b4de4ae5c6cf9333d50750e6a50d47d.jpg",
            "/pictures/Miss.jpg",
            "/pictures/vannghe_2.png",
            "/pictures/vannghe_3.png",
            "/pictures/vannghe_4.png",
            "/pictures/vannghe_5.png",
            "/pictures/vannghe_6.png",
        ]
    },
    {
        title: { vi: "Office Tour & Doanh nghiệp", en: "Office Tours & Industry Visits" },
        subtitle: { vi: "Tiếp cận môi trường làm việc thực tế", en: "A first look at real workplaces" },
        lesson: { vi: "Hiểu về văn hóa doanh nghiệp, quy trình Agile và các tiêu chuẩn ngành IT.", en: "Understanding company culture, Agile workflows and IT industry standards." },
        icon: Building2,
        images: ["/pictures/z7730228559954_46040e9a2f624256c5d3657257d1dbdd.jpg", 
            "/pictures/540969285_3282903675198879_8108306166079727059_n.jpg", 
            "/pictures/rikkei.jpg", 
            "/pictures/pokkadot.jpg",
             "/pictures/fpt.jpg", 
            "/pictures/pokkadot_2.jpg",
            "/pictures/pokkadot_3.jpg",
        ]
    }
];

// Chuẩn hóa đường dẫn ảnh (tự thêm "/" nếu thiếu) và bỏ ô trống
const normalizeSrc = (src: string) => (/^(https?:)?\/\//.test(src) || src.startsWith("/") ? src : `/${src.replace(/^\.?\/?(public\/)?/, "")}`);
const activityData = rawActivities.map((a) => ({
    ...a,
    images: a.images.filter((s): s is string => !!s && s.trim() !== "").map(normalizeSrc),
}));

const ease = [0.16, 1, 0.3, 1] as const;

// Số "ngẫu nhiên" cố định theo chỉ số: server và trình duyệt cho cùng kết quả (không lỗi hydration)
const seeded = (i: number, seed = 1) => {
    const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
    return x - Math.floor(x);
};

type OpenFn = (images: string[], index: number) => void;

// ============ NGÔI SAO LẤP LÁNH ============
const Twinkle = ({ size = 16, delay = 0, className = "" }: { size?: number; delay?: number; className?: string }) => (
    <motion.svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`pointer-events-none ${className}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: [0, 90] }}
        transition={{ duration: 2.6, repeat: Infinity, delay, ease: "easeInOut" }}
    >
        <path d="M12 0 C13 8, 16 11, 24 12 C16 13, 13 16, 12 24 C11 16, 8 13, 0 12 C8 11, 11 8, 12 0 Z" fill="currentColor" />
    </motion.svg>
);

const SparkleField = ({ count, seed, className = "" }: { count: number; seed: number; className?: string }) => (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        {Array.from({ length: count }, (_, i) => (
            <span
                key={i}
                className="absolute"
                style={{ left: `${(seeded(i, seed) * 100).toFixed(2)}%`, top: `${(seeded(i + 50, seed) * 100).toFixed(2)}%` }}
            >
                <Twinkle
                    size={Math.round(8 + seeded(i + 100, seed) * 14)}
                    delay={Math.round(seeded(i + 150, seed) * 30) / 10}
                    className={i % 3 === 0 ? "text-amber-300" : i % 3 === 1 ? "text-rose-400" : "text-pink-300"}
                />
            </span>
        ))}
    </div>
);

// ============ CHỮ ÁNH SÁNG CHẠY ============
const ShimmerText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <motion.span
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className={`bg-clip-text text-transparent ${className}`}
        style={{
            backgroundImage: "linear-gradient(110deg, #f43f5e 20%, #f9a8d4 40%, #fff1f2 50%, #f9a8d4 60%, #f43f5e 80%)",
            backgroundSize: "200% 100%",
        }}
    >
        {children}
    </motion.span>
);

// ============ HỌA TIẾT ============
// Lưới ren hình thoi mảnh màu hồng
const lacePattern = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Cpath d='M14 0 L28 14 L14 28 L0 14 Z' fill='none' stroke='%23f9a8b8' stroke-width='0.6' opacity='0.55'/%3E%3Ccircle cx='14' cy='14' r='1.2' fill='%23f472b6' opacity='0.35'/%3E%3C/svg%3E")`,
};

// Đường phân cách có viên kim cương ở giữa
const OrnamentDivider = () => (
    <div className="flex items-center justify-center gap-4 py-4" aria-hidden>
        <span className="h-px w-24 bg-gradient-to-r from-transparent to-rose-300 md:w-48" />
        <span className="h-2 w-2 rotate-45 bg-rose-300" />
        <motion.span
            animate={{ rotate: [45, 225, 45], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="h-4 w-4 rotate-45 border-2 border-rose-400 bg-gradient-to-br from-white to-rose-100"
        />
        <span className="h-2 w-2 rotate-45 bg-rose-300" />
        <span className="h-px w-24 bg-gradient-to-l from-transparent to-rose-300 md:w-48" />
    </div>
);

// Góc trang trí kiểu khung tranh
const Corner = ({ className }: { className: string }) => (
    <span className={`pointer-events-none absolute h-10 w-10 border-rose-300 ${className}`}>
        <span className="absolute h-1.5 w-1.5 rotate-45 bg-rose-400" style={{ top: -3, left: -3 }} />
    </span>
);

// ============ ẢNH CHÍNH: KHUNG VIỀN GRADIENT, RÕ NÉT ============
const FeaturedPhoto = ({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) => {
    const { t } = useLang();
    return (
        <div className="relative p-4">
            <Corner className="left-0 top-0 border-l-2 border-t-2" />
            <Corner className="right-0 top-0 rotate-90 border-l-2 border-t-2" />
            <Corner className="bottom-0 right-0 rotate-180 border-l-2 border-t-2" />
            <Corner className="bottom-0 left-0 -rotate-90 border-l-2 border-t-2" />
            <motion.button
                onClick={onClick}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative block w-full rounded-[2.25rem] bg-gradient-to-br from-rose-400 via-[#f6c9b8] to-pink-400 p-[3px] shadow-[0_40px_80px_-35px_rgba(150,50,70,0.6)]"
                aria-label={t(`Xem ảnh lớn: ${alt}`, `View full size: ${alt}`)}
            >
                <span className="relative block aspect-[3/2] w-full overflow-hidden rounded-[2.1rem] bg-white">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 720px"
                        quality={90}
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                    />
                    {/* Vệt sáng lướt qua khi rê chuột */}
                    <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 group-hover:left-[130%]" />
                    <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-rose-500 shadow-md">
                        <Images size={14} /> {t("Xem album", "View album")}
                    </span>
                </span>
            </motion.button>
        </div>
    );
};

// ============ DẢI ẢNH TỰ CHẠY ============
const PhotoRibbon = ({ images, title, reverse, onOpen }: { images: string[]; title: string; reverse?: boolean; onOpen: OpenFn }) => {
    const { t } = useLang();
    const trackRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const paused = useRef(false);

    // Chạy bằng JavaScript để luôn hoạt động; rê chuột để dừng
    useAnimationFrame((_, delta) => {
        const track = trackRef.current;
        if (!track || paused.current) return;
        const half = track.scrollWidth / 2;
        if (!half) return;
        const speed = 45; // px mỗi giây
        let next = x.get() + (reverse ? 1 : -1) * speed * (delta / 1000);
        if (next <= -half) next += half;
        if (next > 0) next -= half;
        x.set(next);
    });

    return (
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-gradient-to-r from-rose-100/80 via-[#fdeee9] to-pink-100/80 py-6 shadow-[0_30px_60px_-40px_rgba(190,80,100,0.6)]">
            <div className="pointer-events-none absolute inset-0" style={lacePattern} />
            <div
                className="relative"
                onMouseEnter={() => { paused.current = true; }}
                onMouseLeave={() => { paused.current = false; }}
            >
                <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-5 pr-5">
                    {[...images, ...images].map((img, i) => {
                        const idx = i % images.length;
                        return (
                            <motion.button
                                key={i}
                                onClick={() => onOpen(images, idx)}
                                whileHover={{ y: -8, scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="group relative h-[220px] w-[300px] shrink-0 overflow-hidden rounded-[1.5rem] border-[5px] border-white bg-white shadow-[0_20px_40px_-20px_rgba(150,50,70,0.55)] md:h-[260px] md:w-[360px]"
                                aria-label={t(`Xem ảnh ${idx + 1}: ${title}`, `View photo ${idx + 1}: ${title}`)}
                            >
                                <Image src={img} alt={t(`${title} – ảnh ${idx + 1}`, `${title} – photo ${idx + 1}`)} fill sizes="380px" quality={85} className="object-cover" />
                                <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black text-rose-500 opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
                                    {String(idx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                                </span>
                            </motion.button>
                        );
                    })}
                </motion.div>
            </div>
            {/* Làm mờ hai mép */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#fbe9ea] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#fbe9ea] to-transparent" />
        </div>
    );
};

// ============ MỘT HOẠT ĐỘNG ============
const ActivitySection = ({ activity, index, onOpen }: { activity: (typeof activityData)[number]; index: number; onOpen: OpenFn }) => {
    const { lang, t } = useLang();
    const Icon = activity.icon;
    const reverse = index % 2 === 1;
    const title = pick(activity.title, lang);
    return (
        <section id={`hoat-dong-${index + 1}`} className="relative scroll-mt-32">
            <SparkleField count={10} seed={index + 1} className="-inset-x-10 -inset-y-10" />
            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
                {/* Thông tin */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease }}
                    className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}
                >
                    <div className="flex items-center gap-4">
                        <span className="select-none text-6xl font-black leading-none md:text-7xl">
                            <ShimmerText>{String(index + 1).padStart(2, "0")}</ShimmerText>
                        </span>
                        <motion.div
                            whileHover={{ rotate: [0, -12, 12, 0], scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-400 text-white shadow-lg shadow-rose-200"
                        >
                            <Icon size={26} />
                        </motion.div>
                    </div>
                    <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight md:text-4xl">{title}</h2>
                    <p className="mt-2 italic text-[#a88a80]">{pick(activity.subtitle, lang)}</p>

                    <div className="relative mt-7 overflow-hidden rounded-[1.75rem] border border-white bg-white/75 p-6 shadow-[0_25px_50px_-30px_rgba(190,80,100,0.5)] backdrop-blur">
                        <div className="pointer-events-none absolute inset-0 opacity-60" style={lacePattern} />
                        <div className="relative flex gap-4">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500 ring-1 ring-amber-100">
                                <Lightbulb size={20} />
                            </span>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-rose-400">{t("Bài học rút ra", "Key takeaway")}</p>
                                <p className="mt-1 font-semibold italic leading-relaxed text-[#6e5249]">&ldquo;{pick(activity.lesson, lang)}&rdquo;</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => onOpen(activity.images, 0)}
                        className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#4a1f2a] py-2 pl-5 pr-2 text-white shadow-lg transition-colors hover:bg-rose-500"
                    >
                        <span className="text-[11px] font-black uppercase tracking-[0.2em]">{activity.images.length} {t("khoảnh khắc", "moments")}</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 group-hover:rotate-45">
                            <ArrowUpRight size={16} />
                        </span>
                    </button>
                </motion.div>

                {/* Ảnh chính */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease, delay: 0.1 }}
                    className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}
                >
                    {activity.images[0] && <FeaturedPhoto src={activity.images[0]} alt={title} onClick={() => onOpen(activity.images, 0)} />}
                </motion.div>
            </div>

            {/* Dải ảnh tự chạy */}
            {activity.images.length > 1 && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, ease }}
                    className="mt-10"
                >
                    <PhotoRibbon images={activity.images} title={title} reverse={reverse} onOpen={onOpen} />
                </motion.div>
            )}
        </section>
    );
};

export default function Activities() {
    const { lang, t } = useLang();
    const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
    const open: OpenFn = (images, index) => setLightbox({ images, index });
    const totalPhotos = activityData.reduce((n, a) => n + a.images.length, 0);

    // Điều khiển xem ảnh bằng bàn phím
    useEffect(() => {
        if (!lightbox) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightbox(null);
            if (e.key === "ArrowRight") setLightbox((lb) => lb && { ...lb, index: (lb.index + 1) % lb.images.length });
            if (e.key === "ArrowLeft") setLightbox((lb) => lb && { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length });
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightbox]);

    const step = (d: number) =>
        setLightbox((lb) => lb && { ...lb, index: (lb.index + d + lb.images.length) % lb.images.length });

    // Ảnh polaroid bay quanh tiêu đề
    const heroPhotos = [
        { src: activityData[4].images[0], className: "left-[2%] top-[18%] w-40 -rotate-12", delay: 0 },
        { src: activityData[0].images[1], className: "left-[8%] bottom-[2%] w-36 rotate-6", delay: 0.6 },
        { src: activityData[2].images[0], className: "right-[3%] top-[12%] w-44 rotate-12", delay: 0.3 },
        { src: activityData[3].images[0], className: "right-[9%] bottom-[0%] w-36 -rotate-6", delay: 0.9 },
    ].filter((p) => p.src);

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#fbf5f1] px-4 pb-28 pt-32 text-[#3a2420] selection:bg-rose-200 sm:px-8">
            {/* Nền trang trí */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], x: [0, 40, 0] }}
                transition={{ duration: 14, repeat: Infinity }}
                className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-rose-200/50 blur-[140px]"
            />
            <motion.div
                animate={{ scale: [1.1, 1, 1.1], y: [0, 40, 0] }}
                transition={{ duration: 16, repeat: Infinity }}
                className="pointer-events-none absolute top-[40%] -right-40 h-[600px] w-[600px] rounded-full bg-[#fde4dc]/80 blur-[140px]"
            />

            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-60"
                style={{ ...lacePattern, maskImage: "radial-gradient(ellipse at top, black 10%, transparent 65%)", WebkitMaskImage: "radial-gradient(ellipse at top, black 10%, transparent 65%)" }}
            />

            <div className="relative mx-auto max-w-6xl">
                {/* ================= TIÊU ĐỀ ================= */}
                <div className="relative mb-28 py-10 text-center">
                    <SparkleField count={22} seed={99} />
                    {heroPhotos.map((p, i) => (
                        <motion.div
                            key={p.src}
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
                            transition={{
                                opacity: { duration: 0.8, delay: 0.3 + i * 0.15 },
                                scale: { duration: 0.8, delay: 0.3 + i * 0.15 },
                                y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: p.delay },
                            }}
                            className={`absolute hidden rounded-2xl bg-white p-1.5 pb-5 shadow-[0_25px_50px_-20px_rgba(150,50,70,0.5)] xl:block ${p.className}`}
                        >
                            <div className="relative aspect-square overflow-hidden rounded-xl">
                                <Image src={p.src} alt="" fill sizes="180px" className="object-cover" />
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-rose-500 shadow-sm backdrop-blur"
                    >
                        <Sparkles size={14} className="animate-pulse" /> {t("Hành trình & Hoạt động", "Journey & Activities")}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease }}
                        className="relative text-5xl font-black leading-[1.05] tracking-tighter md:text-8xl"
                    >
                        {t("Hoạt động", "Featured")} <br />
                        <ShimmerText className="font-normal italic">{t("nổi bật", "activities")}</ShimmerText>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative mx-auto mt-8 max-w-xl text-lg italic leading-relaxed text-[#6e5249]"
                    >
                        {t(
                            "Không chỉ là những tấm hình kỷ niệm, mỗi hành trình đều mang lại những bài học quý giá giúp mình hoàn thiện bản thân mỗi ngày.",
                            "More than just keepsake photos – every experience has taught me valuable lessons that help me grow a little more each day.",
                        )}
                    </motion.p>

                    {/* Mục lục nhanh */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease }}
                        className="relative mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2"
                    >
                        {activityData.map((a, i) => {
                            const Icon = a.icon;
                            return (
                                <motion.a
                                    key={i}
                                    href={`#hoat-dong-${i + 1}`}
                                    whileHover={{ y: -4, scale: 1.04 }}
                                    className="flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2 text-xs font-bold text-[#6e5249] shadow-sm backdrop-blur transition-colors hover:bg-rose-500 hover:text-white"
                                >
                                    <Icon size={14} /> {lang === "en" ? a.title.en : a.title.vi.replace("Câu lạc bộ ", "CLB ")}
                                </motion.a>
                            );
                        })}
                    </motion.div>
                    <p className="relative mt-6 text-xs font-bold uppercase tracking-[0.3em] text-[#a88a80]">
                        {activityData.length} {t("hoạt động", "activities")} · {totalPhotos} {t("khoảnh khắc", "moments")}
                    </p>
                </div>

                {/* ================= CÁC HOẠT ĐỘNG ================= */}
                <div className="space-y-16">
                    {activityData.map((activity, idx) => (
                        <React.Fragment key={idx}>
                            {idx > 0 && <OrnamentDivider />}
                            <ActivitySection activity={activity} index={idx} onOpen={open} />
                        </React.Fragment>
                    ))}
                </div>

                {/* ================= KẾT ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease }}
                    className="relative mt-36 overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#4a1f2a] via-[#5c2633] to-[#3a1820] px-8 py-16 text-center shadow-[0_50px_100px_-40px_rgba(74,31,42,0.7)]"
                >
                    <SparkleField count={18} seed={42} />
                    <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-rose-400/25 blur-[100px]" />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="relative mx-auto mb-6 w-fit text-rose-300"
                    >
                        <Sparkles size={36} />
                    </motion.div>
                    <h3 className="relative text-2xl font-light italic text-rose-50 md:text-4xl">
                        {t("Sống hết mình với đam mê,", "Live fully for your passion,")} <span className="text-rose-300">{t("thành công sẽ theo đuổi bạn.", "and success will follow you.")}</span>
                    </h3>
                    <Link
                        href="/journey/certificate"
                        className="group relative mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#4a1f2a] transition-colors hover:bg-rose-500 hover:text-white"
                    >
                        <Trophy size={16} /> {t("Xem bảng vàng thành tích", "View my Hall of Fame")}
                        <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                    </Link>
                </motion.div>
            </div>

            {/* ================= XEM ẢNH LỚN ================= */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-[#2a1216]/90 p-4 backdrop-blur-md"
                        onClick={() => setLightbox(null)}
                    >
                        <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label={t("Đóng", "Close")}>
                            <X size={22} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); step(-1); }}
                            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-rose-500"
                            aria-label={t("Ảnh trước", "Previous photo")}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <motion.div
                            key={lightbox.index}
                            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 24 }}
                            className="relative h-[75vh] w-full max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image src={lightbox.images[lightbox.index]} alt={t("Khoảnh khắc", "Moment")} fill sizes="100vw" quality={90} className="object-contain" />
                        </motion.div>
                        <button
                            onClick={(e) => { e.stopPropagation(); step(1); }}
                            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-rose-500"
                            aria-label={t("Ảnh tiếp theo", "Next photo")}
                        >
                            <ChevronRight size={24} />
                        </button>
                        <span className="absolute bottom-6 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white">
                            {lightbox.index + 1} / {lightbox.images.length}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
