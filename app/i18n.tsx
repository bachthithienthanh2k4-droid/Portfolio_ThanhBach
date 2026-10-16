"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { motion } from "framer-motion";

// ============ ĐA NGÔN NGỮ (Tiếng Việt / English) ============
// Cách dùng trong component:
//   const { lang, t } = useLang();
//   <h1>{t("Kết nối", "Connect")}</h1>
// Lựa chọn được lưu trong trình duyệt (localStorage) và đồng bộ giữa mọi component.

export type Lang = "vi" | "en";

const STORAGE_KEY = "lang";
const listeners = new Set<() => void>();

const subscribe = (cb: () => void) => {
    listeners.add(cb);
    window.addEventListener("storage", cb);
    return () => {
        listeners.delete(cb);
        window.removeEventListener("storage", cb);
    };
};

const getSnapshot = (): Lang => {
    try {
        return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "vi";
    } catch {
        return "vi";
    }
};

// Server luôn render tiếng Việt; trình duyệt chuyển sang ngôn ngữ đã lưu ngay sau khi tải
const getServerSnapshot = (): Lang => "vi";

export const setLang = (lang: Lang) => {
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch {
        // Trình duyệt chặn lưu trữ: vẫn đổi ngôn ngữ trong phiên hiện tại
    }
    listeners.forEach((cb) => cb());
};

export function useLang() {
    const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const t = useCallback(<T,>(vi: T, en: T): T => (lang === "en" ? en : vi), [lang]);
    return { lang, setLang, t };
}

// Chọn bản dịch từ một object { vi, en }
export const pick = <T,>(value: { vi: T; en: T }, lang: Lang): T => (lang === "en" ? value.en : value.vi);

// ============ NÚT CHUYỂN NGÔN NGỮ ============
export function LanguageToggle({ className = "" }: { className?: string }) {
    const { lang } = useLang();

    // Cập nhật thuộc tính lang của trang cho trình đọc màn hình & công cụ tìm kiếm
    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <div
            role="group"
            aria-label="Ngôn ngữ / Language"
            className={`relative flex items-center rounded-full border border-pink-100 bg-white/80 p-1 text-[11px] font-black backdrop-blur ${className}`}
        >
            {(["vi", "en"] as const).map((code) => {
                const active = lang === code;
                return (
                    <button
                        key={code}
                        type="button"
                        onClick={() => setLang(code)}
                        aria-pressed={active}
                        className={`relative z-10 rounded-full px-3 py-1.5 uppercase tracking-wider transition-colors ${active ? "text-white" : "text-gray-500 hover:text-pink-500"}`}
                    >
                        {active && (
                            <motion.span
                                layoutId="lang-pill"
                                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-rose-500 to-pink-400"
                                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                            />
                        )}
                        {code}
                    </button>
                );
            })}
        </div>
    );
}
