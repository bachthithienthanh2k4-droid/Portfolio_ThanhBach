"use client";

import React, { useEffect, useRef, useState } from 'react';
import {
  motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValueEvent, useMotionValue, useAnimationFrame,
} from 'framer-motion';
import {
  Trophy, Music, BookOpen, Users, Star,
  Briefcase, Medal, Microscope,
  Sparkles, GraduationCap, Globe, Lightbulb,
  Terminal, HeartHandshake, Rocket, Crown, FileText, Smartphone,
  X, ChevronLeft, ChevronRight, ArrowUpRight, Images, Quote, Plane, ChevronsDown, MapPin,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLang, pick, type Lang } from '../i18n';

const ease = [0.16, 1, 0.3, 1] as const;

// Nội dung song ngữ: { vi, en }
type L = { vi: string; en: string };
type Milestone = { desc: L; lesson: L; icon: React.ElementType; highlight?: boolean };
type Chapter = { year: string; title: L; subtitle: L; milestones: Milestone[]; images: string[] };

const rawTimeline: Chapter[] = [
  {
    year: "2022",
    title: { vi: "Khởi đầu ấn tượng", en: "An Impressive Start" },
    subtitle: { vi: "Xây dựng nền tảng & Khẳng định bản thân", en: "Building Foundations & Proving Myself" },
    milestones: [
      {
        desc: { vi: "Giải Nhì Máy tính cầm tay cấp Tỉnh tại THPT.", en: "Second Prize, Provincial Casio Calculator Competition in high school." },
        lesson: { vi: "Hình thành tư duy toán học thuật toán và khả năng tối ưu hóa quy trình giải quyết vấn đề dưới áp lực thời gian.", en: "Developed algorithmic, mathematical thinking and the ability to streamline problem-solving under time pressure." },
        icon: Trophy,
      },
      {
        desc: { vi: "Á khoa đầu vào Khoa CNTT (Xét học bạ 27.75 điểm).", en: "Runner-up Valedictorian on entry to the Faculty of Information Technology (27.75 academic-record score)." },
        lesson: { vi: "Chứng minh sự chuẩn bị nghiêm túc và nền tảng kiến thức vững chắc là bệ phóng cho lộ trình học thuật chuyên sâu.", en: "Proved that serious preparation and solid fundamentals are the launchpad for an in-depth academic path." },
        icon: Star, highlight: true,
      },
      {
        desc: { vi: "Tích cực tham gia văn nghệ cấp Khoa/Trường.", en: "Actively performed in faculty and university arts events." },
        lesson: { vi: "Rèn luyện sự tự tin, kỹ năng làm chủ sân khấu và khả năng biểu đạt cảm xúc trước đám đông.", en: "Built confidence, stage presence and the ability to express emotion in front of an audience." },
        icon: Music,
      },
      {
        desc: { vi: "Tham gia câu lạc bộ Kỹ năng Lửa xanh.", en: "Joined the Lửa Xanh (Blue Flame) Skills Club." },
        lesson: { vi: "Phát triển kỹ năng giao tiếp, tư duy phản biện và khả năng làm việc nhóm hiệu quả thông qua các hoạt động thực tiễn.", en: "Strengthened communication, critical thinking and teamwork through hands-on activities." },
        icon: Sparkles,
      },
    ],
    images: [
      "/pictures/z7719744982508_564d083d767425a02db0df0f3a09e223.jpg",
      "/pictures/z7719744982821_bec8c1f05bd8453427cd4c0ecb84948f.jpg",
      "/pictures/z7719744997668_b839e25bc4695174bddb461c2595c0ec.jpg",
      "/pictures/z7719745005691_068e26110d4d7cda31bfa8e6f735029d.jpg",
      "/pictures/z7719745007812_d26bfd9a89756d51c9c90d2a50635886.jpg",
    ],
  },
  {
    year: "2023",
    title: { vi: "Rèn luyện & Cống hiến", en: "Growing & Giving Back" },
    subtitle: { vi: "Mở rộng kết nối & Chia sẻ giá trị", en: "Expanding Connections & Sharing Value" },
    milestones: [
      {
        desc: { vi: "Gia nhập CLB Hỗ trợ lập trình (SPIT).", en: "Joined the Programming Support Club (SPIT)." },
        lesson: { vi: "Học cách làm việc nhóm chuyên nghiệp và kỹ năng sư phạm khi hỗ trợ giải đáp kỹ thuật cho các thành viên khác.", en: "Learned professional teamwork and teaching skills while helping fellow members with technical questions." },
        icon: Users,
      },
      {
        desc: { vi: "Sinh viên Xuất sắc năm học 2022-2023.", en: "Excellent Student, academic year 2022–2023." },
        lesson: { vi: "Xác lập kỷ luật bản thân và kỹ năng quản lý thời gian để duy trì thành tích học tập dẫn đầu.", en: "Built self-discipline and time management to stay at the top of my class." },
        icon: Medal,
      },
      {
        desc: { vi: "Tình nguyện viên IT Campus & Chào tân sinh viên.", en: "Volunteer at IT Campus & Freshman Welcome events." },
        lesson: { vi: "Xây dựng tinh thần trách nhiệm với tập thể và kỹ năng điều phối nhân sự trong các sự kiện quy mô lớn.", en: "Developed a strong sense of responsibility to the community and coordinated teams at large-scale events." },
        icon: HeartHandshake,
      },
      {
        desc: { vi: "Danh hiệu Sinh viên 5 Tốt cấp Trường.", en: "University-level Five-Merit Student title." },
        lesson: { vi: "Hoàn thiện bộ tiêu chuẩn toàn diện về Đạo đức, Học tập, Thể lực, Tình nguyện và Hội nhập quốc tế.", en: "Met the all-round standards of ethics, academics, fitness, volunteering and international integration." },
        icon: Medal, highlight: true,
      },
      {
        desc: { vi: "Giấy khen xuất sắc trong công tác Hội và phong trào.", en: "Certificate of Merit for outstanding Student Association work." },
        lesson: { vi: "Rèn luyện kỹ năng lãnh đạo phong trào và khả năng kết nối nguồn lực giữa các tổ chức đoàn thể.", en: "Honed leadership in student initiatives and the ability to connect resources across organizations." },
        icon: Medal,
      },
      {
        desc: { vi: "Tham gia văn nghệ & các hội thảo.", en: "Performed in arts events & attended workshops." },
        lesson: { vi: "Mở rộng tư duy đa ngành và xây dựng mạng lưới quan hệ với các chuyên gia và bạn bè cùng chí hướng.", en: "Broadened my interdisciplinary thinking and built a network of experts and like-minded peers." },
        icon: Music,
      },
    ],
    images: [
      "/pictures/z7706777127210_2b4de4ae5c6cf9333d50750e6a50d47d.jpg",
      "/pictures/z7706777119229_e39c17c51e1158bf0c63db7251d751b8.jpg",
      "/pictures/z7719774709293_9f91eec72a4e2fc26f27b5a072b4c64b.jpg",
      "/pictures/z7719811415861_2c22e8dfef81782fdcbca4437835b431.jpg",
      "/pictures/SV5T_2023.jpg",
    ],
  },
  {
    year: "2024",
    title: { vi: "Bứt phá thành tích", en: "Breaking Through" },
    subtitle: { vi: "Thử thách giới hạn & Chuyên sâu kỹ thuật", en: "Pushing Limits & Deepening Technical Skills" },
    milestones: [
      {
        desc: { vi: "Giải Nhì cuộc thi SPIT Front-end 2024.", en: "Second Prize, SPIT Front-end Contest 2024." },
        lesson: { vi: "Nâng cấp tư duy UI/UX chuyên sâu, kết hợp giữa tính thẩm mỹ và hiệu năng kỹ thuật trong phát triển ứng dụng.", en: "Leveled up my UI/UX thinking, balancing aesthetics with technical performance in app development." },
        icon: Terminal, highlight: true,
      },
      {
        desc: { vi: "Danh hiệu Sao tháng Giêng cấp Trường.", en: "University-level January Star Award." },
        lesson: { vi: "Khẳng định bản lĩnh của một cán bộ Đoàn - Hội xuất sắc, biết dung hòa giữa học thuật và công tác xã hội.", en: "Proved myself as a standout Youth Union & Student Association officer, balancing academics with community work." },
        icon: Star, highlight: true,
      },
      {
        desc: { vi: "Danh hiệu Sinh viên 5 Tốt cấp Trường (Năm 2).", en: "University-level Five-Merit Student title (second year)." },
        lesson: { vi: "Duy trì sự bền bỉ trong việc rèn luyện các tiêu chí toàn diện, không ngừng nâng cao chuẩn mực của bản thân.", en: "Stayed consistent across every all-round criterion, continually raising my own standards." },
        icon: Medal,
      },
      {
        desc: { vi: "Tham gia Olympic Toán học Sinh viên toàn quốc.", en: "Competed in the National Student Mathematics Olympiad." },
        lesson: { vi: "Mài giũa khả năng phân tích toán học logic - nền tảng để giải quyết những thách thức phức tạp trong ngành IT.", en: "Sharpened logical, mathematical analysis — the foundation for tackling complex challenges in IT." },
        icon: BookOpen,
      },
      {
        desc: { vi: "MC IT Cup 2024 & Office Tour.", en: "MC for IT Cup 2024 & Office Tour." },
        lesson: { vi: "Phát triển kỹ năng dẫn chương trình linh hoạt và tìm hiểu văn hóa doanh nghiệp tại các tập đoàn công nghệ lớn.", en: "Developed versatile hosting skills and explored the workplace culture of major tech companies." },
        icon: Sparkles,
      },
      {
        desc: { vi: "Giấy khen xuất sắc trong công tác Hội và phong trào.", en: "Certificate of Merit for outstanding Student Association work." },
        lesson: { vi: "Đúc kết kinh nghiệm tổ chức các hoạt động quy mô lớn và kỹ năng truyền cảm hứng cho cộng đồng sinh viên.", en: "Gained hands-on experience running large-scale events and inspiring the student community." },
        icon: Medal,
      },
      {
        desc: { vi: "Tham gia các seminar và hội thảo.", en: "Attended seminars and workshops." },
        lesson: { vi: "Cập nhật những xu hướng công nghệ mới nhất và rèn luyện kỹ năng đặt câu hỏi phản biện khoa học.", en: "Kept up with the latest tech trends and practiced asking sharp, critical questions." },
        icon: Lightbulb,
      },
    ],
    images: [
      "/pictures/mc.png",
      "/pictures/Sinh viên 5 tốt_2024.jpg",
      "/pictures/spitfront-end.jpg",
      "/pictures/z7706777021705_698dfe0f4cc4bb35e2dac239b3cf69f9.jpg",
      "/pictures/Sao tháng giêng-2024.jpg",
      "/pictures/486508798_1262650255720714_581671144975890167_n.jpg",
    ],
  },
  {
    year: "2025",
    title: { vi: "Chuyên nghiệp hóa", en: "Going Professional" },
    subtitle: { vi: "Thực chiến doanh nghiệp & Nghiên cứu khoa học", en: "Industry Experience & Scientific Research" },
    milestones: [
      {
        desc: { vi: "Phó Liên chi hội Khoa CNTT và Phó ban Kỹ năng CLB.", en: "Vice President of the Faculty of IT Student Association and Deputy Head of Skills at the club." },
        lesson: { vi: "Phát triển năng lực và kỹ năng quản trị tổ chức để vận hành hiệu quả các phong trào sinh viên.", en: "Grew my organizational and management skills to run student programs effectively." },
        icon: Briefcase,
      },
      {
        desc: { vi: "Thực tập Tester tại DHY Solutions.", en: "Software Tester Intern at DHY Solutions." },
        lesson: { vi: "Làm quen với quy trình Agile/Scrum và học cách đảm bảo chất lượng phần mềm thông qua tư duy kiểm thử tỉ mỉ.", en: "Worked within Agile/Scrum and learned to safeguard software quality through meticulous testing." },
        icon: Briefcase,
      },
      {
        desc: { vi: "Hoàn thành Nghiên cứu khoa học cấp Trường.", en: "Completed a university-level research project." },
        lesson: { vi: "Rèn luyện phương pháp luận khoa học, kỹ năng thu thập dữ liệu và tư duy giải quyết vấn đề độc lập.", en: "Trained in research methodology, data collection and independent problem-solving." },
        icon: Microscope, highlight: true,
      },
      {
        desc: { vi: "Sinh viên & Đoàn viên Xuất sắc 2024-2025.", en: "Excellent Student & Outstanding Youth Union Member 2024–2025." },
        lesson: { vi: "Minh chứng cho sự kiên trì trong suốt lộ trình dài, khẳng định vai trò tiên phong trong các hoạt động đoàn thể.", en: "A testament to perseverance over the long run and to a leading role in Youth Union activities." },
        icon: Rocket,
      },
      {
        desc: { vi: "Tham gia Hội thảo Nghiên cứu khoa học sinh viên.", en: "Took part in the Student Scientific Research Conference." },
        lesson: { vi: "Phát triển kỹ năng thuyết trình báo cáo khoa học và khả năng bảo vệ quan điểm trước hội đồng chuyên môn.", en: "Developed my skills in presenting research and defending my findings before an expert panel." },
        icon: Medal,
      },
    ],
    images: [
      "/pictures/z7706777017285_3edda6686d13e489d1bd22cc44f3ad82.jpg",
      "/pictures/hoithaoKH.jpg",
      "/pictures/NCKH_1.jpg",
      "/pictures/NCKH_2.jpg",
      "/pictures/seminar_2.jpg",
      "/pictures/VanNghe.jpg",
      "/pictures/540969285_3282903675198879_8108306166079727059_n.jpg",
    ],
  },
  {
    year: "2026",
    title: { vi: "Cống hiến & Vươn xa", en: "Giving Back & Reaching Further" },
    subtitle: { vi: "Tốt nghiệp & Khởi đầu hành trình mới", en: "Graduation & the Start of a New Journey" },
    milestones: [
      {
        desc: { vi: "Công bố bài báo nghiên cứu khoa học.", en: "Published a scientific research paper." },
        lesson: { vi: "Bài báo “Phương pháp kết hợp đặc trưng thích nghi cho bài toán phân lớp bệnh viêm phổi từ ảnh X-quang” được công nhận tại Trường Đại học Khoa học, Đại học Huế.", en: "The paper “An Adaptive Feature Fusion Method for Pneumonia Classification from X-ray Images” was recognized at the University of Sciences, Hue University." },
        icon: FileText, highlight: true,
      },
      {
        desc: { vi: "Giải Nhì HUE-ICT Challenge 2026.", en: "Second Prize, HUE-ICT Challenge 2026." },
        lesson: { vi: "Phần thi Sản phẩm sáng tạo CNTT với đề tài Gated Fusion chẩn đoán viêm phổi từ ảnh X-quang – đưa nghiên cứu đến gần hơn với thực tiễn.", en: "Creative IT Product category, with a Gated Fusion model for diagnosing pneumonia from X-ray images — bringing research closer to real-world use." },
        icon: Trophy, highlight: true,
      },
      {
        desc: { vi: "Hỗ trợ cuộc thi ICPC.", en: "Supported the ICPC programming contest." },
        lesson: { vi: "Học hỏi quy trình tổ chức giải đấu lập trình chuẩn quốc tế và kỹ năng xử lý các tình huống kỹ thuật phát sinh.", en: "Learned how an international-standard programming contest is run and how to handle technical issues on the fly." },
        icon: Globe,
      },
      {
        desc: { vi: "Thực tập tại Trung tâm Internet Việt Nam (VNNIC).", en: "Intern at the Vietnam Internet Network Information Center (VNNIC)." },
        lesson: { vi: "Phát triển giao diện website và ứng dụng mô hình AI đa phương thức trong môi trường làm việc chuyên nghiệp.", en: "Built website interfaces and applied multimodal AI models in a professional environment." },
        icon: Briefcase,
      },
      {
        desc: { vi: "Hoàn thành Khóa luận tốt nghiệp.", en: "Completed my graduation thesis." },
        lesson: { vi: "Sản phẩm kết tinh 4 năm đại học - ứng dụng toàn bộ kiến thức kỹ thuật và thực tiễn để giải quyết một bài toán xã hội.", en: "The culmination of four years at university — applying everything I learned, in theory and practice, to a real social problem." },
        icon: GraduationCap,
      },
      {
        desc: { vi: "Tốt nghiệp với danh hiệu Á khoa Khoa CNTT.", en: "Graduated as Runner-up Valedictorian of the Faculty of Information Technology." },
        lesson: { vi: "Khép lại 4 năm đại học bằng thành quả xứng đáng cho sự bền bỉ và nỗ lực không ngừng.", en: "Closing four years of university with a well-earned reward for persistence and relentless effort." },
        icon: Crown, highlight: true,
      },
      {
        desc: { vi: "Lập trình viên Fresher tại PT Valley.", en: "Fresher Developer at PT Valley." },
        lesson: { vi: "Bắt đầu hành trình đi làm: phát triển ứng dụng di động đa nền tảng với Flutter và Dart.", en: "Starting my career: building cross-platform mobile apps with Flutter and Dart." },
        icon: Smartphone,
      },
    ],
    images: [
      "/pictures/z7719855323618_1f8a7ed679cce5d893cc0fc20921c8b6.jpg",
      "/pictures/Hỗ_trợ_ICPC.jpg",
      "/pictures/z7730228559954_46040e9a2f624256c5d3657257d1dbdd.jpg",
      "/pictures/z7730228564663_3f56fed2640d2a344d7ae1231ef172b4.jpg",
      "/pictures/z7730228545765_0f67337b4cd639a28c8f103ea4755689.jpg",
      "/pictures/hueict.jpg",
      "/pictures/tapthehueict.jpg",
      "/pictures/totnghiep.jpg",
      "/pictures/anhhusc.jpg",
    ],
  },
];

