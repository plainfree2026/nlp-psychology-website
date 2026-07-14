// ============================================================
// NLP心理学自助成长网站 - 数据文件
// ============================================================

// ------------------------------------------------------------
// 1. 现状洞察 - 中小学生心理问题数据
// ------------------------------------------------------------
const crisisData = {
  stats: [
    { value: "17.5%", label: "6-16岁精神障碍总患病率", desc: "每6个孩子就有1个存在心理健康问题" },
    { value: "10%→40%", label: "抑郁检出率阶梯上升", desc: "小学10% → 初中25-30% → 高中35-40%" },
    { value: "30%", label: "中学生厌学率", desc: "其中重度厌学达5-10%" },
    { value: "<20%", label: "就诊率", desc: "29%家长要等孩子求助4次以上才带其就诊" },
    { value: "58%", label: "抑郁患者自杀意念率", desc: "青少年抑郁患者中超过半数有自杀想法" },
    { value: "40.1%→8.2%", label: "家庭忽视的影响", desc: "母亲高忽视vs低忽视，孩子抑郁风险大幅下降" }
  ],
  problems: [
    {
      title: "空心病",
      proposer: "徐凯文（北京大学心理健康教育与咨询中心）",
      definition: "核心症状是价值观断裂和意义感坍缩，患者外表优秀但内心空洞，缺乏存在意义。不同于典型抑郁症，抗抑郁药物效果有限。",
      manifestations: ["感到内心空虚", "对一切失去兴趣", "不知道自己为什么活着", "强烈的无意义感", "完美主义却缺乏动力"],
      causes: ["唯分数论的教育评价体系", "家庭过度保护下的自主感缺失", "社会功利化价值观的渗透", "缺乏超越性的精神追求"]
    },
    {
      title: "躺平",
      proposer: "社会文化现象",
      definition: "面对持续压力和无力感时，学生选择降低期望、放弃竞争、以消极抵抗方式应对。表现为学业退缩、社交回避、生活低欲望。",
      manifestations: ["作业拖延或拒交", "课堂趴睡或走神", "拒绝参加集体活动", "沉迷手机/游戏逃避现实", "对前途漠不关心"],
      causes: ["内卷化竞争下的习得性无助", "努力与回报不成正比的现实认知", "同伴比较中的自我贬低", "家庭高期望与个人能力的落差"]
    },
    {
      title: "厌学",
      proposer: "多维度分类",
      definition: "对学习活动持久的负面态度和行为，可分为动因性厌学（缺乏动力）、心因性厌学（心理创伤导致）和混合型。",
      manifestations: ["拒绝上学或频繁请假", "考试焦虑/躯体化症状", "对学校/老师/同学产生敌意", "学习自我效能感极低", "可能伴随自伤行为"],
      causes: ["学业挫败积累", "师生/同伴关系创伤", "家庭功能失调", "学习障碍未被发现", "心理基础问题（抑郁/焦虑）"]
    }
  ],
  interventionFramework: {
    school: ["心理健康课程常态化", "建立预警筛查机制", "教师心理健康素养培训", "减负与评价改革"],
    family: ["从成绩导向转向关系导向", "情感回应优先于问题解决", "允许孩子表达负面情绪", "降低控制，增加自主空间"],
    individual: ["NLP简快干预技术", "意义疗法/存在主义取向", "认知行为疗法(CBT)", "正念与接纳承诺疗法(ACT)", "积极心理学优势培养"]
  }
};

