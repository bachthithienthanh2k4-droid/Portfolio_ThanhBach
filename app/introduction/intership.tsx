"use client"
import { motion } from "framer-motion"
import { Rocket, Bug, Globe, Award, BrainCircuit, Code } from "lucide-react"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function PortfolioSections() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-6"
        >
            {/* ========================================== */}
            {/* CỘT 1: KINH NGHIỆM THỰC TẬP */}
            {/* ========================================== */}
            <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-[#f0fdfa] to-[#f7fee7] rounded-[3rem] p-8 border border-teal-100 shadow-xl relative overflow-hidden group flex flex-col"
            >
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-48 h-48 bg-teal-200/30 rounded-full blur-3xl" />
                
                <div className="relative z-10 flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3">
                        <Rocket size={28} />
                    </div>
                    <h4 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">Thực tập</h4>
                </div>

                <div className="relative z-10 space-y-10 flex-grow">
                    {/* Job 1 */}
                    <div className="group/item space-y-4">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-grow space-y-3">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 shrink-0 bg-white rounded-xl border border-teal-100 flex items-center justify-center shadow-sm">
                                        <Bug className="text-teal-500" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-lime-600 font-bold text-[10px] uppercase tracking-widest">4/2025 - 10/2025</div>
                                        <h5 className="text-lg font-bold text-gray-900 uppercase">PANGO <span className="text-teal-600 font-medium">/ Tester</span></h5>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                                    Kiểm thử quy trình vận hành thực tế cho app giao hàng tại Huế, tối ưu UI/UX và đảm bảo tính ổn định hệ thống.
                                </p>
                            </div>
                            {/* IMAGE CONTAINER */}
                            <div className="w-full md:w-32 h-24 shrink-0 rounded-2xl overflow-hidden border-2 border-white shadow-md group-hover/item:shadow-lg transition-all">
                                <img 
                                    src="https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=300" 
                                    alt="Testing Project"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-teal-100/50" />

                    {/* Job 2 */}
                    <div className="group/item space-y-4">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-grow space-y-3">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 shrink-0 bg-white rounded-xl border border-teal-100 flex items-center justify-center shadow-sm">
                                        <Globe className="text-lime-500" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-lime-600 font-bold text-[10px] uppercase tracking-widest">4/2026 - 5/2026</div>
                                        <h5 className="text-lg font-bold text-gray-900 uppercase">VNNIC <span className="text-teal-600 font-medium">/ Intern</span></h5>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                                    Tiếp cận hạ tầng mạng quốc gia và quy trình vận hành hệ thống lớn tại Trung tâm Internet Việt Nam.
                                </p>
                            </div>
                            <div className="w-full md:w-32 h-24 shrink-0 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                                <img 
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=300" 
                                    alt="Infrastructure"
                                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ========================================== */}
            {/* CỘT 2: DẤU ẤN KỲ THI */}
            {/* ========================================== */}
            <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-[#fffbeb] to-[#fff7ed] rounded-[3rem] p-8 border border-amber-100 shadow-xl relative overflow-hidden group flex flex-col"
            >
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-48 h-48 bg-amber-200/40 rounded-full blur-3xl" />

                <div className="relative z-10 flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg -rotate-3">
                        <Award size={28} />
                    </div>
                    <h4 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">Kỳ thi</h4>
                </div>

                <div className="relative z-10 space-y-10 flex-grow">
                    {/* Giải 1 */}
                    <div className="group/item space-y-4">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-grow space-y-3">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 shrink-0 bg-white rounded-xl border border-amber-100 flex items-center justify-center shadow-sm">
                                        <Code className="text-amber-500" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-orange-600 font-bold text-[10px] uppercase tracking-widest">Competition / 2024</div>
                                        <h5 className="text-lg font-bold text-gray-900 uppercase">Giải Nhì SPIT FE</h5>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                                    Khẳng định kỹ năng xây dựng giao diện mượt mà và tối ưu hóa trải nghiệm người dùng (UX).
                                </p>
                            </div>
                            <div className="w-full md:w-32 h-24 shrink-0 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                                <img 
                                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=300" 
                                    alt="Competition UI"
                                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-amber-100/50" />

                    {/* Giải 2 */}
                    <div className="group/item space-y-4">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-grow space-y-3">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 shrink-0 bg-white rounded-xl border border-amber-100 flex items-center justify-center shadow-sm">
                                        <BrainCircuit className="text-orange-400" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-orange-600 font-bold text-[10px] uppercase tracking-widest">National / 2024</div>
                                        <h5 className="text-lg font-bold text-gray-900 uppercase">Olympic Toán học</h5>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                                    Tôi luyện tư duy logic khắt khe và khả năng giải quyết vấn đề dưới áp lực cao.
                                </p>
                            </div>
                            <div className="w-full md:w-32 h-24 shrink-0 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                                <img 
                                    src="https://images.unsplash.com/photo-1509228468518-180dd48a52bc?auto=format&fit=crop&q=80&w=300" 
                                    alt="Mathematics"
                                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}