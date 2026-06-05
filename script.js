
// add class active to header on scroll

// let header = document.querySelector("header")

// window.onscroll = function(){
//     if (this.scrollY >= 50) {
//         header.classList.add("active")
//     }else{
//         header.classList.remove("active")
//     }
// }

// let nav_links = document.getElementById("links");

// function Open_colose_Menu() {
//     nav_links.classList.toggle("active")
// }

// header---------------------------------------------------------
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    // إضافة وإزالة كلاس التفعيل للزر والقائمة معاً لحركة متزامنة ناعمة
    menuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
});

        // إغلاق القائمة تلقائياً عند الضغط على أي رابط في الموبايل
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
    });
});
// -----------------------------------------------
const data = {
    ar: {
        dir: "rtl",
        logo: "مكتب محاماة",
        home: "الرئيسية",
        weARE: "من نحن",
        service : "خدماتانا",
        contact : "التواصل",
        title: "خبرة قانونية تثق بها",
        subtitle: "حلول قانونية احترافية بأعلى جودة",
        cta: "احجز استشارة",
        about: "من نحن",
        about_p1 :"شركة تركي مقبل الجدعاني للمحاماة والاستشارات القانونية (ذ.م.م) هي شركة قانونية تقدم خدمات متكاملة في مجالي الاستشارات القانونية وإدارة وتسوية المنازعات، وفق أعلى المعايير المهنية.",
        about_p2 :"بما تتبنى الشركة نهجا مهنيا يجمع بين الدقة القانونية، والخبرة العملية، والفهم العميق للبيئة النظامية يمكنها من تقديم حلول قانونية فعالة ومبتكرة تتناسب مع طبيعة كل ملف وتحدياته.",
        about_p3 :"ونحرص على تمكين عملائنا من اتخاذ قرارات قانونية مدروسة، من خلال تقديم استشارات واضحة ومعالجة دقيقة للملفات، ومتابعة مستمرة في مختلف مراحل العمل، بما يحقق الكفاءة في الأداء ويعزز مستوى الأمان القانوني",
        about_p4 :"كما تتميز الشركة بقدرتها على التعامل مع الملفات ذات الطابع المحلي والدولي، من خلال بيئة عمل متعددة اللغات العربية الفرنسية، الإنجليزية)، بما يضمن تقديم خدمات قانونية احترافية تلبي احتياجات قاعدة عملاء متنوعة",
        vision : "رؤيتنا",
        vision_p1 : "تنطلق شركتنا من قناعة راسخة بأن سيادة القانون هي الركيزة الأساسية لاستقرار المعاملات، وأن تحقيق العدالة يمثل الغاية الجوهرية لكل عمل قانوني، وهو ما يشكل الأساس الذي تقوم عليه رؤيتنا وتوجهاتنا المستقبلية.",
        vision_p2 : "ونؤمن بأن التميز القانوني لا يتحقق بمجرد الإلمام بالنصوص النظامية، بل يقوم على التكامل بين المعرفة القانونية والخبرة العملية، والفهم العميق للبيئة القانونية، والقدرة على استباق التحديات ومواكبة التطورات التشريعية والتنظيمية.",
        vision_p3 : "وتتمثل رؤيتنا في أن نكون في طليعة الشركات والمكاتب القانونية الرائدة في المملكة العربية السعودية، مع حضور فعال على الصعيد الدولي، من خلال تقديم خدمات قانونية متكاملة بمعايير احترافية عالية، وبنهج متعدد اللغات العربية الفرنسية، الإنجليزية)، بما يعزز قدرتنا على التعامل مع الملفات المحلية والدولية بكفاءة واقتدار.",
        vision_p4 : "كما نطمح إلى الإسهام في تطوير القطاع القانوني وتعزيز بيئة الأعمال، ودعم النمو الاقتصادي، بما يتوافق مع الأطر النظامية في المملكة، وبما يسهم في تحقيق مستهدفات رؤية المملكة ٢٠٣٠ .",
        message : "رسالتنا",
        message_p1 : "تتمثل رسالة شركتنا في تقديم خدمات قانونية متكاملة لعملائنا، تقوم على الدقة والكفاءة والالتزام، بما يلبي احتياجاتهم القانونية على المستويين المحلي والدولي",
        message_p2 : "ونحرص على تقديم حلول قانونية عملية ومخصصة، تستند إلى فهم معمق للأبعاد القانونية والاقتصادية والاستراتيجية لملفات عملائنا، وذلك من خلال نهج مهني يرتكز على التحليل الدقيق والتخطيط الاستراتيجي والقدرة على التكيف مع طبيعة كل ملف، بما يمكننا من تقديم استشارات دقيقة وإدارة فعالة للمنازعات وتحقيق أفضل النتائج الممكنة.",
        message_p3 : "وتسهم قدرتنا على العمل باللغات العربية والفرنسية والإنجليزية في تعزيز جودة التواصل مع عملائنا وتمكيننا من إدارة الملفات ذات الطابع الدولي والتعامل بكفاءة عالية مع الأطراف متعددة الجنسيات.",
        message_p4 : "ونلتزم بالدفاع عن مصالح عملائنا بكل مهنية وحزم، مع تبني نهج استباقي يهدف إلى الوقاية من النزاعات متى أمكن، وتحقيق أفضل النتائج عند اللجوء إلى الإجراءات القانونية.",
        Values : "أهدافنا وقيمنا",
        Values_p1 : "نهدف في شركتنا إلى تقديم خدمات قانونية متكاملة بمعايير احترافية عالية تلبي احتياجات عملائنا من الشركات والأفراد، وتسهم في دعم بيئة الأعمال وتعزيز الاستقرار القانوني بما يتوافق مع الأنظمة المعمول بها في المملكة.",
        Values_p2 : "كما نسعى إلى التطوير المستمر لقدراتنا المهنية وتعزيز خبراتنا، بما يمكننا من مواكبة التطورات التشريعية والتنظيمية، وتقديم حلول قانونية فعّالة تواكب آخر التطورات القانونية والاقتصادية.",
        Values_p3 : "وترتكز أعمالنا على منظومة من القيم المهنية التي توجه ممارساتنا وتعكس هويتنا المؤسسية، والتي تقوم على النزاهة والشفافية والولاء والتميز. نولي أهمية خاصة للأخلاقيات المهنية والمسؤولية في ممارسة مهنتنا.",
        Values_p4 : "كما نعمل على الإسهام في تطوير البيئة القانونية وتعزيز جاذبية الاستثمار، من خلال دعم الأنشطة الاقتصادية وتقديم خدمات قانونية تتماشى مع أفضل الممارسات المحلية والدولية.",
        Team : "فريقنا",
        Team_p1 : "تضم شركتنا فريقا من المحامين والمستشارين القانونيين المؤهلين الذين يجمعون بين التأهيل الأكاديمي المتين والخبرة العملية المتقدمة في مختلف فروع القانون.",
        Team_p2 : "ونولي أهمية خاصة لتكامل الخبرات وتنوع التخصصات داخل فريق العمل، بما يتيح معالجة الملفات بمنهجية شاملة ورؤية قانونية معمقة، ويسهم في تقديم حلول قانونية فعالة ومتكاملة تلبي احتياجات عملائنا.",
        Team_p3 : "ويتمتع فريقنا بإلمام واسع بالأنظمة والتشريعات والممارسات المهنية، مع القدرة على التعامل بكفاءة مع القضايا المحلية والملفات ذات الطابع الدولي، مدعومين بإجادة اللغات العربية والفرنسية والإنجليزية بما يعزز جودة التواصل مع قاعدة عملاء متنوعة.",
        Team_p4 : "كما نحرص على استقطاب الكفاءات القانونية المتميزة، والاستثمار المستمر في تطوير قدرات فريقنا وتعزيز مهاراتهم، بما يضمن الحفاظ على أعلى مستويات الأداء المهني، والاستجابة بمرونة وكفاءة لمتطلبات السوق القانوني المتنامية",
        mangert: "مدير الشركة",
        manger: "Manager",
        nameManager : "دكتور تركى الجدعانى",
        managerCeo : "المدير العام",
        managerTitle1 : "شريككم القانوني الموثوق في الاستشارات، التقاضي، وصياغة العقود وحماية الملكية الفكرية",
        managerTitle2 :"لدينا فريق متخصص يعمل على تقديم خدمات قانونية متخصصة وحلول عملية تدعم الأفراد والشركات وتحافظ على حقوقهم ومصالحهم",
        managerTitle3 :"نؤمن بأن العدالة تبدأ بفهم عميق للأنظمة والقوانين، لذلك نكرّس خبراتنا لتقديم خدمات قانونية احترافية تضمن حماية الحقوق وتحقيق أفضل النتائج لعملائنا.",

        servicesTitle: "خدماتنا",
        s11: "التقـــاضــــــي",
        s22: "حمــايــة حقــــوق الملكية الفكرية",
        s33: "تأسيس الشــركات التجاريـة وتصفيتها",
        s44: "صياغة عقود",
        s1: "التقـــاضــــــي",
        s2: "حمــايــة حقــــوق الملكية الفكرية",
        s3: "تأسيس الشــركات التجاريـة وتصفيتها",
        s4: "الامتثال القانوني وتعزيز ممـــارســـات الحــوكمــة",
        s5: "إدارة وتسوية النزاعات",
        s6: "صياغة ومراجعة العقود",
        s7: "إعادة الهيكلة والاندماج والاستحواذ",
        s8: "خدمات الزكاة والضريبة والجمارك",
        s9: "التركات",
        clientTitle:"شراكة قانونية تبدأ بالفهم.... وتستمر حتى تحقيق النتائج.",
        clientp : "نؤمن بأن كل ملف قانوني هو رحلة تبدأ بفهم دقيق، وتدار بمنهجية واضحة، وتنتهي بتحقيق نتائج ملموسة. ومن هذا المنطلق، نصطحب عملاءنا عبر تجربة قانونية متكاملة، تقوم على الاحترافية والشفافية، والتخطيط الاستراتيجي.",
        clientJourney :"رحلة العميل",
        clientOne : "الاجتماع وفهم الاحتياج",
        clientOnep : "تبدأ رحلتنا مع العميل بعقد اجتماع يهدف إلى الاستماع بعناية وفهم كافة تفاصيل الموضوع وتحليل احتياجاته وأهدافه، بما يمكن من بناء تصور قانوني واضح منذ البداية.",
        clientTwo : "الدراسة والتحليل القانوني",
        clientTwop : "نقوم بدراسة الملف بشكل معمق من خلال تحليل الوقائع والمستندات، والاطلاع على الأنظمة ذات العلاقة بهدف الوصول إلى تقييم قانوني دقيق ورؤية متكاملة للخيارات المتاحة.",
        clientThere : "العرض وخطة العمل",
        clientTherep : "نقدم للعميل تصورا واضحا يتضمن الاستراتيجية القانونية المقترحة، وخطة العمل، والإجراءات المتوقعة. بما يضمن وضوح المسار وتمكينه من اتخاذ القرار بثقة",
        clientFour : "التعاقد وتنظيم العلاقة",
        clientFourp : "نحرص على تنظيم العلاقة التعاقدية بشكل احترافي من خلال اتفاقية واضحة تحدد نطاق العمل والالتزامات، وآلية التنفيذ، بما يضمن الشفافية وحفظ الحقوق..",
        clientFive : "التنفيذ بكفاءة واحترافية",
        clientFivep : "نباشر تنفيذ الاستراتيجية المعتمدة وفق منهجية دقيقة، مع إدارة فعّالة لكافة الإجراءات، والعمل باحترافية لتحقيق أفضل النتائج الممكنة.",
        clientSix : "التواصل والتحديث المستمر",
        clientSixp : "نؤمن بأن التواصل هو أساس الثقة، لذلك نحرص على إبقاء عملائنا على اطلاع دائم بمستجدات ملفاتهم، من خلال تحديثات دورية وتقارير واضحة تعكس سير العمل بكل شفافية.",
        ourClient : "عمـلائنــا",
        ourClientp1: "نقدم خدماتنا لشريحة متنوعة من العملاء، تشمل الشركات والمؤسسات والمستثمرين ورواد الأعمال، إضافة إلى الأفراد، بما يعكس قدرتنا على التعامل مع ملفات قانونية ذات طابع محلي ودولي.",
        ourClientp2: "نواكب احتياجات عملائنا من الشركات في مختلف مراحل أعمالهم، من التأسيس والتوسع إلى إدارة المخاطر والنزاعات، كما نوفر للأفراد الدعم القانوني اللازم لحماية حقوقهم وإدارة شؤونهم القانونية بكفاءة.",
        ourClientp3: "نؤمن بأن عملاءنا شركاء في النجاح، ونسعى إلى بناء علاقات مهنية طويلة الأمد تقوم على الثقة والشفافية والالتزام، من خلال التواصل المستمر، والاستجابة الفعّالة، وتقديم حلول قانونية تلبي تطلعاتهم.",
        ourClientp4: "كما تمكننا خبرتنا في التعامل مع عملاء من خلفيات متعددة، وإجادتنا للغات العربية والفرنسية والإنجليزية من تقديم خدمات قانونية احترافية تتوافق مع متطلبات البيئة القانونية والاقتصادية وتعزز قدرتنا على إدارة الملفات العابرة للحدود بكفاءة واقتدار",
        contactTitle: "تواصل معنا",
        contactText: "نحن هنا لخدمتك",
        contactUs : " تواصل معنا",
        contactUsp : "يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني",
        footer: "جميع الحقوق محفوظة © موقع شركة تركى مقبل الجدعانى 2026 "
    },
    en: {
        dir: "ltr",
        logo: "Law Firm",
        home: "Home",
        weARE: "About Us",
        service : "Our services",
        contact : "contact",
        title: "Trusted Legal Expertise",
        subtitle: "Professional legal solutions with high quality",
        cta: "Book Consultation",
        about: "About Us",
        about_p1 :"Turki Al-Jedani Advocate & Legal Consultancy (LLC) is a law firm that provides integrated services in the fields of legal advisory and dispute management and resolution, in accordance with the highest professional standards.",
        about_p2 :"The firm adopts a professional approach that combines legal precision, practical experience, and a deep understanding of the regulatory environment, enabling it to provide effective and innovative legal solutions that are commensurate with the nature of each matter and its challenges.",
        about_p3 :"We are committed to enabling our clients to make well-informed legal decisions through the provision of clear legal advice, precise handling of matters, and continuous follow-up at all stages of engagement, in a manner that ensures efficiency in performance and enhances the level of legal certainty",
        about_p4 :"The firm is also distinguished by its ability to handle matters of both a local and international nature through a multilingual working environment (Arabic, French, and English), ensuring the delivery of professional legal services with a high level of efficiency that meets client needs.",
        vision : "Our Vision",
        vision_p1 : "Our firm is founded upon a firm conviction that the rule of law constitutes the fundamental pillar for stability of legal transactions, and that achieving justice represents the core objective of all legal work, which forms the basis of our vision and future direction",
        vision_p2 : "We believe that legal excellence is not achieved merely through familiarity with statutory provisions, but rather through the integration of legal knowledge, practical experience, a deep understanding of the legal environment, and the ability to anticipate challenges and keep pace with legislative and regulatory developments.",
        vision_p3 : "Our vision is to be at the forefront of leading law firms in the Kingdom of Saudi Arabia, with an active presence at the international level, through the provision of integrated legal services with distinguished professional standards and efficiency, and through a multilingual approach (Arabic, French, and English), enhancing our ability to handle both local and international matters with competence and proficiency",
        vision_p4 : "We also aspire to contribute to the development of the legal sector, enhance the business environment, and support economic growth in line with the regulatory frameworks in the Kingdom, and in a manner that contributes to achieving the objectives of Saudi Vision 2030",
        message : "Our Message",
        message_p1 : "The message of our firm is to provide integrated legal services to our clients, based on accuracy, efficiency, and commitment, in a manner that meets their legal needs at both the local and international levels",
        message_p2 : "We are committed to providing practical and tailored legal solutions based on a thorough understanding of the legal, economic, and strategic dimensions of our clients' matters, through a professional approach grounded in precise analysis, strategic planning, and the ability to adapt to the nature of each matter, enabling us to provide accurate legal advice, effective dispute management, and achieve the best possible outcomes",
        message_p3 : "Our ability to operate in Arabic, French, and English contributes to enhancing the quality of communication with our clients and enables us to manage international matters and deal efficiently with multinational parties",
        message_p4 : "We are committed to defending our clients' interests with professionalism and firmness, while adopting a proactive approach aimed at preventing disputes where possible and achieving the best outcomes when resorting to legal proceedings",
        Values : "Our Goals & Values",
        Values_p1 : "We aim, through our firm, to provide integrated legal services with high professional standards that meet the needs of our clients, whether companies or individuals, and contribute to supporting the business environment and enhancing legal stability in accordance with the regulations in force in the Kingdom",
        Values_p2 : "We also strive for the continuous development of our professional capabilities and the enhancement of our expertise, enabling us to keep pace with legislative and regulatory developments and provide effective legal solutions that align with the latest legal and economic developments",
        Values_p3 : "Our work is based on a system of professional values that guide our practices and reflect our institutional identity, including integrity, transparency, loyalty, and excellence. We attach particular importance to professional ethics and responsibility in the practice of our profession",
        Values_p4 : "We also work towards contributing to the development of the legal environment and enhancing investment attractiveness by supporting economic activities and providing legal services that are aligned with best local and international practices",
        Team : "Our Team",
        Team_p1 : "Our firm comprises a team of qualified lawyers and legal consultants who combine strong academic qualifications with advanced practical experience across various fields of law",
        Team_p2 : "We place particular importance on the integration of expertise and diversity of specializations within the team, enabling the handling of matters through a comprehensive methodology and an in-depth legal perspective, and contributing to the provision of effective and integrated legal solutions that meet client needs",
        Team_p3 : "Our team possesses extensive knowledge of laws, regulations, and professional practices, with the ability to handle local cases and matters of an international nature efficiently, supported by proficiency in Arabic, French, and English, thereby enhancing communication with a diverse client base",
        Team_p4 : "We are also committed to attracting distinguished legal talents and continuously investing in the development of our team's capabilities and enhancing their skills, ensuring the maintenance of the highest levels of professional performance and responsiveness to evolving legal matters",
        mangert: "Company manager",
        manager: "Manager",
        nameManager : "Dr. Turki Al-Jadaani",
        managerCeo : "General Manager",
        managerTitle1 : "Your trusted legal partner for consultations, litigation, contract drafting, and intellectual property protection.",
        managerTitle2 : "We have a specialized team working to provide expert legal services and practical solutions that support individuals and companies and protect their rights and interests.",
        managerTitle3 :"We believe that justice begins with a deep understanding of systems and laws, so we dedicate our expertise to providing professional legal services that ensure the protection of rights and the best results for our clients.",

        servicesTitle: "Our Services",
        s11: "Commercial Cases",
        s22: "Criminal Cases",
        s33: "Legal Consulting",
        s44: "Contract Drafting",
        s1: "Litigation",
        s2: "Contract Drafting and Review",
        s3: "Company Formation",
        s4: "Compliance and Governance",
        s5: "Dispute Management and Resolution",
        s6: "Intellectual Property",
        s7: "Restructuring, Mergers and Acquisitions",
        s8: "Zakat, Tax and Customs Services",
        s9: "Inheritance",
        clientTitle:"A legal partnership that begins with understanding .and continues through achieving results",
        clientp : "We believe that every legal matter is a journey that begins with a precise understanding, is managed through a clear methodology, and ends with the achievement of tangible results. Based on this, we guide our clients through an integrated legal experience built on professionalism, transparency, and strategic planning",
        clientJourney :"Client Journey",
        clientOne : "Meeting and Understanding Needs",
        clientOnep : "We begin our journey with the client by holding a meeting aimed at carefully listening to and understanding all details of the matter, analyzing their needs and objectives, thereby enabling the establishment of a clear legal perspective from the outset",
        clientTwo : "Proposal and Work Plan",
        clientTwop : "We present to the client a clear proposal including the proposed legal strategy, the work plan, and the expected procedures, ensuring clarity of direction and enabling the client to make decisions with confidence",
        clientThere : "Execution with Efficiency and Professionalism",
        clientTherep : "We proceed with the implementation of the approved strategy according to a precise methodology, with effective management of all procedures and professional execution aimed at achieving the best possible outcomes",
        clientFour : "Study and Legal Analysis",
        clientFourp : "We undertake an in-depth study of the matter by analyzing the facts and documents and reviewing the relevant regulations, with the aim of reaching an accurate legal assessment and a comprehensive view of the available options",
        clientFive : "Contracting and Structuring the Relationship",
        clientFivep : "We ensure the professional structuring of the contractual relationship through a clear agreement that defines the scope of work, obligations, and mechanisms of execution, ensuring transparency and the preservation of rights.",
        clientSix : "Communication and Continuous Updates",
        clientSixp : "We believe that communication is the foundation of trust; therefore, we ensure that our clients are continuously informed of developments in their matters through periodic updates and clear reports reflecting the progress of work with full transparency",
        ourClient : "Our Clients",
        ourClientp1: "We provide our services to a diverse range of clients, including companies, institutions, investors, entrepreneurs, and individuals, reflecting our ability to handle legal matters of both a local and international nature",
        ourClientp2: "We support our corporate clients throughout all stages of their business, from establishment and expansion to risk management and dispute resolution, and we also provide individuals with the necessary legal support to protect their rights and manage their legal affairs efficiently",
        ourClientp3: "We believe that our clients are partners in success, and we strive to build long-term professional relationships based on trust, transparency, and commitment, through continuous communication, effective responsiveness, and the provision of legal solutions that meet their expectations",
        ourClientp4: "Our experience in dealing with clients from diverse backgrounds, together with our proficiency in Arabic, French, and English, enables us to provide professional legal services that align with legal and economic requirements and enhances our ability to manage cross-border matters with efficiency and competence",
        contactTitle: "Contact Us",
        contactText: "We are here to help",
        contactUs : "Contact us",
        contactUsp : "You can contact us by phone or email.",
        footer: "All rights reserved © Turki Muqbil Al-Jadaani Company Website 2026"
    },
    fr: {
        dir: "ltr",
        logo: "Cabinet d'avocats",
        home: "Maison",
        weARE: "À propos de nous",
        service : "Nos services",
        contact : "de contact",
        title: "Expertise juridique fiable",
        subtitle: "Des solutions juridiques professionnelles",
        cta: "Réserver",
        about: "À propos de nous",
        about_p1 :"Turki Aljedani Avocat et Conseil Juridique (LLC) est un cabinet d'avocats qui fournit des services intégrés dans les domaines du conseil juridique ainsi que de la gestion, de la résolution des litiges et contentieux, conformément aux normes professionnelles les plus élevées",
        about_p2 :"Le cabinet adopte une approche professionnelle qui allie précision juridique, expérience pratique et compréhension approfondie de l'environnement réglementaire, lui permettant de fournir des solutions juridiques efficaces et innovantes, adaptées à la nature de chaque affaire et à ses défis",
        about_p3 :"Nous nous engageons à permettre à nos clients de prendre des décisions juridiques éclairées grâce à la fourniture de conseils juridiques clairs, à un traitement précis des dossiers et à un suivi continu à toutes les étapes de la mission, de .manière à garantir l'efficacité de la performance et à renforcer le niveau de sécurité juridique",
        about_p4 :"Le cabinet se distingue également par sa capacité à traiter des affaires tant locales qu'internationales grâce à un environnement de travail multilingue (arabe, français et anglais), assurant la prestation de services juridiques .professionnels avec un haut niveau d'efficacité répondant aux besoins des clients",
        vision : "Notre vision",
        vision_p1 : "Notre cabinet repose sur la conviction ferme que l'État de droit constitue le pilier fondamental de la stabilité des transactions juridiques, et que la réalisation de la justice représente l'objectif essentiel de tout travail juridique, ce qui constitue le fondement de notre vision et de notre orientation future",
        vision_p2 : "Nous estimons que l'excellence juridique ne se réalise pas uniquement par la connaissance des dispositions légales, mais plutôt par l'intégration du savoir juridique, de l'expérience pratique, d'une compréhension approfondie de l'environnement juridique, ainsi que par la capacité à anticiper les défis et à suivre l'évolution des cadres législatifs et réglementaires",
        vision_p3 : "Notre vision est d'être à l'avant-garde des cabinets d'avocats de premier plan au Royaume d'Arabie saoudite, avec une présence active à l'échelle internationale, à travers la fourniture de services juridiques intégrés selon des normes professionnelles distinguées et avec efficacité, ainsi qu'à travers une approche multilingue (arabe, français et anglais), renforçant notre capacité à traiter avec compétence et professionnalisme des affaires tant locales qu'internationales",
        vision_p4 : "Nous aspirons également à contribuer au développement du secteur juridique, à améliorer l'environnement des affaires et à soutenir la croissance économique conformément aux cadres réglementaires en vigueur dans le Royaume, et de manière à contribuer à la réalisation des objectifs de la vision Saoudienne 2030",
        message : "Notre message",
        message_p1 : "Notre message de notre cabinet est de fournir à nos clients des services juridiques intégrés, fondés sur la précision, l'efficacité et l'engagement, de manière à répondre à leurs besoins juridiques tant au niveau local qu'international",
        message_p2 : "Nous nous engageons à proposer des solutions juridiques pratiques et sur mesure, fondées sur une compréhension approfondie des dimensions juridiques, économiques et stratégiques des dossiers de nos clients, à travers une approche professionnelle reposant sur une analyse rigoureuse, une planification stratégique et une capacité d'adaptation à la nature de chaque affaire, nous permettant de fournir des conseils juridiques précis, une gestion efficace des litiges et d'atteindre les meilleurs résultats possibles",
        message_p3 : "Notre capacité à travailler en arabe, en français et en anglais contribue à renforcer la qualité de la communication avec nos clients et nous permet de gérer des dossiers internationaux et de traiter efficacement avec des parties multinationales",
        message_p4 : "Nous nous engageons à défendre les intérêts de nos clients avec professionnalisme et fermeté, tout en adoptant une approche proactive visant à prévenir les litiges lorsque cela est possible et à obtenir les meilleurs résultats en cas de recours aux procédures judiciaires",
        Values : "Nos objectifs et valeurs",
        Values_p1 : "Nous visons, à travers notre cabinet, à fournir des services juridiques intégrés selon des normes professionnelles élevées répondant aux besoins de nos clients, qu'il s'agisse d'entreprises ou de particuliers, et à contribuer au soutien de l'environnement des affaires ainsi qu'au renforcement de la stabilité juridique conformément aux réglementations en vigueur dans le Royaume",
        Values_p2 : "Nous œuvrons également au développement continu de nos compétences professionnelles et au renforcement de notre expertise, afin de suivre l'évolution des cadres législatifs et réglementaires et de fournir des solutions juridiques efficaces en adéquation avec les évolutions juridiques et économiques les plus récentes",
        Values_p3 : "Notre activité repose sur un ensemble de valeurs professionnelles qui guident nos pratiques et reflètent notre identité institutionnelle, notamment l'intégrité, la transparence, la loyauté et l'excellence. Nous accordons une importance particulière à l'éthique professionnelle et à la responsabilité dans l'exercice de notre profession",
        Values_p4 : "Nous travaillons également à contribuer au développement de l'environnement juridique et à renforcer l'attractivité de l'investissement en soutenant les activités économiques et en fournissant des services juridiques conformes aux meilleures pratiques locales et internationales",
        Team : "Notre équipe",
        Team_p1 : "Notre cabinet est composé d'une équipe d'avocats et de conseillers juridiques qualifiés, alliant de solides qualifications académiques à une expérience pratique avancée dans divers domaines du droit",
        Team_p2 : "Nous accordons une importance particulière à la complémentarité des expertises et à la diversité des spécialisations au sein de l'équipe, permettant le traitement des dossiers selon une approche globale et une vision juridique approfondie, et contribuant à la fourniture de solutions juridiques efficaces et intégrées répondant aux besoins des clients",
        Team_p3 : "Notre équipe dispose d'une connaissance approfondie des lois, des réglementations et des pratiques professionnelles, avec la capacité de traiter efficacement des affaires locales et des dossiers à dimension internationale, soutenue par une maîtrise de l'arabe, du français et de l'anglais, renforçant ainsi la communication avec une clientèle diversifiée",
        Team_p4 : "Nous nous engageons également à attirer des talents juridiques distingués et à investir en continu dans le développement des compétences de notre équipe ainsi que dans le renforcement de leurs aptitudes, garantissant le maintien des plus hauts niveaux de performance professionnelle et une adaptation constante à l'évolution des dossiers juridiques",
        mangert: "Directeur d'entreprise",
        manger: "Manager",
        nameManager : "Dr. Turki Al-Jadaani",
        managerCeo : "Directeur général",
        managerTitle1 : "Votre partenaire juridique de confiance pour les consultations, les litiges, la rédaction de contrats et la protection de la propriété intellectuelle.",
        managerTitle2 :"Nous disposons d'une équipe spécialisée qui travaille à fournir des services juridiques experts et des solutions pratiques pour soutenir les particuliers et les entreprises et protéger leurs droits et leurs intérêts.",
        managerTitle3 :"Nous croyons que la justice commence par une compréhension approfondie des systèmes et des lois, c'est pourquoi nous mettons notre expertise au service de la fourniture de services juridiques professionnels qui garantissent la protection des droits et les meilleurs résultats pour nos clients.",

        servicesTitle: "Nos Services",
        s11: "Affaires commerciales",
        s22: "Affaires pénales",
        s33: "Conseil juridique",
        s44: "Contrats",
        s1: "Contentieux",
        s2: "Rédaction et révision de contrats",
        s3: "Création de sociétés",
        s4: "Conformité et gouvernance",
        s5: "Gestion et résolution des litiges",
        s6: "Propriété intellectuelle",
        s7: "Restructuring, Mergers and Acquisitions",
        s8: "Services de Zakat, fiscalité et douanes",
        s9: "Partage d'héritage",
        clientTitle:"Un partenariat juridique qui commence par la compréhension et se poursuit jusqu'à l'obtention de résultats",
        clientp : "Nous considérons que chaque affaire juridique est un parcours qui commence par une compréhension précise, se poursuit par une gestion structurée selon une méthodologie claire, et se termine par l'obtention de résultats concrets. Dans cette optique, nous accompagnons nos clients à travers une expérience juridique intégrée fondée sur le professionnalisme, la transparence et la planification stratégique",
        clientJourney :"Parcours client",
        clientOne : "Rencontre et compréhension des besoins",
        clientOnep : "Nous débutons notre accompagnement avec le client par une rencontre visant à écouter attentivement et à comprendre tous les détails de l'affaire, à analyser ses besoins et ses objectifs, permettant ainsi d'établir dès le départ une vision juridique claire",
        clientTwo : "Proposition et plan de travail",
        clientTwop : "Nous présentons au client une proposition claire incluant la stratégie juridique envisagée, le plan de travail ainsi que les procédures prévues, garantissant une clarté d'orientation et permettant une prise de décision en toute confiance",
        clientThere : "Exécution avec efficacité et professionnalisme",
        clientTherep : "Nous procédons à la mise en œuvre de la stratégie approuvée selon une méthodologie rigoureuse, avec une gestion efficace de l'ensemble des procédures et une exécution professionnelle visant à atteindre les meilleurs résultats possibles",
        clientFour : "Etude et analyse juridique",
        clientFourp : "Nous procédons à une étude approfondie du dossier en analysant les faits et les documents et en examinant les réglementations applicables, afin d'aboutir à une évaluation juridique précise et à une vision globale des options disponibles",
        clientFive : "Contractualisation et structuration de la relation",
        clientFivep : "Nous assurons la structuration professionnelle de la relation contractuelle à travers un accord clair définissant le périmètre de la mission, les obligations et les modalités d'exécution, garantissant la transparence et la protection des droits",
        clientSix : "Communication et mises à jour continues",
        clientSixp : "Nous considérons que la communication est le fondement de la confiance; c'est pourquoi nous veillons à informer continuellement nos clients de l'évolution de leurs dossiers à travers des mises à jour périodiques et des rapports clairs reflétant l'avancement des travaux en toute transparence",
        ourClient : "Nos clients",
        ourClientp1: "Nous fournissons nos services à une large gamme de clients, incluant des sociétés, des institutions, des investisseurs, des entrepreneurs ainsi que des particuliers, ce qui reflète notre capacité à traiter des affaires juridiques de nature tant locale qu'internationale",
        ourClientp2: "Nous accompagnons nos clients à toutes les étapes de leur activité, de la création et l'expansion jusqu'à la gestion des risques et la résolution des litiges. Nous fournissons également aux particuliers l'accompagnement juridique nécessaire pour protéger leurs droits et gérer leurs affaires juridiques de manière efficace",
        ourClientp3: "Nous considérons nos clients comme des partenaires de réussite, et nous nous efforçons de construire des relations professionnelles durables fondées sur la confiance, la transparence et l'engagement, à travers une communication continue, une réactivité efficace et la fourniture de solutions juridiques répondant à leurs attentes",
        ourClientp4: "Notre expérience auprès de clients issus d'horizons divers, ainsi que notre maîtrise de l'arabe, du français et de l'anglais, nous permettent de fournir des services juridiques professionnels conformes aux exigences juridiques et économiques, et renforcent notre capacité à gérer efficacement les dossiers transfrontaliers avec compétence",
        contactTitle: "Contact",
        contactText: "Nous sommes à votre service",
        contactUs : "Contactez-nous",
        contactUsp : "Vous pouvez nous contacter par téléphone ou par courriel.",
        footer: "Tous droits réservés © Site Web de la société Turki Muqbil Al-Jadaani 2026"
    }
};