// ------------------------------------------------------------
// 2. 全球Top 20 NLP专家
// ------------------------------------------------------------
const globalExperts = [
  { rank:1, name_en:"Richard Bandler", name_cn:"理查德·班德勒", nationality:"美国", category:"NLP创始人",
    works:["The Structure of Magic I & II","Frogs into Princes","Using Your Brain for a Change","Time for a Change"],
    techniques:["元模型(Meta-Model)","心锚技术(Anchoring)","重新框架(Reframing)","次感元技术(Submodalities)","设计人类工程(DHE)"],
    quote:"沟通的意义在于你所得到的回应。",
    viewpoint:"NLP联合创始人，认为人类大脑像计算机一样可以被'编程'，通过改变思维模式的语言结构可以快速改变行为。强调实用主义，关注'什么有效'而非'什么真实'。" },
  { rank:2, name_en:"John Grinder", name_cn:"约翰·格林德", nationality:"美国", category:"NLP创始人",
    works:["The Structure of Magic I & II","Patterns of the Hypnotic Techniques of Milton Erickson","Turtles All the Way Down","Whispering in the Wind"],
    techniques:["元模型(Meta-Model)","米尔顿模型(Milton Model)","NLP模仿技术","新编码NLP(New Code NLP)"],
    quote:"新编码是一套模式，旨在纠正经典编码中的设计缺陷。",
    viewpoint:"NLP联合创始人，语言学博士。强调模仿(Modeling)是NLP的核心活动，认为经典NLP存在编码缺陷，新编码通过无内容的高性能状态来实现更生态的改变。" },
  { rank:3, name_en:"Frank Pucelik", name_cn:"法兰克·普思里克", nationality:"美国", category:"NLP联合创始人",
    works:["Magic of NLP Demystified","The Origins of Neuro Linguistic Programming"],
    techniques:["元模型联合开发","格式塔治疗与NLP融合","NLP商业领导力应用"],
    quote:"每一个人都是行走的奇迹。",
    viewpoint:"NLP的'神秘第三人'，与Bandler最早开始研究格式塔治疗语言模式。将NLP应用于商业培训和东欧社会公益，尤其在乌克兰建立青少年戒毒康复中心。" },
  { rank:4, name_en:"Robert Dilts", name_cn:"罗伯特·迪尔茨", nationality:"美国", category:"系统NLP创始人",
    works:["Changing Belief Systems with NLP","Sleight of Mouth","From Coach to Awakener","The Hero's Journey"],
    techniques:["逻辑层次模型(Logical Levels)","重塑印记法(Reimprinting)","语言魔术(Sleight of Mouth)","卓越元素解码(SFM)"],
    quote:"摆脱的唯一办法是深入。",
    viewpoint:"对NLP发展贡献最大的人之一，在Bateson基础上发展出逻辑层次模型。率先将NLP应用于组织发展、教育、健康和领导力领域，长期担任苹果、谷歌、迪士尼等企业教练。" },
  { rank:5, name_en:"Judith DeLozier", name_cn:"朱迪斯·德洛齐尔", nationality:"美国", category:"NLP新编码联合创始人",
    works:["Neuro-Linguistic Programming Vol. I","Turtles All the Way Down","The Encyclopedia of Systemic NLP"],
    techniques:["NLP新编码","感知位置(Perceptual Positions)","注意力训练","舞蹈SCORE技术","身体语法(Somatic Syntax)"],
    quote:"我们需要与无意识建立关系，而非支配它。",
    viewpoint:"NLP新编码联合创始人，将芭蕾舞和刚果舞背景融入NLP，推动舞蹈和运动作为NLP主要工具。致力于跨文化能力发展，强调意识与无意识之间的协作关系。" },
  { rank:6, name_en:"Carmen Bostic St Clair", name_cn:"卡门·博斯蒂克·圣克莱尔", nationality:"美国", category:"NLP新编码联合创始人",
    works:["Whispering in the Wind"],
    techniques:["新编码NLP联合开发","无内容高性能状态","组织变革咨询"],
    quote:"NLP是研究主观经验和人类卓越表现之结构的学问。",
    viewpoint:"Quantum Leap公司创始人，自80年代末与Grinder共同开发New Code NLP。专注于将NLP应用于跨国企业组织变革和跨文化挑战。" },
  { rank:7, name_en:"Steve Andreas", name_cn:"史蒂夫·安德烈亚斯", nationality:"美国", category:"NLP出版先驱",
    works:["Change Your Mind—And Keep the Change","Heart of the Mind","Transforming Negative Self-Talk","Six Blind Elephants"],
    techniques:["Swish模式优化版","决策终结者","宽恕模式","自我概念改变","羞耻化解","哀伤处理流程"],
    quote:"地图不是疆域，但地图是我们所拥有的一切。",
    viewpoint:"创办Real People Press出版了第一批NLP畅销书。与妻子Connirae共同创立NLP Comprehensive，对次感元技术和自我概念改变做出系统性贡献。2018年去世。" },
  { rank:8, name_en:"Connirae Andreas", name_cn:"康妮尔·安德烈亚斯", nationality:"美国", category:"NLP核心开发者",
    works:["Core Transformation","Change Your Mind—And Keep the Change","Heart of the Mind","Coming to Wholeness"],
    techniques:["核心转化(Core Transformation)","完整性工作(Wholeness Work)","感知位置对齐","眼动整合疗法"],
    quote:"我们不需要去除自身任何部分就能达到完整。",
    viewpoint:"Core Transformation和Wholeness Work创始人。Core Transformation通过局限性作为入口进入和平、合一和临在状态。将东方灵性教导与NLP技术结合。" },
  { rank:9, name_en:"Tad James", name_cn:"泰德·詹姆斯", nationality:"美国", category:"时间线疗法创始人",
    works:["Time Line Therapy and The Basis of Personality","The Secret of Creating Your Future","Hypnosis: A Comprehensive Guide"],
    techniques:["时间线疗法®(Time Line Therapy®)","创造未来法®","7天加速NLP训练格式","基于时间线的情绪释放"],
    quote:"你的'时间线'是你无意识中存储记忆的方式，也是你如何区分过去记忆和未来投射的方式。",
    viewpoint:"时间线疗法创始人，被Bandler认证为第二位NLP Master Trainer。通过在无意识层面释放负面情绪和限制性信念，在分钟而非数月内创造持久改变。2022年去世。" },
  { rank:10, name_en:"Wyatt Woodsmall", name_cn:"怀亚特·伍德斯莫", nationality:"美国", category:"元程序与人格建模专家",
    works:["Time Line Therapy and the Basis of Personality","Metaprograms","Advanced Behavioral Modeling"],
    techniques:["高级行为建模(Advanced Behavioral Modeling™)","元程序系统化","价值观层级模型","人格画像(Personality Profiling)"],
    quote:"要理解他人，你必须先理解自己。",
    viewpoint:"与Tad James合著系统化了元程序和价值观研究。将元程序从治疗扩展到商业和组织应用，其元程序框架成为LAB Profile等工具的理论基础。" },
  { rank:11, name_en:"Leslie Cameron-Bandler", name_cn:"莱斯利·卡梅伦-班德勒", nationality:"美国", category:"元程序先驱",
    works:["Solutions","The Emprint Method","Know How","Emotional Hostage"],
    techniques:["元程序首次系统化","命令自我法(Imperative Self Method)","NLP伴侣/性治疗应用","Practitioner认证标准"],
    quote:"决定关系质量的不是问题本身，而是行为模式。",
    viewpoint:"NLP创始人团队最早期核心成员之一，曾是Bandler的妻子。1982年首次发现并系统化了元程序，为后来所有元程序研究奠定基础。1989年退出NLP领域。" },
  { rank:12, name_en:"David Gordon", name_cn:"大卫·戈登", nationality:"美国", category:"NLP模仿技术先驱",
    works:["Therapeutic Metaphors","Phoenix: The Therapeutic Patterns of Milton Erickson","The Emprint Method","Expanding Your World"],
    techniques:["治疗性隐喻(Therapeutic Metaphors)","体验矩阵(Experiential Array)","信念模板(Belief Template)","高级NLP模仿技术"],
    quote:"隐喻中有音乐，那是个人感知在人类经验模式上奏出的和弦。",
    viewpoint:"NLP原始开发团队成员之一，以治疗性隐喻和模仿工作闻名。Therapeutic Metaphors是NLP领域经典著作。近20年专注模仿技术研究，开发了Experiential Array等工具。" },
  { rank:13, name_en:"Stephen Gilligan", name_cn:"斯蒂芬·吉利根", nationality:"美国", category:"生成式改变代表",
    works:["Therapeutic Trances","The Courage to Love","The Legacy of Milton Erickson","Generative Trance","The Hero's Journey"],
    techniques:["自我关系心理治疗","生成式催眠(Generative Trance)","生成式改变(Generative Change)","赞助法(Sponsorship)"],
    quote:"症状往往是一个失败但具有深层意义的解决方案的表达。",
    viewpoint:"Erickson最年轻且最投入的学生之一，斯坦福大学心理学博士。将艾瑞克森催眠、NLP、合气道、佛教冥想整合，发展出自我关系心理治疗和生成式改变方法。与Dilts共同创立IAGC。" },
  { rank:14, name_en:"L. Michael Hall", name_cn:"迈可·霍尔", nationality:"美国", category:"神经语义学创始人",
    works:["Meta-States: Managing the Higher Levels of Your Mind","Dragon Slaying","The Structure of Personality","NLP Going Meta","Winning the Inner Game"],
    techniques:["大成状态模型(Meta-States)","神经语义学(Neuro-Semantics)","大成教练系统(Meta-Coaching)","矩阵模型(Matrix Model)","框架游戏(Frame Games)"],
    quote:"如我们所想，如我们所感；如我们所感，如我们所行；如我们所行，如我们所成。",
    viewpoint:"1994年创建Meta-States模型，被INLPTA评为'1995年对NLP最重要的贡献'。基于Meta-States创建神经语义学和大成教练系统。出版超过55本书，NLP领域最高产作家之一。" },
  { rank:15, name_en:"Ian McDermott", name_cn:"伊恩·麦克德莫特", nationality:"英国", category:"欧洲NLP领军人物",
    works:["Principles of NLP","NLP and Health","The Art of Systems Thinking","The NLP Coach","The Coaching Bible"],
    techniques:["NLP与系统思考整合","NLP在健康领域应用","NLP教练技术系统化","协作式领导力"],
    quote:"知识在应用并产生积极影响时才成为智慧。",
    viewpoint:"1988年创立ITS，欧洲NLP传播核心推动者。Exeter大学商学院荣誉院士。将NLP与系统思考整合，推动NLP在企业管理、健康和教练领域应用。著作翻译为15种语言。" },
  { rank:16, name_en:"Joseph O'Connor", name_cn:"约瑟夫·奥康纳", nationality:"英国", category:"NLP国际传播者",
    works:["Not Pulling Strings(欧洲第一本NLP著作)","Introducing NLP","Principles of NLP","Leading With NLP","Coaching with NLP","Coaching the Brain"],
    techniques:["NLP与教练技术系统整合","NLP与神经科学结合","NLP在领导力中应用","NLP在销售中应用"],
    quote:"NLP是卓越的心理学——研究杰出成就者如何做到他们所做的。",
    viewpoint:"写了欧洲第一本NLP著作，Introducing NLP成为全球最畅销NLP入门教科书之一，翻译为30种语言。国际教练社区(ICC)联合创始人。将NLP扩展到教练、领导力、销售和神经科学领域。" },
  { rank:17, name_en:"Shelle Rose Charvet", name_cn:"雪儿·罗斯·夏尔凡", nationality:"加拿大", category:"语言行为模式权威",
    works:["Words That Change Minds(畅销20种语言)","The Customer is Bothering Me"],
    techniques:["语言行为量表(LAB Profile®)","14种语言行为模式","影响力语言系统","动机识别软件(Libretta®)"],
    quote:"人们不抗拒改变，他们抗拒被改变。",
    viewpoint:"影响力语言领域国际权威。Words That Change Minds被Forbes评为最佳管理书籍之一。在超过30个国家帮助组织提升影响力和沟通效果，客户包括IBM、UNESCO、CERN。" },
  { rank:18, name_en:"Paul McKenna", name_cn:"保罗·麦肯纳", nationality:"英国", category:"NLP大众化推广代表",
    works:["I Can Make You Thin(英国史上最畅销自助书)","Change Your Life in 7 Days","I Can Make You Confident","I Can Make You Happy","Quit Smoking Today"],
    techniques:["NLP与催眠结合的大众化应用","NLP在减肥/戒烟/自信等自助系统","NLP与CBT整合技术","团体催眠与NLP结合训练"],
    quote:"你的大脑像一台电脑——它运行你安装的程序。安装更好的程序，得到更好的结果。",
    viewpoint:"被《泰晤士报》评为'世界上最重要的现代自助大师之一'，书籍销量超过1000万册，翻译为32种语言。从电台DJ转型为NLP和催眠训练师，将NLP和催眠技术大众化推广最成功的人。" },
  { rank:19, name_en:"Tim Hallbom", name_cn:"蒂姆·哈尔布姆", nationality:"美国", category:"NLP健康领域代表",
    works:["Beliefs: Pathways to Health and Well-Being","NLP: The New Technology of Achievement"],
    techniques:["消除过敏法(Allergy Elimination Technique)","NLP World Health Community联合创立","健康导向重塑印记","健康导向信念整合"],
    quote:"人们不会因为理解问题的原因而改变，而是因为发现了新的可能性而改变。",
    viewpoint:"与Dilts和Suzi Smith合著Beliefs一书，系统化了NLP在健康领域应用。联合创立NLP World Health Community，将NLP从心理治疗扩展到身体健康干预领域。" },
  { rank:20, name_en:"Richard Bolstad", name_cn:"理查德·博尔斯塔德", nationality:"新西兰", category:"亚太地区NLP代表",
    works:["RESOLVE: A New Model of Therapy","Transforming Communication","The Structure of Personality","Innovations in NLP"],
    techniques:["RESOLVE治疗模型","个人力量模型","NLP与心理治疗系统整合","NLP在PTSD中应用","NLP与中医/气功结合"],
    quote:"疗愈发生在我们将意识与大脑更深层结构连接之时。",
    viewpoint:"新西兰NLP培训核心推动者。开发RESOLVE治疗模型，将NLP快速干预与心理治疗人际深度整合。在波斯尼亚战后PTSD治疗、地震后创伤干预中做出杰出贡献。2017年获ANLP国际NLP奖。" }
];

