// Бургер-меню
const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.querySelector('.nav-menu');
const translations = {
    sl: {
        radiator: "Inštalácia vykurovacích radiátorov",
        podlaho: " Inštalácia podlahového vykurovania",
        plynove: "Inštalácia plynového kotla",
        ekotla: "Inštalácia elektrického kotla",
        kluc: "Inštalácia systému podlahového vykurovania (na kľúč)",
        namevyk: "Inštalácia vykurovania",
        servisklim: "— Singlesplit",
        servisjed: "— Vnútorná nástenná jednotka",
        servisvon: "— Vonkajšie jednotky multisplit",
        serviskaz: "— Vnútorné kazety multisplit",
        servisvnu: "— Vnútorná podstropná jednotka",
        servisstit: "— Pridelenie kontrolných štítkov",
        popupname2: "Inštalácia klimatizácie ",
        odstra: "— Odstránenie upchatí",
        vyma2: "— Výmena a oprava batérií ",
        batare: "— Inštalácia batérie pre vaňu s sprchovým kútom ",
        demo: "— Montáž, demontáž a pripojenie WC",
        vyzovsa: "— Výzva vodoinštalatéra k vám domov",
        od20: "od 20€",
        od25: "od 25€",
        od30: "od 30€",
        od35: "od 35€",
        od351: "od 35€",
        od1: "od 20€",
        od2: "od 25€",
        od3: "od 30€",
        od4: "od 35€",
        od5: "od 35€",
        od11: "od 70€",
        od12: "od 31€",
        od13: "od 43€",
        od14: "od 39€",
        od15: "od 39€",
        od16: "od 59€",
        popupname1: "Inštalatérske práce",
        description: "Náš tím je vaším spoľahlivým partnerom v oblasti inštalácie vodovodných, vykurovacích, klimatizačných a elektrických zariadení. Ponúkame vysokokvalitné montážne a údržbárske služby pre všetky typy systémov, čím zabezpečujeme spoľahlivosť a dlhodobú prevádzku zariadení. Naši odborníci s dlhoročnými skúsenosťami zaručujú presnosť, efektívnosť a bezpečnosť v každej fáze - od návrhu až po dokončenie inštalácie. S nami máte svoje pohodlie a bezpečnosť vždy pod kontrolou!",
        sluzby: "Služby",
        aboutus: "O nás",
        mainpagetitle: "Pohodlie vo vašom obytnom priestore",
        buttonviac: "Viac informácií",
        sluzbyname: "Naše služby",
        elektrikaname: "Elektrická inštalácia",
        elpopname: "Elektrická inštalácia",
        elektrikades: "Ponúkame profesionálnu inštaláciu a servis elektrických systémov. Naši skúsení odborníci zabezpečia rýchlu a kvalitnú montáž elektroinštalácií, zásuviek, vypínačov, osvetlenia a ďalších elektrických zariadení, vrátane opráv a údržby.",
        sluzbacall: "Objednať službu",
        sluzbacall1: "Objednať službu",
        sluzbacall2: "Objednať službu",
        sluzbacall3: "Objednať službu",
        sanitaname: "Inštalatérske práce",
        klimatname: "Inštalácia klimatizácie",
        vikurname: "Inštalácia vykurovania",
        cennik: "Ceny",
        cennik1: "Ceny",
        cennik2: "Ceny",
        cennik3: "Ceny",
        feed: "Kontakty",
        draz: "— Inštalácia v stenách a stropoch pre elektrické rozvody",
        vyma: "— Inštalácia elektrických rozvádzačov a výmena automatických vypínačov", 
        osvetle: "— Inštalácia osvetlenia (lustre, stolové lampy, svetlá LED)",
        monel: " — Montáž a oprava zásuviek",   
        vyzovel: "— Výzva elektrikára k vám domov",
        leave: "Zostaňte v kontakte s nami",
        vikurdes: "Ponúkame profesionálnu inštaláciu vykurovacích systémov. Naši odborníci zabezpečia montáž rôznych typov vykurovania, vrátane podlahového vykurovania, radiátorov a kotlov, aby zabezpečili optimálnu teplotu vo vašich priestoroch.",
        klimatedes: "Ponúkame profesionálnu inštaláciu a servis klimatizácie. Naši odborníci zabezpečia správnu montáž a pravidelnú údržbu klimatizačných jednotiek, čím zaistíme ich efektívnu a dlhodobú prevádzku.",
        sanitades: "Ponúkame profesionálnu inštaláciu sanita, vodovodných a kanalizačných systémov. Naši skúsení odborníci zabezpečia rýchlu a kvalitnú montáž všetkých druhov sanitárnych zariadení, vrátane umývadiel, toaliet, sprchových kútov a batérií.",
    },
    it: {
        radiator: "Installazione di radiatori di riscaldamento",
        podlaho: "Installazione di riscaldamento a pavimento",
        plynove: "Installazione di una caldaia a gas",
        ekotla: "Installazione di una caldaia elettrica",
        kluc: "Installazione di un sistema di riscaldamento a pavimento (chiavi in mano)",
        namevyk: "Installazione del riscaldamento",
        servisklim: "— Singlesplit",
        servisjed: "— Unità interna a parete",
        servisvon: "— Unità esterna multisplit",
        serviskaz: "— Cassette interne multisplit",
        servisvnu: "— Unità interna a soffitto",
        servisstit: "— Assegnazione di etichette di controllo",
        odstra: "— Rimozione di ostruzioni",
        vyma2: "— Sostituzione e riparazione delle batterie",
        batare: "— Installazione del miscelatore per vasca con doccia ",
        demo: "— Installazione, smontaggio e collegamento del WC",
        vyzovsa: "— Chiamata dell'idraulico a casa tua ",
        od20: "da 20€",
        od25: "da 25€",
        od30: "da 30€",
        od35: "da 35€",
        od351: "da 35€",
        od1: "da 20€",
        od2: "da 25€",
        od3: "da 30€",
        od4: "da 35€",
        od5: "da 35€",
        od11: "da 70€",
        od12: "da 31€",
        od13: "da 43€",
        od14: "da 39€",
        od15: "da 39€",
        od16: "da 59€",
        vyma: "— Installazione di quadri elettrici e sostituzione di interruttori automatici", 
        draz: "— Installazione in pareti e soffitti per il cablaggio elettrico", 
        description: "Il nostro team è il vostro partner affidabile per l'installazione di impianti idraulici, di riscaldamento, di condizionamento ed elettrici. Offriamo servizi di installazione e manutenzione di alta qualità per tutti i tipi di impianti, assicurando l'affidabilità e il funzionamento a lungo termine delle apparecchiature. I nostri esperti con anni di esperienza garantiscono precisione, efficienza e sicurezza in ogni fase, dalla progettazione al completamento dell'installazione. Con noi, il vostro comfort e la vostra sicurezza sono sempre sotto controllo!",
        sluzby: "Servizio",
        aboutus: "Chi siamo",
        mainpagetitle: "Comfort nel vostro spazio vitale",
        buttonviac: "Più informazioni",
        sluzbyname: "I nostri servizi",
        elektrikaname: "Installazione elettrica",
        elpopname: "Installazione elettrica",
        sluzbacall: "Servizio ordini",
        sluzbacall1: "Servizio ordini",
        sluzbacall2: "Servizio ordini",
        sluzbacall3: "Servizio ordini",
        sanitaname: "Lavori idraulici",
        popupname1: "Lavori idraulici",
        klimatname: "Installazione dell'aria condizionata",
        popupname2: "Installazione dell'aria condizionata",
        vikurname: "Installazione del riscaldamento",
        cennik: "Prezzi",
        cennik1: "Prezzi",
        cennik2: "Prezzi",
        cennik3: "Prezzi",
        feed: "Contatti",
        osvetle: "— Installazione dell'illuminazione (lampadari, lampade da tavolo, luci LED)",
        monel: " — Montaggio e riparazione delle prese",
        vyzovel: "— Chiamare un elettricista a casa vostra",
        leave: "Rimanete in contatto con noi",
        vikurdes: "Offriamo un'installazione professionale di sistemi di riscaldamento. I nostri esperti garantiscono l'installazione di vari tipi di riscaldamento, tra cui il riscaldamento a pavimento, i radiatori e le caldaie, per assicurare una temperatura ottimale nei vostri locali.",
        klimatedes: "Offriamo un'installazione e una manutenzione professionale dei sistemi di condizionamento dell'aria. I nostri esperti garantiscono la corretta installazione e la regolare manutenzione delle unità di condizionamento, assicurandone il funzionamento efficiente e a lungo termine.",
        sanitades: "Offriamo un'installazione professionale di sistemi sanitari, idraulici e di drenaggio. I nostri esperti garantiscono un'installazione rapida e di alta qualità di tutti i tipi di dispositivi sanitari, compresi lavandini, gabinetti, cabine doccia e rubinetti",
        elektrikades: "Offriamo installazione e manutenzione professionale di impianti elettrici. I nostri esperti garantiscono un'installazione rapida e di qualità di impianti elettrici, prese, interruttori, illuminazione e altri dispositivi elettrici, comprese le riparazioni e la manutenzione.",
    },
    en: {
        radiator: "Installation of heating radiators",
        podlaho: "Installation of underfloor heating",
        plynove: "Gas boiler installation",
        ekotla: "Electric boiler installation",
        kluc: "Installation of underfloor heating system",
        namevyk: "Heating installation",
        servisklim: "— Singlesplit",
        servisjed: "— Indoor wall unit",
        servisvon: "— Outdoor multisplit units",
        serviskaz: "— Indoor cassette units Multisplit",
        servisvnu: "— Indoor ceiling unit",
        servisstit: "— Assignment of control labels",
        odstra: "— Removal of blockages",
        vyma2: "— Replacement and repair of batteries",
        batare: "— Installation of a faucet for a bathtub with a shower",
        demo: "—  Installation, disassembly, and connection of the toilet",
        vyzovsa: "— Call of the plumber to your home",
        od20: "from 20€",
        od25: "from 25€",
        od30: "from 30€",
        od35: "from 35€",
        od351: "from 35€",
        od1: "from 20€",
        od2: "from 25€",
        od3: "from 30€",
        od4: "from 35€",
        od5: "from 35€",
        od11: "from 70€",
        od12: "from 31€",
        od13: "from 43€",
        od14: "from 39€",
        od15: "from 39€",
        od16: "from 59€",
        vyma: "—  Installation of electrical panels and replacement of circuit breakers", 
        draz: "— Installation in walls and ceilings for electrical wiring", 
        description: "Our team is your reliable partner in plumbing, heating, air conditioning and electrical installation. We offer high-quality installation and maintenance services for all types of systems, ensuring the reliability and long-term operation of equipment. Our experts with years of experience guarantee accuracy, efficiency and safety at every stage - from design to completion of installation. With us, your comfort and safety are always under control!",
        sluzby: "Service",
        aboutus: "About us",
        mainpagetitle: "Comfort in your living space",
        buttonviac: "More info",
        sluzbyname: "Our services",
        elektrikaname: "Electrical installation",
        elpopname: "Electrical installation",
        sluzbacall: "Order service",
        sluzbacall1: "Order service",
        sluzbacall2: "Order service",
        sluzbacall3: "Order service",
        sanitaname: "Plumbing work",
        popupname1: "Plumbing work",
        klimatname: "Air conditioning installation",
        popupname2: "Air conditioning installation",
        vikurname: "Heating installation",
        cennik: "Pricing",
        cennik1: "Pricing",
        cennik2: "Pricing",
        cennik3: "Pricing",
        feed: "Contacts",
        leave: "Stay in touch",
        osvetle: " — Installation of lighting (chandeliers, table lamps, LED lights)",
        monel: " — Installation and repair of sockets",
        vyzovel: "— Call the electrician to your home",
        vikurdes: "We offer professional installation of heating systems. Our experts ensure the installation of various types of heating, including underfloor heating, radiators, and boilers, to ensure the optimal temperature in your premises.",
        klimatedes: "We offer professional installation and maintenance of air conditioning systems. Our experts ensure proper installation and regular maintenance of air conditioning units, ensuring their efficient and long-term operation.",
        sanitades: "We offer professional installation of sanitary, plumbing, and drainage systems. Our experienced experts ensure fast and high-quality installation of all types of sanitary devices, including sinks, toilets, shower cabins, and faucets.",
        elektrikades: "We offer professional installation and maintenance of electrical systems. Our experienced experts ensure fast and high-quality installation of electrical systems, sockets, switches, lighting, and other electrical devices, including repairs and maintenance.",
    },
    ru: {
        radiator: "Установка радиаторов отопления",
        podlaho: "Установка теплого пола",
        plynove: "Установка газового котла",
        ekotla: "Установка электрического котла",
        kluc: "Монтаж системы теплый пол (под ключ)",
        namevyk: "Установка отопления",
        servisklim: "— Синглсплит",
        servisjed: "— Внутренняя настенная установка",
        servisvon: "— Внешние блоки мультисплит",
        serviskaz: "— Внутренние кассетные блоки мультисплит",
        servisvnu: "— Внутренний потолочный блок",
        servisstit: "— Распределение контрольных меток",
        odstra: "— Устранение засоров",
        vyma2: "— Замена и ремонт сантехники ",
        batare: "— Установка смесителя для ванны с душевой кабиной ",
        demo: "— Монтаж, демонтаж и подключение унитаза",
        vyzovsa: "— Вызов сантехника на дом",
        od25: "от 25€",
        od20: "от 20€",
        od30: "от 30€",
        od35: "от 35€",
        od351: "от 35€",
        od1: "от 20€",
        od2: "от 25€",
        od3: "от 30€",
        od4: "от 35€",
        od5: "от 35€",
        od11: "от 70€",
        od12: "от 31€",
        od13: "от 43€",
        od14: "от 39€",
        od15: "от 39€",
        od16: "от 59€",
        vyma: "— Установка электрических щитов и замена автоматических выключателей", 
        draz: "— Монтаж в стенах и потолках для электропроводки", 
        description: "Наша команда — ваш надежный партнер в области монтажа сантехники, отопления, кондиционирования и электрики. Мы предлагаем высококачественные услуги по установке и обслуживанию всех видов систем, обеспечивая надежность и долгосрочную эксплуатацию оборудования. Наши специалисты с многолетним опытом работы гарантируют точность, эффективность и безопасность на каждом этапе — от проектирования до завершения монтажа. С нами ваш комфорт и безопасность всегда под контролем!",
        sluzby: "Услуги",
        aboutus: "О нас",
        mainpagetitle: "Комфорт в вашем жилом пространстве",
        buttonviac: "Дополнительная информация",
        sluzbyname: "Наши услуги",
        elektrikaname: "Электромонтаж",
        elpopname: "Электромонтаж",
        sluzbacall: "Заказать услугу",
        sluzbacall1: "Заказать услугу",
        sluzbacall2: "Заказать услугу",
        sluzbacall3: "Заказать услугу",
        sanitaname: "Сантехнические работы",
        popupname1: "Сантехнические работы",
        klimatname: "Установка кондиционера",
        popupname2: "Установка кондиционера",
        vikurname: "Установка отопления",
        cennik: "Цены",
        cennik1: "Цены",
        cennik2: "Цены",
        cennik3: "Цены",
        feed: "Контакты",
        monel: " — Монтаж и ремонт розеток",
        vyzovel: "— Вызов электрика на дом",
        osvetle: "— Установка освещения (люстры, настольные лампы, светодиодные лампы)",
        leave: "Оставайтесь с нами на связи",
        vikurdes: "Мы предлагаем профессиональную установку отопительных систем. Наши специалисты обеспечат установку различных типов отопления, включая монтаж теплого пола, радиаторы и котлы, что обеспечит комфорт и уют в ваших домах.",
        klimatedes: "Мы предлагаем быструю установку и обслуживание кондиционеров. Наши специалисты обеспечат правильную установку и регулярное обслуживание кондиционеров, что гарантирует их эффективную и долговременную эксплуатацию.",
        sanitades: "Мы предлагаем профессиональную установку сантехники, водопроводных и канализационных систем. Наши опытные специалисты обеспечат быструю и качественную установку всех видов сантехнических устройств, включая раковины, туалеты, душевые кабины и смесители.",
        elektrikades: "Мы предлагаем профессиональную установку и сервис электрических систем. Наши опытные специалисты обеспечат быструю и качественную установку электрических систем, розеток, выключателей, освещения и других электрических устройств, включая ремонт и обслуживание.",
    },
    ua: {
        radiator: "Встановлення радіаторів опалення",
        podlaho: "Встановлення теплої підлоги",
        plynove: "Встановлення газового котла",
        ekotla: "Встановлення електричного котла",
        kluc: " Монтаж системи “тепла підлога” (під ключ)",
        namevyk: "Монтаж опалення",
        servisklim: "— Сингл-спліт",
        servisjed: "— Внутрішній настінний блок",
        servisvon: "— Зовнішні блоки мультиспліт",
        serviskaz: "— Внутрішні касетні блоки мультиспліт",
        servisvnu: "— Внутрішній стельовий блок",
        servisstit: "— Розподіл контрольних міток",
        odstra: "— Усунення засмічень",
        vyma2: "— Заміна та ремонт сантехніки ",
        batare: "— Установка змішувача для ванни з душовою кабіною",
        demo: "— Монтаж, демонтаж і підключення унітазу",
        vyzovsa: "— Виклик сантехніка додому",
        od30: "від 30€",
        od35: "від 35€",
        od351: "від 35€",
        od20: "від 20€",
        od25: "від 25€",
        od1: "від 20€",
        od2: "від 25€",
        od3: "від 30€",
        od4: "від 35€",
        od5: "від 35€",
        od11: "від 70€",
        od12: "від 31€",
        od13: "від 43€",
        od14: "від 39€",
        od15: "від 39€",
        od16: "від 59€",
        vyma: "— Установка електричних щитів і заміна автоматичних вимикачів", 
        draz: "— Монтаж у стінах і стелях для електропроводки", 
        description: "Наша команда - ваш надійний партнер у сфері монтажу сантехніки, опалення, кондиціонування та електрики. Ми пропонуємо високоякісні послуги зі встановлення та обслуговування всіх видів систем, забезпечуючи надійність і довгострокову експлуатацію обладнання. Наші фахівці з багаторічним досвідом роботи гарантують точність, ефективність і безпеку на кожному етапі - від проєктування до завершення монтажу. З нами ваш комфорт і безпека завжди під контролем!",
        sluzby: "Послуги",
        aboutus: "Про нас",
        mainpagetitle: "Комфорт у вашому житловому просторі",
        buttonviac: "Додаткова інформація",
        sluzbyname: "Наші послуги",
        sluzbacall: "Замовити послугу",
        elektrikaname: "Електромонтаж",
        elpopname: "Електромонтаж",
        sluzbacall1: "Замовити послугу",
        sluzbacall2: "Замовити послугу",
        sluzbacall3: "Замовити послугу",
        sanitaname: "Сантехнічні роботи",
        popupname1: "Сантехнічні роботи",
        klimatname: "Монтаж кондиціонера",
        popupname2: "Монтаж кондиціонера",
        vikurname: "Монтаж опалення",
        cennik: "Ціни",
        cennik1: "Ціни",
        cennik2: "Ціни",
        cennik3: "Ціни",
        feed: "Контакти",
        monel: " — Монтаж і ремонт розеток",
        vyzovel: "— Виклик електрика додому",
        osvetle: "— Установка освітлення (люстри, настільні лампи, світлодіодні лампи)",
        leave: "Залишайтеся з нами на зв'язку",
        vikurdes: "Ми пропонуємо професійну установку опалювальних систем. Наші фахівці забезпечать монтаж різних типів опалення, включаючи підлогу з підігрівом, радіатори та котли, щоб забезпечити оптимальну температуру у ваших приміщеннях.",
        klimatedes: "Ми пропонуємо професійну установку та сервіс кондиціонерів. Наші фахівці забезпечать правильний монтаж та регулярне обслуговування кондиціонерних систем, що забезпечить їх ефективну та довготривалу роботу.",
        sanitades: "Ми пропонуємо професійну установку сантехніки, водопровідних і каналізаційних систем. Наші досвідчені фахівці забезпечать швидкий та якісний монтаж всіх видів сантехнічних пристроїв, включаючи раковини, унітази, душові кабіни та змішувачі.",
        elektrikades: "Ми пропонуємо професійну установку та сервіс електричних систем. Наші досвідчені фахівці забезпечать швидкий та якісний монтаж електроустановок, розеток, вимикачів, освітлення та інших електричних пристроїв, включаючи ремонт та обслуговування.",
    },
    de: {
        radiator: "Einbau von Heizkörpern",
        podlaho: "Einbau einer Fußbodenheizung",
        plynove: "Einbau einer Gastherme",
        ekotla: "Einbau eines elektrischen Heizkessels",
        kluc: " Einbau einer Fußbodenheizung ",
        namevyk: "Heizungsinstallation",
        servisklim: "— Singlesplit",
        servisjed: "— Inneneinheit Wand",
        servisvon: "— Außeneinheiten Multisplit",
        serviskaz: "— Innere Kassetteneinheiten Multisplit",
        servisvnu: "— Inneneinheit Decke",
        servisstit: "— Zuweisung von Kontrollschildern",
        odstra: "— Beseitigung von Verstopfungen",
        vyma2: "— Austausch und Reparatur von Batterien",
        batare: "—  Installation der Armatur für Badewanne mit Duschkabine",
        demo: "— Montage, Demontage und Anschluss der Toilette",
        vyzovsa: "— Aufruf des Klempners zu Ihnen nach Hause",
        od25: "ab 25€",
        od20: "ab 20€",
        od30: "ab 30€",
        od35: "ab 35€",
        od351: "ab 35€",
        od1: "ab 20€",
        od2: "ab 25€",
        od3: "ab 30€",
        od4: "ab 35€",
        od5: "ab 35€",
        od11: "ab 70€",
        od12: "ab 31€",
        od13: "ab 43€",
        od14: "ab 39€",
        od15: "ab 39€",
        od16: "ab 59€",
        vyma: "—  Installation von Elektroverteilern und Austausch von Leitungsschutzschaltern", 
        draz: "— Installation in Wänden und Decken für die elektrische Verkabelung", 
        description: "Unser Team ist Ihr zuverlässiger Partner für die Installation von Sanitär-, Heizungs-, Klima- und Elektroanlagen. Wir bieten qualitativ hochwertige Installations- und Wartungsdienstleistungen für alle Arten von Systemen, die die Zuverlässigkeit und den langfristigen Betrieb der Anlagen gewährleisten. Unsere Fachleute mit langjähriger Erfahrung garantieren Genauigkeit, Effizienz und Sicherheit in jeder Phase - von der Planung bis zum Abschluss der Installation. Mit uns haben Sie Ihren Komfort und Ihre Sicherheit immer unter Kontrolle!",
        sluzby: "Service",
        aboutus: "Über uns",
        mainpagetitle: "Komfort in Ihrem Lebensraum",
        buttonviac: "Mehr Infos",
        sluzbyname: "Unsere Dienstleistungen",
        sluzbacall: "Dienstleistung bestellen",
        elektrikaname: "Elektrische Installation",
        elpopname: "Elektrische Installation",
        sluzbacall1: "Dienstleistung bestellen",
        sluzbacall2: "Dienstleistung bestellen",
        sluzbacall3: "Dienstleistung bestellen",
        sanitaname: "Installationsarbeiten",
        popupname1: "Installationsarbeiten",
        klimatname: "Klimaanlageninstallation",
        popupname2: "Klimaanlageninstallation",
        vikurname: "Heizungsinstallation",
        cennik: "Preise",
        cennik1: "Preise",
        cennik2: "Preise",
        cennik3: "Preise",
        feed: "Contacti",
        monel: " —  Installation und Reparatur von Steckdosen",
        vyzovel: "— Rufen Sie einen Elektriker zu Ihnen nach Hause",
        osvetle: "— Installation von Beleuchtung (Kronleuchter, Tischlampen, LED-Lichter)",
        leave: "Bleiben Sie mit uns in Kontakt",
        vikurdes: "Wir bieten professionelle Installation von Heizsystemen. Unsere Experten sorgen für die Installation verschiedener Heizarten, einschließlich Fußbodenheizung, Heizkörpern und Kesseln, um die optimale Temperatur in Ihren Räumen sicherzustellen.",
        klimatedes: "Wir bieten professionelle Installation und Wartung von Klimaanlagen. Unsere Experten gewährleisten eine korrekte Montage und regelmäßige Wartung der Klimaanlagen, um deren effizienten und langfristigen Betrieb sicherzustellen.",
        sanitades: "Wir bieten professionelle Installation von Sanitär-, Wasser- und Abwassersystemen. Unsere erfahrenen Experten gewährleisten eine schnelle und qualitativ hochwertige Montage aller Arten von Sanitäranlagen, einschließlich Waschbecken, Toiletten, Duschkabinen und Armaturen.",
        elektrikades: "Wir bieten professionelle Installation und Wartung von elektrischen Systemen. Unsere erfahrenen Fachleute sorgen für eine schnelle und qualitativ hochwertige Montage von Elektroinstallationen, Steckdosen, Schaltern, Beleuchtung und anderen elektrischen Geräten, einschließlich Reparaturen und Wartung.",
    },
    cz: {
        radiator: "Instalace topných těles",
        podlaho: "Instalace podlahového vytápění",
        plynove: "Instalace plynového kotle",
        ekotla: "Instalace elektrického kotle",
        kluc: "Instalace podlahového vytápění",
        namevyk: "Instalace vytápění",
        servisklim: "— Singlesplit",
        servisjed: "— Indoor wall unit",
        servisvon: "— Outdoor multisplit units",
        serviskaz: "— Indoor cassette units Multisplit",
        servisvnu: "— Indoor ceiling unit",
        servisstit: "— Assignment of control labels",
        odstra: "— Odstranění ucpání",
        vyma2: "— Výměna a oprava baterií",
        batare: "—  Instalace baterie pro vanu se sprchovým koutem",
        demo: "— Montáž, demontáž a připojení WC",
        vyzovsa: "— Výzva instalatéra k vám domů",
        od25: "od 25€",
        od20: "od 20€",
        od30: "od 30€",
        od35: "od 35€",
        od351: "od 35€",
        od1: "od 20€",
        od2: "od 25€",
        od3: "od 30€",
        od4: "od 35€",
        od5: "od 35€",
        od11: "od 70€",
        od12: "od 31€",
        od13: "od 43€",
        od14: "od 39€",
        od15: "od 39€",
        od16: "od 59€",
        vyma: "—  Instalace elektrických rozváděčů a výměna automatických vypínačů", 
        draz: "— Instalace ve stěnách a stropech pro elektroinstalaci", 
        description: "Náš tým je spolehlivým partnerem v oblasti instalatérských, topenářských, klimatizačních a elektroinstalačních prací. Nabízíme kvalitní instalační a servisní služby pro všechny typy systémů, které zajišťují spolehlivost a dlouhodobý provoz zařízení. Naši odborníci s dlouholetými zkušenostmi zaručují přesnost, efektivitu a bezpečnost v každé fázi - od návrhu až po dokončení instalace. S námi máte své pohodlí a bezpečnost vždy pod kontrolou!",
        sluzby: "Služby",
        aboutus: "O nás",
        mainpagetitle: "Pohodlí ve vašem obytném prostoru",
        buttonviac: "Více informací",
        sluzbyname: "Naše služby",
        elektrikaname: "Elektrická instalace",
        elpopname: "Elektrická instalace",
        sluzbacall: "Objednat službu",
        sluzbacall1: "Objednat službu",
        sluzbacall2: "Objednat službu",
        sluzbacall3: "Objednat službu",
        sanitaname: "Instalatérské práce",
        popupname1: "Instalatérské práce",
        klimatname: "Instalace klimatizace",
        popupname2: "Instalace klimatizace",
        vikurname: "Instalace vytápění",
        cennik: "Ceny",
        cennik1: "Ceny",
        cennik2: "Ceny",
        cennik3: "Ceny",
        feed: "Kontakty",
        monel: " —  Montáž a oprava zásuvek",
        vyzovel: "— Přivolání elektrikáře k vám domů",
        osvetle: "— Instalace osvětlení (lustry, stolní lampy, LED světla)",
        leave: "Zůstaňte s námi v kontaktu",
        vikurdes: " Nabízíme profesionální instalaci topných systémů. Naši odborníci zajistí montáž různých typů topení, včetně podlahového topení, radiátorů a kotlů, aby zajistili optimální teplotu ve vašich prostorech.",
        klimatedes: "Nabízíme profesionální instalaci a servis klimatizací. Naši odborníci zajistí správnou montáž a pravidelnou údržbu klimatizačních jednotek, čímž zajistíme jejich efektivní a dlouhodobý provoz.",
        sanitades: "Nabízíme profesionální instalaci sanitární, vodovodní a kanalizační techniky. Naši zkušení odborníci zajistí rychlou a kvalitní montáž všech druhů sanitárních zařízení, včetně umyvadel, toalet, sprchových koutů a baterií.",
        elektrikades: "Nabízíme profesionální instalaci a servis elektrických systémů. Naši zkušení odborníci zajistí rychlou a kvalitní montáž elektroinstalací, zásuvek, vypínačů, osvětlení a dalších elektrických zařízení, včetně oprav a údržby.",
    },
  };
  
  function setLanguage(language) {
    document.getElementById('sluzby').innerText = translations[language].sluzby;
    document.getElementById('aboutus').innerText = translations[language].aboutus;
    document.getElementById('mainpagetitle').innerText = translations[language].mainpagetitle;
    document.getElementById('buttonviac').innerText = translations[language].buttonviac;
    document.getElementById('sluzbyname').innerText = translations[language].sluzbyname;
    document.getElementById('elektrikaname').innerText = translations[language].elektrikaname;
    document.getElementById('elektrikades').innerText = translations[language].elektrikades;
    document.getElementById('sluzbacall').innerText = translations[language].sluzbacall;
    document.getElementById('sluzbacall1').innerText = translations[language].sluzbacall1;
    document.getElementById('sluzbacall2').innerText = translations[language].sluzbacall2;
    document.getElementById('sluzbacall3').innerText = translations[language].sluzbacall3;
    document.getElementById('sanitaname').innerText = translations[language].sanitaname;
    document.getElementById('sanitades').innerText = translations[language].sanitades;
    document.getElementById('klimatname').innerText = translations[language].klimatname;
    document.getElementById('klimatedes').innerText = translations[language].klimatedes;
    document.getElementById('vikurname').innerText = translations[language].vikurname;
    document.getElementById('vikurdes').innerText = translations[language].vikurdes;
    document.getElementById('cennik').innerText = translations[language].cennik;
    document.getElementById('cennik1').innerText = translations[language].cennik1;
    document.getElementById('cennik2').innerText = translations[language].cennik2;
    document.getElementById('cennik3').innerText = translations[language].cennik3;
    document.getElementById('feed').innerText = translations[language].feed;
    document.getElementById('leave').innerText = translations[language].leave;
    document.getElementById('description').innerText = translations[language].description;    
    document.getElementById('vyzovel').innerText = translations[language].vyzovel;  
    document.getElementById('elpopname').innerText = translations[language].elpopname;
    document.getElementById('monel').innerText = translations[language].monel;
    document.getElementById('osvetle').innerText = translations[language].osvetle;
    document.getElementById('draz').innerText = translations[language].draz;
    document.getElementById('vyma').innerText = translations[language].vyma;    
    document.getElementById('od20').innerText = translations[language].od20; 
    document.getElementById('od25').innerText = translations[language].od25; 
    document.getElementById('od30').innerText = translations[language].od30; 
    document.getElementById('od35').innerText = translations[language].od35;
    document.getElementById('od351').innerText = translations[language].od351; 
    document.getElementById('popupname1').innerText = translations[language].popupname1; 
    document.getElementById('vyzovsa').innerText = translations[language].vyzovsa; 
    document.getElementById('odstra').innerText = translations[language].odstra; 
    document.getElementById('vyma2').innerText = translations[language].vyma2; 
    document.getElementById('batare').innerText = translations[language].batare; 
    document.getElementById('demo').innerText = translations[language].demo; 
    document.getElementById('od1').innerText = translations[language].od1; 
    document.getElementById('od2').innerText = translations[language].od2; 
    document.getElementById('od3').innerText = translations[language].od3; 
    document.getElementById('od4').innerText = translations[language].od4;
    document.getElementById('od5').innerText = translations[language].od5;
    document.getElementById('popupname2').innerText = translations[language].popupname2;
    document.getElementById('servisklim').innerText = translations[language].servisklim;
    document.getElementById('servisjed').innerText = translations[language].servisjed;
    document.getElementById('servisvon').innerText = translations[language].servisvon;
    document.getElementById('serviskaz').innerText = translations[language].serviskaz;
    document.getElementById('servisvnu').innerText = translations[language].servisvnu;
    document.getElementById('servisstit').innerText = translations[language].servisstit;
    document.getElementById('od11').innerText = translations[language].od11; 
    document.getElementById('od12').innerText = translations[language].od12; 
    document.getElementById('od13').innerText = translations[language].od13; 
    document.getElementById('od14').innerText = translations[language].od14;
    document.getElementById('od15').innerText = translations[language].od15;
    document.getElementById('od16').innerText = translations[language].od16;
    document.getElementById('namevyk').innerText = translations[language].namevyk;
    document.getElementById('radiator').innerText = translations[language].radiator;
    document.getElementById('plynove').innerText = translations[language].plynove;
    document.getElementById('ekotla').innerText = translations[language].ekotla;
    document.getElementById('podlaho').innerText = translations[language].podlaho;
    document.getElementById('kluc').innerText = translations[language].kluc;


  }

