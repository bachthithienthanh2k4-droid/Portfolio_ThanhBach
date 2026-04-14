"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles, Heart, CheckCircle2, X } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function ContactPage() {
    const [showThankYou, setShowThankYou] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setShowThankYou(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#fffafa] py-40 px-4 sm:px-8 lg:px-12 flex items-center justify-center overflow-hidden relative">

            {/* 🔮 Background Decor */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-[120px]" />
                <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }} transition={{ duration: 25, repeat: Infinity }} className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-rose-100/40 rounded-full blur-[150px]" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl w-full flex flex-col gap-10 relative z-10"
            >
                {/* PHẦN 1: HEADER VÀ FORM (Layout chính) */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

                    {/* CỘT TRÁI: TIÊU ĐỀ & ẢNH */}
                    <div className="lg:col-span-2 space-y-10">
                        <motion.div variants={itemVariants} className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-pink-100 text-pink-600 text-xs font-black uppercase tracking-widest">
                                <Sparkles size={14} /> Say Hello
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none">
                                Kết nối <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-600 to-fuchsia-600 italic font-serif">với Thanh</span>
                            </h1>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative group max-w-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-fuchsia-200 rounded-[4rem] rotate-6 scale-95 opacity-50 group-hover:rotate-12 transition-transform duration-700" />
                            <div className="relative aspect-[3/4] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group-hover:-rotate-2 transition-transform duration-700">
                                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent z-10" />
                                <img src="/pictures/Ảnh profile.jpg" alt="Profile" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute bottom-8 left-8 z-20 text-white">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] opacity-80 mb-1">Creative Mind</p>
                                    <h2 className="text-3xl font-black">Thanh Bạch</h2>
                                </div>
                            </div>
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl text-rose-500">
                                <Heart fill="currentColor" size={24} />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* CỘT PHẢI: FORM LIÊN HỆ */}
                    <motion.div variants={itemVariants} className="lg:col-span-3 bg-white/70 backdrop-blur-2xl p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-rose-900/5 border border-white">
                        <h3 className="text-3xl font-black text-slate-900 mb-8">Gửi lời nhắn</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <CustomInput label="Họ tên" placeholder="Nguyễn Văn A" type="text" required />
                                <CustomInput label="Số điện thoại" placeholder="033..." type="tel" />
                            </div>
                            <CustomInput label="Email" placeholder="nguyenvana@gmail.com" type="text" />
                            <CustomInput label="Chủ đề" placeholder="Hợp tác dự án..." type="text" />
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">Nội dung</label>
                                <textarea rows={5} required className="w-full px-6 py-5 rounded-[2rem] bg-white border border-rose-100 focus:ring-4 focus:ring-rose-100 outline-none transition-all shadow-inner" placeholder="Nhập lời nhắn của bạn..." />
                            </div>
                            <motion.button
                                type="submit" disabled={isSubmitting} whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}
                                className="w-full md:w-auto bg-gradient-to-r from-rose-500 to-pink-600 text-white font-black py-5 px-14 rounded-full shadow-lg shadow-rose-200 flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                {isSubmitting ? "Đang gửi..." : "Gửi ngay"} <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* PHẦN 2: THÔNG TIN CHI TIẾT (Bố cục ngang phía dưới) */}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-[3rem] bg-white/50 border border-white backdrop-blur-md shadow-xl"
                >
                    <ContactInfoItem icon={<Mail />} label="Email" value="bachthithienthanh2k4@gmail.com" color="rose" />
                    <ContactInfoItem icon={<Phone />} label="Số điện thoại" value="033.231.xxxx" color="fuchsia" />
                    <ContactInfoItem icon={<MapPin />} label="Địa chỉ" value="Thành phố Huế" color="rose" />
                </motion.div>

            </motion.div>

            {/* ✅ POP-UP CẢM ƠN */}
            <AnimatePresence>
                {showThankYou && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                        <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-[3rem] p-10 md:p-16 max-w-lg w-full shadow-2xl text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 to-fuchsia-500" />
                            <button onClick={() => setShowThankYou(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:bg-rose-50 rounded-full transition-colors"><X size={24} /></button>
                            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"><CheckCircle2 size={40} /></div>
                            <h2 className="text-4xl font-black text-slate-950 mb-4 tracking-tight">Tuyệt vời!</h2>
                            <p className="text-slate-600 font-medium mb-10 leading-relaxed">Cảm ơn bạn đã liên hệ. Thanh đã nhận được lời nhắn và sẽ phản hồi cho bạn qua email sớm nhất nhé! ✨</p>
                            <button onClick={() => setShowThankYou(false)} className="w-full bg-slate-950 text-white font-bold py-4 rounded-2xl hover:bg-slate-800 transition-colors">Đóng thông báo</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ContactInfoItem({ icon, label, value, color }) {
    const colors = {
        rose: "bg-rose-50 text-rose-500 border-rose-100",
        fuchsia: "bg-fuchsia-50 text-fuchsia-500 border-fuchsia-100",
    };
    return (
        <div className="flex items-center gap-5 group p-2">
            <div className={`p-4 rounded-2xl border ${colors[color]} transition-transform group-hover:scale-110 flex-shrink-0`}>
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{label}</p>
                <p className="font-bold text-slate-800 truncate text-sm md:text-base">{value}</p>
            </div>
        </div>
    );
}

function CustomInput({ label, ...props }) {
    return (
        <div className="w-full">
            <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">{label}</label>
            <input {...props} className="w-full px-6 py-4 rounded-full bg-white border border-rose-100 focus:ring-4 focus:ring-rose-100 outline-none transition-all shadow-inner" />
        </div>
    );
}