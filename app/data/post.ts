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
  title: "AI có thay thế lập trình viên không?",
  slug: "ai-co-thay-the-lap-trinh-vien-khong",
  category: "Định hướng",
  categorySlug: "dinh-huong",
  excerpt: "AI đang phát triển mạnh mẽ, nhưng liệu nó có thể thay thế hoàn toàn lập trình viên hay không? Góc nhìn thực tế và định hướng cho tương lai.",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  contentBlocks: [
    {
      type: "heading",
      text: "🤖 Sự phát triển mạnh mẽ của AI"
    },
    {
      type: "paragraph",
      text: "Trong những năm gần đây, trí tuệ nhân tạo (AI) đã phát triển với tốc độ đáng kinh ngạc. Từ việc hỗ trợ viết code, phát hiện lỗi cho đến xây dựng hệ thống phần mềm, AI đang dần trở thành một phần không thể thiếu trong ngành công nghệ."
    },
    {
      type: "paragraph",
      text: "Điều này khiến nhiều người, đặc biệt là các lập trình viên, đặt ra câu hỏi: liệu AI có thể thay thế con người trong tương lai hay không?"
    },

    {
      type: "heading",
      text: "⚠️ Nỗi lo là hoàn toàn có cơ sở"
    },
    {
      type: "paragraph",
      text: "Hiện nay, các công cụ AI có thể tự động sinh code, gợi ý giải pháp và hỗ trợ debug rất hiệu quả. Điều này giúp giảm đáng kể thời gian làm việc và tăng năng suất cho lập trình viên."
    },
    {
      type: "list",
      text: "Những gì AI có thể làm tốt:",
      items: [
        "Sinh code nhanh chóng",
        "Gợi ý thuật toán và giải pháp",
        "Phát hiện lỗi cơ bản",
        "Tự động hóa các tác vụ lặp lại"
      ]
    },

    {
      type: "heading",
      text: "🧠 Nhưng AI không thể thay thế hoàn toàn con người"
    },
    {
      type: "paragraph",
      text: "Dù mạnh mẽ, AI vẫn chỉ hoạt động dựa trên dữ liệu và mô hình đã được huấn luyện. Nó có thể đưa ra câu trả lời nhanh, nhưng không phải lúc nào cũng chính xác hoặc phù hợp với ngữ cảnh cụ thể."
    },
    {
      type: "paragraph",
      text: "Lập trình không chỉ là viết code. Đó còn là quá trình phân tích bài toán, hiểu nhu cầu người dùng, thiết kế hệ thống và đưa ra các quyết định mang tính chiến lược — những điều đòi hỏi tư duy và kinh nghiệm của con người."
    },
    {
      type: "list",
      text: "Những điều AI còn hạn chế:",
      items: [
        "Hiểu sâu ngữ cảnh và yêu cầu thực tế",
        "Tư duy sáng tạo và thiết kế hệ thống",
        "Đưa ra quyết định chiến lược",
        "Chịu trách nhiệm cho sản phẩm"
      ]
    },

    {
      type: "heading",
      text: "⚙️ AI là công cụ, không phải đối thủ"
    },
    {
      type: "paragraph",
      text: "Thay vì xem AI là mối đe dọa, chúng ta nên coi nó là một công cụ hỗ trợ mạnh mẽ. AI giúp lập trình viên làm việc nhanh hơn, giảm bớt những công việc lặp lại và tập trung vào các vấn đề quan trọng hơn."
    },
    {
      type: "paragraph",
      text: "Nhờ AI, lập trình viên có thể dành nhiều thời gian hơn cho việc sáng tạo, tối ưu hệ thống và nâng cao chất lượng sản phẩm."
    },

    {
      type: "heading",
      text: "📚 Điều quan trọng là thích nghi"
    },
    {
      type: "paragraph",
      text: "Trong thời đại công nghệ thay đổi liên tục, điều quan trọng nhất không phải là lo lắng mà là thích nghi. Những lập trình viên biết tận dụng AI sẽ có lợi thế rất lớn trong công việc."
    },
    {
      type: "list",
      text: "Bạn nên chuẩn bị:",
      items: [
        "Nền tảng lập trình vững chắc",
        "Hiểu cách AI hoạt động",
        "Biết sử dụng AI như một công cụ hỗ trợ",
        "Luôn cập nhật công nghệ mới"
      ]
    },

    {
      type: "heading",
      text: "🚀 Kết luận"
    },
    {
      type: "paragraph",
      text: "AI sẽ không thay thế lập trình viên, nhưng lập trình viên biết sử dụng AI sẽ thay thế những người không biết tận dụng nó."
    },

    {
      type: "end",
      text: "Công nghệ luôn thay đổi, nhưng giá trị của con người nằm ở khả năng học hỏi và thích nghi. Thay vì sợ hãi, hãy học cách làm việc cùng AI để phát triển xa hơn trong sự nghiệp.\n\nBạn nghĩ sao về vấn đề này?"
    },

    {
      type: "quote",
      text: "AI không thay thế bạn.\nNgười biết dùng AI sẽ thay thế bạn."
    }
  ]
},
{
  title: "Vì sao accuracy cao nhưng thực tế vẫn fail?",
  slug: "vi-sao-accuracy-cao-nhung-thuc-te-van-fail",
  category: "AI/Machine Learning",
  categorySlug: "ai-ml",
  excerpt: "Accuracy cao không đồng nghĩa với mô hình tốt. Góc nhìn thực tế về việc lựa chọn đúng metric trong Machine Learning.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  contentBlocks: [
    {
      type: "heading",
      text: "🎯 Bài toán quen thuộc nhưng dễ hiểu sai"
    },
    {
      type: "paragraph",
      text: "Khi xây dựng một mô hình học máy, việc đánh giá hiệu năng là bước không thể thiếu. Trong đó, accuracy thường là độ đo được chú ý nhiều nhất vì tính trực quan và dễ hiểu."
    },
    {
      type: "paragraph",
      text: "Tuy nhiên, không ít trường hợp mô hình đạt accuracy rất cao nhưng khi triển khai thực tế lại hoạt động kém hiệu quả, thậm chí thất bại hoàn toàn."
    },

    {
      type: "heading",
      text: "⚠️ Accuracy cao chưa phản ánh đúng chất lượng"
    },
    {
      type: "paragraph",
      text: "Accuracy chỉ đơn giản là tỷ lệ dự đoán đúng trên toàn bộ dữ liệu. Điều này khiến nó trở nên thiếu tin cậy trong các bài toán có dữ liệu mất cân bằng."
    },
    {
      type: "list",
      text: "Những hạn chế của accuracy:",
      items: [
        "Không phản ánh được từng lớp dữ liệu",
        "Dễ gây hiểu lầm trong bài toán imbalanced",
        "Không thể hiện mức độ nghiêm trọng của sai lầm"
      ]
    },

    {
      type: "heading",
      text: "🧠 Chọn sai metric – nguyên nhân chính"
    },
    {
      type: "paragraph",
      text: "Mỗi bài toán đều có mục tiêu khác nhau, vì vậy việc lựa chọn độ đo phù hợp quan trọng hơn việc tối đa hóa một chỉ số duy nhất."
    },
    {
      type: "list",
      text: "Các độ đo cần quan tâm:",
      items: [
        "Precision – độ chính xác của dự đoán dương tính",
        "Recall – khả năng phát hiện đầy đủ các mẫu dương tính",
        "Specificity – khả năng nhận diện đúng mẫu âm tính",
        "F1-score – sự cân bằng giữa precision và recall"
      ]
    },

    {
      type: "heading",
      text: "🏥 Ví dụ thực tế: bài toán chẩn đoán"
    },
    {
      type: "paragraph",
      text: "Trong bài toán chẩn đoán viêm phổi, mục tiêu quan trọng không chỉ là dự đoán đúng tổng thể mà còn là không bỏ sót bệnh nhân."
    },
    {
      type: "paragraph",
      text: "Một mô hình có thể đạt accuracy cao, nhưng nếu recall thấp thì đồng nghĩa với việc nhiều ca bệnh không được phát hiện. Điều này khiến mô hình trở nên không đáng tin cậy trong thực tế."
    },
    {
      type: "paragraph",
      text: "Tương tự, nếu specificity thấp, mô hình có thể đưa ra nhiều cảnh báo sai, gây ảnh hưởng đến hệ thống và người sử dụng."
    },

    {
      type: "heading",
      text: "📌 Bài học rút ra"
    },
    {
      type: "list",
      text: "Để xây dựng mô hình hiệu quả:",
      items: [
        "Không chỉ tập trung vào accuracy",
        "Hiểu rõ mục tiêu bài toán",
        "Lựa chọn metric phù hợp với ngữ cảnh",
        "Đánh giá mô hình trên nhiều độ đo khác nhau"
      ]
    },

    {
      type: "heading",
      text: "🚀 Kết luận"
    },
    {
      type: "paragraph",
      text: "Một mô hình tốt không phải là mô hình có accuracy cao nhất, mà là mô hình phù hợp nhất với mục tiêu thực tế."
    },

    {
      type: "end",
      text: "Trong Machine Learning, điều quan trọng không nằm ở việc tối ưu một con số, mà là hiểu đúng bài toán và đưa ra cách đánh giá phù hợp.\n\nĐừng để accuracy đánh lừa bạn."
    },

    {
      type: "quote",
      text: "Accuracy cao không đảm bảo mô hình tốt.\nMetric phù hợp mới là thứ quyết định giá trị thực sự."
    }
  ]
},
{
  title: "Sinh viên IT nên tập trung vào gì năm 3?",
  slug: "sinh-vien-it-nen-tap-trung-vao-gi-nam-3",
  category: "Định hướng",
  categorySlug: "dinh-huong",
  excerpt: "Năm 3 là giai đoạn quan trọng để sinh viên IT bứt phá. Vậy nên tập trung vào điều gì để sẵn sàng cho công việc sau khi ra trường?",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
  contentBlocks: [
    {
      type: "heading",
      text: "🎯 Năm 3 – giai đoạn bản lề của sinh viên IT"
    },
    {
      type: "paragraph",
      text: "Đối với mỗi sinh viên, việc học trên giảng đường luôn rất quan trọng. Tuy nhiên, năm 3 lại là thời điểm mang tính bước ngoặt – khi bạn không chỉ học kiến thức mà còn cần chuẩn bị cho con đường nghề nghiệp phía trước."
    },
    {
      type: "paragraph",
      text: "Đây là lúc bạn cần chuyển từ trạng thái 'học để biết' sang 'học để làm được'."
    },

    {
      type: "heading",
      text: "💻 Tập trung vào dự án thực tế"
    },
    {
      type: "paragraph",
      text: "Sau năm 2, phần lớn sinh viên đã có nền tảng kiến thức cơ bản. Năm 3 là lúc bạn nên bắt tay vào các dự án thực tế để áp dụng những gì đã học."
    },
    {
      type: "list",
      text: "Bạn có thể bắt đầu với:",
      items: [
        "Dự án cá nhân (portfolio)",
        "Dự án nhóm cùng bạn bè",
        "Tham gia nghiên cứu khoa học",
        "Xây dựng sản phẩm nhỏ nhưng hoàn chỉnh"
      ]
    },
    {
      type: "paragraph",
      text: "Những dự án này không chỉ giúp bạn hiểu sâu kiến thức mà còn là minh chứng rõ ràng nhất cho năng lực khi đi xin việc."
    },

    {
      type: "heading",
      text: "📊 Nhà tuyển dụng nhìn vào điều gì?"
    },
    {
      type: "paragraph",
      text: "Trên thực tế, nhà tuyển dụng không chỉ quan tâm bạn học gì, mà quan trọng hơn là bạn đã làm được gì."
    },
    {
      type: "paragraph",
      text: "Một CV có dự án rõ ràng, có sản phẩm cụ thể luôn tạo ấn tượng mạnh hơn so với việc chỉ liệt kê môn học hay điểm số."
    },

    {
      type: "heading",
      text: "🗣️ Phát triển kỹ năng mềm"
    },
    {
      type: "paragraph",
      text: "Bên cạnh kỹ năng chuyên môn, kỹ năng mềm là yếu tố không thể thiếu để bạn thích nghi với môi trường làm việc thực tế."
    },
    {
      type: "list",
      text: "Những kỹ năng cần chú ý:",
      items: [
        "Kỹ năng thuyết trình",
        "Kỹ năng giao tiếp",
        "Kỹ năng làm việc nhóm",
        "Quản lý thời gian"
      ]
    },
    {
      type: "paragraph",
      text: "Một lập trình viên giỏi không chỉ viết code tốt mà còn phải biết trình bày ý tưởng và phối hợp hiệu quả với team."
    },

    {
      type: "heading",
      text: "🏢 Trải nghiệm thực tập sớm"
    },
    {
      type: "paragraph",
      text: "Nếu có cơ hội, hãy thử đi thực tập từ năm 3. Đây là cách nhanh nhất để bạn tiếp cận môi trường làm việc thực tế và học hỏi từ những người có kinh nghiệm."
    },
    {
      type: "paragraph",
      text: "Thực tập không chỉ giúp bạn nâng cao kỹ năng mà còn giúp bạn hiểu rõ mình phù hợp với lĩnh vực nào trong IT."
    },

    {
      type: "heading",
      text: "🚀 Kết luận"
    },
    {
      type: "paragraph",
      text: "Năm 3 không phải là lúc để học dàn trải, mà là thời điểm để tập trung, định hướng và bứt phá."
    },

    {
      type: "end",
      text: "Hãy đầu tư vào dự án, kỹ năng và trải nghiệm thực tế. Những gì bạn làm trong năm 3 sẽ ảnh hưởng rất lớn đến cơ hội nghề nghiệp sau khi ra trường.\n\nĐừng chờ đến năm 4 mới bắt đầu."
    },

    {
      type: "quote",
      text: "Năm 3 không phải để chuẩn bị.\nNăm 3 là để bắt đầu."
    }
  ]
},
{
  title: "Những sai lầm khi học Machine Learning",
  slug: "nhung-sai-lam-khi-hoc-machine-learning",
  category: "AI/Machine Learning",
  categorySlug: "ai-ml",
  excerpt: "Học Machine Learning không khó, nhưng học sai cách sẽ khiến bạn mãi không hiểu bản chất. Đây là những sai lầm phổ biến và cách khắc phục.",
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
  contentBlocks: [
    {
      type: "heading",
      text: "🎯 Machine Learning quan trọng – nhưng học đúng cách còn quan trọng hơn"
    },
    {
      type: "paragraph",
      text: "Machine Learning là một trong những lĩnh vực cốt lõi của ngành Khoa học máy tính. Tuy nhiên, việc học như thế nào, tiếp thu ra sao mới là yếu tố quyết định bạn có thực sự hiểu và áp dụng được hay không."
    },
    {
      type: "paragraph",
      text: "Rất nhiều sinh viên dành nhiều thời gian học nhưng vẫn cảm thấy mơ hồ. Nguyên nhân thường đến từ những sai lầm phổ biến trong quá trình học."
    },

    {
      type: "heading",
      text: "❌ Những sai lầm thường gặp"
    },

    {
      type: "heading",
      text: "1. Học vẹt, học máy móc"
    },
    {
      type: "paragraph",
      text: "Bạn có thể thuộc rất nhiều lý thuyết, công thức hay thuật toán, nhưng lại không biết áp dụng vào bài toán thực tế. Đây là một trong những sai lầm nghiêm trọng nhất."
    },
    {
      type: "paragraph",
      text: "Machine Learning không phải là môn học để ghi nhớ, mà là môn học để hiểu và vận dụng."
    },

    {
      type: "heading",
      text: "2. Chỉ học trên lớp"
    },
    {
      type: "paragraph",
      text: "Nội dung trên giảng đường thường chỉ là phần nền tảng. Nếu bạn không tự học thêm, bạn sẽ chỉ hiểu được 'phần nổi' mà không nắm được bản chất sâu bên trong."
    },
    {
      type: "paragraph",
      text: "Điều này khiến bạn gặp khó khăn khi áp dụng vào các bài toán thực tế hoặc dự án."
    },

    {
      type: "heading",
      text: "3. Chỉ học khi đến kỳ thi"
    },
    {
      type: "paragraph",
      text: "Học để thi khác hoàn toàn với học để hiểu. Nếu bạn chỉ bắt đầu học khi gần thi, bạn sẽ chỉ học để trả bài thay vì hiểu bản chất của vấn đề."
    },
    {
      type: "paragraph",
      text: "Machine Learning yêu cầu quá trình tích lũy và thực hành liên tục, không thể học dồn trong thời gian ngắn."
    },

    {
      type: "heading",
      text: "4. Thiếu nền tảng cơ bản"
    },
    {
      type: "paragraph",
      text: "Nhiều bạn bắt đầu học Machine Learning khi chưa vững các kiến thức nền tảng như lập trình Python, xác suất thống kê hay đại số tuyến tính."
    },
    {
      type: "paragraph",
      text: "Điều này khiến việc học trở nên khó khăn và dễ nản vì không hiểu được bản chất phía sau các thuật toán."
    },

    {
      type: "heading",
      text: "5. Học mà không thực hành"
    },
    {
      type: "paragraph",
      text: "Chỉ đọc tài liệu hoặc xem video mà không thực hành sẽ khiến kiến thức nhanh chóng bị quên và không thể áp dụng."
    },
    {
      type: "paragraph",
      text: "Machine Learning là lĩnh vực 'learning by doing' – bạn phải tự tay làm thì mới hiểu."
    },

    {
      type: "heading",
      text: "✅ Làm sao để tránh những sai lầm này?"
    },
    {
      type: "list",
      text: "Một số gợi ý giúp bạn học hiệu quả hơn:",
      items: [
        "Xây dựng lộ trình học rõ ràng",
        "Nắm vững kiến thức nền tảng (Python, Toán)",
        "Kết hợp học lý thuyết và thực hành",
        "Làm project cá nhân hoặc tham gia nghiên cứu",
        "Học đều đặn, tránh học dồn trước kỳ thi"
      ]
    },

    {
      type: "heading",
      text: "🚀 Kết luận"
    },
    {
      type: "paragraph",
      text: "Sai lầm trong học tập là điều không thể tránh khỏi, nhưng điều quan trọng là bạn nhận ra và điều chỉnh kịp thời."
    },

    {
      type: "end",
      text: "Machine Learning không khó nếu bạn đi đúng hướng. Hãy tập trung vào việc hiểu bản chất, thực hành liên tục và xây dựng nền tảng vững chắc.\n\nChậm mà chắc vẫn tốt hơn nhanh mà sai."
    },

    {
      type: "quote",
      text: "Đừng học Machine Learning để thuộc.\nHãy học để hiểu và làm được."
    }
  ]
},
{
  title: "Làm sao để cân bằng giữa thời gian học và thời gian hoạt động?",
  slug: "lam-sao-de-can-bang-thoi-gian-hoc-va-hoat-dong",
  category: "Kỹ năng",
  categorySlug: "ky-nang",
  excerpt: "Cân bằng giữa học tập và hoạt động ngoại khóa là bài toán khó với sinh viên. Đây là những kinh nghiệm giúp bạn quản lý thời gian hiệu quả.",
  image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
  contentBlocks: [
    {
      type: "heading",
      text: "🎯 Bài toán quen thuộc của sinh viên"
    },
    {
      type: "paragraph",
      text: "Là một sinh viên, bạn không chỉ học trên giảng đường mà còn tham gia các hoạt động ngoại khóa, câu lạc bộ hay đoàn – hội. Điều này giúp bạn phát triển toàn diện, nhưng cũng đặt ra một câu hỏi lớn: làm sao để cân bằng giữa học tập và hoạt động?"
    },
    {
      type: "paragraph",
      text: "Không ít sinh viên cho rằng 'càng bận rộn càng giỏi', nhưng thực tế việc dồn sức vào một phía có thể khiến bạn mất cân bằng và giảm hiệu quả tổng thể."
    },

    {
      type: "heading",
      text: "⚖️ Vì sao cần cân bằng?"
    },
    {
      type: "list",
      text: "Việc cân bằng giúp bạn:",
      items: [
        "Nâng cao hiệu quả học tập",
        "Tránh stress kéo dài",
        "Tích lũy kinh nghiệm thực tế",
        "Duy trì sức khỏe thể chất và tinh thần",
        "Phát triển kỹ năng mềm và mối quan hệ xã hội"
      ]
    },

    {
      type: "heading",
      text: "🧠 Chiến lược quản lý thời gian hiệu quả"
    },

    {
      type: "heading",
      text: "1. Lập kế hoạch rõ ràng"
    },
    {
      type: "paragraph",
      text: "Hãy bắt đầu bằng việc lập kế hoạch học tập theo tuần, tháng hoặc học kỳ. Việc này giúp bạn kiểm soát thời gian và tránh bị động."
    },

    {
      type: "heading",
      text: "2. Áp dụng ma trận Eisenhower"
    },
    {
      type: "paragraph",
      text: "Phân loại công việc theo mức độ quan trọng và khẩn cấp giúp bạn ưu tiên đúng việc cần làm."
    },
    {
      type: "list",
      text: "4 nhóm công việc:",
      items: [
        "Quan trọng & khẩn cấp",
        "Quan trọng & không khẩn cấp",
        "Không quan trọng & khẩn cấp",
        "Không quan trọng & không khẩn cấp"
      ]
    },

    {
      type: "heading",
      text: "3. Sử dụng phương pháp Pomodoro"
    },
    {
      type: "paragraph",
      text: "Tập trung làm việc trong 25 phút và nghỉ 5 phút giúp duy trì sự tập trung và tránh kiệt sức."
    },

    {
      type: "heading",
      text: "4. Học cách từ chối"
    },
    {
      type: "paragraph",
      text: "Không phải hoạt động nào cũng cần tham gia. Hãy dũng cảm nói 'không' với những việc không thực sự cần thiết."
    },

    {
      type: "heading",
      text: "5. Ngừng trì hoãn và hạn chế xao nhãng"
    },
    {
      type: "paragraph",
      text: "Hãy bắt đầu từ những việc khó nhất và hạn chế sử dụng điện thoại, mạng xã hội khi đang học."
    },

    {
      type: "heading",
      text: "6. Nghỉ ngơi hợp lý"
    },
    {
      type: "paragraph",
      text: "Nghỉ ngơi không phải là lãng phí thời gian mà là cách giúp bạn duy trì hiệu suất lâu dài."
    },

    {
      type: "heading",
      text: "🎯 Đặt mục tiêu và ưu tiên"
    },
    {
      type: "paragraph",
      text: "Hãy xác định mục tiêu dài hạn như GPA mong muốn hoặc cơ hội thực tập, sau đó chia nhỏ thành mục tiêu ngắn hạn để dễ thực hiện."
    },

    {
      type: "heading",
      text: "💪 Chăm sóc sức khỏe toàn diện"
    },
    {
      type: "list",
      text: "Sức khỏe thể chất:",
      items: [
        "Ngủ đủ 7–9 giờ mỗi ngày",
        "Ăn uống lành mạnh",
        "Tập thể dục đều đặn"
      ]
    },
    {
      type: "list",
      text: "Sức khỏe tinh thần:",
      items: [
        "Thiền hoặc thư giãn",
        "Duy trì sở thích cá nhân",
        "Chia sẻ với bạn bè, gia đình"
      ]
    },

    {
      type: "heading",
      text: "🤝 Xây dựng mối quan hệ lành mạnh"
    },
    {
      type: "list",
      text: "Một số gợi ý:",
      items: [
        "Ưu tiên chất lượng hơn số lượng",
        "Tham gia CLB hoặc hoạt động tình nguyện",
        "Tránh xa mối quan hệ tiêu cực",
        "Dành thời gian cho gia đình"
      ]
    },

    {
      type: "heading",
      text: "📱 Công cụ hỗ trợ quản lý thời gian"
    },
    {
      type: "list",
      text: "Một số công cụ hữu ích:",
      items: [
        "Google Calendar, Notion – lập kế hoạch",
        "Forest – tăng tập trung",
        "Todoist, Trello – quản lý công việc",
        "Focus Booster – Pomodoro"
      ]
    },

    {
      type: "heading",
      text: "🚀 Kết luận"
    },
    {
      type: "paragraph",
      text: "Cân bằng không có nghĩa là chia đều thời gian, mà là phân bổ hợp lý theo mục tiêu của bạn trong từng giai đoạn."
    },

    {
      type: "end",
      text: "Hãy quản lý thời gian một cách thông minh để vừa học tốt, vừa phát triển bản thân toàn diện.\n\nBạn không cần làm tất cả mọi thứ, chỉ cần làm đúng những gì quan trọng."
    },

    {
      type: "quote",
      text: "Bận rộn không phải là hiệu quả.\nBiết ưu tiên mới là chìa khóa của thành công."
    }
  ]
}
];