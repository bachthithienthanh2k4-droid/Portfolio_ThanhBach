"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from 'framer-motion';
import {
    Award, GraduationCap, Star, Sparkles, Medal, Trophy, Crown, Users, Code, Calculator, BookOpen,
    X, ChevronLeft, ChevronRight, ArrowUpRight, Maximize2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang, pick } from '../../i18n';

// Chuẩn hóa đường dẫn ảnh: tự thêm "/" và bỏ "public/" nếu lỡ viết sai
const normalizeSrc = (src: string) => (/^(https?:)?\/\//.test(src) || src.startsWith("/") ? src : `/${src.replace(/^\.?\/?(public\/)?/, "")}`);

// ============ DỮ LIỆU ============
// Giấy khen nổi bật năm 2026
const graduation = [
    {
        src: "/pictures/giaykhenxstn.jpg",
        label: { vi: "Tốt nghiệp loại Xuất sắc", en: "Graduated with Excellent Honors" },
        note: { vi: "Hiệu trưởng Trường ĐH Khoa học khen tặng · Khóa 2022 – 2026", en: "Awarded by the Rector of the University of Sciences · Class of 2022 – 2026" },
        icon: Crown,
    },
    {
        src: "/pictures/giaykhenxs.jpg",
        label: { vi: "Xuất sắc toàn khóa 2026", en: "Outstanding Graduate, Class of 2026" },
        note: { vi: "Giám đốc Đại học Huế khen tặng · Học tập & rèn luyện", en: "Awarded by the President of Hue University · Academics & conduct" },
        icon: GraduationCap,
    },
    {
        src: "/pictures/giaykhenhueict.jpg",
        label: { vi: "Giải Nhì Hue-ICT Challenge 2026", en: "Second Prize, Hue-ICT Challenge 2026" },
        note: { vi: "Phần thi Sản phẩm sáng tạo Công nghệ thông tin", en: "Creative IT Product category" },
        icon: Trophy,
    },
].map((c) => ({ ...c, src: normalizeSrc(c.src) }));

const academic = [
    { src: "/pictures/z7743214265100_fd9d92a99885d09996fa7fb7bdd0b4b1.jpg", label: { vi: "Sinh viên xuất sắc 2022 – 2023", en: "Excellent Student 2022 – 2023" }, icon: GraduationCap },
    { src: "/pictures/z7743214224466_a78b97ceecfe028ae0785718a3436910.jpg", label: { vi: "Sinh viên xuất sắc 2023 – 2024", en: "Excellent Student 2023 – 2024" }, icon: GraduationCap },
    { src: "/pictures/z7743213907128_cef22fc148b680c99f231b16e73828e6.jpg", label: { vi: "Sinh viên xuất sắc 2024 – 2025", en: "Excellent Student 2024 – 2025" }, icon: GraduationCap },
    { src: "/pictures/z7743214087031_71a7b2db6fb2968ca80a3fe155461f11.jpg", label: { vi: "Giải Nhì SPIT Front-end", en: "Second Prize, SPIT Front-end" }, icon: Code },
    { src: "/pictures/z7743214164539_e5c4664ce6718a90dfc87112e2c518a9.jpg", label: { vi: "Giải Nhì MTCT cấp Tỉnh", en: "Second Prize, Provincial Casio Calculator Competition" }, icon: Calculator },
    { src: "/pictures/z7743214044134_87fda706a6a00f976fb20ee2447bb4ed.jpg", label: { vi: "Tham gia kì thi Toán sinh viên", en: "Student Mathematics Olympiad participant" }, icon: BookOpen },
    { src: "/pictures/z7743213692794_d221bb932222336c19cc6f1838e6dfc9.jpg", label: { vi: "Tham gia ICPC cấp Khoa", en: "Faculty-level ICPC participant" }, icon: Trophy },
].map((c) => ({ ...c, src: normalizeSrc(c.src) }));

const honors = [
    { src: "/pictures/z7743213834621_5491a473a526318c75745c7485a01d15.jpg", title: { vi: "Sinh viên 5 Tốt", en: "Five-Merit Student" }, year: "2023" },
    { src: "/pictures/z7743213798963_872d4811161b1b73c8ec4d87316cc8e6.jpg", title: { vi: "Sao tháng Giêng", en: "January Star Award" }, year: "2024" },
    { src: "/pictures/z7743213760551_9f4f9b198121e45ec867c2be1e49e84e.jpg", title: { vi: "Sinh viên 5 Tốt", en: "Five-Merit Student" }, year: "2024" },
].map((c) => ({ ...c, src: normalizeSrc(c.src) }));

const unionCertificates = [
    "/pictures/z7743213938612_7a1ddc854c3137f37e8079429a889dc7.jpg",
    "/pictures/z7743213661606_993b43851bdf39b8cc6d548e79376dfd.jpg",
    "/pictures/z7743213870005_1197eedb94b6748d61d6a72a94295575.jpg",
    "/pictures/z7743213969787_d2c3a9496a2509787db536edb1b7f9d9.jpg",
    "/pictures/z7743213725222_5c841ed02d924d7a464bdc9f4853282f.jpg",
    "/pictures/z7743213633477_1b2bd2424ac7f4512c5e87c752ad6f29.jpg",
    "/pictures/(Tạo hàng loạt 1) GCN Thành viên tích cực.png",
].map(normalizeSrc);

// Những danh hiệu nổi bật nhất (hiện ở đầu trang)
const highlights = [
    { icon: Crown, label: { vi: "Á khoa Khoa CNTT", en: "Runner-up Valedictorian, Faculty of IT" } },
    { icon: GraduationCap, label: { vi: "Tốt nghiệp loại Xuất sắc", en: "Graduated with Excellent Honors" } },
    { icon: Trophy, label: { vi: "Giải Nhì HUE-ICT 2026", en: "Second Prize, HUE-ICT 2026" } },
    { icon: Code, label: { vi: "Giải Nhì SPIT Front-end", en: "Second Prize, SPIT Front-end" } },
    { icon: Star, label: { vi: "Sao tháng Giêng", en: "January Star Award" } },
    { icon: Medal, label: { vi: "Sinh viên 5 Tốt", en: "Five-Merit Student" } },
    { icon: Calculator, label: { vi: "Giải Nhì MTCT cấp Tỉnh", en: "Second Prize, Provincial Casio Calculator Competition" } },
];

const ease = [0.16, 1, 0.3, 1] as const;
type OpenFn = (images: string[], index: number) => void;

// Số "ngẫu nhiên" cố định: server và trình duyệt cho cùng kết quả
const seeded = (i: number, seed = 1) => {
    const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
    return x - Math.floor(x);
};

// ============ HIỆU ỨNG LẤP LÁNH ============
const Twinkle = ({ size = 16, delay = 0, className = "" }: { size?: number; delay?: number; className?: string }) => (
    <motion.svg
        viewBox="0 0 24 24" width={size} height={size}
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
            <span key={i} className="absolute" style={{ left: `${(seeded(i, seed) * 100).toFixed(2)}%`, top: `${(seeded(i + 50, seed) * 100).toFixed(2)}%` }}>
                <Twinkle
                    size={Math.round(8 + seeded(i + 100, seed) * 14)}
                    delay={Math.round(seeded(i + 150, seed) * 30) / 10}
                    className={i % 3 === 0 ? "text-[#d4af6a]" : i % 3 === 1 ? "text-rose-400" : "text-pink-300"}
                />
            </span>
        ))}
    </div>
);

