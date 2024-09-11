import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      home: "Home",
      Aboutus: "About Us",
      Clientspartners: "Clients & Partners",
      ProductsServices: "Products and Services",
      Jobs: "Jobs",
      News: "News",
      Contact: "Contact",
      SolutionComfortPerformance: "Solution | Comfort | Performance",
      WhyTechKnowGram: "Why TechKnowGram",
      CostEffective: "Cost Effective",
      BetterProcess: "Better Process",
      DedicatedTeam: "Dedicated Team",
      StrategicPartnership: "Strategic Partnership",
      ClientServiceManagement: "Client Service Management",
      PerformanceDrivenCulture: "Performance Driven Culture",
      LatestTechnologyProcess: "Latest Technology and Process",
      DedicatedandOutstandingServices: "Dedicated and Outstanding Services",
      RoundtheClockandRoundtheYearService:
        "Round the Clock and Round the Year Service",
      DedicatedRandDTeamtoAdoptNewTechnologies:
        "Dedicated R&D Team to Adopt New Technologies",
      MaximizeBusinessSuccessThroughCostMinimization:
        "Maximize Business Success Through Cost Minimization",
      FollowClientSuggestedProcessManagementandTimeZone:
        "Follow Client Suggested Process Management and Time Zone",
      Member: "Member",
      JapaneseLanguageTechnologyProcessandManagementSupport:
        "Japanese Language, Technology, Process and Management Support",
      twentyFiveyearsofprofessionalandmanagementexperienceacrosstheglobe:
        "25+ years of professional and management experience across the globe",
      AboutTechKnowGramLimited:
        "TechKnowGram Limited, a leading technology company based in Bangladesh, specializes in providing customized web and embedded solutions across various domains, including ERP, AI, IoT, ML Data Analytics,Robotics, AR, VR Applications, Gaming, and Animation. Renowned globally for its expertise in the USA, EU & Japanese ICT market, where it has been active for over 25 years with combined professional experience. With over 25 years of combined professional experience, the company’s team is committed to delivering innovative solutions to clients. ",

      AboutTechKnowGramLimitedReadMore:
        " TechKnowGram Limited is proud to hold ISO 9001, ISO 14001, and ISO/IEC 27001certifications and is a member of several esteemed organizations, including the Federation of Chambers of Commerce and Industries (FBCCI), Bangladesh Association of Software and Information Services (BASIS), the Bangladesh and Japan Chamber of Commerce & Industries (JBCCI), Bangladesh Computer Samity (BCS), the Bangladesh Association of Call Centers and Outsourcing (BACCO), the Ecommerce Association of Bangladesh (e-CAB), the CTO Forum of Bangladesh, and the She Trades Commonwealth Program by the International Trade Centre of International Trade Center (ITC).",

      Products: "Products",
      Services: "Services",
      WHATCLIENTSSAYS: "WHAT CLIENTS SAYS",
      TechknowGramLimitedoffers:
        "TechknowGram Limited offers its own Enterprise Resource Planning ",
      TechknowGramLimitedoffers2:
        " solution called TKG ERP, which can be tailored to meet the unique needs of any business entity, including those in the Construction Industry, Education, Manufacturing, Workshops, and RMG industry. This ERP is developed and supported with the latest 4IR technology.",

      QuizWin:
        "QuizWin is an interactive quiz platform for knowledge enthusiasts, ",
      QuizWin2:
        " as its name implies.We offer a range of quiz events that users can participate in and potentially win prizes. The leaderboard provides a complete competitive experience.Ideal solution for effectively organize for any Quiz or assessment even",
      Prostuti: "TechKnowGram has created Prostuti,an exam management ",
      Prostuti2:
        " platform for institutes to administer exams. The platform was designed with the goal of automating the exam process, which can often be tedious and repetitive. Prostuti simplifies the entire process and provides convenience for both examiners and examinees. It streamlines exam arrangements, management, and attendance, making the entire experience more efficient and user-friendly.",
      Khoz: "KHOZ is a recently developed project for Beacon-based Indoor Navigation   ",
      Khoz2:
        " System that incorporates IoT technology to deliver precise and up-to-date location data to users navigating indoor environments. The system operates by using beacons - small, cost-effective, and battery-powered devices that emit a Bluetooth signal that mobile devices like smartphones can detect. Ideal solution for event management at supermarkets for location and promotions. ",
      BMS: "The Roads and Highways Department (RHD) of Bangladesh  ",

      Chatbot:
        " Booking management is a crucial component of an Appointment Scheduling Chatbot,  ",
      Chatbot2:
        " designed to streamline the process of scheduling appointments efficiently and conveniently for users. Here's how you can implement and optimize booking management features: ",
      BMS2: " Government is responsible for maintaining and managing  the country's road and bridge infrastructure. To ensure the safety and reliability of bridges, the RHD has adopted the use of Bridge Management System (BMS) software. BMS is a comprehensive tool that helps Bridge Management Wing (BMW) of RHD to monitor the health and performance of bridges, assess their performance, and schedule maintenance and repair work. The four key components of a BMS system that the RHD can use to manage its bridges effectively are Bridge Basic Data Input, Bridge Inspection, Bridge Evaluation and Bridge Remedy.",
      CustomSolutionDevelopmentTitle: "Custom Solution Development",
      CustomSolutionDevelopment:
        "Analysts & Developers of TechKnowGram Limited love creating  ",
      CustomSolutionDevelopment2:
        " application and tools to solve your specific business issues but, our first job, as creative software specialists, is to listen you. We want to hear about your business challenges so that we can help you to solve them.      ",
      SkillMigrationTitle:
        "Skill Migration Education Investment to Japan, Malaysia",
      SkillMigration: "Skill Migration Education Investment to Japan, Malaysia",
      SkillMigration2:
        "for Bangladeshi personnel to Japan, Malaysia & Canada. We have 1000+ Japanese Known personnel’s’ CV for Japan market and the Japanese company in Bangladesh.",
      AIARVRTitle: "AI AR VR Big Data Robotics IOT",
      AIARVR:
        "TechKnowGram is a realising different kinds of AI, IOT, AR, VR, Big Data, Application",
      AIARVR2:
        "  & Solutions to meet the demands of 4Th 4IR Industrial Revolutions 4IR for IQ, education, sense, risk prevention, advanced tech-enabled gadgets & solutions",
      readmore: "read more",
      readless: "read less",
      KentaKato: "Kenta Kato",
      HirokazuYoshida: "Hirokazu Yoshida",
      KinyaIshii: "Kinya Ishii",
      MalligaSubramanium: "Malliga Subramanium",

      KentaKatoDesc:
        "TechKnowGram delivered our work quickly and provided designs that attracted both our clients and partners, while also eliminating the need for a business analyst. They offer a complete solution for all client requirements, making them a valuable asset for any customer.",

      HirokazuYoshidaDesc:
        "Ahmedul had been brilliant in getting my work done. He and his team are problem solvers and provided a spontaneous vision of how to build on and clarify whatever was requested. TechKnowGram is praised for its ability to develop workable solutions and for its attention to professional service",
      KinyaIshiiDesc:
        "TechKnowGram and Ahmedul worked for us for quite some time. The whole team of Ahmedul became solution provider. They presented a remarkable positive attitude. All the work was done in a short span of time and the team achieved the impossible",

      MalligaSubramaniumDesc:
        "TechKnowGram’s team provided fast and flexible service with considerable expertise. Their unique approach to assessing feedback helped me solve my problem. Ahmed, their leader, is highly regarded for his unwavering commitment to justice.",
      FooterAboutOne:
        "TechKnowGram Limited is a global solution provider led by experts having more than  ",
      FooterAboutTwo:
        "  25 years of professional experiences in both the local and global arena specially for Japan ICT market for last 20 years as well as USA & Europe market. The company particularly provides web-based customized solutions on ERP, AI, Data Analytics, Robotics, Embedded Solutions with Beacon, AR, VR Applications and Gaming and Animation.",
      AddressLineOne: "5/9 Block B, Lalmatia",
      AddressLineTwo: " Dhaka, BANGLADESH",
      AddressContact: "Phone/Wp:+88 02 55008199",
      // AddressContactForUSA: "Phone:+88 01819250309",
      // AddressMobileWhatsApp: "Whatsapp:+88 01819250309",
      // AddressMobileWhatsAppForUSA: "Whatsapp:+88 01819250309",
      AddressEmail: "Email: info@TechKnowGram.com",
      // AddressEmailForUSA: "Email: info@TechKnowGram.com",
      Leadership: "Leadership",
      catAll: "All Categories",
      searchKeyWord: "Search Keyword",
      search: "Search",
      shoppingCart: "Shopping Cart",
      myAcc: "MY ACCOUNT",
      wishList: "Wish List",
      callUs: "Call Us",
      NewArrivals: "New Arrivals",
      Categories: "Categories",
      hotDeals: "Hot Deals of the Week",
      smartphone: "Smartphone",
      elComp: "Electronic Computer",
      tabs: "Tablets",
      camnPh: "Camera & Photo",
      smntb: "Smartphone & Tablets",
      collect: "Collection",
      pages: "Pages",
      hots: "Hot Sales",
      email: "Email",
      mcb: "Macbook",
      bansub: "Now with the ultimate full hd display",
      spnow: "Shop Now",
      svaio: "Sony VAIO",
      cptr: "Computer",
      phone: "Phone",
      headphone: "Headphone",
      addc: "Add to Cart",
      bseller: "Best Seller",
      appc30: "Apple Cinema 30",
      caneo5d: "Canon EOS 5D",
      addr: "ADDRESS",
      taito: "Taito 1-29-3, Taito-ku, Tokyo",
      jap: "Japan",
      cus: "CUSTOMER SERVICES",
      cont: "Contact With Us",
      ret: "Returns",
      sit: "Site Map",
      mya: "MY ACCOUNT",
      bra: "Brands",
      gif: "Gift Certificates",
      aff: "Affiliates",
      spe: "Specials",
      cop: "All Rights Reserved & Powered By TechKnowGram Limited",
      fre: "Free Shipping",
      frep: "Free shipping on all Japan orders",
      mong: "Money Guarantee",
      thirt: "30 days money back guarantee",
      saf: "Safe Shopping",
      safg: "Safe shopping guarantee",
      onl: "Online Support",
      wes: "We support online 24 hours a day",
      cam: "Cameras",
      comp: "Components",
      desk: "Desktops",
      lapnN: "Laptops & Notebooks",

      mon: "Monitors",
      print: "Printers",
      scann: "Scanners",
      webcam: "Web Cameras",
      mice: "Mice & Trackballs",
      pc: "PC",
      mc: "Mac",
      soft: "Software",
      abus: "About Us",
      serv: "Services",
      fq: "FAQs",
      support: "Support 27/7 page",
      typ: "Typography",
      phg: "Photo Gallery",
      smap: "SiteMap",
      p4: "Page 404",
      coms: "Coming Soon",
      test: "Testimonials",
      mor: "Most Rated",
      MajorClientsPartners: "Major Clients & Partners",
      ProductServices: "Product & Services",
      Abouttechknowgram: "About TechKnowGram Limited",
      AboutBabuSan:
        "AKM Ahmedul Islam BABU is the Founder, Managing Director, and CEO of TechKnowGram Ltd and Sobjanta AI, with over 28 years of experience in BPO, outsourcing, and the software industry in the USA and Japanese markets. As a pioneer in ICT, e has held key positions at multinational companies like NIIT, Metrocomia South Asia, BJIT, SeBPO, Divine IT, and AtomAP. Since 1997, he has been actively involved with the Bangladesh Association of Software and  ",
      AboutBabuSanReadmore:
        "  hInformation Services (BASIS), where he served as Director and currently heads the BASIS Japan Desk, a position he established in 2016. He has also been a Director at the Bangladesh Association of Contact Center and Outsourcing (BACCO).Ahmedul BABU is associated with several prestigious organizations, including the Federation of Chambers of Commerce and Industries (FBCCI), the Bangladesh Japan Chamber of Commerce and Industries (JBCCI), Bangladesh Computer Samity (BCS), and the e-Commerce Association of Bangladesh (eCAB). He is a life member of both the CTO Forum of Bangladesh and the APECE-EEE Alumni Association at the University of Dhaka. His journalistic experience includes roles as executive editor of Monthly Computer Barta and senior correspondent and IT Page Editor for the Bangladesh Observer. He also founded and served as president of the Bangladesh ICT Journalist Forum (BIJF).He holds a Bachelor's and Master's degree in Applied Physics Electronics and Communication Engineering from the University of Dhaka, an MBA from the Presidency University of Bangladesh, and an ACMP 4.0 certification from IBA, University of Dhaka. Since 1997, Ahmedul BABU has been deeply involved in the Japanese ICT market, managing business development, project management, and client relations. His expertise includes overseeing IT and R&D departments, resource planning, financial and logistics analysis, and strategic decision-making. He is recognized for his ability to lead high-performance teams, meet industry standards, and participate in key government and business forums. He has received the Best Technology Writer Award for 2000 and holds a Lean Six Sigma Black Belt certification.",
    },
  },

  jp: {
    translation: {
      ProductServices: "製品とサービス",
      Abouttechknowgram: "TechKnowGram Limited について",
      home: "家",
      Aboutus: "私たちに関しては",
      Clientspartners: "クライアントとパートナー",
      ProductsServices: "製品とサービス",
      Jobs: "ジョブ",
      News: "ニュース",
      Contact: "コンタクト",
      SolutionComfortPerformance: "ソリューション | 快適さ | パフォーマンス",
      WhyTechKnowGram: "TechKnowGram を選ぶ理由",
      CostEffective: "費用対効果の高い",
      BetterProcess: "より良いプロセス",
      DedicatedTeam: "専任チーム",
      StrategicPartnership: "戦略的パートナーシップ",
      ClientServiceManagement: "クライアント サービス管理",
      PerformanceDrivenCulture: "パフォーマンス主導の文化",
      LatestTechnologyProcess: "最新の技術とプロセス",
      DedicatedandOutstandingServices: "専用の優れたサービス",
      RoundtheClockandRoundtheYearService: "24時間年中無休のサービス",
      DedicatedRandDTeamtoAdoptNewTechnologies:
        "新しいテクノロジーを採用するための専任の研究開発チーム",
      MaximizeBusinessSuccessThroughCostMinimization:
        "コストの最小化によるビジネスの成功の最大化",
      FollowClientSuggestedProcessManagementandTimeZone:
        "クライアントが提案するプロセス管理とタイムゾーンに従う",

      JapaneseLanguageTechnologyProcessandManagementSupport:
        "日本語、技術、プロセス、管理のサポート",
      twentyFiveyearsofprofessionalandmanagementexperienceacrosstheglobe:
        "世界中で25年以上の専門的および管理経験。",
      AboutTechKnowGramLimited:
        "TechKnowGram Limited は、バングラデシュに本拠を置く大手テクノロジー企業で、ERP、AI、IoT、ML データ分析、ロボティクス、AR、VR アプリケーション、ゲーム、アニメーションなど、さまざまなドメインにわたるカスタマイズされた Web および組み込みソリューションの提供を専門としています。米国、EU、日本の ICT 市場における専門知識で世界的に知られており、専門的な経験を組み合わせて 25 年以上活動してきました。合わせて 25 年以上のプロフェッショナルな経験を持つ同社のチームは、革新的なソリューションをクライアントに提供することに尽力しています。 TechKnowGram Limited は、ISO 9001、ISO 14001、および ISO/IEC 27001 認証を取得していることを誇りに思っており、商工会議所連合 (FBCCI)、バングラデシュ ソフトウェアおよび情報サービス協会 (BASIS)、バングラデシュおよび日本商工会議所 (JBCCI)、バングラデシュ コンピュータ サミティ (BCS)、バングラデシュ コールセンターおよびアウトソーシング協会 (BACCO)、バングラデシュ電子商取引協会 (e-CAB)、バングラデシュ CTO フォーラム、および国際貿易センター（ITC）の国際貿易センターによるSheTrades Commonwealthプログラム",

      Products: "製品",
      Services: "サービス",
      WHATCLIENTSSAYS: "クライアントの声",
      Member: "メンバー",
      MajorClientsPartners: "主なクライアントとパートナー",
      TechknowGramLimitedoffers:
        "TechknowGram Limited は、TKG ERP と呼ばれる独自のエンタープライズ リソース プランニング ソリューションを提供しています。",

      TechknowGramLimitedoffers2:
        "建設業界、教育、製造、ワークショップ、RMG 業界など、あらゆるビジネス エンティティの固有のニーズに対応します。 この ERP は、最新の 4IR テクノロジーで開発およびサポートされています。",
      QuizWin:
        "QuizWin は、その名のとおり、知識マニア向けのインタラクティブなクイズ プラットフォームです。さまざまなクイズ イベントを提供しています。",
      QuizWin2:
        "ユーザーが参加して賞品を獲得できる可能性があります。 リーダーボードは、完全な競争体験を提供します。クイズや評価を効果的に整理するための理想的なソリューションです。",
      Prostuti:
        "TechKnowGram は、機関が試験を管理するための試験管理プラットフォームである Prostuti を作成しました。 の",
      Prostuti2:
        "プラットフォームは、退屈で繰り返しの多い試験プロセスを自動化することを目的として設計されました。 Prostuti はプロセス全体を簡素化し、試験官と受験者の両方に利便性を提供します。 試験の手配、管理、および出席が合理化され、エクスペリエンス全体がより効率的でユーザーフレンドリーになります。",
      Khoz: "KHOZ は、IoT を組み込んだビーコンベースの屋内ナビゲーション システムの最近開発されたプロジェクトです。",
      Khoz2:
        "屋内環境をナビゲートするユーザーに正確で最新の位置データを提供する技術。 このシステムはビーコン (スマートフォンなどのモバイル デバイスが検出できる Bluetooth 信号を発信する小型で費用対効果の高いバッテリー駆動のデバイス) を使用して動作します。 ロケーションとプロモーションのためのスーパーマーケットでのイベント管理に最適なソリューションです。",
      readmore: "続きを読む",
      readless: "もっと読む",

      BMS: "バングラデシュ政府の道路および高速道路局 (RHD) は、国の道路および橋梁インフラの維持管理を担当しています。 橋の安全性と信頼性を確保するために、",

      BMS2: " RHD は Bridge Management System (BMS) ソフトウェアの使用を採用しています。 BMS は包括的なツールです これは、RHD の Bridge Management Wing (BMW) が橋の健全性と性能を監視し、性能を評価し、メンテナンスと修理作業のスケジュールを立てるのに役立ちます。 RHD がブリッジを効果的に管理するために使用できる BMS システムの 4 つの主要コンポーネントは、ブリッジ基本データ入力、ブリッジ検査、ブリッジ評価、およびブリッジ修復です。",
      CustomSolutionDevelopmentTitle: "カスタム ソリューションの開発",
      CustomSolutionDevelopment:
        "TechKnowGram Limited のアナリストと開発者は、アプリケーションの作成が大好きで、",
      CustomSolutionDevelopment2:
        "特定のビジネス上の問題を解決するためのツールを提供しますが、創造的なソフトウェア スペシャリストとしての私たちの最初の仕事は、お客様の声に耳を傾けることです。 お客様のビジネス上の課題についてお聞きし、解決のお手伝いをさせていただきます。",
      SkillMigrationTitle: "日本、マレーシアへのスキルマイグレーション教育投資",
      SkillMigration: "日本、マレーシアへのスキルマイグレーション教育投資",
      SkillMigration2:
        "バングラデシュ人員を日本、マレーシア、カナダへ。 私たちは、日本市場とバングラデシュの日系企業向けに、1000人以上の日本人の既知の人物の履歴書を持っています。",
      AIARVRTitle: "AI AR VR ビッグデータ ロボティクス IOT",
      AIARVR:
        "TechKnowGramは、さまざまな種類のAI、IOT、AR、VR、ビッグデータ、アプリケーションを実現しています",
      AIARVR2:
        "第 4 次 4IR 産業革命の要求を満たすための & ソリューション IQ、教育、感覚、リスク防止、高度な技術対応ガジェット & ソリューションのための 4IR",
      KentaKato: "加藤健太",
      HirokazuYoshida: "裕和 吉田",
      KinyaIshii: "石井欽也",
      MalligaSubramanium: "マリガ・サブラマニウム",
      KentaKatoDesc:
        "TechKnowGram は私たちの仕事を迅速に提供し、ビジネス アナリストの必要性をなくしながら、クライアントとパートナーの両方を惹きつけるデザインを提供してくれました。 クライアントのすべての要件に完全なソリューションを提供し、あらゆる顧客にとって貴重な資産となります。",

      HirokazuYoshidaDesc:
        "アーメドゥルは私の仕事を成し遂げるのに優れていました。 彼と彼のチームは問題解決者であり、要求されたものをどのように構築して明確にするかについて自発的なビジョンを提供しました. TechKnowGram は、実行可能なソリューションを開発する能力と、専門的なサービスへの注意が高く評価されています。",
      KinyaIshiiDesc:
        "TechKnowGram と Ahmedul は、かなり長い間、私たちのために働いてくれました。 Ahmedul のチーム全体がソリューション プロバイダーになりました。 彼らは驚くべき前向きな姿勢を示しました。 すべての作業は短期間で完了し、チームは不可能を達成しました",
      MalligaSubramaniumDesc:
        "TechKnowGram のチームは、かなりの専門知識を備えた迅速で柔軟なサービスを提供しました。 フィードバックを評価する彼らのユニークなアプローチは、私の問題を解決するのに役立ちました. 彼らのリーダーであるアーメドは、正義への揺るぎないコミットメントで高く評価されています。",
      FooterAboutOne:
        "TechKnowGram Limited は、過去 20 年間、特に日本の ICT 市場と米国およびヨーロッパ市場向けに、ローカルおよびグローバルの分野で 25 年以上の専門的経験を持つ専門家が率いるグローバル ソリューション プロバイダーです。",
      catAll: "すべてのカテゴリ",
      FooterAboutTwo:
        " 同社は特に、ERP、AI、データ分析、ロボティクス、ビーコンを使用した組み込みソリューション、AR、VR アプリケーション、ゲームとアニメーションに関する Web ベースのカスタマイズされたソリューションを提供しています。",
      AddressLineOne: "5/9 ブロック B、ラルマティア、モハマドプール",
      AddressLineTwo: "ダッカ 1207、バングラデシュ",
      AddressContact: "電話:+88 02 55008199",
      AddressMobileWhatsApp: "モバイル/Whatsapp: +88 01819250309",
      AddressEmail: "電子メール: info@TechKnowGram.com",
      Leadership: "リーダーシップ",
      searchKeyWord: "検索語",
      search: "探す",
      shoppingCart: "ショッピングカート",
      myAcc: "マイアカウント",
      wishList: "ウィッシュリスト",
      callUs: "お電話ください",
      NewArrivals: "新着",
      Categories: "カテゴリー",
      hotDeals: "今週の特売品",
      smartphone: "スマートフォン",
      elComp: "電子計算機",
      tabs: "タブレット",
      camnPh: "カメラと写真",
      smntb: "スマートフォン＆タブレット",
      collect: "コレクション",
      pages: "ページ",
      hots: "ホットセール",
      email: "Eメール",
      mcb: "マックブック",
      bansub: "究極のフル HD ディスプレイを搭載",
      spnow: "今すぐ購入",
      svaio: "ソニーVAIO",
      cptr: "コンピューター",
      phone: "電話",
      headphone: "ヘッドホン",
      addc: "カートに追加",
      bseller: "ベスト・セラー",
      appc30: "アップル シネマ 30",
      caneo5d: "キヤノン EOS 5D",
      addr: "アドレス",
      taito: "たいと １ー２９ー３、 帯トーク、 と居",
      jap: "日本",
      cus: "顧客サービス",
      cont: "お問い合わせ",
      ret: "戻り値",
      sit: "サイトマップ",
      bra: "ブランド",
      gif: "商品券",
      aff: "アフィリエイト",
      spe: "特別な",
      cop: "著作権 © 2022 by TechKnowGram.com. 全著作権所有。",
      fre: "送料無料",
      frep: "日本全国送料無料",
      mong: "金銭保証",
      thirt: "30日間の返金保証",
      saf: "安全なショッピング",
      safg: "安心のお買い物保証",
      onl: "オンラインサポート",
      wes: "24時間オンラインでサポートいたします",
      cam: "カメラ",
      comp: "コンポーネント",
      desk: "デスクトップ",
      lapnN: "ラップトップとノートブック",

      mon: "モニター",
      print: "プリンター",
      scann: "スキャナー",
      webcam: "ウェブカメラ",
      mice: "マウスとトラックボール",
      pc: "パソコン",
      mc: "マック",
      soft: "ソフトウェア",
      abus: "私たちに関しては",
      serv: "サービス",
      fq: "よくある質問",
      support: "27 時間年中無休のサポート ページ",
      typ: "タイポグラフィ",
      phg: "フォトギャラリー",
      smap: "サイトマップ",
      p4: "404ページ",
      coms: "近日公開",
      test: "お客様の声",
      mor: "最も評価の高い",
      AboutBabuSan:
        "AKM Ahmedul Islam BABU は、TechKnowGram Ltd および Sobjanta AI の創設者、マネージング ディレクター、CEO であり、米国と日本市場の BPO、アウトソーシング、ソフトウェア業界で 28 年以上の経験があります。 ICT の先駆者として、NIIT、Metrocomia South Asia、BJIT、SeBPO、Divine IT、AtomAP などの多国籍企業で重要な役職を歴任してきました。 1997 年以来、バングラデシュ ソフトウェア情報サービス協会 (BASIS) に積極的に関与しており、そこで理事を務め、現在は 2016 年に設立した役職である BASIS ジャパンデスクの責任者を務めています。また、バングラデシュ協会の理事も務めています。 Association of Contact Center and Outsourcing (BACCO).Ahmedul BABU は、商工会議所連合会 (FBCCI)、バングラデシュ日本商工会議所 (JBCCI)、バングラデシュ コンピュータ サミティ (BCS) など、いくつかの著名な組織と提携しています。 、およびバングラデシュ電子商取引協会 (eCAB)。彼はバングラデシュの CTO フォーラムとダッカ大学の APECE-EEE 同窓会の両方の終身会員です。彼のジャーナリストとしての経験には、月刊コンピューター バルタの編集長、バングラデシュ オブザーバーの上級特派員および IT ページ編集者としての役割が含まれます。また、バングラデシュ ICT ジャーナリスト フォーラム (BIJF) の設立と会長も務めました。ダッカ大学で応用物理エレクトロニクスおよび通信工学の学士号と修士号を取得し、バングラデシュプレジデンシー大学で MBA を取得し、ACMP 4.0 を取得しています。ダッカ大学IBA認定。 1997 年以来、Ahmedul BABU は日本の ICT 市場に深く関与し、事業開発、プロジェクト管理、クライアントとの関係を管理してきました。彼の専門知識には、IT および研究開発部門の監督、リソース計画、財務および物流分析、戦略的意思決定が含まれます。彼は、優秀なチームを率い、業界標準を満たし、主要な政府およびビジネスのフォーラムに参加する能力が認められています。彼は 2000 年にベスト テクノロジー ライター賞を受賞しており、リーン シックス シグマ ブラック ベルト認定資格を保持しています。",
    },
  },
  sp: {
    translation: {
      paragraph:
        "react-i18next es un poderoso marco de internacionalización para React / React Native que se basa en i18next.",
    },
  },
  hn: {
    translation: {
      paragraph:
        "प्रतिक्रिया-i18next प्रतिक्रिया / प्रतिक्रिया मूल के लिए एक शक्तिशाली अंतर्राष्ट्रीयकरण ढांचा है जो i18next पर आधारित है।",
    },
  },
  fr: {
    translation: {
      paragraph:
        "react-i18next est un puissant framework d'internationalisation pour React / React Native basé sur i18next.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "sp",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
