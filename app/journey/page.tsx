"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy, Music, BookOpen, Users, Star,
  Briefcase, Medal, Microscope, Calendar,
  Sparkles, GraduationCap, Globe, Lightbulb,
  Terminal, HeartHandshake, Rocket,
  Eye
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Journey = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const timelineData = [
    {
      year: "2022",
      title: "Khởi đầu ấn tượng",
      subtitle: "Xây dựng nền tảng & Khẳng định bản thân",
      color: "bg-amber-500",
      milestones: [
        {
          desc: "Giải Nhì Máy tính cầm tay cấp Tỉnh tại THPT.",
          lesson: "Hình thành tư duy toán học thuật toán và khả năng tối ưu hóa quy trình giải quyết vấn đề dưới áp lực thời gian.",
          icon: <Trophy size={18} className="text-amber-500" />
        },
        {
          desc: "Á khoa Khoa CNTT (Xét học bạ 27.75 điểm).",
          lesson: "Chứng minh sự chuẩn bị nghiêm túc và nền tảng kiến thức vững chắc là bệ phóng cho lộ trình học thuật chuyên sâu.",
          icon: <Star size={18} className="text-rose-500" />
        },
        {
          desc: "Tích cực tham gia văn nghệ cấp Khoa/Trường.",
          lesson: "Rèn luyện sự tự tin, kỹ năng làm chủ sân khấu và khả năng biểu đạt cảm xúc trước đám đông.",
          icon: <Music size={18} className="text-purple-500" />
        },
        {
          desc: "Tham gia câu lạc bộ Kỹ năng Lửa xanh.",
          lesson: "Phát triển kỹ năng giao tiếp, tư duy phản biện và khả năng làm việc nhóm hiệu quả thông qua các hoạt động thực tiễn.",
          icon: <Sparkles size={18} className="text-purple-500" />
        }
      ],
      images:
        [
          "/pictures/z7719744982508_564d083d767425a02db0df0f3a09e223.jpg",
          "/pictures/z7719744982821_bec8c1f05bd8453427cd4c0ecb84948f.jpg",
          "/pictures/z7719744997668_b839e25bc4695174bddb461c2595c0ec.jpg",
          "/pictures/z7719745005691_068e26110d4d7cda31bfa8e6f735029d.jpg",
          "/pictures/z7719745007812_d26bfd9a89756d51c9c90d2a50635886.jpg"
        ]

    },
    {
      year: "2023",
      title: "Rèn luyện & Cống hiến",
      subtitle: "Mở rộng kết nối & Chia sẻ giá trị",
      color: "bg-blue-500",
      milestones: [
        {
          desc: "Gia nhập CLB Hỗ trợ lập trình (SPIT).",
          lesson: "Học cách làm việc nhóm chuyên nghiệp và kỹ năng sư phạm khi hỗ trợ giải đáp kỹ thuật cho các thành viên khác.",
          icon: <Users size={18} className="text-emerald-500" />
        },
        {
          desc: "Sinh viên Xuất sắc năm học 2022-2023.",
          lesson: "Xác lập kỷ luật bản thân và kỹ năng quản lý thời gian để duy trì thành tích học tập dẫn đầu.",
          icon: <Medal size={18} className="text-blue-500" />
        },
        {
          desc: "Tình nguyện viên IT Campus & Chào tân sinh viên.",
          lesson: "Xây dựng tinh thần trách nhiệm với tập thể và kỹ năng điều phối nhân sự trong các sự kiện quy mô lớn.",
          icon: <HeartHandshake size={18} className="text-rose-500" />
        },
        {
          desc: "Danh hiệu Sinh viên 5 Tốt cấp Trường.",
          lesson: "Hoàn thiện bộ tiêu chuẩn toàn diện về Đạo đức, Học tập, Thể lực, Tình nguyện và Hội nhập quốc tế.",
          icon: <Medal size={18} className="text-rose-500" />
        },
        {
          desc: "Giấy khen xuất sắc trong công tác Hội và phong trào.",
          lesson: "Rèn luyện kỹ năng lãnh đạo phong trào và khả năng kết nối nguồn lực giữa các tổ chức đoàn thể.",
          icon: <Medal size={18} className="text-rose-500" />
        },
        {
          desc: "Tham gia văn nghệ & các hội thảo.",
          lesson: "Mở rộng tư duy đa ngành và xây dựng mạng lưới quan hệ (Networking) với các chuyên gia và bạn bè cùng chí hướng.",
          icon: <Music size={18} className="text-purple-500" />
        },
      ],
      images:
        [
          "/pictures/z7706777127210_2b4de4ae5c6cf9333d50750e6a50d47d.jpg",
          "/pictures/z7706777119229_e39c17c51e1158bf0c63db7251d751b8.jpg",
          "/pictures/z7719774709293_9f91eec72a4e2fc26f27b5a072b4c64b.jpg",
          "/pictures/z7719811415861_2c22e8dfef81782fdcbca4437835b431.jpg",
          "/pictures/SV5T_2023.jpg"
        ]
    },
    {
      year: "2024",
      title: "Bứt phá thành tích",
      subtitle: "Thử thách giới hạn & Chuyên sâu kỹ thuật",
      color: "bg-rose-500",
      milestones: [
        {
          desc: "Giải Nhì lập trình SPIT Front-End 2024.",
          lesson: "Nâng cấp tư duy UI/UX chuyên sâu, kết hợp giữa tính thẩm mỹ và hiệu năng kỹ thuật trong phát triển ứng dụng.",
          icon: <Terminal size={18} className="text-amber-500" />
        },
        {
          desc: "Danh hiệu Sao tháng giêng cấp Trường.",
          lesson: "Khẳng định bản lĩnh của một cán bộ Đoàn - Hội xuất sắc, biết dung hòa giữa học thuật và công tác xã hội.",
          icon: <Medal size={18} className="text-rose-500" />
        },
        {
          desc: "Danh hiệu Sinh viên 5 Tốt cấp Trường (Năm 2).",
          lesson: "Duy trì sự bền bỉ trong việc rèn luyện các tiêu chí toàn diện, không ngừng nâng cao chuẩn mực của bản thân.",
          icon: <Medal size={18} className="text-rose-500" />
        },
        {
          desc: "Tham gia Olympic Toán học Sinh viên toàn quốc.",
          lesson: "Mài giũa khả năng phân tích toán học logic - nền tảng để giải quyết những thách thức phức tạp trong ngành IT.",
          icon: <BookOpen size={18} className="text-indigo-500" />
        },
        {
          desc: "MC IT Cup 2024 & Office Tour.",
          lesson: "Phát triển kỹ năng dẫn chương trình linh hoạt và tìm hiểu văn hóa doanh nghiệp tại các tập đoàn công nghệ lớn.",
          icon: <Sparkles size={18} className="text-purple-500" />
        },
        {
          desc: "Giấy khen xuất sắc trong công tác Hội và phong trào.",
          lesson: "Đúc kết kinh nghiệm tổ chức các hoạt động quy mô lớn và kỹ năng truyền cảm hứng cho cộng đồng sinh viên.",
          icon: <Medal size={18} className="text-rose-500" />
        },
        {
          desc: "Tham gia các seminar và hội thảo.",
          lesson: "Cập nhật những xu hướng công nghệ mới nhất và rèn luyện kỹ năng đặt câu hỏi phản biện khoa học.",
          icon: <Lightbulb size={18} className="text-amber-500" />
        }
      ],
      images:
        [
          "/pictures/mc.png", 
          "/pictures/Sinh viên 5 tốt_2024.jpg",
          "/pictures/spitfront-end.jpg",
          "/pictures/SV5T_2023.jpg",
          "/pictures/z7706777021705_698dfe0f4cc4bb35e2dac239b3cf69f9.jpg",
          "/pictures/Sao tháng giêng-2024.jpg",
          "/pictures/486508798_1262650255720714_581671144975890167_n.jpg"
        ]
    },
    {
      year: "2025",
      title: "Chuyên nghiệp hóa",
      subtitle: "Thực chiến doanh nghiệp & Nghiên cứu khoa học",
      color: "bg-stone-800",
      milestones: [
        {
          desc: "Đảm nhiệm chức vụ Phó Liên chi hội Khoa CNTT và Phó ban Kỹ năng CLB.",
          lesson: "Phát triển năng lực và kỹ năng quản trị tổ chức để vận hành hiệu quả các phong trào sinh viên.",
          icon: <Briefcase size={18} className="text-stone-400" />
        },
        {
          desc: "Thực tập Tester tại DHY Solutions (Tháng 3/2025).",
          lesson: "Làm quen với quy trình Agile/Scrum và học cách đảm bảo chất lượng phần mềm thông qua tư duy kiểm thử tỉ mỉ.",
          icon: <Briefcase size={18} className="text-stone-400" />
        },
        {
          desc: "Hoàn thành Nghiên cứu khoa học cấp Trường.",
          lesson: "Rèn luyện phương pháp luận khoa học, kỹ năng thu thập dữ liệu và tư duy giải quyết vấn đề độc lập.",
          icon: <Microscope size={18} className="text-cyan-500" />
        },
        {
          desc: "Sinh viên & Đoàn viên Xuất sắc 2024-2025.",
          lesson: "Minh chứng cho sự kiên trì trong suốt lộ trình dài, khẳng định vai trò tiên phong trong các hoạt động đoàn thể.",
          icon: <Rocket size={18} className="text-orange-400" />
        },
        {
          desc: "Tham gia Hội thảo Nghiên cứu khoa học sinh viên.",
          lesson: "Phát triển kỹ năng thuyết trình báo cáo khoa học và khả năng bảo vệ quan điểm trước hội đồng chuyên môn.",
          icon: <Medal size={18} className="text-rose-500" />
        }
      ],
      images:
        [
          "/pictures/z7706777017285_3edda6686d13e489d1bd22cc44f3ad82.jpg",
          "/pictures/hoithaoKH.jpg",
          "/pictures/NCKH_1.jpg",
          "/pictures/NCKH_2.jpg",
          "/pictures/seminar_2.jpg" ,
          "/pictures/VanNghe.jpg"
        ]
    },
    {
      year: "2026",
      title: "Cống hiến & Vươn xa",
      subtitle: "Giai đoạn chuyển giao & Khởi đầu hành trình mới",
      color: "bg-indigo-600",
      milestones: [
        {
          desc: "Hỗ trợ cuộc thi ICPC.",
          lesson: "Học hỏi quy trình tổ chức giải đấu lập trình chuẩn quốc tế và kỹ năng xử lý các tình huống kỹ thuật phát sinh.",
          icon: <Globe size={18} className="text-indigo-400" />
        },
        {
          desc: "Thực tập tại Trung tâm Internet Việt Nam (VNNIC).",
          lesson: "Tích lũy kinh nghiệm thực tế và nâng cao kỹ năng thông qua môi trường làm việc chuyên nghiệp.",
          icon: <Briefcase size={18} className="text-emerald-400" />
        },
        {
          desc: "Hoàn thành Khóa luận tốt nghiệp.",
          lesson: "Sản phẩm kết tinh 4 năm đại học - ứng dụng toàn bộ kiến thức kỹ thuật và thực tiễn để giải quyết một bài toán xã hội.",
          icon: <GraduationCap size={18} className="text-white-600" />
        }
      ],
      images:
        [
          "/pictures/z7719855323618_1f8a7ed679cce5d893cc0fc20921c8b6.jpg",
          "/pictures/Hỗ_trợ_ICPC.jpg"
        ]
    }
  ];
  return (
    <section id="journey" className="py-24 px-6 bg-[#fcfcfb] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-16 h-[2px] bg-rose-500"></span>
            <span className="text-rose-600 font-bold uppercase tracking-[0.2em] text-xs">My Life Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-[#1a1a1a] tracking-tighter leading-tight"
          >
            HÀNH TRÌNH <br />
            <span className="text-rose-500 italic font-light">Phát triển & Cống hiến.</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-stone-200 via-stone-300 to-transparent -translate-x-1/2 hidden md:block" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative mb-28 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-xl mb-4 transition-transform`}
                >
                  <Calendar size={22} />
                </motion.div>
                <div className="bg-white px-4 py-1 rounded-full border border-stone-100 shadow-sm">
                  <span className="font-black text-stone-800 text-lg">{item.year}</span>
                </div>
              </div>

              <div className={`w-full md:w-[45%] ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-stone-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 group"
                >
                  <div className="mb-6">
                    <h3 className="text-3xl font-black text-stone-800 group-hover:text-rose-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-rose-400 font-medium text-sm mt-1 uppercase tracking-wide">{item.subtitle}</p>
                  </div>

                  <div className="space-y-6">
                    {item.milestones.map((ms, msIdx) => (
                      <div key={msIdx} className="relative">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 p-2 bg-stone-50 rounded-xl group-hover:bg-rose-50 transition-colors shrink-0">
                            {ms.icon}
                          </div>
                          <div>
                            <p className="text-base font-bold text-stone-800 leading-tight mb-2">
                              {ms.desc}
                            </p>
                            <div className="flex items-start gap-2 p-3 bg-stone-50/70 rounded-2xl border border-stone-100 group-hover:border-rose-100 transition-colors">
                              <Lightbulb size={14} className="text-amber-500 mt-1 shrink-0" />
                              <p className="text-[13px] text-stone-500 italic leading-relaxed">
                                {ms.lesson}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="relative w-full overflow-hidden py-4">

                {/* Gradient */}
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#fcfcfb] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#fcfcfb] to-transparent z-20 pointer-events-none" />

                <motion.div
                  className="flex gap-6 items-center w-max" // FIX 1: dùng w-max thay vì style
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[...item.images, ...item.images].map((img, i) => (

                    <motion.div
                      key={i}
                      className="flex-none w-[200px] md:w-[240px]" // FIX 2: ép width cho wrapper
                      whileHover={{ y: -10, scale: 1.05 }}
                      onClick={() => setSelectedImage(img)}
                    >

                      {/* Khung ảnh */}
                      <div className="relative w-full h-[280px] md:h-[320px] rounded-[2rem] overflow-hidden shadow-xl border border-stone-100 bg-stone-200">

                        {/* FIX 3: dùng fill chuẩn */}
                        <Image
                          src={img}
                          alt="Activity"
                          width={400}
                          height={600}
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 200px, 240px"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition flex items-center justify-center z-10">
                          <Eye className="text-white opacity-0 hover:opacity-100 transition-opacity" size={28} />
                        </div>

                      </div>
                    </motion.div>

                  ))}
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-stone-400 italic">"Hành trình vạn dặm bắt đầu từ những bước chân nhỏ bé."</p>
          <div className="mt-4 flex justify-center gap-4">
            <div className="w-2 h-2 rounded-full bg-rose-500"></div>
            <div className="w-2 h-2 rounded-full bg-stone-200"></div>
            <div className="w-2 h-2 rounded-full bg-stone-200"></div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative h-[350px] bg-stone-900 rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl"
          >
            <img
              src="/pictures/Hỗ_trợ_ICPC.jpg"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
              alt="Hoạt động ngoại khóa"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 flex flex-col justify-end">
              <div className="bg-rose-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 transform -rotate-12 group-hover:rotate-0 transition-transform">
                <Music className="text-white" size={20} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">Khoảnh khắc Ngoại khóa</h4>
              <p className="text-stone-300">Văn nghệ, MC & Tình nguyện</p>
              <Link href="/journey/activities">
                <div className="mt-6 w-fit border-b-2 border-rose-500 pb-1 text-sm font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Khám phá Album
                </div>
              </Link>

            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative h-[350px] bg-rose-600 rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl shadow-rose-200"
          >
            <img
              src="/pictures/Sao tháng giêng-2024.jpg"
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
              alt="Thành tích"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-transparent to-transparent p-12 flex flex-col justify-end">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 transform rotate-12 group-hover:rotate-0 transition-transform">
                <Trophy className="text-rose-600" size={20} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">Bảng vàng Thành tích</h4>
              <p className="text-rose-100">Chứng nhận & Giải thưởng lập trình</p>
              <Link href="/journey/certificate">
                <div className="mt-6 w-fit border-b-2 border-white pb-1 text-sm font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Xem chi tiết
                </div>
              </Link>

            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default Journey;