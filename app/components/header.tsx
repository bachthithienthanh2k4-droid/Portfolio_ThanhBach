"use client";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Download, Send, ChevronDown } from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
            setIsOpen(false);
        } else {
            setHidden(false);
        }
        setIsScrolled(latest > 50);
    });

    const navItems = [
        { name: "Trang chủ", href: "/about" },
        { name: "Giới thiệu", href: "/introduction" },
        { name: "Kỹ năng", href: "/skills" },
        { name: "Dự án", href: "/projects" },
        {
            name: "Hành trình",
            href: "/journey",
            submenu: [
                { name: "Hoạt động", href: "/journey/activities" },
                { name: "Thành tích", href: "/journey/certificate" }
            ]
        },
        { name: "Blog", href: "/blogs" },
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -100, opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || isOpen
                ? "py-3 bg-white/90 backdrop-blur-md border-b border-pink-50 shadow-sm"
                : "py-5 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/about">
                    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer relative z-50">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-200 shadow-sm">
                            <img src="/pictures/Logo.jpg" alt="ThanhBach" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-extrabold text-xl tracking-tight text-gray-900">
                            Thanh<span className="text-pink-500">Bach.</span>
                        </span>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1 bg-pink-50/30 p-1.5 rounded-full border border-pink-100/50 backdrop-blur-sm">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || item.submenu?.some(sub => pathname === sub.href);

                        return (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                                onMouseLeave={() => setActiveSubmenu(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`relative flex items-center gap-1 px-4 py-2 text-sm transition-all duration-300 rounded-full
                                        ${isActive ? "text-pink-600 font-black scale-105" : "text-gray-500 font-medium hover:text-pink-400"}
                                    `}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white rounded-full -z-10 shadow-md border border-pink-100"
                                            transition={{ type: "spring", duration: 0.5 }}
                                        />
                                    )}
                                    {item.name}
                                    {item.submenu && <ChevronDown size={14} className={`transition-transform duration-300 ${activeSubmenu === item.name ? "rotate-180" : ""} ${isActive ? "stroke-[3px]" : ""}`} />}
                                </Link>

                                {/* Desktop Dropdown */}
                                {item.submenu && (
                                    <AnimatePresence>
                                        {activeSubmenu === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-pink-50 p-2"
                                            >
                                                {item.submenu.map((sub) => {
                                                    const isSubActive = pathname === sub.href;
                                                    return (
                                                        <Link key={sub.name} href={sub.href}>
                                                            <div className={`px-4 py-2.5 rounded-xl text-sm transition-all
                                                                ${isSubActive ? "text-pink-600 bg-pink-50 font-bold" : "text-gray-600 font-medium hover:bg-pink-50/50 hover:text-pink-500"}
                                                            `}>
                                                                {sub.name}
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    <motion.button
                        whileHover={{ y: -2, color: "#db2777" }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-pink-100 text-gray-600 text-sm font-bold hover:border-pink-500 hover:bg-pink-50 transition-all duration-300"
                    >
                        <Download size={16} strokeWidth={2.5} />
                       <Link 
                       target="_blank"
                       href="https://drive.google.com/file/d/1mnZTDMhEp757wSQL0N-xrcYFmgmIzGk0/view"
                       ><span>Tải CV</span></Link> 
                    </motion.button>
                    <Link href="/connect">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#db2777",
                                boxShadow: "0 10px 20px -5px rgba(219, 39, 119, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-7 py-2.5 rounded-full text-sm font-black shadow-lg shadow-pink-200/50 transition-all duration-300"
                        >
                            <Send size={16} fill="currentColor" />
                            <span>Kết nối</span>
                        </motion.button>
                    </Link>


                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2.5 ml-2 md:hidden rounded-2xl transition-all relative z-50 
            ${isOpen
                                ? "bg-pink-500 text-white shadow-lg shadow-pink-200"
                                : "bg-gray-50 text-gray-600 hover:bg-pink-50"
                            }`}
                    >
                        {isOpen ? (
                            <X size={24} strokeWidth={3} />
                        ) : (
                            <div className="flex flex-col gap-1.5 items-end">
                                <span className="w-6 h-0.5 bg-current rounded-full" />
                                <span className="w-4 h-0.5 bg-current rounded-full" />
                                <span className="w-5 h-0.5 bg-current rounded-full" />
                            </div>
                        )}
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full h-screen bg-white z-40 md:hidden flex flex-col pt-24 px-8"
                    >
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href || item.submenu?.some(sub => pathname === sub.href);

                                return (
                                    <div key={item.name} className="flex flex-col border-b border-pink-50/50">
                                        <div className="flex items-center justify-between">
                                            <Link
                                                href={item.href}
                                                onClick={() => !item.submenu && setIsOpen(false)}
                                                className={`text-3xl transition-colors py-4 ${isActive ? "text-pink-600 font-black" : "text-gray-800 font-bold"}`}
                                            >
                                                {item.name}
                                            </Link>
                                            {item.submenu && (
                                                <button onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)} className="p-4">
                                                    <ChevronDown size={24} className={`${activeSubmenu === item.name ? "rotate-180 text-pink-500" : "text-gray-400"} transition-transform`} />
                                                </button>
                                            )}
                                        </div>

                                        {item.submenu && activeSubmenu === item.name && (
                                            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="overflow-hidden flex flex-col pl-6 border-l-4 border-pink-200 ml-2 gap-5 mb-6 mt-2">
                                                {item.submenu.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`text-xl transition-all ${pathname === sub.href ? "text-pink-600 font-extrabold" : "text-gray-500 font-bold"}`}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-auto mb-10 pt-8 flex flex-col gap-4">
                            <button className="w-full bg-pink-500 text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 shadow-xl shadow-pink-100">
                                <Send size={22} strokeWidth={3} /> Bắt đầu ngay
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}