// ------------------------------------------------------------
// 3. 中国Top 10 NLP专家
// ------------------------------------------------------------
const chinaExperts = [
  { rank:1, name:"李中莹", city:"香港/北京", category:"NLP引入大陆第一人",
    works:["《重塑心灵》","《NLP简快心理疗法》","《爱上双人舞》","《简快身心积极疗法》","《过好这一生的10个真相》"],
    techniques:["简快身心积极疗法(创始人)","'自我价值'理论","'三赢'原则(我好/你好/世界好)","逐步抽离法","自我整合法","反败为胜法","人生拓扑图","三层世界模型"],
    quote:"有效果比有道理更重要。NLP是把焦点放在'效果'上，并坚持'三赢'的学问。",
    viewpoint:"最早将NLP完整系统引入中国大陆(1998年)，被誉为'华人世界的国际级NLP大师'。创立'简快身心积极疗法'，是世界上第一个以NLP技巧为中心的专业心理辅导课程体系。同时将系统排列、运动机制学、健脑操、催眠治疗等多门学问引入中国。" },
  { rank:2, name:"张国维", city:"香港", category:"国内NLP泰斗",
    works:["《NLP专业执行师国际文凭课程》","《NLP高级执行师》","《NLP国际导师班》","《NLP亲子关系工作坊》"],
    techniques:["系统派NLP","NLP12条前提假设系统阐释","时间线治疗","NLP亲子教育技术"],
    quote:"凡事必有至少三个解决方法。每个人都已经具备使自己成功快乐的资源。",
    viewpoint:"国内NLP泰斗级人物，全亚洲首位荣获国际NLP专业学会'资深导师(FMT)'。培养了现今中国大陆众多的NLP导师，是李中莹之外另一条重要的NLP传承脉络。其导师班被誉为'NLP黄埔军校'。" },
  { rank:3, name:"徐敬东", city:"上海", category:"大陆首位ABNLP+ABH双重认证导师",
    works:["《人本管理技术》","《NLP高级执行师证书课程》","《幸福人生》","《魅力人生》","《财富人生》"],
    techniques:["NLP与催眠技术结合","人格完善与价值观提升理论","时间线治疗","企业管理中的NLP应用","幸福工程体系建设"],
    quote:"NLP是成人教育里皇冠上的明珠。",
    viewpoint:"中国大陆地区首位获ABNLP和ABH双重认证的授证NLP导师。其创办的卓越心灵成长学院是大陆首个获得上述机构认证的专业NLP和催眠技术授证培训机构。" },
  { rank:4, name:"黄启团", city:"广州", category:"中国NLP学院创办人",
    works:["《NLP教练式管理》","《NLP职业生涯规划》","《NLP教练式父母》","《NLP智慧语言模式》","《NLP消费心理学》"],
    techniques:["NLP教练式管理","NLP专业教练技术","中国式教练学问","萨提亚家族治疗","九型性格"],
    quote:"将西方心理学和中国国学有机地融为一体，让你做到并成为习惯。",
    viewpoint:"中国NLP学院(nlp.cn)创办人，业内人称'团长'。联合创立心理学平台'壹心理'，投资了多家心理机构。是NLP在中国企业管理、教练技术领域本土化应用的重要推动者。" },
  { rank:5, name:"舒俊琳", city:"广州", category:"生命教练意识进化训练系统创立者",
    works:["《升级你的大脑》","《构建心灵宽带网》","《关系领袖》","《锐变》","《英雄之旅》"],
    techniques:["生命教练意识进化训练系统","西方心理学与东方传统文化融会贯通","艾瑞克森催眠模式","NLP在领导力/沟通/高效学习中的应用"],
    quote:"把西方的心理学和东方的传统文化、佛学融会贯通，更好地支持到组织和家庭中人的发展和成长。",
    viewpoint:"国内最早的NLP研究者和发展者之一。拥有16年心理咨询实践经验，处理个案超过2000个。创立生命教练意识进化训练系统，长期担任中山大学MBA课程精修班授课导师。" },
  { rank:6, name:"郑立峰", city:"香港/全国", category:"中国系统排列首席导师",
    works:["《家庭系统排列：重建家庭秩序 让爱自然流动》","译著《寻找心灵的镜子》","《家庭系统排列入门》","主编《真相——治疗心灵的妙方》"],
    techniques:["家庭/组织系统排列","身心语言程序学(NLP导师资质)","NLP与系统排列结合的心理干预技术"],
    quote:"给中国人多一个选择。",
    viewpoint:"中国系统排列领域标杆性人物，首位完成德国国际系统排列强化培训的中国人。主持逾百场系统排列工作坊及16届导师培训课程。2009年编制首套国际系统排列课程大纲并在奥地利发表。" },
  { rank:7, name:"虢海平", city:"长沙", category:"NLP界集大成者",
    works:["《NLP专业执行师国际文凭课程》","《NLP公众影响力——演讲培训技巧》","《NLP教练精英训练营》","《NLP亲子导师班》"],
    techniques:["NLP集大成者——整合多位国际大师技术","大成教练/团队教练","NLP时间线治疗","组织/家族系统排列","本体与能量指导"],
    quote:"随风潜入夜，润物细无声。",
    viewpoint:"被誉为'NLP界集大成者'，中国NLP大学创始人之一。拥有十年心理行为训练经验，是少数同时获得李中莹、张国维、朱迪三大NLP传承体系导师认证的人物。" },
  { rank:8, name:"戴志强", city:"马来西亚籍/中国", category:"首个在华中文传授NLP教练技术的华人",
    works:["NLP教练技术系列课程","心理辅导与个人企业辅导"],
    techniques:["NLP与教练技术深度结合","潜意识沟通技术","萨提亚家庭治疗模式","九型人格","系统排列","催眠治疗"],
    quote:"人的成长不是从修改缺点来的，而是从学习，从增加方法、工具、选择而来。",
    viewpoint:"中国NLP顶尖三大华人导师之一。第一个在中国以中文传授NLP教练技术的华人培训师，擅长与人的潜意识沟通。将20多年工商管理经验与NLP结合，在企业运用领域特别出色。" },
  { rank:9, name:"曾亮", city:"北京", category:"乐唐创始人/NLP+国学结合",
    works:["《智慧人生·经典班》","《智慧父母导师训练计划》","《神奇的语言结构》","《走进经典·解惑人生》"],
    techniques:["NLP与国学精粹结合","'转念'疗愈技术(认知重构)","检定语言/模糊语言/回应术","NLP在亲子教育领域应用","系统排列"],
    quote:"有一个地方超越对错，我在这里等你。",
    viewpoint:"耕耘教育培训行业十余年，累计直接和间接帮助上百万人。国内仅有的能够讲授检定语言、模糊语言和回应术等语言结构课程的导师之一。将NLP理念与中国国学精粹结合。" },
  { rank:10, name:"冯晓强", city:"上海/吉林", category:"中国NLP商学院创始人",
    works:["《NLP总裁商战智慧》系列(精华班、卓越班、策略班、销讲班、弟子班)"],
    techniques:["NLP商战应用","3P理论(企业业绩倍增的三扇窗口)","人脑三套软件原理","NLP心理学在商业实战中应用","小品式幽默教学风格"],
    quote:"管人管思想，思想到底是什么？老板站讲台，企业灵魂就在。沟通的意思取决于对方的回应！",
    viewpoint:"中国NLP商学院创始人，将NLP心理学聚焦于商业实战应用。以'10年垄断型企业经验+36年经商感悟'为基础，是NLP在中国企业总裁培训领域商业化最成功的代表人物。" }
];