// Chuẩn hóa đường dẫn ảnh: tự thêm "/" nếu lỡ viết "pictures/..." để next/image không báo lỗi
const normalizeSrc = (src: string) => (/^(https?:)?\/\//.test(src) || src.startsWith("/") ? src : `/${src.replace(/^\.?\/?(public\/)?/, "")}`);

const timelineData: Chapter[] = rawTimeline.map((c) => ({ ...c, images: c.images.map(normalizeSrc) }));

const MAX_ALTITUDE = 10000; // mét – độ cao khi tới chặng cuối

type OpenFn = (images: string[], index: number) => void;

const numberLocale = (lang: Lang) => (lang === "en" ? "en-US" : "vi-VN");
const formatAltitude = (v: number, lang: Lang) => `${Math.round(v).toLocaleString(numberLocale(lang))} m`;

// ============ THẺ LÊN MÁY BAY (mỗi năm) ============
const BoardingPass = ({ chapter, index, className = "" }: { chapter: Chapter; index: number; className?: string }) => {
  const { lang, t } = useLang();
  const from = index === 0 ? t("Huế", "Hue") : timelineData[index - 1].year;
  const altitude = Math.round(((index + 1) / timelineData.length) * MAX_ALTITUDE);
  return (
    <div className={`flex flex-col overflow-hidden rounded-[2rem] border border-white bg-white/90 shadow-[0_30px_70px_-35px_rgba(150,50,70,0.55)] backdrop-blur ${className}`}>
      {/* Dải đầu thẻ */}
      <div className="relative bg-gradient-to-r from-rose-500 to-pink-400 px-6 py-4 text-white">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-rose-50">
          <span>{t("Thẻ lên máy bay", "Boarding pass")}</span>
          <span>{t("Chương", "Chapter")} {String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-rose-100">{t("Điểm đi", "From")}</p>
            <p className="text-xl font-black">{from}</p>
          </div>
          <div className="flex flex-1 items-center gap-2 px-4">
            <span className="h-px flex-1 border-t border-dashed border-white/60" />
            <Plane size={18} className="rotate-45" />
            <span className="h-px flex-1 border-t border-dashed border-white/60" />
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-rose-100">{t("Điểm đến", "To")}</p>
            <p className="text-xl font-black">{chapter.year}</p>
          </div>
        </div>
      </div>

      {/* Thông tin chuyến bay */}
      <div className="px-6 pt-5">
        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#a88a80]">
          <span>{t("Chuyến", "Flight")} TT-{chapter.year}</span>
          <span className="h-1 w-1 rounded-full bg-rose-300" />
          <span>{t("Độ cao", "Altitude")} {altitude.toLocaleString(numberLocale(lang))} m</span>
        </div>
        <h3 className="mt-2 text-2xl font-black leading-tight tracking-tight text-[#3a2420]">{pick(chapter.title, lang)}</h3>
        <p className="mt-1 text-sm italic text-[#a88a80]">{pick(chapter.subtitle, lang)}</p>
      </div>

      {/* Đường răng cưa kiểu vé */}
      <div className="relative my-4 flex items-center">
        <span className="absolute -left-3 h-6 w-6 rounded-full bg-[#fbf0ee]" />
        <span className="mx-6 h-px flex-1 border-t-2 border-dashed border-rose-100" />
        <span className="absolute -right-3 h-6 w-6 rounded-full bg-[#fbf0ee]" />
      </div>

      {/* Cột mốc */}
      <ul className="journey-scroll flex-1 space-y-2.5 overflow-y-auto px-6 pb-6">
        {chapter.milestones.map((ms, i) => {
          const Icon = ms.icon;
          return (
            <li key={i} className="flex items-start gap-3">
              <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${ms.highlight ? "bg-gradient-to-br from-rose-500 to-pink-400 text-white" : "bg-rose-50 text-rose-500"}`}>
                <Icon size={15} />
              </span>
              <div>
                <p className="text-sm font-bold leading-snug text-[#3a2420]">{pick(ms.desc, lang)}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-[#8a6f66]">{pick(ms.lesson, lang)}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// ============ MÂY TRÔI (nhiều lớp, tạo chiều sâu) ============
const Cloud = ({ className, style }: { className: string; style?: React.ComponentProps<typeof motion.div>["style"] }) => (
  <motion.div style={style} className={`pointer-events-none absolute ${className}`}>
    <div className="relative h-full w-full">
      <span className="absolute bottom-0 left-0 h-1/2 w-full rounded-full bg-white" />
      <span className="absolute bottom-1/4 left-[15%] h-3/4 w-1/2 rounded-full bg-white" />
      <span className="absolute bottom-1/4 right-[12%] h-[60%] w-[40%] rounded-full bg-white" />
    </div>
  </motion.div>
);

// ============ DẢI ẢNH TỰ CHẠY (rê chuột để dừng, bấm để xem lớn) ============
const MarqueeRow = ({ images, year, reverse, duration, offset, onOpen, tall }: {
  images: string[]; year: string; reverse?: boolean; duration: number; offset: number; onOpen: OpenFn; tall?: boolean;
}) => {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const paused = useRef(false);

  // Chạy bằng JavaScript nên luôn hoạt động, kể cả khi máy tắt hiệu ứng động
  useAnimationFrame((_, delta) => {
    const track = trackRef.current;
    if (!track || paused.current) return;
    const half = track.scrollWidth / 2; // nửa dải = một vòng ảnh
    if (!half) return;
    const speed = half / duration; // px mỗi giây
    let next = x.get() + (reverse ? 1 : -1) * speed * (delta / 1000);
    if (next <= -half) next += half;
    if (next > 0) next -= half;
    x.set(next);
  });

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-3 pr-3">
        {[...images, ...images].map((img, i) => {
          const idx = (i % images.length + offset) % images.length;
          return (
            <button
              key={i}
              onClick={() => onOpen(images, i % images.length)}
              className={`group/img relative shrink-0 overflow-hidden rounded-[1.5rem] border-4 border-white shadow-[0_20px_40px_-25px_rgba(150,50,70,0.55)] ${tall ? "h-[210px] w-[280px]" : "h-[170px] w-[230px]"}`}
              aria-label={t(`Xem ảnh ${idx + 1} năm ${year}`, `View photo ${idx + 1} from ${year}`)}
            >
              <Image src={img} alt={t(`Khoảnh khắc năm ${year}`, `A moment from ${year}`)} fill sizes="280px" quality={85} className="object-cover transition-transform duration-700 group-hover/img:scale-110" />
              <div className="absolute inset-0 bg-[#4a1f2a]/0 transition-colors duration-500 group-hover/img:bg-[#4a1f2a]/20" />
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

const PhotoStream = ({ chapter, onOpen }: { chapter: Chapter; onOpen: OpenFn }) => {
  const { t } = useLang();
  // Hàng dưới bắt đầu từ giữa album để hai hàng không trùng ảnh
  const half = Math.ceil(chapter.images.length / 2);
  const shifted = [...chapter.images.slice(half), ...chapter.images.slice(0, half)];
  const dur = chapter.images.length * 6;
  return (
    <div className="relative">
      <div className="space-y-3">
        <MarqueeRow images={chapter.images} year={chapter.year} duration={dur} offset={0} onOpen={onOpen} tall />
        <MarqueeRow images={shifted} year={chapter.year} duration={dur + 8} offset={half} onOpen={onOpen} reverse />
      </div>
      {/* Làm mờ hai mép */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#fbf5f1] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#fbf5f1] to-transparent" />
      <span className="pointer-events-none absolute -bottom-7 right-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-400">
        <Images size={12} /> {chapter.images.length} {t("khoảnh khắc · rê chuột để dừng", "moments · hover to pause")}
      </span>
    </div>
  );
};

// ============ CHUYẾN BAY DỌC ============
const VerticalFlight = ({ onOpen }: { onOpen: OpenFn }) => {
  const { lang, t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 65%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const planeTop = useTransform(progress, (v) => `${Math.min(1, Math.max(0, v)) * 100}%`);
  const [altitude, setAltitude] = useState(0);

  useMotionValueEvent(progress, "change", (v) => setAltitude(Math.min(1, Math.max(0, v)) * MAX_ALTITUDE));

  return (
    <div ref={ref} className="relative mx-auto max-w-6xl px-5 pb-10">
      <div className="relative">
        {/* Đường bay dọc */}
        <div className="absolute bottom-0 left-4 top-0 w-[2px] -translate-x-1/2 border-l-2 border-dashed border-rose-200 lg:left-1/2" />
        <motion.div
          style={{ scaleY: progress }}
          className="absolute bottom-0 left-4 top-0 w-[3px] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-rose-300 via-rose-400 to-rose-500 lg:left-1/2"
        />
        {/* Máy bay chạy theo đường bay, kèm độ cao hiện tại */}
        <motion.div style={{ top: planeTop }} className="absolute left-4 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center lg:left-1/2">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-rose-500 shadow-[0_10px_25px_-5px_rgba(244,63,94,0.55)] ring-4 ring-rose-100">
            <Plane size={20} fill="currentColor" className="rotate-[135deg]" />
          </span>
          <span className="mt-2 hidden whitespace-nowrap rounded-full bg-white/90 px-2.5 py-1 text-center shadow-md backdrop-blur lg:block">
            <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#a88a80]">{t("Độ cao", "Altitude")}</span>
            <span className="block text-[11px] font-black tabular-nums text-rose-500">{formatAltitude(altitude, lang)}</span>
          </span>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {timelineData.map((chapter, index) => {
            const right = index % 2 === 1;
            return (
              <section
                key={chapter.year}
                id={`nam-${chapter.year}`}
                className="relative scroll-mt-40"
              >
                {/* Mốc năm trên đường bay */}
                <div className="absolute left-4 top-0 z-10 -translate-x-1/2 lg:left-1/2">
                  <span className="block rounded-full bg-gradient-to-r from-rose-500 to-pink-400 px-4 py-1.5 text-sm font-black text-white shadow-lg shadow-rose-200 ring-4 ring-[#fbf5f1]">
                    {chapter.year}
                  </span>
                </div>
                <div className="h-14" />

                <div className="grid grid-cols-1 items-center gap-10 pl-12 lg:grid-cols-2 lg:gap-24 lg:pl-0">
                  <motion.div
                    initial={{ opacity: 0, x: right ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease }}
                    className={right ? "lg:order-2" : ""}
                  >
                    <BoardingPass chapter={chapter} index={index} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: right ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease, delay: 0.1 }}
                    className={`min-w-0 pb-8 ${right ? "lg:order-1" : ""}`}
                  >
                    <PhotoStream chapter={chapter} onOpen={onOpen} />
                  </motion.div>
                </div>
              </section>
            );
          })}

          {/* Điểm đến */}
          <div className="relative flex flex-col items-center pl-12 text-center lg:pl-0">
            <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 rounded-full bg-[#fbf5f1] p-4">
              <Image src="/pictures/Plane2.png" alt="" width={200} height={200} className="h-auto w-[180px] drop-shadow-[0_20px_40px_rgba(244,63,94,0.3)]" />
            </motion.div>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.35em] text-rose-500">{t("Điểm đến tiếp theo", "Next destination")}</p>
            <h3 className="mt-2 text-4xl font-black leading-tight tracking-tight">
              {t("Bầu trời", "A wider")} <span className="font-normal italic text-rose-500">{t("rộng lớn hơn", "sky ahead")}</span>
            </h3>
            <p className="mt-3 italic text-[#a88a80]">{t("Hành trình vẫn đang tiếp tục…", "The journey continues…")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Journey = () => {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const open: OpenFn = (images, index) => setLightbox({ images, index });

  const totalMilestones = timelineData.reduce((n, c) => n + c.milestones.length, 0);
  const totalPhotos = timelineData.reduce((n, c) => n + c.images.length, 0);
  const stats = [
    { value: timelineData.length, label: t("Chặng bay", "Legs") },
    { value: totalMilestones, label: t("Cột mốc", "Milestones") },
    { value: totalPhotos, label: t("Khoảnh khắc", "Moments") },
  ];

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

  return (
    <section id="journey" className="relative bg-[#fbf5f1] text-[#3a2420] selection:bg-rose-200">
      {/* ================= CẤT CÁNH ================= */}
      <div className="relative overflow-hidden px-6 pb-16 pt-32">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full bg-rose-200/50 blur-[140px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(rgba(190,80,100,0.18) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse at top, black 15%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at top, black 15%, transparent 70%)",
          }}
        />
        <Cloud className="left-[4%] top-[45%] h-14 w-44 opacity-80" />
        <Cloud className="right-[6%] top-[28%] h-12 w-36 opacity-70" />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-rose-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-500">{t("Hành trình của mình", "My journey")}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="text-5xl font-black leading-[0.95] tracking-tighter md:text-7xl"
            >
              {t("Bay xa,", "Flying far,")} <br />
              <span className="bg-gradient-to-r from-rose-500 via-pink-400 to-[#e8a598] bg-clip-text font-normal italic text-transparent">
                {t("bay cao hơn mỗi năm", "climbing higher every year")}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="mt-8 max-w-xl border-l-2 border-rose-300 pl-5 italic leading-relaxed text-[#6e5249]"
            >
              {t(
                "Từ cô học sinh mê giải toán đến Á khoa Khoa CNTT – mỗi năm là một chặng bay, mỗi chặng lại đưa mình lên một độ cao mới.",
                "From a schoolgirl who loved solving math problems to Runner-up Valedictorian of the Faculty of Information Technology – every year is a new leg of the flight, and every leg takes me to a new altitude.",
              )}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.35 }}
              className="mt-8 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-[1.5rem] border border-rose-100 bg-rose-100"
            >
              {stats.map((s, i) => (
                <div key={i} className="bg-[#fffaf8] px-2 py-4 text-center">
                  <div className="text-3xl font-black text-rose-500">{s.value}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#a88a80]">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Máy bay giấy cất cánh */}
          <motion.div
            initial={{ opacity: 0, x: -80, y: 60, rotate: -10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            transition={{ duration: 1.4, ease }}
            className="relative mx-auto lg:col-span-5"
          >
            <svg viewBox="0 0 400 200" className="absolute -left-10 top-1/2 w-[120%] -translate-y-1/2 overflow-visible">
              <path d="M 0 190 C 120 180, 200 120, 300 60" fill="none" stroke="#fda4af" strokeWidth="2" strokeDasharray="6 8" />
            </svg>
            <motion.div animate={{ y: [0, -16, 0], rotate: [0, 3, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <Image src="/pictures/Plane.png" alt={t("Máy bay giấy", "Paper plane")} width={360} height={360} priority className="relative h-auto w-[280px] drop-shadow-[0_30px_50px_rgba(244,63,94,0.35)] md:w-[360px]" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative z-10 mt-12 flex flex-col items-center gap-1 text-rose-500"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.35em]">{t("Cuộn xuống để cất cánh", "Scroll down to take off")}</span>
          <ChevronsDown size={20} />
        </motion.div>
      </div>

      {/* ================= CHUYẾN BAY ================= */}
      <VerticalFlight onOpen={open} />

      {/* ================= HẠ CÁNH ================= */}
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#4a1f2a] via-[#5c2633] to-[#3a1820] px-8 py-14 text-center shadow-[0_50px_100px_-40px_rgba(74,31,42,0.7)]"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-rose-400/25 blur-[100px]" />
          <Quote size={40} className="mx-auto mb-5 text-rose-300/60" />
          <p className="relative text-2xl font-light italic text-rose-50 md:text-4xl">
            {t("Hành trình vạn dặm bắt đầu từ những", "A journey of a thousand miles begins with")} <span className="text-rose-300">{t("bước chân nhỏ bé.", "a single small step.")}</span>
          </p>
          <p className="relative mt-5 flex items-center justify-center gap-2 text-sm text-rose-100/70">
            <MapPin size={14} /> {t("Khởi hành từ Huế", "Departing from Hue")}
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            { href: "/journey/activities", image: "/pictures/Hỗ_trợ_ICPC.jpg", icon: Images, eyebrow: t("Album", "Album"), title: t("Khoảnh khắc ngoại khóa", "Extracurricular Moments"), desc: t("Văn nghệ, MC & Tình nguyện", "Performing arts, MC & Volunteering") },
            { href: "/journey/certificate", image: "/pictures/Sao tháng giêng-2024.jpg", icon: Trophy, eyebrow: t("Bảng vàng", "Hall of Fame"), title: t("Thành tích & Chứng nhận", "Achievements & Certificates"), desc: t("Danh hiệu, giải thưởng & chứng chỉ", "Titles, awards & certificates") },
          ].map(({ href, image, icon: Icon, eyebrow, title, desc }) => (
            <Link key={href} href={href} className="group relative block h-[320px] overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-30px_rgba(150,50,70,0.5)]">
              <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a1f2a] via-[#4a1f2a]/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white md:p-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur transition-transform duration-500 group-hover:-rotate-6">
                  <Icon size={22} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose-200">{eyebrow}</p>
                <h3 className="mt-1 text-3xl font-black tracking-tight">{title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-rose-100/80">{desc}</p>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-rose-500 transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
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
    </section>
  );
};

export default Journey;