const el = id => document.getElementById(id);

function setLang(lang) {
    const t = data[lang];

    document.documentElement.lang = lang;
    document.body.dir = t.dir;

    Object.keys(t).forEach(key => {
        if (el(key)) el(key).textContent = t[key];
    });

    localStorage.setItem("lang", lang);
}

document.getElementById("lang").addEventListener("change", e => {
    setLang(e.target.value);
});

// تحميل اللغة المحفوظة
const saved = localStorage.getItem("lang") || "ar";
document.getElementById("lang").value = saved;
setLang(saved);
// new الخدمات-------------------------------------------------------------------
const serviceDetails = {
    ar: {
        s1: {
            title: "التقـــاضــــــي",
            text:"نقدم في شركة تركي مقبل الجدعاني للمحاماة والاستشارات القانونية خدمات متكاملة في مجال التقاضي تشمل مباشرة الدعاوى ومتابعتها أمام مختلف الجهات القضائية وشبه القضائية وإعداد المذكرات القانونية وصياغة الدفوع وتمثيل عملائنا في جميع مراحل التقاضي.",
            text2 : "- نتولى إدارة القضايا بمختلف أنواعها، بما في ذلك القضايا التجارية، والعمالية، والجزائية وقضايا الأحوال الشخصية، مع دراسة كل ملف بعناية، وبناء استراتيجية قانونية تستند إلى تحليل دقيق للوقائع والأنظمة ذات الصلة",
            text3 : "- كما نحرص على تمثيل عملائنا بكفاءة واحترافية، مع متابعة مستمرة لمجريات القضايا، والتواصل لإطلاعهم على تطورات الإجراءات، بما يحقق أفضل النتائج الممكنة ويحفظ مصالحهم وفق الأطر النظامية المعمول بها ",
        },
        s2: {
            title: "الملكية الفكرية",
            text :"- نقدم خدمات قانونية متكاملة في مجال حماية حقوق الملكية الفكرية، بما يمكن عملاءنا من صون أصولهم غير الملموسة وتعزيز قيمتها القانونية والتجارية.",
            text2 :"- نتولى تسجيل العلامات التجارية والأسماء التجارية والتصاميم الصناعية، وحماية حقوق المؤلف ومتابعة إجراءات براءات الاختراع، بما يضمن حماية شاملة لمختلف عناصر الملكية الفكرية لعملائنا، وفقا للأنظمة المعمول بها.",
            text3 :"- نعمل على تمثيل عملائنا في مواجهة حالات التعدي أو الانتهاك على حقوقهم، واتخاذ الإجراءات القانونية اللازمة لحمايتها، بما يعزز استدامة أعمالهم ويحفظ حقوقهم في مختلف الأسواق",
        },
        s3: {
            title: "تأسيس الشركات وتصفيتها",
            text :  "- نقدم في شركة تركي مقبل الجدعاني للمحاماة والاستشارات القانونية خدمات متكاملة لتأسيس الشركات في المملكة العربية السعودية، بما يمكن المستثمرين من الدخول إلى السوق السعودي بكفاءة ووفق الأطر النظامية المعمول بها.",
            text2 : "- نقدم خدمات متكاملة لتأسيس الشركات في المملكة العربية السعودية، بما يمكن المستثمرين من الدخول إلى السوق السعودي بكفاءة ووفق الأطر النظامية المعمول بها.",
            text3 : "- نحرص على تبسيط الإجراءات وتسريعها، وتقديم حلول قانونية عملية تمكن المستثمر من الانطلاق بثقة، مع تصميم هيكل قانوني وتنظيمي يتوافق مع أهدافه الاستثمارية ويواكب متطلبات البيئة النظامية في المملكة.",
            text4 : "- تتيح لنا خبرتنا في التعامل مع مستثمرين من خلفيات متعددة، وفهمنا للمتطلبات النظامية المحلية والدولية تقديم دعم قانوني فعّال يلبي احتياجات المستثمرين المحليين والدوليين على حد سواء، مع تهيئة بيئة قانونية مستقرة وآمنة لأعمالهم، بما يعزز فرص نجاح مشاريعهم واستدامتها ويدعم توسعهم داخل السوق السعودي",
        },
        s4: {
            title: "الامتثال والحوكمة",
            text  : "- نقدم في شركة تركي مقبل الجدعاني للمحاماة والاستشارات القانونية خدمات متكاملة في مجال الامتثال والحوكمة، تهدف إلى تمكين الشركات من الالتزام بالأنظمة واللوائح المعمول بها ، وتعزيز كفاءة أعمالها ضمن إطار قانوني منظم ومستقر",
            text2 : "- نعمل على دعم عملائنا في إعداد وتطوير السياسات الداخلية واللوائح التنظيمية ومراجعة التزاماتهم النظامية، بما يضمن توافق أعمالهم مع المتطلبات القانونية ويحد من المخاطر المحتملة.",
            text3 : "- نواكب عملاءنا في تعزيز ممارسات الحوكمة، من خلال تقديم استشارات قانونية تسهم في تنظيم الهياكل الإدارية، وتحسين آليات اتخاذ القرار، بما يدعم استدامة الأعمال ويرفع مستوى الامتثال المؤسسي",
        },
        s5: {
            title: "إدارة وتسوية النزاعات",
            text  : "- نقدم في شركة تركي مقبل الجدعاني للمحاماة والاستشارات القانونية خدمات متكاملة في إدارة وتسوية النزاعات، مع الحرص على تبني حلول عملية واستراتيجية تحافظ على مصالح عملائنا وتحد من الآثار القانونية للنزاع.",
            text2 : "- نعمل على دراسة النزاعات وتحليل أبعادها القانونية بدقة، وتقييم الخيارات المتاحة، بما يمكن من اختيار المسار الأنسب لمعالجة النزاع، سواء من خلال التفاوض التسوية الودية الوساطة أو الصلح.",
            text3 : "- تشمل خدماتنا التعامل مع مختلف أنواع النزاعات، بما في ذلك النزاعات التجارية والعمالية، إضافة إلى المسائل المرتبطة بالأحوال الشخصية، بما يعكس قدرتنا على تقديم دعم قانوني شامل يلبي احتياجات عملائنا من الشركات والأفراد على حد سواء",
            text4 : "- نحرص على تمثيل عملائنا بكفاءة في مختلف إجراءات تسوية النزاعات، مع التركيز على تحقيق أفضل النتائج الممكنة بأعلى درجات الكفاءة وبما يحد من المخاطر والتكاليف قدر الإمكان، وبما يضمن حماية مصالحهم واستمرارية أعمالهم.",
        },
        s6: {
            title: "صياغة ومراجعة العقود",
            text  : "- نقدم في شركة تركي مقبل الجدعاني للمحاماة والاستشارات القانونية خدمات متكاملة في إعداد وصياغة ومراجعة مختلف أنواع العقود، بما يضمن حماية مصالح عملائنا والحد من المخاطر القانونية.",
            text2 : "- نعمل على إعداد عقود دقيقة ومتوازنة تعكس طبيعة العلاقة التعاقدية وتحدد الحقوق والالتزامات بشكل واضح، مع مراعاة أفضل الممارسات القانونية والتجارية، وبما يتوافق مع الأنظمة المعمول بها.",
            text3 : "- نتولى مراجعة العقود القائمة وتحليل بنودها، واقتراح التعديلات اللازمة لتعزيز المراكز القانونية لعملائنا إضافة إلى تقديم الدعم في التفاوض على الشروط التعاقدية بما يحقق أفضل النتائجو يحفظ حقوقهم.",
            text4 : "- نقدم خدمات قانونية متخصصة في مجموعة واسعة من العقود، بما في ذلك على سبيل المثال لا ،الحصر: عقود الإنشاءات الدولية وفق نماذج فيديك FIDIC ، والعقود الحكومية، ففواتفاقيات التطوير العقاري، بالإضافة إلى مذكرات التفاهم، واتفاقيات الشراكة والمشاريع المشتركة. كما نقدم الاستشارات بشأن عقود الإيجار، وعقود الشحن والخدمات اللوجستية، مع تقديم حلول قانونية مهيأة بعناية لتواكب كافة أهداف عملائنا وتحقق أعلى درجات الكفاءة والامتثال",
        },
        s7: {
            title: "إعادة الهيكلة والاندماج والاستحواذ",
            text  : "- نقدم في شركة تركي مقبل الجدعاني للمحاماة والاستشارات القانونية خدمات قانونية متكاملة لدعم الشركات في عمليات إعادة الهيكلة والاندماج والاستحواذ، بما يمكنها من تحقيق أهدافها الاستراتيجية وتعزيز كفاءتها التشغيلية ضمن إطار قانوني منظم.",
            text2 : "- نعمل على تقديم استشارات قانونية شاملة تغطي مختلف مراحل هذه الإجراءات، ابتداء من دراسة الهيكلة المناسبة، وتقييم الجوانب القانونية، وتحليل المخاطر المحتملة، وصولا إلى إعداد وصياغة المستندات القانونية ذات الصلة ومتابعة تنفيذ الإجراءات",
            text3 : "- نحرص على مرافقة عملائنا خلال هذه العمليات، وتقديم دعم قانوني دقيق يضمن سلامة الإجراءات وتوافقها مع الأنظمة المعمول بها، بما يعزّز فرص نجاح العمليات ويحافظ على استقرار الكيانات القانونية واستمرارية أعمالها وتعزيز استقرارها المؤسسي",
        },
        s8: {
            title: "خدمات الزكاة والضريبة والجمارك",
            text  : "- نقدم في شركة تركي مقبل الجدعاني للمحاماة والاستشارات القانونية خدمات قانونية متكاملة في مجال الزكاة والضريبة والجمارك، تمكن عملاءنا من إدارة التزاماتهم بكفاءة، وتضمن الامتثال للأنظمة المعمول بها، وتحد من المخاطر النظامية المرتبطة بها.",
            text2 : "- نعمل على تقديم استشارات قانونية متخصصة في المسائل الزكوية والضريبية والجمركية، بما يشمل دعم عملائنا في التعامل مع التزاماتهم النظامية، ومعالجة التحديات العملية التي قد تواجههم، وتقديم الحلول القانونية المناسبة التي تدعم استقرار أعمالهم وتعزز الامتثال.",
            text3 : "- نتولى تمثيل عملائنا أمام هيئة الزكاة والضريبة والجمارك في كافة الإجراءات، ومباشرة المنازعات والتظلمات الزكوية والضريبية والجمركية، مع متابعة دقيقة للملفات والعمل على حماية مصالحهم وتحقيق أفضل النتائج الممكنة.",
            text4 : "- نقدم المشورة فيما يتعلق بالمتطلبات الجمركية والإجراءات المرتبطة بحركة البضائع بما يشمل مساندة عملائنا في التعامل مع متطلبات التخليص الجمركي والإجراءات . النظامية ذات الصلة، بما يضمن توافقها مع الأنظمة المعمول بها.",
        },
        s9: {
            title: "التركات",
            text  : "نتولى التمثيل القانوني في قضايا التركات وقسمة الميراث، بما يشمل الأموال والعقارات وسائر الأصول، مع إدارة وتسوية النزاعات الناشئة بين الورثة سواء بالطرق الودية أو عبر الإجراءات القضائية. كما نقدم خدماتنا في قضايا إثبات الأوقاف والمسائل القانونية المرتبطة بها.",
        },
    },
    en: {
        s1: {
            title: "Litigation",
            text  : "- At Turki Al-Jedani Advocate & Legal Consultancy, we provide integrated services in the field of litigation, including the initiation and follow-up of claims before various judicial and quasi-judicial bodies, the preparation of legal memoranda, the drafting of pleadings, and the representation of our clients at all stages of litigation.",
            text2 : "- We undertake the management of cases of all types, including commercial, labor, criminal, and family law cases, with careful study of each matter and the development of a legal strategy based on a precise analysis of the facts and applicable laws.",
            text3 : "- We are committed to representing our clients with efficiency and professionalism, with continuous follow-up of proceedings and communication to keep them informed of developments, in a manner that achieves the best possible outcomes and safeguards their interests in accordance with applicable legal frameworks",
        },
        s2: {
            title: "Contract Drafting and Review",
            text  : "- At Turki Al-Jedani Advocate & Legal Consultancy, we provide integrated services in the preparation, drafting, and review of various types of contracts, ensuring the protection of our clients' interests and the mitigation of legal risks",
            text2 : "- We prepare precise and balanced contracts that reflect the nature of the contractual relationship and clearly define rights and obligations, taking into account best legal and commercial practices and in compliance with applicable regulations",
            text3 : "- We also undertake the review of existing contracts, analyze their provisions, propose necessary amendments to strengthen our clients' legal positions, and provide support in negotiating contractual terms in a manner that achieves the best possible outcomes and preserves their rights",
            text4 : "- We offer specialized legal services in a wide range of contracts, including but not limited to international construction agreements under FIDIC, governmental contracts, consultancy and real estate development agreements, as well as Memorandums of understanding (MoU), partnership and joint ventures agreements. We also advise on lease agreements and shipment &logistics contracts, providing tailored, business-oriented legal solutions",
        },
        s3: {
            title: "Company Formation",
            text  : "- At Turki Al-Jedani Advocate & Legal Consultancy, we provide integrated services for company formation in the Kingdom of Saudi Arabia, enabling investors to enter the Saudi market efficiently and in accordance with applicable regulations",
            text2 : "- We support our clients throughout all stages of formation, starting from studying the activity and selecting the appropriate legal entity, through obtaining the required licenses, and ending with the issuance of the commercial registration and the completion of operational requirements",
            text3 : "- We are committed to simplifying procedures and expediting them, and to providing practical legal solutions that enable investors to commence their business with confidence, while designing a legal and organizational structure that aligns with their investment objectives and keeps pace with the regulatory environment in the Kingdom",
            text4 : "- Our experience in dealing with investors from diverse backgrounds, and our understanding of local and international regulatory requirements, enable us to provide effective legal support that meets the needs of both local and international investors, while creating a stable and secure legal environment for their businesses, enhancing the success and sustainability of their projects and supporting their expansion within the Saudi market",
        },
        s4: {
            title: "Compliance and Governance",
            text  : "- At Turki Al-Jedani Advocate & Legal Consultancy, we provide integrated services in the field of compliance and governance, aimed at enabling companies to adhere to applicable laws and regulations and enhance the efficiency of their operations within a structured and stable legal framework",
            text2 : "- We support our clients in the preparation and development of internal policies and regulatory frameworks, and in reviewing their legal obligations, ensuring that their operations comply with legal requirements and minimizing potential risks",
            text3 : "- We also assist our clients in strengthening governance practices through the provision of legal advice that contributes to structuring administrative frameworks and improving decision-making mechanisms, thereby supporting business sustainability and enhancing the level of institutional compliance",
        },
        s5: {
            title: "Dispute Management and Resolution",
            text  : "- At Turki Al-Jedani Advocate & Legal Consultancy, we provide integrated services in dispute management and resolution, with a focus on adopting practical and strategic solutions that protect our clients' interests and mitigate the legal implications of disputes",
            text2 : "- We analyze disputes and assess the available options to determine the most appropriate course of action, whether through negotiation, amicable settlement, mediation, or reconciliation",
            text3 : "- Our services cover various types of disputes, including commercial and labor disputes, as well as family law matters, reflecting our ability to provide comprehensive legal support to both corporate and individual clients",
            text4 : "- We are committed to representing our clients efficiently throughout dispute resolution proceedings, with a focus on achieving the best possible outcomes with the highest level of efficiency and minimizing risks and costs as much as possible, while safeguarding their interests and ensuring the continuity of their businesses",
        },
        s6: {
            title: "Intellectual Property",
            text  : "- At Turki Al-Jedani Advocate & Legal Consultancy, we provide integrated legal services in the field of the protection of intellectual property rights, enabling our clients to safeguard their intangible assets and enhance their legal and commercial value",
            text2 : "- We undertake the registration of trademarks, trade names, and industrial designs, the protection of copyright, and the follow-up of patent procedures, ensuring comprehensive protection of the various elements of intellectual property of our clients, in accordance with the applicable regulations",
            text3 : "- We also represent our clients in cases of infringement or violation of their rights and take the necessary legal measures to protect them, in a manner that enhances the sustainability of their businesses and preserves their rights in various markets",
        },
        s7: {
            title: "Restructuring, Mergers and Acquisitions",
            text  : "- At Turki Al-Jedani Advocate & Legal Consultancy, we provide integrated legal services to support companies in restructuring, mergers, and acquisitions, enabling them to achieve their strategic objectives and enhance their operational efficiency within a structured legal framework",
            text2 : "- We provide comprehensive legal advice covering all stages of such processes, starting from the study of the appropriate structure, assessment of legal aspects, and analysis of potential risks, through to the preparation and drafting of the relevant legal documentation and the follow-up of implementation procedures",
            text3 : "- We are committed to accompanying our clients throughout these processes and providing precise legal support that ensures the soundness of procedures and their compliance with applicable regulations, in a manner that enhances the success of such transactions and preserves the stability of legal entities, the continuity of their business, and the strengthening of their institutional stability",
        },
        s8: {
            title: "Zakat, Tax and Customs Services",
            text  : "- At Turki Al-Jedani Advocate & Legal Consultancy, we provide integrated legal services in the field of zakat, tax, and customs, enabling our clients to manage their obligations efficiently, ensure compliance with applicable regulations, and mitigate the legal risks associated therewith",
            text2 : "- We provide specialized legal advice in zakat, tax, and customs matters, including supporting our clients in dealing with their regulatory obligations, addressing practical challenges they may face, and providing appropriate legal solutions that support business stability and enhance compliance",
            text3 : "- We represent our clients before the Zakat, Tax and Customs Authority in all procedures, and undertake the handling of zakat, tax, and customs disputes and appeals, with careful follow-up of matters and the protection of their interests and the achievement of the best possible outcomes",
            text4 : "- We also provide legal advice in relation to customs requirements and procedures associated with the movement of goods, including supporting our clients in dealing with customs clearance requirements and related regulatory procedures, in a manner that ensures compliance with applicable regulations",
        },
        s9: {
            title: "Inheritance",
            text  : "- We provide legal representation in inheritance and estate division matters, including financial assets, real estate, and other types of estates, while handling and resolving disputes among heirs through amicable settlements or judicial proceedings. We also assist in endowment (Waqf) verification cases .and related legal matters",

        },
    },
    fr: {
        s1: {
            title: "Contentieux",
            text  : "- Au sein de notre cabinet, nous fournissons des services intégrés dans le domaine du contentieux, incluant l'introduction et le suivi des actions devant les différentes juridictions et instances quasi-judiciaires, la préparation des mémoires juridiques, la rédaction des écritures et la représentation de nos clients à toutes les étapes de la procédure.",
            text2 : "- Nous assurons la gestion de dossiers de toute nature, y compris en matière commerciale, sociale, pénale et de droit de la famille, avec une étude approfondie de chaque affaire et l'élaboration d'une stratégie juridique fondée sur une analyse précise des faits et des lois applicables.",
            text3 : "- Nous nous engageons à représenter nos clients avec efficacité et professionnalisme, en assurant un suivi continu des procédures ainsi qu'une communication régulière afin de les tenir informés des évolutions, de manière à obtenir les meilleurs résultats possibles et à préserver leurs intérêts conformément aux cadres juridiques applicables",
        },
        s2: {
            title: "Rédaction et révision de contrats",
            text  : "- Au sein de notre cabinet, nous fournissons des services intégrés en matière de préparation, de rédaction et de révision .de divers types de contrats, en veillant à la protection des intérêts de nos clients et à la réduction des risques juridiques",
            text2 : "- Nous élaborons des contrats précis et équilibrés reflétant la nature de la relation contractuelle et définissant clairement les droits et obligations, tout en tenant compte des meilleures pratiques juridiques et commerciales et en conformité avec les réglementations applicables",
            text3 : "- Nous assurons également la révision des contrats existants, l'analyse de leurs dispositions, la proposition des modifications nécessaires afin de renforcer la position juridique de nos clients, ainsi que l'accompagnement dans la négociation des termes contractuels, de manière à obtenir les meilleurs résultats possibles et à préserver leurs droits.",
            text4 : "- Nous offrons des services juridiques spécialisés dans un large éventail de contrats, y compris, sans s'y limiter, les contrats internationaux de construction selon les modèles FIDIC, les contrats gouvernementaux, les contrats de conseil et de développement immobilier, ainsi que les protocoles d'accord (MoU), les contrats de partenariat et de joint-venture. Nous conseillons également en matière de contrats de location et de contrats de transport et de logistique, en fournissant des solutions .juridiques sur mesure orientées vers les besoins des entreprises",
        },
        s3: {
            title: "Création de sociétés",
            text  : "- Au sein de notre cabinet, nous fournissons des services intégrés pour la création de sociétés au Royaume d'Arabie saoudite, permettant aux investisseurs d'accéder au marché saoudien de manière efficace et conforme aux réglementations en vigueur",
            text2 : "- Nous accompagnons nos clients à toutes les étapes de la création de la société, par l'étude de l'activité et le choix de la forme juridique appropriée, en passant par l'obtention des licences requises, jusqu'à la délivrance de l'immatriculation commerciale et l'achèvement des exigences opérationnelles",
            text3 : "- Nous nous engageons à simplifier et à accélérer les procédures, et à fournir des solutions juridiques pratiques permettant aux investisseurs de démarrer leurs activités en toute confiance, tout en concevant une structure juridique et organisationnelle conforme à leurs objectifs d'investissement et adaptée à l'environnement réglementaire du Royaume",
            text4 : "- Notre expérience dans l'accompagnement d'investisseurs de divers horizons, ainsi que notre compréhension des exigences réglementaires locales et internationales, nous permettent de fournir un accompagnement juridique efficace répondant aux besoins des investisseurs locaux et internationaux, tout en créant un environnement juridique stable et sécurisé pour leurs activités, favorisant ainsi la réussite et la pérennité de leurs projets et soutenant leur expansion sur le marché saoudien",
        },
        s4: {
            title: "Conformité et gouvernance",
            text  : "- Au sein de notre cabinet, nous fournissons des services intégrés dans le domaine de la conformité et de la gouvernance, visant à permettre aux entreprises de respecter les lois et réglementations applicables et à améliorer l'efficacité de leurs opérations dans un cadre juridique structuré et stable",
            text2 : "- Nous accompagnons nos clients dans la préparation et le développement des politiques internes et des cadres réglementaires, ainsi que dans la revue de leurs obligations juridiques, en veillant à la conformité de leurs activités avec .les exigences légales et à la réduction des risques",
            text3 : "- Nous assistons également nos clients dans le renforcement des pratiques de gouvernance par la fourniture de conseils juridiques contribuant à structurer les cadres administratifs et à améliorer les mécanismes de prise de décision, soutenant ainsi la pérennité des activités et renforçant le niveau de conformité institutionnelle",
        },
        s5: {
            title: "Gestion et résolution des litiges",
            text  : "- Au sein de notre cabinet, nous fournissons des services intégrés en matière de gestion et de résolution des litiges, en mettant l'accent sur l'adoption de solutions pratiques et stratégiques visant à protéger les intérêts de nos clients et à réduire les conséquences juridiques des différends",
            text2 : "- Nous analysons les litiges et évaluons les options disponibles afin de déterminer la voie la plus appropriée, que ce soit par la négociation, le règlement amiable, la médiation ou la conciliation",
            text3 : "- Nos services couvrent différents types de litiges, notamment les litiges commerciaux, les litiges sociaux ainsi que les affaires de droit de la famille, reflétant notre capacité à fournir un accompagnement juridique complet tant aux entreprises qu'aux particuliers",
            text3 : "- Nous nous engageons à représenter nos clients avec efficacité tout au long des procédures de résolution des litiges, en visant les meilleurs résultats possibles avec le plus haut niveau d'efficacité, tout en minimisant autant que possible les risques et les coûts, et en préservant leurs intérêts ainsi que la continuité de leurs activités",
        },
        s6: {
            title: "Propriété intellectuelle",
            text  : "- Au sein de notre cabinet nous fournissons des services juridiques intégrés dans le domaine de la protection des droits de propriété intellectuelle, permettant à nos clients de sécuriser leurs actifs immatériels et de renforcer leur valeur juridique et commerciale.",
            text2 : "- Nous assurons l'enregistrement des marques, des noms commerciaux et des dessins et modèles industriels, la protection du droit d'auteur, ainsi que le suivi des procédures relatives aux brevets, garantissant une protection complète des différents éléments de propriété intellectuelle de nos clients, conformément aux réglementations en `vigueur",
            text3 : "- Nous représentons également nos clients dans les cas de contrefaçon ou de violation de leurs droits et prenons les -mesures juridiques nécessaires pour les protéger, de manière à renforcer la pérennité de leurs activités et à préserver leurs droits sur différents marchés",
        },
        s7: {
            title: "Restructuring, Mergers and Acquisitions",
            text  : "- At Turki Al-Jedani Advocate & Legal Consultancy, we provide integrated legal services to support companies in restructuring, mergers, and acquisitions, enabling them to achieve their strategic objectives and enhance their operational efficiency within a structured legal framework",
            text2 : "- We provide comprehensive legal advice covering all stages of such processes, starting from the study of the appropriate structure, assessment of legal aspects, and analysis of potential risks, through to the preparation and drafting of the relevant legal documentation and the follow-up of implementation procedures",
            text3 : "- We are committed to accompanying our clients throughout these processes and providing precise legal support that ensures the soundness of procedures and their compliance with applicable regulations, in a manner that enhances the success of such transactions and preserves the stability of legal entities, the continuity of their business, and the strengthening of their institutional stability",
        },
        s8: {
            title: "Services de Zakat, fiscalité et douanes",
            text  : "- Au sein de notre cabinet, nous fournissons des services juridiques intégrés dans le domaine de la zakat, de la fiscalité et des douanes, permettant à nos clients de gérer efficacement leurs obligations, d'assurer leur conformité avec les réglementations applicables et de réduire les risques juridiques y afférents",
            text2 : "- Nous fournissons des conseils juridiques spécialisés en matière de zakat, de fiscalité et de douanes, notamment en accompagnant nos clients dans le respect de leurs obligations réglementaires, la gestion des difficultés pratiques qu'ils peuvent rencontrer et la mise en place de solutions juridiques adaptées favorisant la stabilité de leurs activités et .renforçant leur conformité",
            text3 : "- Nous représentons nos clients devant l'Autorité de la Zakat, de la Fiscalité et des Douanes dans l'ensemble des procédures, et assurons le traitement des litiges et recours en matière de zakat, de fiscalité et de douanes, avec un suivi rigoureux des dossiers afin de protéger leurs intérêts et d'obtenir les meilleurs résultats possibles",
            text4 : "- Nous fournissons également des conseils juridiques relatifs aux exigences et procédures douanières liées à la circulation des marchandises, notamment en accompagnant nos clients dans les démarches de dédouanement et les procédures réglementaires associées, de manière à garantir le respect .des réglementations en vigueur",
        },
        s9: {
            title: "Partage d'héritage",
            text  : "- Nous assurons la représentation juridique dans les affaires de succession et de partage d'héritage, incluant les avoirs financiers, les biens immobiliers et tout autre type de patrimoine successoral, ainsi que la gestion et la résolution des litiges entre héritiers, à l'amiable ou par voie judiciaire. Nous intervenons également dans les procédures relatives à la reconnaissance des waqfs et .aux questions juridiques y afférentes",
        },
    }
};

