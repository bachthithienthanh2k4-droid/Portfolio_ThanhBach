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
  // Bản tiếng Anh (giữ nguyên thứ tự & loại block để mục lục hoạt động ở cả 2 ngôn ngữ)
  en?: {
    title: string;
    category: string;
    excerpt: string;
    contentBlocks: PostBlock[];
  };
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
],
  en: {
    title: "How to Make Teamwork Truly Effective",
    category: "Skills",
    excerpt: "Teamwork isn't just about working side by side — it's about how a group coordinates to grow together and reach a shared goal.",
    contentBlocks: [
      { type: "heading", text: "1. What is teamwork?" },
      {
        type: "paragraph",
        text: "Teamwork is the process of several people coordinating to achieve a common goal. Each member takes on a role that fits their strengths, supporting and complementing one another to deliver the best possible result."
      },

      { type: "heading", text: "2. Why does teamwork matter?" },
      {
        type: "paragraph",
        text: "In both study and work, teamwork improves efficiency, eases individual pressure and fosters a positive working environment. When many people contribute ideas, the outcome is usually more well-rounded and creative."
      },
      {
        type: "list",
        text: "Key benefits of teamwork:",
        items: [
          "Higher productivity",
          "Stronger motivation and team spirit",
          "Less pressure on any one person",
          "More room for creative thinking",
          "More opportunities to learn from each other"
        ]
      },

      { type: "heading", text: "3. Common challenges in group work" },
      {
        type: "paragraph",
        text: "Not every team runs smoothly. Some common issues can hurt the overall result if they aren't addressed in time."
      },
      {
        type: "list",
        text: "Common challenges:",
        items: [
          "Lack of accountability or over-reliance on others",
          "Unbalanced distribution of work",
          "Poor communication and infrequent progress updates",
          "Disagreements over ideas and ways of working"
        ]
      },

      { type: "heading", text: "4. How to make teamwork effective" },

      { type: "heading", text: "4.1 Set clear goals" },
      {
        type: "paragraph",
        text: "The whole team should agree on its goals from the very start. A clear, specific and time-bound goal keeps everyone heading in the same direction throughout the work."
      },

      { type: "heading", text: "4.2 Divide the work sensibly" },
      {
        type: "paragraph",
        text: "Matching the right person to the right task makes the most of each member's strengths and avoids overlapping responsibilities."
      },

      { type: "heading", text: "4.3 Strengthen personal accountability" },
      {
        type: "paragraph",
        text: "Every member should take initiative and own their part of the work. Meeting deadlines is key to keeping the whole team on schedule."
      },

      { type: "heading", text: "4.4 Communicate and share updates regularly" },
      {
        type: "paragraph",
        text: "Ongoing communication keeps everyone aware of progress and makes it possible to help each other promptly when problems arise."
      },

      { type: "heading", text: "4.5 Listen to and respect every opinion" },
      {
        type: "paragraph",
        text: "An effective team is one where every voice is heard and respected, even when opinions differ."
      },

      { type: "heading", text: "4.6 Know each other's strengths and weaknesses" },
      {
        type: "paragraph",
        text: "When members understand one another's abilities, they can collaborate better and step in to help when needed."
      },

      { type: "heading", text: "4.7 Give constructive feedback" },
      {
        type: "paragraph",
        text: "Feedback should focus on the issue, be clear and supportive, and help each other improve rather than criticize the person."
      },

      { type: "heading", text: "4.8 Recognize and motivate" },
      {
        type: "paragraph",
        text: "Timely recognition lifts morale and encourages members to keep giving their best."
      },

      { type: "heading", text: "4.9 Use supporting tools" },
      {
        type: "paragraph",
        text: "Task management and communication tools help the team work more efficiently and transparently, and make progress easier to track."
      },

      { type: "heading", text: "4.10 Build team bonds" },
      {
        type: "paragraph",
        text: "Activities outside of work help members understand each other better and bring the team closer together."
      },

      { type: "heading", text: "4.11 The role of the leader" },
      {
        type: "paragraph",
        text: "A leader sets the direction, assigns tasks and supports the team, making sure everything runs effectively and stays on track."
      },

      { type: "heading", text: "4.12 Growing as an individual within the team" },
      {
        type: "paragraph",
        text: "A good team doesn't just reach its shared goal — it also creates room for each member to grow and become a better version of themselves."
      },

      {
        type: "end",
        text: "To me, teamwork isn't simply working together — it's a journey of growing together. Along the way, each of us learns how to communicate, take responsibility and adapt to our differences.\n\nNo team is perfect, but a team becomes effective when everyone works hard toward the same goal.\n\nRemember:\n"
      },

      {
        type: "quote",
        text: "Don't just finish your own part — support your teammates too.\nDon't just focus on who's right or wrong — aim for the shared result.\n\nBecause a team's success doesn't rest on one outstanding individual, but on how everyone works together."
      }
    ]
  }
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
      text: "Sự phát triển mạnh mẽ của AI"
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
      text: "Nỗi lo là hoàn toàn có cơ sở"
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
      text: "Nhưng AI không thể thay thế hoàn toàn con người"
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
      text: "AI là công cụ, không phải đối thủ"
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
      text: "Điều quan trọng là thích nghi"
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
      text: "Kết luận"
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
  ],
  en: {
    title: "Will AI Replace Programmers?",
    category: "Career",
    excerpt: "AI is advancing rapidly — but can it fully replace programmers? A realistic perspective and some direction for the future.",
    contentBlocks: [
      {
        type: "heading",
        text: "The rapid rise of AI"
      },
      {
        type: "paragraph",
        text: "In recent years, artificial intelligence (AI) has advanced at a remarkable pace. From helping write code and catching bugs to building entire software systems, AI is fast becoming an indispensable part of the tech industry."
      },
      {
        type: "paragraph",
        text: "This has led many people — especially programmers — to ask: could AI replace humans in the future?"
      },

      {
        type: "heading",
        text: "The concern is entirely valid"
      },
      {
        type: "paragraph",
        text: "Today's AI tools can generate code, suggest solutions and help with debugging remarkably well. This significantly cuts working time and boosts programmers' productivity."
      },
      {
        type: "list",
        text: "What AI does well:",
        items: [
          "Generating code quickly",
          "Suggesting algorithms and solutions",
          "Catching basic bugs",
          "Automating repetitive tasks"
        ]
      },

      {
        type: "heading",
        text: "But AI cannot fully replace humans"
      },
      {
        type: "paragraph",
        text: "Powerful as it is, AI still relies entirely on the data and models it was trained on. It can produce answers quickly, but they aren't always accurate or suited to a specific context."
      },
      {
        type: "paragraph",
        text: "Programming is more than writing code. It's also about analyzing problems, understanding user needs, designing systems and making strategic decisions — things that require human thinking and experience."
      },
      {
        type: "list",
        text: "Where AI still falls short:",
        items: [
          "Deeply understanding context and real-world requirements",
          "Creative thinking and system design",
          "Making strategic decisions",
          "Taking responsibility for the product"
        ]
      },

      {
        type: "heading",
        text: "AI is a tool, not a rival"
      },
      {
        type: "paragraph",
        text: "Rather than seeing AI as a threat, we should treat it as a powerful tool. AI helps programmers work faster, takes over repetitive work and frees them to focus on the problems that matter most."
      },
      {
        type: "paragraph",
        text: "With AI, programmers can spend more time on creativity, optimizing systems and raising product quality."
      },

      {
        type: "heading",
        text: "What matters is adapting"
      },
      {
        type: "paragraph",
        text: "In an era of constant technological change, the most important thing isn't to worry but to adapt. Programmers who know how to leverage AI will have a huge advantage in their work."
      },
      {
        type: "list",
        text: "What you should prepare:",
        items: [
          "A solid programming foundation",
          "An understanding of how AI works",
          "The ability to use AI as a supporting tool",
          "A habit of keeping up with new technology"
        ]
      },

      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "AI won't replace programmers — but programmers who know how to use AI will replace those who don't."
      },

      {
        type: "end",
        text: "Technology keeps changing, but human value lies in our ability to learn and adapt. Instead of being afraid, learn to work alongside AI and take your career further.\n\nWhat do you think about this?"
      },

      {
        type: "quote",
        text: "AI won't replace you.\nSomeone who knows how to use AI will."
      }
    ]
  }
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
      text: "Bài toán quen thuộc nhưng dễ hiểu sai"
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
      text: "Accuracy cao chưa phản ánh đúng chất lượng"
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
      text: "Chọn sai metric – nguyên nhân chính"
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
      text: "Ví dụ thực tế: bài toán chẩn đoán"
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
      text: "Bài học rút ra"
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
      text: "Kết luận"
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
  ],
  en: {
    title: "Why Do High-Accuracy Models Still Fail in Practice?",
    category: "AI/Machine Learning",
    excerpt: "High accuracy doesn't necessarily mean a good model. A practical look at choosing the right metrics in Machine Learning.",
    contentBlocks: [
      {
        type: "heading",
        text: "A familiar problem that's easy to misread"
      },
      {
        type: "paragraph",
        text: "When building a machine learning model, evaluating its performance is an essential step. Accuracy usually gets the most attention because it is intuitive and easy to understand."
      },
      {
        type: "paragraph",
        text: "Yet there are plenty of cases where a model achieves very high accuracy but performs poorly once deployed — or even fails completely."
      },

      {
        type: "heading",
        text: "High accuracy doesn't reflect true quality"
      },
      {
        type: "paragraph",
        text: "Accuracy is simply the proportion of correct predictions across the entire dataset. That makes it unreliable for problems with imbalanced data."
      },
      {
        type: "list",
        text: "Limitations of accuracy:",
        items: [
          "Doesn't reflect performance on each individual class",
          "Easily misleading on imbalanced problems",
          "Doesn't capture how serious each error is"
        ]
      },

      {
        type: "heading",
        text: "Choosing the wrong metric – the root cause"
      },
      {
        type: "paragraph",
        text: "Every problem has its own objective, so choosing the right metric matters more than maximizing a single number."
      },
      {
        type: "list",
        text: "Metrics worth paying attention to:",
        items: [
          "Precision – how accurate the positive predictions are",
          "Recall – how completely the model detects positive cases",
          "Specificity – how well the model correctly identifies negative cases",
          "F1-score – the balance between precision and recall"
        ]
      },

      {
        type: "heading",
        text: "A real-world example: medical diagnosis"
      },
      {
        type: "paragraph",
        text: "In pneumonia diagnosis, the key goal isn't just to be right overall, but also to avoid missing any patients who are actually sick."
      },
      {
        type: "paragraph",
        text: "A model can score high accuracy, but if its recall is low, many cases go undetected. That makes the model untrustworthy in practice."
      },
      {
        type: "paragraph",
        text: "Likewise, if specificity is low, the model may raise many false alarms, affecting both the system and its users."
      },

      {
        type: "heading",
        text: "Key takeaways"
      },
      {
        type: "list",
        text: "To build an effective model:",
        items: [
          "Don't focus on accuracy alone",
          "Understand the problem's objective clearly",
          "Choose metrics that fit the context",
          "Evaluate the model across multiple metrics"
        ]
      },

      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "A good model isn't the one with the highest accuracy, but the one that best fits the real-world objective."
      },

      {
        type: "end",
        text: "In Machine Learning, what matters isn't optimizing a single number, but truly understanding the problem and choosing the right way to evaluate it.\n\nDon't let accuracy fool you."
      },

      {
        type: "quote",
        text: "High accuracy doesn't guarantee a good model.\nThe right metric is what determines its real value."
      }
    ]
  }
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
      text: "Năm 3 – giai đoạn bản lề của sinh viên IT"
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
      text: "Tập trung vào dự án thực tế"
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
      text: "Nhà tuyển dụng nhìn vào điều gì?"
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
      text: "Phát triển kỹ năng mềm"
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
      text: "Trải nghiệm thực tập sớm"
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
      text: "Kết luận"
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
  ],
  en: {
    title: "What Should IT Students Focus on in Their Third Year?",
    category: "Career",
    excerpt: "The third year is a pivotal time for IT students to break through. So what should you focus on to be job-ready by graduation?",
    contentBlocks: [
      {
        type: "heading",
        text: "Year three – a turning point for IT students"
      },
      {
        type: "paragraph",
        text: "For every student, learning in the lecture hall is always important. But the third year marks a turning point — when you're not only gaining knowledge but also preparing for the career path ahead."
      },
      {
        type: "paragraph",
        text: "This is when you need to shift from 'learning to know' to 'learning to do'."
      },

      {
        type: "heading",
        text: "Focus on real-world projects"
      },
      {
        type: "paragraph",
        text: "By the end of year two, most students have a grasp of the fundamentals. Year three is the time to dive into real projects and apply what you've learned."
      },
      {
        type: "list",
        text: "You can start with:",
        items: [
          "Personal projects (portfolio)",
          "Group projects with friends",
          "Scientific research",
          "Building a small but complete product"
        ]
      },
      {
        type: "paragraph",
        text: "These projects not only deepen your understanding but also serve as the clearest proof of your abilities when you apply for jobs."
      },

      {
        type: "heading",
        text: "What do recruiters look for?"
      },
      {
        type: "paragraph",
        text: "In reality, recruiters don't just care about what you studied — what matters more is what you've actually built."
      },
      {
        type: "paragraph",
        text: "A CV with clear projects and concrete products always makes a stronger impression than a simple list of courses or grades."
      },

      {
        type: "heading",
        text: "Develop your soft skills"
      },
      {
        type: "paragraph",
        text: "Alongside technical expertise, soft skills are essential for adapting to a real working environment."
      },
      {
        type: "list",
        text: "Skills worth focusing on:",
        items: [
          "Presentation skills",
          "Communication skills",
          "Teamwork skills",
          "Time management"
        ]
      },
      {
        type: "paragraph",
        text: "A great programmer doesn't just write good code — they also know how to present ideas and collaborate effectively with the team."
      },

      {
        type: "heading",
        text: "Get internship experience early"
      },
      {
        type: "paragraph",
        text: "If you have the chance, try an internship in your third year. It's the fastest way to experience a real workplace and learn from experienced people."
      },
      {
        type: "paragraph",
        text: "An internship not only sharpens your skills but also helps you figure out which area of IT suits you best."
      },

      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Year three isn't the time to spread yourself thin — it's the time to focus, find your direction and break through."
      },

      {
        type: "end",
        text: "Invest in projects, skills and hands-on experience. What you do in your third year will have a huge impact on your career opportunities after graduation.\n\nDon't wait until your fourth year to get started."
      },

      {
        type: "quote",
        text: "Year three isn't for getting ready.\nYear three is for getting started."
      }
    ]
  }
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
      text: "Machine Learning quan trọng – nhưng học đúng cách còn quan trọng hơn"
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
      text: "Những sai lầm thường gặp"
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
      text: "Làm sao để tránh những sai lầm này?"
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
      text: "Kết luận"
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
  ],
  en: {
    title: "Common Mistakes When Learning Machine Learning",
    category: "AI/Machine Learning",
    excerpt: "Machine Learning isn't hard to learn, but learning it the wrong way can keep you from ever truly grasping how it works. Here are the most common mistakes and how to fix them.",
    contentBlocks: [
      {
        type: "heading",
        text: "Machine Learning matters – but learning it the right way matters even more"
      },
      {
        type: "paragraph",
        text: "Machine Learning is one of the core fields of Computer Science. However, how you study and absorb it is what ultimately determines whether you truly understand it and can put it to use."
      },
      {
        type: "paragraph",
        text: "Many students spend a great deal of time studying yet still feel lost. The cause usually lies in a few common mistakes made along the way."
      },

      {
        type: "heading",
        text: "Common mistakes"
      },

      {
        type: "heading",
        text: "1. Rote, mechanical learning"
      },
      {
        type: "paragraph",
        text: "You might memorize plenty of theory, formulas and algorithms, yet not know how to apply them to real problems. This is one of the most serious mistakes."
      },
      {
        type: "paragraph",
        text: "Machine Learning isn't a subject to memorize — it's a subject to understand and apply."
      },

      {
        type: "heading",
        text: "2. Only learning in class"
      },
      {
        type: "paragraph",
        text: "What's taught in lectures is usually just the foundation. If you don't study further on your own, you'll only see the 'tip of the iceberg' without grasping what lies beneath."
      },
      {
        type: "paragraph",
        text: "This makes it hard to apply your knowledge to real problems or projects."
      },

      {
        type: "heading",
        text: "3. Only studying before exams"
      },
      {
        type: "paragraph",
        text: "Studying for exams is completely different from studying to understand. If you only start studying when exams are near, you'll learn just enough to answer the questions instead of understanding the essence of the problem."
      },
      {
        type: "paragraph",
        text: "Machine Learning requires steady accumulation and continuous practice — it can't be crammed into a short period of time."
      },

      {
        type: "heading",
        text: "4. Weak fundamentals"
      },
      {
        type: "paragraph",
        text: "Many students start learning Machine Learning without a firm grasp of fundamentals such as Python programming, probability and statistics, or linear algebra."
      },
      {
        type: "paragraph",
        text: "This makes learning difficult and discouraging, because you can't understand what's really happening behind the algorithms."
      },

      {
        type: "heading",
        text: "5. Learning without practice"
      },
      {
        type: "paragraph",
        text: "Only reading documents or watching videos without practicing means you'll quickly forget what you've learned and won't be able to apply it."
      },
      {
        type: "paragraph",
        text: "Machine Learning is a 'learning by doing' field — you have to build things yourself to truly understand it."
      },

      {
        type: "heading",
        text: "How to avoid these mistakes"
      },
      {
        type: "list",
        text: "A few tips to help you learn more effectively:",
        items: [
          "Build a clear learning roadmap",
          "Master the fundamentals (Python, math)",
          "Combine theory with practice",
          "Work on personal projects or join research",
          "Study consistently instead of cramming before exams"
        ]
      },

      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Mistakes in learning are inevitable — what matters is recognizing them and adjusting in time."
      },

      {
        type: "end",
        text: "Machine Learning isn't hard if you're heading in the right direction. Focus on understanding the fundamentals, practice continuously and build a solid foundation.\n\nSlow and steady beats fast and wrong."
      },

      {
        type: "quote",
        text: "Don't learn Machine Learning just to memorize it.\nLearn it to understand it — and to build with it."
      }
    ]
  }
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
      text: "Bài toán quen thuộc của sinh viên"
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
      text: "Vì sao cần cân bằng?"
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
      text: "Chiến lược quản lý thời gian hiệu quả"
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
      text: "Đặt mục tiêu và ưu tiên"
    },
    {
      type: "paragraph",
      text: "Hãy xác định mục tiêu dài hạn như GPA mong muốn hoặc cơ hội thực tập, sau đó chia nhỏ thành mục tiêu ngắn hạn để dễ thực hiện."
    },

    {
      type: "heading",
      text: "Chăm sóc sức khỏe toàn diện"
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
      text: "Xây dựng mối quan hệ lành mạnh"
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
      text: "Công cụ hỗ trợ quản lý thời gian"
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
      text: "Kết luận"
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
  ],
  en: {
    title: "How to Balance Study Time and Extracurricular Activities",
    category: "Skills",
    excerpt: "Balancing academics and extracurricular activities is a tough challenge for students. Here are some lessons to help you manage your time effectively.",
    contentBlocks: [
      {
        type: "heading",
        text: "A familiar challenge for students"
      },
      {
        type: "paragraph",
        text: "As a student, you don't just attend lectures — you also take part in extracurricular activities, clubs and student unions. This helps you grow in a well-rounded way, but it also raises a big question: how do you balance studying and activities?"
      },
      {
        type: "paragraph",
        text: "Many students believe that 'the busier, the better', but in reality, pouring all your energy into one side can throw you off balance and lower your overall effectiveness."
      },

      {
        type: "heading",
        text: "Why does balance matter?"
      },
      {
        type: "list",
        text: "Finding balance helps you:",
        items: [
          "Study more effectively",
          "Avoid prolonged stress",
          "Gain real-world experience",
          "Maintain your physical and mental health",
          "Develop soft skills and social connections"
        ]
      },

      {
        type: "heading",
        text: "Effective time management strategies"
      },

      {
        type: "heading",
        text: "1. Make a clear plan"
      },
      {
        type: "paragraph",
        text: "Start by planning your studies by the week, month or semester. This keeps you in control of your time and stops you from being caught off guard."
      },

      {
        type: "heading",
        text: "2. Apply the Eisenhower Matrix"
      },
      {
        type: "paragraph",
        text: "Sorting tasks by importance and urgency helps you prioritize what really needs to be done."
      },
      {
        type: "list",
        text: "The 4 task groups:",
        items: [
          "Important & urgent",
          "Important & not urgent",
          "Not important & urgent",
          "Not important & not urgent"
        ]
      },

      {
        type: "heading",
        text: "3. Use the Pomodoro Technique"
      },
      {
        type: "paragraph",
        text: "Working with full focus for 25 minutes and then taking a 5-minute break helps you stay focused and avoid burnout."
      },

      {
        type: "heading",
        text: "4. Learn to say no"
      },
      {
        type: "paragraph",
        text: "You don't have to join every activity. Have the courage to say 'no' to things that aren't truly necessary."
      },

      {
        type: "heading",
        text: "5. Stop procrastinating and limit distractions"
      },
      {
        type: "paragraph",
        text: "Tackle the hardest tasks first, and limit your use of your phone and social media while studying."
      },

      {
        type: "heading",
        text: "6. Rest wisely"
      },
      {
        type: "paragraph",
        text: "Rest isn't a waste of time — it's what keeps you performing well over the long run."
      },

      {
        type: "heading",
        text: "Set goals and priorities"
      },
      {
        type: "paragraph",
        text: "Define long-term goals such as your target GPA or internship opportunities, then break them down into short-term goals that are easier to achieve."
      },

      {
        type: "heading",
        text: "Take care of your overall well-being"
      },
      {
        type: "list",
        text: "Physical health:",
        items: [
          "Get 7–9 hours of sleep every night",
          "Eat healthily",
          "Exercise regularly"
        ]
      },
      {
        type: "list",
        text: "Mental health:",
        items: [
          "Meditate or find ways to relax",
          "Keep up your personal hobbies",
          "Open up to friends and family"
        ]
      },

      {
        type: "heading",
        text: "Build healthy relationships"
      },
      {
        type: "list",
        text: "A few suggestions:",
        items: [
          "Prioritize quality over quantity",
          "Join clubs or volunteer activities",
          "Stay away from toxic relationships",
          "Make time for your family"
        ]
      },

      {
        type: "heading",
        text: "Time management tools"
      },
      {
        type: "list",
        text: "Some useful tools:",
        items: [
          "Google Calendar, Notion – planning",
          "Forest – staying focused",
          "Todoist, Trello – task management",
          "Focus Booster – Pomodoro"
        ]
      },

      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Balance doesn't mean splitting your time equally — it means allocating it wisely according to your goals at each stage."
      },

      {
        type: "end",
        text: "Manage your time wisely so you can do well in your studies while growing as a well-rounded person.\n\nYou don't need to do everything — just the things that truly matter."
      },

      {
        type: "quote",
        text: "Being busy isn't the same as being productive.\nKnowing how to prioritize is the key to success."
      }
    ]
  }
}
];