// ------------------------------------------------------------
// 4. NLP核心前提假设（12条）
// ------------------------------------------------------------
const nlpPresuppositions = [
  "没有两个人是一样的。",
  "一个人不能控制另一个人。",
  "有效果比有道理更重要。",
  "只有由感官经验塑造出来的世界，没有绝对的真实世界。",
  "沟通的意义决定于对方的回应。",
  "重复旧的做法，只会得到旧的结果。",
  "凡事必有至少三个解决方法。",
  "每个人都选择给自己最佳利益的行为。",
  "每个人都已经具备使自己成功快乐的资源。",
  "在任何系统中，最灵活的部分是最能影响大局的部分。",
  "没有挫败，只有回应信息。",
  "动机和情绪总不会错，只是行为没有效果而已。"
];

// ------------------------------------------------------------
// 5. 自助工具箱 - 10种详细操作方法
// ------------------------------------------------------------
const toolkit = [
  {
    id: "anchoring",
    title: "心锚技术",
    subtitle: "Anchoring — 一键触发积极状态",
    origin: "Richard Bandler",
    difficulty: "初级",
    duration: "5-10分钟",
    scenario: "考试前紧张、上台演讲前焦虑、需要快速进入专注状态时",
    steps: [
      "回忆一个你感到极度自信、平静或快乐的时刻（越具体越好，比如某次获奖的瞬间）",
      "闭上眼睛，充分沉浸在那个记忆中。让画面越来越清晰，声音越来越响亮，感受越来越强烈",
      "当积极感受达到最高点时，做一个独特的身体动作（如握紧右拳、按住左手腕内侧、深呼吸同时触摸耳垂）——这就是你的'心锚'",
      "保持动作2-3秒，然后松开。打破状态（站起来走动一下，想些无关的事）",
      "重复步骤1-4，至少3-5次，直到仅做身体动作就能自动唤起积极感受",
      "测试：在平常状态下做那个身体动作，感受是否自动出现？如果是，心锚建立成功"
    ],
    case: "【案例】高一学生小林，每次考试前都会手心出汗、脑子空白。他回忆起小学时在全校朗诵比赛获得一等奖的瞬间——站在台上，掌声雷动，他感到无比自信。他选择'握紧右拳'作为心锚。经过一周每天练习3次后，考试前他只需握紧右拳，就能感受到一股暖流从胸口涌起，紧张感明显减轻，考试成绩从班级中游提升至前15名。",
    tip: "心锚的关键是'独特性'和'时机'——选择一个你平时不会做的动作，并在感受最强烈的那一刻设定。"
  },
  {
    id: "reframing",
    title: "换框法",
    subtitle: "Reframing — 改变视角，改变意义",
    origin: "Richard Bandler & John Grinder",
    difficulty: "初级",
    duration: "10-15分钟",
    scenario: "遇到挫折感到绝望、对某件事有强烈负面情绪、觉得'我做不到'时",
    steps: [
      "写出让你困扰的事件或想法，用一句话描述（如：'我考试又考砸了，我太笨了'）",
      "情境换框：问自己'在什么情况下，这件事会有积极意义？'（如：这次失败让我提前发现了知识漏洞，比高考才发现好得多）",
      "意义换框：问自己'这件事还能意味着什么？'列出至少5个不同的解读角度",
      "行为换框：问自己'这种反应背后的正面动机是什么？'（如：感到挫败是因为我在乎自己的未来）",
      "选择一个让你感觉最好的新框架，把它写成新的陈述句",
      "体会身体感受的变化——当你用新框架思考时，身体是否更放松？如果感觉更好，就反复强化这个新视角"
    ],
    case: "【案例】初三女生小雯因为被好朋友孤立而痛苦，认为'没有人喜欢我'。通过换框法：情境换框——'这也许是让我学会独立、不过度依赖他人认可的机会'；意义换框——'失去虚假的朋友，才能腾出空间给真正的朋友'；行为换_frame——'痛苦说明我有珍惜关系的能力'。两周后，她主动加入了学校的读书社团，认识了新朋友，对原来的关系也不再执着。",
    tip: "换框不是'自我欺骗'，而是看到同一件事的多个面向。任何事件本身是中性的，意义是我们赋予的。"
  },
  {
    id: "submodalities",
    title: "次感元调整",
    subtitle: "Submodalities — 编辑你的内在体验",
    origin: "Richard Bandler",
    difficulty: "中级",
    duration: "10-20分钟",
    scenario: "无法摆脱某段痛苦记忆、对某件事恐惧、想增强积极记忆的感受时",
    steps: [
      "想一件让你害怕或痛苦的事，注意你脑海中出现的画面——是彩色还是黑白？是近还是远？是动的还是静的？有没有声音？",
      "把这些特征记录下来（这就是你的'次感元'编码）：亮度、色彩、距离、大小、音量、清晰度",
      "现在做一个实验：把画面推远，推到10米之外——感受有什么变化？",
      "把彩色变成黑白——感受有什么变化？",
      "加上一段滑稽的背景音乐（如马戏团音乐）——感受有什么变化？",
      "把画面缩小到一个邮票大小，放在视野左下角——感受有什么变化？",
      "找到那些让你感觉明显改善的调整方式，组合起来反复使用，直到原来的负面感受大幅减弱",
      "对积极记忆做反向操作：把画面放大、变亮、变彩色、加上激昂的音乐——让美好感受更强烈"
    ],
    case: "【案例】初二男生小杰被同学当众嘲笑后，每次走进教室都会回放那个场景，画面又大又亮又清晰。通过次感元调整：他把嘲笑的画面推远到10米外、变成黑白、加上小黄人的笑声背景音。练习3天后，他报告说'想起那件事时就像在看一部模糊的老默片，完全不再难受了'，课堂专注力明显恢复。",
    tip: "次感元是你大脑的'编辑器'。改变画面的编码方式，感受就会自动改变——这就是大脑工作的原理。"
  },
  {
    id: "timeline",
    title: "时间线情绪释放",
    subtitle: "Timeline Therapy — 与过去和解，向未来迈进",
    origin: "Tad James",
    difficulty: "中级",
    duration: "15-30分钟",
    scenario: "被过去的某段经历持续困扰、对未来感到迷茫恐惧、想要释放积压的负面情绪时",
    steps: [
      "确定你的时间线方向：闭上眼想一想'过去'在哪里——是在你身后？左边？还是右边？'未来'又在哪个方向？",
      "想象自己飘浮到时间线上方，俯瞰你的整个人生时间线",
      "找到时间线上第一个让你感到强烈负面情绪的事件，飘到那个位置的正上方",
      "保持在高处观察那个事件——从上面看，你能看到事件的来龙去脉，也能看到年幼的自己",
      "问自己：这件事教会了我什么？我从中学到了什么重要的功课？",
      "当你确认已经获得了学习，对那个年幼的自己说一句温暖的话，然后释放掉负面情绪（可以想象情绪像云一样飘走）",
      "飘回到现在，注意你对那件事的感受已经不同了",
      "飘到未来的时间线上，找一个你想要实现的目标，站在那个位置感受已经实现的满足感，然后带着这份感觉回到现在"
    ],
    case: "【案例】高一学生小陈从小被父亲打骂，对父亲充满愤怒。在时间线练习中，他飘到5岁时被父亲打的那天上方，从高处看到父亲其实是工作压力很大、不懂得如何教育孩子。他说出了'爸爸，我知道你也是第一次做父亲'。释放练习后，他报告虽然不认同父亲的做法，但内心不再被愤怒控制，睡眠质量明显改善，也能更冷静地与父亲沟通。",
    tip: "从时间线上方看事件，能自动获得'更大视角'。这不是为伤害找借口，而是释放困住你的情绪能量。"
  },
  {
    id: "metamodel",
    title: "元模型提问",
    subtitle: "Meta-Model — 破解限制性语言",
    origin: "Richard Bandler & John Grinder",
    difficulty: "中级",
    duration: "10-15分钟",
    scenario: "被'我做不到''没人喜欢我''学习没用'等想法困住时",
    steps: [
      "写下你的限制性想法，原样记录（如：'我永远学不好数学'）",
      "检测'删减'——问：你怎么知道？具体哪部分学不好？是所有数学内容还是某个知识点？",
      "检测'扭曲'——问：谁说的？你自己认为还是别人说的？有什么证据支持这个判断？",
      "检测'泛化'——问：'永远'是什么意思？有没有哪次你数学考得还不错？'学不好'的标准是什么？",
      "检测'因果/等价'——问：学不好数学就意味着什么？它会导致什么后果？这个因果逻辑真的成立吗？",
      "用更准确、更具体的语言重新表述：'我在函数部分还需要加强练习，之前几何和代数都考过80分以上'",
      "体会新表述带来的身体感受——是否更轻松、更有行动力？"
    ],
    case: "【案例】初二女生小露反复说'我什么都做不好'。通过元模型提问：'什么都知道不好吗？'→'也不是，语文还行'→'所以不是什么都做不好，是有些科目还需要提升'→'哪些科目？'→'数学和物理'→'具体哪部分？'→'物理的力学部分'。她从'我什么都做不好'这个泛化的绝望，精确定位到'物理力学需要专项练习'这个可行动的目标，焦虑感从8分降到3分，开始主动寻求物理老师帮助。",
    tip: "限制性信念往往使用'总是''永远''从不''什么都'等泛化词汇。用元模型提问把这些'语言陷阱'还原为具体事实。"
  },
  {
    id: "perceptual",
    title: "感知位置切换",
    subtitle: "Perceptual Positions — 三把椅子三种智慧",
    origin: "John Grinder & Judith DeLozier",
    difficulty: "中级",
    duration: "15-20分钟",
    scenario: "与人发生冲突无法理解对方、陷入人际关系的情绪僵局时",
    steps: [
      "准备三把椅子或三个位置，分别代表：第一位置（你自己）、第二位置（对方）、第三位置（旁观者）",
      "坐在第一位置：回忆冲突场景，充分表达你的感受和想法。'我感到…因为…我希望…'",
      "站起来，抖动身体打破状态，坐到第二位置：想象自己变成了对方。从对方的角度看这件事——'我（对方）感到…因为…我希望…'",
      "再站起来打破状态，坐到第三位置：作为一个中立的旁观者，客观地看这两个人的互动——'我看到两个人各自有合理的需要，但沟通方式…'",
      "从第三位置思考：有什么是两个位置都没看到但很重要的？有没有双方共赢的可能？",
      "带着第三位置的智慧回到第一位置：现在你会怎么做？你对对方的理解有什么变化？",
      "如果愿意，可以再切换到第二位置，感受一下你对对方态度的变化是否影响了你对他的感知"
    ],
    case: "【案例】高一学生小杨与母亲因手机使用爆发激烈冲突。在第一位置，他感到'被控制、不被信任'。切换到第二位置（母亲视角），他惊讶地发现母亲是'担心他视力下降、成绩下滑，但又不知道怎么沟通才好'。第三位置让他看到'两个人都想表达关心，但都在用让对方不舒服的方式'。练习后他主动找母亲谈心，双方约定了每天使用手机的时段，冲突明显减少。",
    tip: "感知位置切换是培养同理心的最快方法。当你真正'站到对方的位置'时，很多愤怒会自然消解。"
  },
  {
    id: "core_transformation",
    title: "核心转化法",
    subtitle: "Core Transformation — 与内在深层需求对话",
    origin: "Connirae Andreas",
    difficulty: "高级",
    duration: "20-40分钟",
    scenario: "反复出现的行为模式让你困扰、感到内在矛盾、想要深层自我理解时",
    steps: [
      "识别一个你想改变的行为或感受（如：拖延、自卑、焦虑），对它说'你好'",
      "问这个部分：'你做这件事，是想为我达成什么？'倾听第一个浮现的答案（如：'想让我安全'）",
      "接受这个答案，然后问：'如果你已经得到了安全，这会带给你什么更重要的东西？'（如：'安心'）",
      "继续追问：'如果你已经得到了安心，这又带给你什么更重要的？'——层层深入",
      "通常经过5-8层追问，你会到达一个核心状态：和平、存在感、爱、归属、合一……",
      "当你触碰到核心状态时，停留一会儿，充分体验这种感受",
      "从核心状态回望原来的行为：现在你还需要那个旧行为吗？核心状态是否已经满足了它真正的需求？",
      "带着核心状态的感受回到日常生活，让这种深层满足感指引你的行动"
    ],
    case: "【案例】初三男生小明严重拖延，每天作业写到凌晨。核心转化过程：拖延→想让我轻松→如果轻松了→就有时间玩→如果有时间玩→就感到自由→如果自由了→就证明我掌控自己的人生→如果掌控了→就感到存在的意义→核心状态：存在感。他意识到拖延其实是在对抗'被安排的人生'。触碰到存在感后，他说'我不需要用拖延来证明自己存在，我可以用主动选择来活出自己'。两周后作业完成时间提前到晚上10点。",
    tip: "核心转化的精妙在于：不与问题对抗，而是顺着它的'正向意图'一路深入到灵魂深处的需求。当核心需求被满足，旧行为自然松动。"
  },
  {
    id: "swish",
    title: "Swish模式",
    subtitle: "Swish Pattern — 用新画面替换旧习惯",
    origin: "Richard Bandler",
    difficulty: "中级",
    duration: "5-10分钟",
    scenario: "想改掉一个具体的坏习惯（咬指甲、玩手机、零食过量等）时",
    steps: [
      "识别触发坏习惯的线索画面——当你想咬指甲时，你看到的第一个画面是什么？（通常是手指靠近嘴的画面）",
      "创建一个理想自我的画面——你希望成为的样子（自信、手指完好、健康的人），让这个画面充满吸引力",
      "把理想画面缩小、变暗，放在线索画面的右下角",
      "快速执行Swish：在大脑中同时把线索画面缩小变暗、理想画面放大变亮——'嗖'的一声，瞬间替换！",
      "清除大脑画面（想些别的），然后重复步骤4，至少做7-10次，每次都更快",
      "测试：现在想那个原来的线索画面，你的第一反应还是想咬指甲吗？通常已经不想了",
      "在真实情境中遇到触发时，理想画面会自动浮现，阻断旧习惯"
    ],
    case: "【案例】初二女生小美有严重的手机依赖，一写作业就想刷短视频。线索画面：手拿起手机打开App的瞬间。理想画面：自己坐在书桌前专注学习、期末拿到满意成绩单的笑脸。她每天做Swish练习10次，持续一周。第二周她报告：'拿起手机时脑子里会自动弹出那个好成绩的画面，然后我会放下手机开始写作业'。手机使用时间从每天4小时降到1小时。",
    tip: "Swish的关键是速度——越快越好，像换台一样瞬间切换。大脑会被新的、更有吸引力的画面'劫持'，自动阻断旧行为模式。"
  },
  {
    id: "logical_levels",
    title: "逻辑层次对齐",
    subtitle: "Logical Levels — 从身份到环境的全面校准",
    origin: "Robert Dilts",
    difficulty: "中级",
    duration: "15-25分钟",
    scenario: "设定重要目标、感到内在矛盾、想要找到行动的方向和动力时",
    steps: [
      "在纸上画出六个层次（从上到下）：身份→信念/价值观→能力→行为→环境",
      "在最上层'身份'写下：我想成为一个什么样的人？（如：一个终身学习者）",
      "在'信念/价值观'层写下：成为这样的人，我需要相信什么？什么对我很重要？（如：相信成长比成绩重要、重视好奇心）",
      "在'能力'层写下：我需要发展什么能力？（如：专注力、时间管理、批判性思维）",
      "在'行为'层写下：我每天具体要做什么？（如：每天阅读30分钟、做错题分析、写学习反思）",
      "在'环境'层写下：我需要什么资源和环境支持？（如：安静的书桌、图书馆借书证、学习伙伴）",
      "从上到下检查：每一层是否支持上一层？有没有矛盾？（如：信念说'成长比成绩重要'，但行为全是刷题——这就是不对齐）",
      "调整不一致的部分，直到六个层次形成一条清晰的'贯通线'——从'我是谁'到'我在哪里做什么'完全一致"
    ],
    case: "【案例】高一学生小涛成绩中等，感到迷茫。逻辑层次分析：身份想成为'有创造力的人'，但信念是'只有考上好大学才有出路'（矛盾），能力上缺乏创意表达机会，行为上全是应试刷题，环境中没有创造性活动。通过调整：信念改为'大学是一个路径，不是唯一路径，创造力才是核心竞争力'；能力增加'每周写一篇创意写作'；行为调整为'每天1小时自由阅读+30分钟创意写作'。一个月后他说'第一次觉得学习有了方向感'。",
    tip: "当六个层次对齐时，你会感到一种内在的'贯通感'——不纠结、不内耗，行动自然有力量。"
  },
  {
    id: "dissociation",
    title: "逐步抽离法",
    subtitle: "Step-by-Step Dissociation — 从情绪中退后一步",
    origin: "李中莹（简快身心积极疗法）",
    difficulty: "初级",
    duration: "5-10分钟",
    scenario: "被某种强烈情绪（愤怒、焦虑、悲伤）淹没、无法冷静思考时",
    steps: [
      "注意到你正在体验的强烈情绪，给这个情绪打分（0-10分）",
      "想象你可以'飘'出来，飘到身体上方2米处，从上面看着坐在椅子上的自己",
      "从上方观察'那个自己'正在经历什么情绪——注意你现在是'观察者'而不是'体验者'",
      "如果情绪仍然强烈，再飘高一点，飘到5米、10米高处，直到你能平静地观察那个画面",
      "从高处问自己：那个情绪想告诉我什么？它在保护什么？",
      "当你获得了信息，感谢那个情绪，然后慢慢地飘回身体里",
      "重新评估情绪分数——通常会显著下降",
      "如果需要，可以重复这个过程，直到情绪降到可控范围（3分以下）"
    ],
    case: "【案例】初三女生小琪在模考失利后崩溃大哭，情绪10分。老师引导她做逐步抽离：飘到2米高处看哭泣的自己→分数降到7分；再飘到5米高→降到4分；从高处她意识到'哭泣是因为害怕让妈妈失望'。飘回身体后情绪降到2分，她说'我知道该怎么做了，回去先分析错题，然后和妈妈聊聊我的真实感受'。",
    tip: "情绪是'身在其中'时最强烈。一旦你退后一步成为'观察者'，情绪强度就会自动下降。这不是压抑，而是获得空间。"
  }
];