// Открытие и закрытие слайдера
const openSliderBtns = document.querySelectorAll('.open-slider');
const closeSliderBtns = document.querySelectorAll('.close-icon');

// Функция открытия слайдера
openSliderBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const sliderId = btn.getAttribute('data-slider');
    const sliderPopup = document.getElementById(sliderId);
    sliderPopup.style.display = 'flex';
  });
});

// Закрытие слайдера
closeSliderBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const sliderPopup = btn.closest('.popup-container');
    sliderPopup.style.display = 'none';
  });
});

// Закрытие при клике вне попапа
const popups = document.querySelectorAll('.popup-container');
popups.forEach((popup) => {
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});

// Переключение слайдов для каждого слайдера
document.querySelectorAll('.image-slider').forEach((slider, index) => {
  const prevBtn = document.getElementById(`prevBtn${index + 1}`);
  const nextBtn = document.getElementById(`nextBtn${index + 1}`);
  const sliderImages = slider.querySelector('.slider-images');
  const slides = slider.querySelectorAll('.slider-slide');
  
  let currentSlide = 0;

  function updateSliderPosition() {
    const offset = -currentSlide * 100; // Сдвиг слайдов на ширину одного слайда
    sliderImages.style.transform = `translateX(${offset}%)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0; // Переход к первому слайду
    }
    updateSliderPosition();
  });

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = slides.length - 1; // Переход к последнему слайду
    }
    updateSliderPosition();
  });
});
