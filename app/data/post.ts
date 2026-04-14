export interface PostBlock {
  type: "heading" | "paragraph" | "list" | "image" | "quote"| "end";
  text?: string;
  items?: string[];
  url?: string;
  caption?: string;
}

export interface Post {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  image: string;
  contentBlocks: PostBlock[];
}

export const DUMMY_POSTS: Post[] = [
   {
  title: "Cách Teamwork hiệu quả",
  slug: "cach-teamwork-hieu-qua",
  category: "Kỹ năng",
  categorySlug: "ky-nang",
  excerpt: "Teamwork không chỉ là làm việc cùng nhau, mà là cách một tập thể phối hợp để cùng phát triển và đạt mục tiêu chung.",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
  contentBlocks: [
  { type: "heading", text: "1. Teamwork là gì?" },
  { 
    type: "paragraph", 
    text: "Teamwork là quá trình nhiều người cùng phối hợp để đạt được một mục tiêu chung. Mỗi thành viên đảm nhận một vai trò dựa trên năng lực của mình, cùng hỗ trợ và bổ sung cho nhau để tạo ra kết quả tốt nhất." 
  },

  { type: "heading", text: "2. Vì sao teamwork quan trọng?" },
  { 
    type: "paragraph", 
    text: "Trong học tập và công việc, teamwork giúp tối ưu hiệu suất, giảm áp lực cá nhân và tạo ra môi trường làm việc tích cực. Khi nhiều người cùng đóng góp ý tưởng, kết quả đạt được thường toàn diện và sáng tạo hơn." 
  },
  {
    type: "list",
    text: "Những lợi ích nổi bật của teamwork:",
    items: [
      "Nâng cao hiệu suất làm việc",
      "Tạo động lực và tinh thần tập thể",
      "Giảm áp lực cá nhân",
      "Khuyến khích tư duy sáng tạo",
      "Mở rộng cơ hội học hỏi lẫn nhau"
    ]
  },

  { type: "heading", text: "3. Những vấn đề thường gặp khi làm việc nhóm" },
  {
    type: "paragraph",
    text: "Không phải team nào cũng hoạt động hiệu quả. Một số vấn đề phổ biến có thể ảnh hưởng đến kết quả chung nếu không được xử lý kịp thời."
  },
  {
    type: "list",
    text: "Các vấn đề thường gặp:",
    items: [
      "Thiếu trách nhiệm hoặc ỷ lại vào người khác",
      "Phân chia công việc không hợp lý",
      "Thiếu giao tiếp và cập nhật tiến độ",
      "Mâu thuẫn trong ý kiến và cách làm việc"
    ]
  },

  { type: "heading", text: "4. Làm sao để teamwork hiệu quả?" },

  { type: "heading", text: "4.1 Xác định mục tiêu rõ ràng" },
  {
    type: "paragraph",
    text: "Cả nhóm cần thống nhất mục tiêu ngay từ đầu. Một mục tiêu rõ ràng, cụ thể và có thời hạn sẽ giúp mọi người định hướng tốt hơn trong quá trình làm việc."
  },

  { type: "heading", text: "4.2 Phân công công việc hợp lý" },
  {
    type: "paragraph",
    text: "Việc phân công đúng người – đúng việc giúp tận dụng tối đa thế mạnh của từng thành viên và tránh chồng chéo nhiệm vụ."
  },

  { type: "heading", text: "4.3 Nâng cao trách nhiệm cá nhân" },
  {
    type: "paragraph",
    text: "Mỗi thành viên cần chủ động và có trách nhiệm với phần việc của mình. Hoàn thành đúng deadline là yếu tố quan trọng để đảm bảo tiến độ chung."
  },

  { type: "heading", text: "4.4 Giao tiếp và cập nhật thường xuyên" },
  {
    type: "paragraph",
    text: "Việc trao đổi thông tin liên tục giúp cả nhóm nắm bắt tiến độ và hỗ trợ nhau kịp thời khi gặp khó khăn."
  },

  { type: "heading", text: "4.5 Lắng nghe và tôn trọng ý kiến" },
  {
    type: "paragraph",
    text: "Một môi trường làm việc hiệu quả là nơi mọi ý kiến đều được lắng nghe và tôn trọng, kể cả khi có sự khác biệt."
  },

  { type: "heading", text: "4.6 Hiểu rõ điểm mạnh – điểm yếu" },
  {
    type: "paragraph",
    text: "Khi hiểu rõ năng lực của nhau, các thành viên có thể phối hợp tốt hơn và hỗ trợ nhau khi cần thiết."
  },

  { type: "heading", text: "4.7 Phản hồi mang tính xây dựng" },
  {
    type: "paragraph",
    text: "Góp ý nên tập trung vào vấn đề, rõ ràng và mang tính hỗ trợ để giúp nhau cải thiện, thay vì chỉ trích cá nhân."
  },

  { type: "heading", text: "4.8 Ghi nhận và tạo động lực" },
  {
    type: "paragraph",
    text: "Sự ghi nhận đúng lúc giúp nâng cao tinh thần và khuyến khích các thành viên tiếp tục cố gắng."
  },

  { type: "heading", text: "4.9 Sử dụng công cụ hỗ trợ" },
  {
    type: "paragraph",
    text: "Các công cụ quản lý công việc và giao tiếp giúp nhóm làm việc hiệu quả, minh bạch và dễ theo dõi tiến độ hơn."
  },

  { type: "heading", text: "4.10 Xây dựng sự gắn kết" },
  {
    type: "paragraph",
    text: "Những hoạt động ngoài công việc giúp tăng sự thấu hiểu và gắn kết giữa các thành viên trong nhóm."
  },

  { type: "heading", text: "4.11 Vai trò của người dẫn dắt" },
  {
    type: "paragraph",
    text: "Leader có vai trò định hướng, phân công và hỗ trợ team, đảm bảo mọi hoạt động diễn ra hiệu quả và đúng hướng."
  },

  { type: "heading", text: "4.12 Phát triển cá nhân trong tập thể" },
  {
    type: "paragraph",
    text: "Một team tốt không chỉ đạt mục tiêu chung mà còn tạo điều kiện để mỗi cá nhân phát triển và hoàn thiện bản thân."
  },

  {
    type: "end",
    text: "Với mình, teamwork không chỉ đơn thuần là làm việc cùng nhau, mà là hành trình cùng nhau phát triển. Qua đó, mỗi người học được cách giao tiếp, chịu trách nhiệm và thích nghi với những khác biệt.\n\nKhông có team nào hoàn hảo, nhưng một team hiệu quả là khi tất cả cùng nỗ lực vì mục tiêu chung.\n\nHãy nhớ:\n"
  },

  { 
    type: "quote", 
    text: "Không chỉ hoàn thành phần việc của mình, mà còn hỗ trợ đồng đội\nKhông chỉ quan tâm đúng – sai, mà hãy hướng đến kết quả chung\n\nBởi vì thành công của một team không nằm ở một cá nhân xuất sắc, mà nằm ở cách tất cả cùng phối hợp với nhau." 
  }
]
  },
  {
    title: "Hành trình xây dựng mô hình CNN nhận diện biển báo",
    slug: "cnn-nhan-dien-bien-bao",
    category: "AI/Machine Learning",
    categorySlug: "ai-ml",
    excerpt: "Chia sẻ chi tiết quá trình huấn luyện mô hình Deep Learning để nhận diện biển báo giao thông.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    contentBlocks: [
      { type: "heading", text: "🚀 Đặt vấn đề" },
      { type: "paragraph", text: "Trong quá trình học tập, tôi đã thực hiện một đồ án cá nhân nhằm xây dựng mô hình nhận diện biển báo giao thông từ hình ảnh thực tế." },
      { 
        type: "list", 
        text: "Thử thách cần giải quyết:",
        items: ["Ánh sáng thay đổi đột ngột", "Góc chụp bị nghiêng", "Nhiễu từ môi trường xung quanh"]
      },
      { type: "heading", text: "🛠 Phương pháp thực hiện" },
      { type: "paragraph", text: "Tôi sử dụng kiến trúc CNN (Convolutional Neural Network) để trích xuất đặc trưng hình ảnh và phân loại." },
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1518186239751-f7213a1de00c?w=800", 
        caption: "Minh họa cấu trúc các lớp Layer trong mô hình CNN" 
      },
      { type: "heading", text: "📈 Kết luận" },
      { type: "paragraph", text: "Sau khi tối ưu Hyperparameters, mô hình đạt độ chính xác 98% trên tập dữ liệu kiểm tra." }
    ]
  },
  {
    title: "Ứng dụng PhoBERT trong phân loại phản hồi",
    slug: "phobert-phan-loai-phan-hoi",
    category: "AI/Machine Learning",
    categorySlug: "ai-ml",
    excerpt: "Sử dụng sức mạnh của NLP tiếng Việt để hiểu tâm tư nguyện vọng của sinh viên.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    contentBlocks: [
      { type: "heading", text: "Giới thiệu về PhoBERT" },
      { type: "paragraph", text: "PhoBERT là mô hình ngôn ngữ dựa trên kiến trúc RoBERTa, được huấn luyện dành riêng cho tiếng Việt." },
      { type: "heading", text: "Quy trình xử lý dữ liệu" },
      { 
        type: "list", 
        text: "Các bước tiền xử lý:",
        items: ["Tách từ (Word Segmentation)", "Loại bỏ Stopwords", "Chuẩn hóa bảng mã Unicode"]
      },
      { type: "quote", text: "Xử lý ngôn ngữ tự nhiên tiếng Việt luôn là một thử thách thú vị vì sự phong phú của ngữ pháp." }
    ]
  },
  {
    title: "Trải nghiệm kiểm thử ứng dụng giao hàng PANGO",
    slug: "test-app-pango",
    category: "Testing",
    categorySlug: "testing",
    excerpt: "Góc nhìn thực tế về quy trình kiểm thử một ứng dụng Logistic phức tạp.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    contentBlocks: [
      { type: "heading", text: "📍 Vai trò của Tester trong dự án" },
      { type: "paragraph", text: "Tham gia dự án PANGO, tôi đảm nhận việc kiểm thử luồng đi của một đơn hàng từ khi khách đặt đến khi shipper giao thành công." },
      { 
        type: "list", 
        text: "Các lỗi thường gặp:",
        items: ["Lỗi định vị GPS", "Lỗi tính toán phí ship trong giờ cao điểm", "Lỗi hiển thị trạng thái đơn hàng realtime"]
      },
      { type: "heading", text: "💡 Bài học rút ra" },
      { type: "paragraph", text: "Kiểm thử không chỉ là tìm lỗi, mà là đảm bảo trải nghiệm người dùng mượt mà nhất có thể." }
    ]
  }
];