// ------------------------------------------------------------
// 6. 书籍精华（基于仓颉skill RIA-TV++方法论提取）
// ------------------------------------------------------------
const bookDigests = [
  {
    title: "《重塑心灵》",
    author: "李中莹",
    core_method: "NLP12条前提假设 + 简快心理疗法",
    key_insight: "世界不等于世界本身，而等于我们对世界的感知。改变感知的方式，就能改变体验和结果。",
    ria: {
      reading: "有效果比有道理更重要——NLP关注结果而非过程的正确性。",
      interpretation: "我们常常困在'对与错'的争论中，却忽略了真正重要的：这个方法是否有效？如果无效，就换一个。",
      application_trigger: "当你陷入'谁对谁错'的争论而无法前进时",
      execution: "停止争论对错→问'我想要什么结果？'→选择最可能达成结果的方法→执行并检验效果",
      boundary: "不适用于涉及道德底线和基本价值观的情境，那里'对错'本身是核心"
    }
  },
  {
    title: "《Frogs into Princes》（青蛙变王子）",
    author: "Richard Bandler",
    core_method: "次感元技术 + 快速改变技术",
    key_insight: "改变不需要花很长时间——当你知道了大脑如何编码经验，改变可以在几分钟内发生。",
    ria: {
      reading: "人们不是被事件本身困扰，而是被他们如何在脑海中呈现这些事件所困扰。",
      interpretation: "同一个事件，如果你把它想象成又大又亮的彩色画面，你会很受影响；如果推远变成黑白小画面，影响就小得多。",
      application_trigger: "被某个记忆或想象中的场景持续困扰时",
      execution: "识别困扰画面的次感元编码→反向调整（推远/缩小/变暗/变黑白）→测试感受变化→重复直到缓解",
      boundary: "严重创伤记忆建议在专业指导下进行，避免独自操作引发情绪过载"
    }
  },
  {
    title: "《Core Transformation》（核心转化）",
    author: "Connirae Andreas",
    core_method: "核心转化九步法",
    key_insight: "每一个看似消极的行为背后都有一个深层的正向意图，当这个意图被满足，消极行为自然消失。",
    ria: {
      reading: "我们不需要去除自身任何部分就能达到完整——每个部分都在以自己的方式保护我们。",
      interpretation: "拖延、焦虑、自卑……这些'问题'其实是某个内在部分在试图满足一个深层需求。与其对抗，不如顺着它找到那个需求。",
      application_trigger: "反复出现的、自己也不想保持的行为模式",
      execution: "识别问题行为→问'你想为我达成什么？'→层层追问→到达核心状态→从核心状态重新看待旧行为",
      boundary: "需要一定的内省能力和时间，不适合急性情绪危机时使用"
    }
  },
  {
    title: "《Sleight of Mouth》（语言魔术）",
    author: "Robert Dilts",
    core_method: "14种语言重构模式",
    key_insight: "语言不只是表达思想——语言创造现实。改变说话的方式，就能改变思考的方式和行动的结果。",
    ria: {
      reading: "信念是通过语言建立和维护的，因此也可以通过语言来改变。",
      interpretation: "当你说'我做不到'时，这不是事实而是信念。通过特定的语言模式（如'你是指现在做不到，还是永远做不到？'）可以松动这个信念。",
      application_trigger: "面对限制性信念时，或想帮助他人看到新可能性时",
      execution: "识别限制性信念陈述→选择合适的语言重构模式（如换框、后果法、另一种结果法等）→用新陈述替换旧信念",
      boundary: "是沟通工具不是辩论技巧，目的是打开可能性而非'赢'对方"
    }
  },
  {
    title: "《Time Line Therapy and The Basis of Personality》",
    author: "Tad James & Wyatt Woodsmall",
    core_method: "时间线疗法 + 元程序人格模型",
    key_insight: "你的时间线——你如何在空间中表征过去、现在和未来——深刻影响着你的情绪、决策和人格。",
    ria: {
      reading: "负面情绪之所以持续，是因为它们'存储'在时间线的过去部分中，未被适当处理。",
      interpretation: "通过在时间线上方'回溯'到情绪的源头事件，可以在保持安全的距离下释放积压的负面情绪。",
      application_trigger: "长期积压的愤怒、悲伤、恐惧等情绪持续影响当前生活时",
      execution: "确定时间线方向→飘到上方→回溯到情绪源→获取学习→释放情绪→回到现在",
      boundary: "严重创伤和PTSD需要专业治疗师协助，不建议自行操作"
    }
  },
  {
    title: "《Words That Change Minds》",
    author: "Shelle Rose Charvet",
    core_method: "LAB Profile（语言行为量表）",
    key_insight: "每个人都有独特的'语言行为模式'——如果你知道一个人的模式，就能预测他的行为并用他听得懂的语言影响他。",
    ria: {
      reading: "人们不抗拒改变，他们抗拒被改变。当你的沟通方式匹配对方的行为模式时，改变自然发生。",
      interpretation: "有的人是'朝向型'（关注想要什么），有的人是'远离型'（关注避免什么）。用对方的方式说话，沟通效率会大幅提升。",
      application_trigger: "与孩子/学生/同事沟通困难，感觉'说了他不听'时",
      execution: "观察对方的语言模式→识别是朝向型还是远离型等特征→用匹配的方式表达→观察沟通效果的提升",
      boundary: "是沟通优化工具，不是操控技术。使用时保持善意和尊重对方自主性"
    }
  }
];