function openService(serviceId) {
    const lang = localStorage.getItem("lang") || "ar";
    const data = serviceDetails[lang][serviceId];

    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalText").textContent = data.text;
    document.getElementById("modalText2").textContent = data.text2;
    document.getElementById("modalText3").textContent = data.text3;
    document.getElementById("modalText4").textContent = data.text4;

    document.getElementById("serviceModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
}

// اغلاق عند الضغط خارج النافذة
window.onclick = function(e) {
    const modal = document.getElementById("serviceModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
// card read more---------------------------------------------------------
let about_Company = document.querySelectorAll(".about_Company");
about_Company.forEach(element => {
    let button = element.querySelector("button");
    button.onclick = function(){
        element.classList.toggle("active"); 
        button.classList.toggle("active_button");   
        if(button.classList.contains("active_button")){
            button.innerHTML = 'Read Less';
        }else {
            button.innerHTML = "Read More";
        }
    }
});

let card_gold = document.querySelectorAll(".card_gold");
card_gold.forEach(element => {
    let button = element.querySelector("button");
    button.onclick = function(){
        element.classList.toggle("active"); 
        button.classList.toggle("active_button");   
        if(button.classList.contains("active_button")){
            button.innerHTML = 'Read Less';
        }else {
            button.innerHTML = "Read More";
        }
    }
});
let card_white_one = document.querySelectorAll(".card_white_one");
card_white_one.forEach(element => {
    let button = element.querySelector("button");
    button.onclick = function(){
        element.classList.toggle("active"); 
        button.classList.toggle("active_button");   
        if(button.classList.contains("active_button")){
            button.innerHTML = 'Read Less';
        }else {
            button.innerHTML = "Read More";
        }
    }
});
let card_black_blue = document.querySelectorAll(".card_black_blue");
card_black_blue.forEach(element => {
    let button = element.querySelector("button");
    button.onclick = function(){
        element.classList.toggle("active"); 
        button.classList.toggle("active_button");   
        if(button.classList.contains("active_button")){
            button.innerHTML = 'Read Less';
        }else {
            button.innerHTML = "Read More";
        }
    }
});
let card_white = document.querySelectorAll(".card_white");
card_white.forEach(element => {
    let button = element.querySelector("button");
    button.onclick = function(){
        element.classList.toggle("active"); 
        button.classList.toggle("active_button");   
        if(button.classList.contains("active_button")){
            button.innerHTML = 'Read Less';
        }else {
            button.innerHTML = "Read More";
        }
    }
});
// end read more ------------------------------------------------------

// client journey
 document.addEventListener("DOMContentLoaded", function() {
            // تحديد جميع العناصر التي تحتوي على كلاس animate-item
            const animatedItems = document.querySelectorAll('.animate-item');

            // إعداد الـ Intersection Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    // إذا ظهر العنصر في الشاشة، أضف كلاس visible
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // إيقاف مراقبة العنصر بعد ظهوره لمنع تكرار الحركة
                        observer.unobserve(entry.target); 
                    }
                });
            }, {
                threshold: 0.1, // تفعيل الحركة عندما يظهر 10% من العنصر
                rootMargin: "0px 0px -50px 0px"
            });

            // ربط الـ observer بالعناصر
            animatedItems.forEach((item) => {
                observer.observe(item);
            });
        });
// ----------------------------------------------------------------
// client ----------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
            // اختيار جميع العناصر التي ستحصل على الحركة
            const elements = document.querySelectorAll('.fade-up');

            // إعداد المراقب (Intersection Observer)
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // إضافة تأخير زمني بسيط لكل عنصر ليظهروا بالتتابع
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 150); // 150 ملي ثانية بين كل عنصر وآخر
                        
                        // إيقاف مراقبة العنصر بعد ظهوره
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1, // يبدأ التأثير عند ظهور 10% من العنصر
                rootMargin: "0px 0px -50px 0px"
            });

            // تطبيق المراقب على العناصر
            elements.forEach(element => {
                observer.observe(element);
            });
        });
        // manger------------------------------------------------------------
         document.addEventListener("DOMContentLoaded", function() {
            const card = document.getElementById('managerCard');
            
            // تجهيز البطاقة للحركة
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            
            // تنفيذ الحركة بعد تحميل الصفحة بـ 100 ملي ثانية
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        });