const ShimmerText = ({ children, className = "", gold = false }: { children: React.ReactNode; className?: string; gold?: boolean }) => (
    <motion.span
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className={`bg-clip-text text-transparent ${className}`}
        style={{
            backgroundImage: gold
                ? "linear-gradient(110deg, #b8894a 20%, #e9cf9a 40%, #fff7e6 50%, #e9cf9a 60%, #b8894a 80%)"
                : "linear-gradient(110deg, #f43f5e 20%, #f9a8d4 40%, #fff1f2 50%, #f9a8d4 60%, #f43f5e 80%)",
            backgroundSize: "200% 100%",
        }}
    >
        {children}
    </motion.span>
);

// Họa tiết ren hình thoi
const lacePattern = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Cpath d='M14 0 L28 14 L14 28 L0 14 Z' fill='none' stroke='%23f9a8b8' stroke-width='0.6' opacity='0.55'/%3E%3Ccircle cx='14' cy='14' r='1.2' fill='%23d4af6a' opacity='0.45'/%3E%3C/svg%3E")`,
};

// ============ TIÊU ĐỀ SECTION ============
const SectionHeader = ({ number, eyebrow, title, accent, subtitle }: { number: string; eyebrow: string; title: string; accent: string; subtitle: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
    >
        <div className="flex items-end gap-5">
            <span className="select-none text-6xl font-black leading-none md:text-7xl"><ShimmerText gold>{number}</ShimmerText></span>
            <div>
                <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-[#d4af6a]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#b8894a]">{eyebrow}</span>
                </div>
                <h2 className="mt-3 text-3xl font-black tracking-tighter md:text-5xl">
                    {title} <span className="font-normal italic text-rose-500">{accent}</span>
                </h2>
            </div>
        </div>
        <p className="max-w-sm italic text-[#a88a80] md:text-right">{subtitle}</p>
    </motion.div>
);

// ============ GIẤY KHEN TRONG KHUNG TRANH ============
const FramedCertificate = ({ src, label, icon: Icon, index, onClick, featured = false }: {
    src: string; label: string; icon: React.ElementType; index: number; onClick: () => void; featured?: boolean;
}) => {
    const { t } = useLang();
    return (
        <motion.button
            onClick={onClick}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease, delay: (index % 3) * 0.08 }}
            whileHover={{ y: -8 }}
            className={`group relative flex w-full flex-col text-left ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
            aria-label={t(`Xem lớn: ${label}`, `View full size: ${label}`)}
        >
            {/* Khung viền vàng */}
            <div className="relative flex-1 rounded-[2rem] bg-gradient-to-br from-[#e9cf9a] via-[#f6e7c8] to-[#c9a46a] p-[2px] shadow-[0_30px_60px_-30px_rgba(150,90,40,0.5)] transition-shadow duration-500 group-hover:shadow-[0_40px_80px_-30px_rgba(244,63,94,0.45)]">
                <div className="relative h-full rounded-[1.9rem] bg-[#fffaf5] p-3 md:p-4">
                    <div className="relative h-full overflow-hidden rounded-[1.4rem] bg-white ring-1 ring-[#f3e3c3]">
                        <div className={`relative w-full ${featured ? "aspect-[4/3] md:aspect-auto md:h-full md:min-h-[460px]" : "aspect-[4/3]"}`}>
                            <Image
                                src={src}
                                alt={label}
                                fill
                                sizes={featured ? "(max-width: 768px) 100vw, 760px" : "(max-width: 768px) 100vw, 380px"}
                                quality={90}
                                className="object-contain p-1 transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>
                        {/* Vệt sáng lướt qua */}
                        <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-1000 group-hover:left-[130%]" />
                        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-rose-500 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                            <Maximize2 size={15} />
                        </span>
                    </div>
                </div>
            </div>
            {/* Bảng tên */}
            <div className="mx-auto -mt-4 flex max-w-[92%] items-center gap-2.5 rounded-full border border-[#f0dcb4] bg-white px-4 py-2 shadow-md">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-400 text-white">
                    <Icon size={14} />
                </span>
                <span className="truncate text-xs font-bold text-[#3a2420] md:text-sm">{label}</span>
            </div>
        </motion.button>
    );
};

// ============ HUY CHƯƠNG RUY BĂNG ============
const Rosette = () => (
    <div className="relative flex flex-col items-center" aria-hidden>
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: "repeating-conic-gradient(#e9cf9a 0 10deg, #c9a46a 10deg 20deg)" }}
        >
            <span className="absolute inset-1.5 rounded-full bg-gradient-to-br from-rose-500 to-pink-400" />
        </motion.div>
        <Award size={24} className="absolute top-5 text-white" />
        <div className="-mt-2 flex gap-1">
            <span className="h-8 w-4 bg-rose-500 [clip-path:polygon(0_0,100%_0,100%_100%,50%_75%,0_100%)]" />
            <span className="h-8 w-4 bg-pink-400 [clip-path:polygon(0_0,100%_0,100%_100%,50%_75%,0_100%)]" />
        </div>
    </div>
);

// ============ DẢI GIẤY CHỨNG NHẬN TỰ CHẠY ============
const CertificateRibbon = ({ images, onOpen }: { images: string[]; onOpen: OpenFn }) => {
    const { t } = useLang();
    const trackRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const paused = useRef(false);

    useAnimationFrame((_, delta) => {
        const track = trackRef.current;
        if (!track || paused.current) return;
        const half = track.scrollWidth / 2;
        if (!half) return;
        let next = x.get() - 50 * (delta / 1000);
        if (next <= -half) next += half;
        x.set(next);
    });

    return (
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-gradient-to-r from-rose-100/80 via-[#fdf3e7] to-pink-100/80 py-8 shadow-[0_30px_60px_-40px_rgba(190,80,100,0.6)]">
            <div className="pointer-events-none absolute inset-0" style={lacePattern} />
            <div className="relative" onMouseEnter={() => { paused.current = true; }} onMouseLeave={() => { paused.current = false; }}>
                <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-6 pr-6">
                    {[...images, ...images].map((src, i) => {
                        const idx = i % images.length;
                        return (
                            <motion.button
                                key={i}
                                onClick={() => onOpen(images, idx)}
                                whileHover={{ y: -8, scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="group relative shrink-0 rounded-[1.5rem] bg-gradient-to-br from-[#e9cf9a] via-[#f6e7c8] to-[#c9a46a] p-[2px] shadow-[0_20px_40px_-20px_rgba(150,90,40,0.5)]"
                                aria-label={t(`Xem giấy chứng nhận ${idx + 1}`, `View certificate ${idx + 1}`)}
                            >
                                <span className="relative block h-[230px] w-[320px] overflow-hidden rounded-[1.4rem] bg-[#fffaf5] md:h-[260px] md:w-[360px]">
                                    <Image src={src} alt={t(`Giấy chứng nhận Đoàn – Hội ${idx + 1}`, `Youth Union & Student Association certificate ${idx + 1}`)} fill sizes="380px" quality={85} className="object-contain p-2" />
                                </span>
                                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black text-rose-500 opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
                                    {String(idx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                                </span>
                            </motion.button>
                        );
                    })}
                </motion.div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#fbe9ea] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#fbe9ea] to-transparent" />
        </div>
    );
};

export default function Certificate() {
    const { lang, t } = useLang();
    const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
    const open: OpenFn = (images, index) => setLightbox({ images, index });
    const academicSrcs = academic.map((a) => a.src);
    const honorSrcs = honors.map((h) => h.src);
    const graduationSrcs = graduation.map((g) => g.src);
    const total = graduation.length + academic.length + honors.length + unionCertificates.length;

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

    const step = (d: number) => setLightbox((lb) => lb && { ...lb, index: (lb.index + d + lb.images.length) % lb.images.length });

    const stats = [
        { value: total, label: t("Giấy khen & chứng nhận", "Awards & certificates") },
        { value: graduation.length + academic.length, label: t("Học thuật & thi cử", "Academics & competitions") },
        { value: honors.length, label: t("Danh hiệu toàn trường", "University-wide titles") },
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#fbf5f1] px-4 pb-28 pt-32 text-[#3a2420] selection:bg-rose-200 md:px-8">
            {/* Nền trang trí */}
            <motion.div animate={{ scale: [1, 1.15, 1], x: [0, 40, 0] }} transition={{ duration: 14, repeat: Infinity }} className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-rose-200/50 blur-[140px]" />
            <motion.div animate={{ scale: [1.1, 1, 1.1], y: [0, 40, 0] }} transition={{ duration: 16, repeat: Infinity }} className="pointer-events-none absolute top-[35%] -right-40 h-[600px] w-[600px] rounded-full bg-[#fbe7cf]/70 blur-[140px]" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-60"
                style={{ ...lacePattern, maskImage: "radial-gradient(ellipse at top, black 10%, transparent 65%)", WebkitMaskImage: "radial-gradient(ellipse at top, black 10%, transparent 65%)" }}
            />

            <div className="relative mx-auto max-w-6xl">
                {/* ================= TIÊU ĐỀ ================= */}
                <header className="relative mb-28 py-6 text-center">
                    <SparkleField count={24} seed={7} />

                    {/* Vòng nguyệt quế quanh cúp */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease }}
                        className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center"
                    >
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-2 border-dashed border-[#d4af6a]/70"
                        />
                        <span className="absolute inset-3 rounded-full bg-gradient-to-br from-[#f6e7c8] to-[#e9cf9a] shadow-[0_20px_40px_-15px_rgba(184,137,74,0.7)]" />
                        <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative text-[#8a5a2b]">
                            <Trophy size={40} strokeWidth={1.6} />
                        </motion.span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-[#ecd6ad] bg-white/80 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b8894a] shadow-sm backdrop-blur"
                    >
                        <Sparkles size={14} className="animate-pulse" /> {t("Dấu mốc đáng tự hào", "Proud milestones")}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease }}
                        className="relative text-5xl font-black leading-[1.05] tracking-tighter md:text-8xl"
                    >
                        {t("Bảng vàng", "Hall of")} <br />
                        <ShimmerText className="font-normal italic">{t("thành tích", "achievements")}</ShimmerText>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative mx-auto mt-8 max-w-xl text-lg italic leading-relaxed text-[#6e5249]"
                    >
                        {t(
                            "Bằng khen không phải là vạch đích, mà là dấu mốc ghi lại hành trình nỗ lực và bản lĩnh trưởng thành.",
                            "An award is not the finish line – it is a milestone that marks a journey of hard work and growing resilience.",
                        )}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.8, ease }}
                        className="relative mx-auto mt-10 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-[1.5rem] border border-[#f0dcb4] bg-[#f0dcb4]"
                    >
                        {stats.map((s, i) => (
                            <div key={i} className="bg-[#fffaf5] px-2 py-4">
                                <div className="text-3xl font-black"><ShimmerText gold>{s.value}</ShimmerText></div>
                                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#a88a80]">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8, ease }}
                        className="relative mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2"
                    >
                        {highlights.map(({ icon: Icon, label }, i) => (
                            <motion.span
                                key={i}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
                                className="flex items-center gap-2 rounded-full border border-white bg-white/85 px-4 py-2 text-xs font-bold text-[#6e5249] shadow-sm backdrop-blur"
                            >
                                <Icon size={14} className="text-[#b8894a]" /> {pick(label, lang)}
                            </motion.span>
                        ))}
                    </motion.div>
                </header>

                {/* ================= 01. DẤU ẤN 2026 ================= */}
                <section className="relative mb-28">
                    <SectionHeader
                        number="01"
                        eyebrow={t("Năm 2026", "Class of 2026")}
                        title={t("Dấu ấn", "Graduation")}
                        accent={t("tốt nghiệp", "highlights")}
                        subtitle={t("Khép lại 4 năm đại học bằng những giấy khen đáng nhớ nhất.", "Closing four years of university with my most memorable awards.")}
                    />
                    <div className="relative">
                        <SparkleField count={14} seed={33} className="-inset-6" />
                        <div className="relative grid grid-cols-1 items-start gap-x-6 gap-y-12 pt-4 md:grid-cols-3">
                            {graduation.map((g, i) => {
                                const Icon = g.icon;
                                const label = pick(g.label, lang);
                                return (
                                    <motion.button
                                        key={g.src}
                                        onClick={() => open(graduationSrcs, i)}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, ease, delay: i * 0.12 }}
                                        whileHover={{ y: -10 }}
                                        className="group relative flex flex-col text-left"
                                        aria-label={t(`Xem lớn: ${label}`, `View full size: ${label}`)}
                                    >
                                        {i === 0 && (
                                            <span className="absolute -top-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#b8894a] to-[#e9cf9a] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-white shadow-lg">
                                                {t("Nổi bật nhất", "Top honor")}
                                            </span>
                                        )}
                                        <div className={`w-full rounded-[2rem] bg-gradient-to-br from-[#e9cf9a] via-[#f6e7c8] to-[#c9a46a] p-[2px] ${i === 0 ? "shadow-[0_40px_80px_-30px_rgba(244,63,94,0.55)]" : "shadow-[0_30px_60px_-30px_rgba(150,90,40,0.5)]"}`}>
                                            <div className="rounded-[1.9rem] bg-[#fffaf5] p-3 md:p-4">
                                                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-white ring-1 ring-[#f3e3c3]">
                                                    <Image src={g.src} alt={label} fill sizes="(max-width: 768px) 100vw, 400px" quality={90} className="object-contain p-1 transition-transform duration-700 group-hover:scale-[1.03]" />
                                                    <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-1000 group-hover:left-[130%]" />
                                                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-rose-500 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                                                        <Maximize2 size={15} />
                                                    </span>
                                                </div>
                                                <div className="flex items-start gap-3 px-1 pb-1 pt-4">
                                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-400 text-white shadow-md shadow-rose-200">
                                                        <Icon size={18} />
                                                    </span>
                                                    <div>
                                                        <h3 className="font-black leading-snug text-[#3a2420] transition-colors group-hover:text-rose-500">{label}</h3>
                                                        <p className="mt-0.5 text-xs leading-relaxed text-[#a88a80]">{pick(g.note, lang)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ================= 02. HỌC TẬP XUẤT SẮC ================= */}
                <section className="relative mb-28">
                    <SectionHeader
                        number="02"
                        eyebrow={t("Học thuật", "Academics")}
                        title={t("Học tập", "Academic")}
                        accent={t("xuất sắc", "excellence")}
                        subtitle={t("Giấy khen học tập và các kỳ thi học thuật, lập trình.", "Academic awards, plus academic and programming competitions.")}
                    />
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
                        {academic.map((c, i) => (
                            <div key={c.src} className="w-full md:w-[calc((100%-3rem)/3)]">
                                <FramedCertificate {...c} label={pick(c.label, lang)} index={i} onClick={() => open(academicSrcs, i)} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= 03. DANH HIỆU TOÀN TRƯỜNG ================= */}
                <section className="relative mb-28">
                    <SectionHeader
                        number="03"
                        eyebrow={t("Vinh danh", "Honors")}
                        title={t("Danh hiệu", "University-wide")}
                        accent={t("toàn trường", "titles")}
                        subtitle={t("Những danh hiệu ghi nhận sự toàn diện trong học tập và rèn luyện.", "Titles that recognize well-rounded excellence in academics and personal development.")}
                    />
                    <div className="relative grid grid-cols-1 items-end gap-8 md:grid-cols-3">
                        <SparkleField count={12} seed={21} className="-inset-6" />
                        {honors.map((h, i) => {
                            const center = i === 1;
                            const title = pick(h.title, lang);
                            return (
                                <motion.button
                                    key={h.src}
                                    onClick={() => open(honorSrcs, i)}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease, delay: i * 0.12 }}
                                    whileHover={{ y: -10 }}
                                    className={`group relative flex flex-col items-center ${center ? "md:-translate-y-10" : ""}`}
                                    aria-label={t(`Xem lớn: ${title} ${h.year}`, `View full size: ${title} ${h.year}`)}
                                >
                                    <div className="relative z-10 -mb-8"><Rosette /></div>
                                    <div className={`w-full rounded-[2.25rem] bg-gradient-to-br from-[#e9cf9a] via-[#f6e7c8] to-[#c9a46a] p-[2px] ${center ? "shadow-[0_40px_80px_-30px_rgba(244,63,94,0.55)]" : "shadow-[0_30px_60px_-30px_rgba(150,90,40,0.5)]"}`}>
                                        <div className="rounded-[2.15rem] bg-[#fffaf5] p-4 pt-10">
                                            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-[#f3e3c3]">
                                                <Image src={h.src} alt={`${title} ${h.year}`} fill sizes="(max-width: 768px) 100vw, 380px" quality={90} className="object-contain p-1 transition-transform duration-700 group-hover:scale-[1.03]" />
                                                <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-1000 group-hover:left-[130%]" />
                                            </div>
                                            <div className="pt-5 text-center">
                                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b8894a]">{t("Năm", "Year")} {h.year}</p>
                                                <h3 className="mt-1 text-xl font-black text-[#3a2420] transition-colors group-hover:text-rose-500">{title}</h3>
                                                <span className="mx-auto mt-3 block h-1 w-8 rounded-full bg-rose-200 transition-all duration-500 group-hover:w-16 group-hover:bg-rose-400" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </section>

                {/* ================= 04. ĐOÀN – HỘI ================= */}
                <section className="relative mb-24">
                    <SectionHeader
                        number="04"
                        eyebrow={t("Cống hiến", "Service")}
                        title={t("Hoạt động", "Youth Union &")}
                        accent={t("Đoàn – Hội", "Student Association")}
                        subtitle={t("Giấy khen và chứng nhận ghi nhận những đóng góp cho tập thể. Rê chuột để dừng.", "Awards and certificates recognizing my contributions to the community. Hover to pause.")}
                    />
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
                        <CertificateRibbon images={unionCertificates} onOpen={open} />
                    </motion.div>
                </section>

                {/* ================= KẾT ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease }}
                    className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#4a1f2a] via-[#5c2633] to-[#3a1820] px-8 py-16 text-center shadow-[0_50px_100px_-40px_rgba(74,31,42,0.7)]"
                >
                    <SparkleField count={18} seed={42} />
                    <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-rose-400/25 blur-[100px]" />
                    <Crown size={40} className="relative mx-auto mb-5 text-[#e9cf9a]" />
                    <h3 className="relative text-2xl font-light italic text-rose-50 md:text-4xl">
                        {t("Mỗi tấm giấy khen là một lời nhắc:", "Every award is a reminder:")} <span className="text-[#e9cf9a]">{t("hãy tiếp tục cố gắng.", "keep pushing forward.")}</span>
                    </h3>
                    <div className="relative mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link href="/journey" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#4a1f2a] transition-colors hover:bg-rose-500 hover:text-white">
                            {t("Xem hành trình", "View my journey")} <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                        </Link>
                        <Link href="/journey/activities" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10">
                            <Users size={16} /> {t("Hoạt động nổi bật", "Featured activities")}
                        </Link>
                    </div>
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
                        <button onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-rose-500" aria-label={t("Ảnh trước", "Previous photo")}>
                            <ChevronLeft size={24} />
                        </button>
                        <motion.div
                            key={lightbox.index}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 24 }}
                            className="relative h-[82vh] w-full max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image src={lightbox.images[lightbox.index]} alt={t("Giấy khen", "Certificate")} fill sizes="100vw" quality={90} className="object-contain" />
                        </motion.div>
                        <button onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-rose-500" aria-label={t("Ảnh tiếp theo", "Next photo")}>
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