// ------------------------------------------------------------
// 7. 互动工具配置（10种）
// ------------------------------------------------------------
const interactiveTools = [
  { id:"mood_meter", title:"情绪温度计", icon:"🌡️", desc:"评估当前情绪状态，获得即时建议", type:"assessment" },
  { id:"anchor_builder", title:"心锚设置器", icon:"🎯", desc:"引导你一步步建立自己的积极心锚", type:"guided" },
  { id:"reframe_lab", title:"换框练习器", icon:"🖼️", desc:"把负面想法翻转成积极视角", type:"guided" },
  { id:"perceptual_wheel", title:"感知位置轮盘", icon:"🔄", desc:"三把椅子三种视角，化解人际冲突", type:"guided" },
  { id:"belief_detector", title:"信念检测器", icon:"🔍", desc:"用元模型破解'我做不到'类限制性信念", type:"assessment" },
  { id:"belief_converter", title:"信念转换器", icon:"🔄", desc:"输入限制性信念，自动转换为赋能信念", type:"assessment" },
  { id:"belief_list", title:"20种信念对照表", icon:"📋", desc:"最常见的20种限制性vs赋能信念对比", type:"reference" },
  { id:"timeline_visual", title:"时间线可视化", icon:"📅", desc:"绘制你的个人时间线，释放过去", type:"canvas" },
  { id:"self_talk", title:"自我对话模拟器", icon:"💬", desc:"练习NLP式的积极自我对话", type:"chat" },
  { id:"goal_aligner", title:"目标锚定器", icon:"🏔️", desc:"用逻辑层次模型设定对齐的目标", type:"guided" },
  { id:"emotion_release", title:"情绪释放引导", icon:"🌊", desc:"引导式逐步抽离，从情绪中退后一步", type:"guided" },
  { id:"growth_journal", title:"每日成长日记", icon:"📓", desc:"NLP格式日记，记录每日成长", type:"journal" }
];

// ------------------------------------------------------------
// 8. 20种常见限制性信念 vs 赋能信念对照表（通用版）
// 参考：《高效能人士的7个习惯》《沟通的艺术》《重塑心灵》等
// ------------------------------------------------------------
const beliefComparisons = [
  // 自我价值类
  { limiting:"我不够好，配不上更好的。", empowering:"我的价值不取决于某一次表现或别人的评价，我本身就值得被善待。" },
  { limiting:"我天生就是这样，改不了。", empowering:"性格可以调整，习惯可以重建，大脑是可塑的——改变从意识到的这一刻开始。" },
  { limiting:"我不值得被爱，除非我足够优秀。", empowering:"被爱不需要条件。我先接纳自己，才会吸引对的人。" },
  { limiting:"别人怎么看我，比我自己怎么看自己更重要。", empowering:"别人怎么看是别人的事。我怎么看自己，才决定我的生活质量。" },
  // 掌控与选择类（《7个习惯》：积极主动 vs 消极被动）
  { limiting:"我是环境的产物，身不由己。", empowering:"我是选择的产物。环境我控制不了，但我永远可以选择如何回应。（柯维）" },
  { limiting:"这件事没有别的办法了。", empowering:"凡事必有至少三个解决方法。我还没找到，不代表不存在。（NLP前提假设）" },
  { limiting:"过去的事情决定了我现在的人生。", empowering:"过去影响了我，但不定义我。我此刻就可以选择不同的回应。" },
  { limiting:"我控制不了自己的情绪。", empowering:"情绪是我的信使，不是我的主人。我可以感受它，也可以选择如何回应它。" },
  // 失败与完美主义类
  { limiting:"如果失败了，就全完了。", empowering:"没有挫败，只有回应信息。失败告诉我这条路需要调整，不是终点。（NLP前提假设）" },
  { limiting:"我必须完美，否则就是失败。", empowering:"完成比完美更重要。60分的行动比0分的空想有价值一百倍。" },
  { limiting:"我不能犯错，犯错说明我不行。", empowering:"犯错是学习的必经之路。不犯错，说明没在尝试新东西。" },
  { limiting:"如果我不够努力，一切都会崩塌。", empowering:"适当休息不是懒惰，是蓄力。弓拉得太满会断，人也一样。" },
  // 人际与沟通类（《沟通的艺术》《非暴力沟通》）
  { limiting:"如果他真的在乎我，就应该知道我想要什么。", empowering:"没有人会读心术。表达需求是我的责任，不是对方的义务。" },
  { limiting:"表达需求就是自私，懂事的人不给人添麻烦。", empowering:"表达需求是健康的自我尊重。压抑不是懂事，是慢性自我伤害。" },
  { limiting:"没有人能真正理解我。", empowering:"也许我还没遇到对的人，也许我还没学会如何表达自己。两个方向都可以努力。" },
  { limiting:"冲突意味着关系出了问题。", empowering:"冲突是关系的正常组成部分。处理得好，冲突反而是加深理解的契机。" },
  // 成长与可能性类
  { limiting:"我这辈子就这样了。", empowering:"人生很长，转折随时可能发生。只要我不放弃探索，下一章随时可以开始。" },
  { limiting:"现在才开始太晚了。", empowering:"种一棵树最好的时间是十年前，其次是现在。今天的每一步都在改写未来。" },
  { limiting:"努力也没用，结果不会变。", empowering:"结果不是我能完全控制的，但努力本身已经在改变我。而且——过程也是结果的一部分。" },
  { limiting:"我必须一个人扛，求助是软弱的表现。", empowering:"求助不是软弱，是智慧。一个人走得快，一群人走得远。" }
];
