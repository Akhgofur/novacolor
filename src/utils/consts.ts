import { INews } from "@/contents/news-section"
import { INavItem, IProductItem } from "./types"

const languages = [
    {
        id: 1,
        name: "UZ",
        image: "/img/uz.png",
        locale: "uz"
    },
    {
        id: 2,
        name: "RU",
        image: "/img/ru.png",
        locale: "ru"
    },
]

const statsData = [
    {
        id: 1,
        number: 2016,
        name: "stats-1"
    },
    {
        id: 2,
        number: 2000,
        name: "stats-2"
    },
    {
        id: 3,
        number: 1000,
        name: "stats-3"
    },
    {
        id: 4,
        number: 5000,
        name: "stats-4"
    },
]

const newsData: INews[] = [
    {
        id: 1,
        date: "25 Декабря 2022",
        description: "lorem",
        image: "/img/news/news-1.jpg",
        name: "Miku"
    },
    {
        id: 2,
        date: "25 Декабря 2022",
        description: "lorem",
        image: "/img/news/news-2.jpg",
        name: "Mirror"
    },
    {
        id: 3,
        date: "25 Декабря 2022",
        description: "lorem",
        image: "/img/news/news-3.jpg",
        name: "Teodorico"
    },
    {
        id: 4,
        date: "25 Декабря 2022",
        description: "lorem",
        image: "/img/news/news-4.jpg",
        name: "Archi pietra"
    },
    {
        id: 5,
        date: "25 Декабря 2022",
        description: "lorem",
        image: "/img/news/news-5.jpg",
        name: "Florenzia"
    }
]




const navData: INavItem[] = [
    {
      id: 1,
      name: "main",
      url: "/",
    },
    {
      id: 2,
      name: "products",
      url: "/category/all",
    },
    {
      id: 3,
      name: "about",
      url: "/about",
    },
    {
      id: 4,
      name: "news",
      url: "/news",
    },
    {
      id: 5,
      name: "contact",
      url: "/contact",
    },
  ];

  const mainInfo = [
    {
        id: 1,
        name: "phone",
        image: "/img/phone.png",
        value: "998998934461",
        url: "tel:998998934461"

    },
    {
        id: 2,
        name: "Email",
        image: "/img/mail.png",
        value: "info@gmail.com",
        url: "mailto:info@gmail.com"

    },
    {
        id: 3,
        name: "address",
        image: "/img/location.png",
        value: "Yunusobod Tashkent",
        url: "#"

    },
  ] 

  const socialLinks = [
    {
        id: 1,
        image: "/img/telegram.png",
        url: "https://t.me/novacolor_uz"
    },
    {
        id: 2,
        image: "/img/instagram.png",
        url: "https://www.instagram.com/novacolor_uz/"
    },
  ]

  const contactInfo = [
    {
        id: 1,
        name: "about",
        description : "ci-1-desc",
        image: "/img/contact-1.png",
    },
    {
        id: 2,
        name: "address",
        description : "ci-2-desc",
        image: "/img/contact-2.png",
    },
    {
        id: 3,
        name: "contact",
        description : "<a  href='mailto:info@gmail.com' >info@gmail.com</a> </br> <a  href='tel:+998998934461' >+998 (99) 893 44 61</a>",
        image: "/img/contact-3.png",
    },
    
  ]

  const categories = [
    {
      id: "all",
      icon: "/img/categories/8.png",
      name: "all-products",
      image: "/img/categories/metallik.png"
    },
    {
      id: 1,
      icon: "/img/categories/1.png",
      name: "category-1",
      image: "/img/categories/metallik.png"
    },
    {
      id: 2,
      icon: "/img/categories/2.png",
      name: "category-2",
      image: "/img/categories/mineral.png"
    },
    {
      id: 3,
      icon: "/img/categories/3.png",
      name: "category-3",
      image: "/img/categories/oksid.png"
    },
    {
      id: 4,
      icon: "/img/categories/4.png",
      name: "category-4",
      image: "/img/categories/betonart.png"
    },
    {
      id: 5,
      icon: "/img/categories/5.png",
      name: "category-5",
      image: "/img/categories/floor.png"
    },
    {
      id: 6,
      icon: "/img/categories/6.png",
      name: "category-6",
      image: "/img/categories/oksid.png"
    },
    {
      id: 7,
      icon: "/img/categories/7.png",
      name: "category-7",
      image: "/img/categories/grunt.png"
    },
    
  ];


  const mainProducts: IProductItem[] = [
    {
        id: 1,
        category_id: [1],
        image: "/img/products/africa.jpg",
        name : "Africa",
        description_uz : "",
        description_ru: "Декоративное покрытие для интерьеров с эффектом металлик Африка удивляет мягкими и бархатистыми текстурами для элегантных и модных интерьеров. Это декоративное покрытие для интерьеров на основе металлических наполнителей, позволяющее создавать игры легких и тактильных текстур с сильным эстетическим эффектом. Африка осуществляет активные действия, способные значительно снизить концентрацию формальдегида, возможно, присутствующего в окружающем воздухе. Эффективность этого свойства проверена в соответствии с конкретным стандартом ISO 16000-23 . Африка представляет собой выражение нынешней приверженности Novacolor экологической устойчивости. Чтобы уменьшить «углеродный след», в Африке используется специальное связующее, полученное из устойчивой биомассы, которое, таким образом, заменяет ископаемое сырье. Это стало возможным благодаря технически-производственному методу под названием «баланс массы», сертифицированному REDcert 2 . ",
        variants: [
            {
                id: 1,
                image: "/img/products/africa-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/africa-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/africa-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/africa-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/africa-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/africa-6.jpg"
            },
            {
                id: 7,
                image: "/img/products/africa-7.jpg"
            },
            {
                id: 8,
                image: "/img/products/africa-8.jpg"
            },
        ]
    },
    {
        id: 2,
        category_id: [1],
        image: "/img/products/dune.jpg",
        name : "Dune",
        description_uz : "dune-desc",
        description_ru: "Декоративное покрытие для интерьеров с эффектом металлик, золота и серебра. Дюна — это отделка для внутренней отделки на основе наполнителей с мягким металлическим эффектом. Эти наполнители создают меняющуюся и приятную игру света и отраженных цветов. Dune позволяет получить бархатистые цветовые решения, визуальные и тактильные ощущения, которые делают обстановку на удивление комфортной и соответствующей современным тенденциям в оформлении интерьеров. Dune представляет собой выражение нынешней приверженности Novacolor экологической устойчивости. Чтобы уменьшить «углеродный след», в состав Dune входит специальное связующее, полученное из экологически чистой биомассы, которое, таким образом, заменяет ископаемое сырье.Это стало возможным благодаря технически-производственному методу под названием «баланс массы», сертифицированному REDcert 2 .",
        variants: [
            {
                id: 1,
                image: "/img/products/dune-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/dune-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/dune-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/dune-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/dune-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/dune-6.jpg"
            },
            {
                id: 7,
                image: "/img/products/dune-7.jpg"
            },
            {
                id: 8,
                image: "/img/products/dune-8.jpg"
            },
            {
                id: 9,
                image: "/img/products/dune-9.jpg"
            },
        ]
    },
    {
        id: 3,
        category_id: [1],
        image: "/img/products/animamundi.jpg",
        name : "Animamundi",
        description_uz : "Animamundi-desc",
        description_ru: "Мягкая металлическая текстура для интерьеров с умеренно перламутровым и непрозрачным эффектом. Animamundi интерпретирует концепцию «размытого бетона» новаторски, предлагая, с одной стороны, продукт с умеренно жемчужным и непрозрачным эффектом, а с другой — сильным материальным оттенком. Внутренняя отделка высокого качества, в соответствии с самыми современными и актуальными тенденциями в области «бетона» в области архитектуры. Animamundi может удовлетворить самые широкие запросы в области внутренней отделки, гарантируя чисто материальные эффекты, но в то же время столь же престижные, как и металлическая отделка. ",
        variants: [
            {
                id: 1,
                image: "/img/products/animamundi-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/animamundi-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/animamundi-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/animamundi-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/animamundi-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/animamundi-6.jpg"
            },
        ]
    },
    {
        id: 4,
        category_id: [1],
        image: "/img/products/swahili.jpg",
        name : "Swahili",
        description_uz : "Swahili-desc",
        description_ru: "Фактурное декоративное покрытие для интерьеров с эффектом металлик Суахили — это отделка для внутренней отделки на основе металлических наполнителей, отборной кварцевой муки, создающих тонкий металлический эффект. Эти наполнители создают меняющуюся и приятную игру света и отраженных цветов. Суахили представляет собой выражение нынешней приверженности Novacolor экологической устойчивости. Чтобы уменьшить «углеродный след», в состав суахили входит специальное связующее, полученное из экологически чистой биомассы, которое, таким образом, заменяет ископаемое сырье. Это стало возможным благодаря технически-производственному методу под названием «баланс массы», сертифицированному REDcert 2 . ",
        variants: [
            {
                id: 1,
                image: "/img/products/swahili-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/swahili-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/swahili-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/swahili-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/swahili-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/swahili-6.jpg"
            },
            {
                id: 7,
                image: "/img/products/swahili-7.jpg"
            },
            {
                id: 8,
                image: "/img/products/swahili-8.jpg"
            },
            {
                id: 9,
                image: "/img/products/swahili-9.jpg"
            },
        ]
    },
    {
        id: 5,
        category_id: [1],
        image: "/img/products/metallo.jpg",
        name : "Metallo fuso",
        description_uz : "Metallo-desc",
        description_ru: "Декоративное покрытие для интерьеров на основе металлических порошков Metallo_Fuso — это декоративное покрытие для внутренних вертикальных поверхностей, состоящее из отборных порошков металлических сплавов, двухкомпонентных эпоксидных смол, наполнителей и специальных реологических добавок, обеспечивающих отличную обрабатываемость продукта. Приложение Metallo_Fuso позволяет создавать уникальные текстуры, оригинальным и эксклюзивным образом улучшая обработанные поверхности, превращая их в настоящий металл. Metallo_Fuso доступен в версиях из олова, меди, латуни, бронзы и цинка. ",
        variants: [
            {
                id: 1,
                image: "/img/products/metallo-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/metallo-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/metallo-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/metallo-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/metallo-5.jpg"
            },
        ]
    },
    {
        id: 6,
        category_id: [1],
        image: "/img/products/luce.jpg",
        name : "Luce_Wall Painting",
        description_uz : "Luce_Wall Painting-desc",
        description_ru: "Текстурированное декоративное покрытие для интерьера с легким металлическим эффектом Luce_Wall Painting — это отделка для отделки внутренних поверхностей, в основе которой металлические наполнители, отборные крошки, создающие эффект мягкого металлического оттенка. Эти наполнители создают меняющуюся и приятную игру света и отраженных цветов. Luce_Wall Painting представляет собой выражение нынешней приверженности Novacolor экологической устойчивости. Чтобы уменьшить «углеродный след», в формулу Luce_Wall Painting входит специальное связующее, полученное из экологически чистой биомассы, которое, таким образом, заменяет ископаемое сырье. Это стало возможным благодаря технически-производственному методу под названием «баланс массы», сертифицированному REDcert 2 . ",
        variants: [
            {
                id: 1,
                image: "/img/products/luce-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/luce-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/luce-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/luce-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/luce-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/luce-6.jpg"
            },
            {
                id: 7,
                image: "/img/products/luce-7.jpg"
            },
            {
                id: 8,
                image: "/img/products/luce-8.jpg"
            },
        ]
    },
    {
        id: 7,
        category_id: [1],
        image: "/img/products/opaco.jpg",
        name : "Dune Opaco",
        description_uz : "Dune opaco Painting-desc",
        description_ru: "Декоративное покрытие для интерьеров с эффектом матовый металлик Dune Opaco — это отделка для внутренней отделки на основе наполнителей с легким металлическим матовым эффектом. Эти наполнители создают меняющуюся и приятную игру света и отраженных цветов. Dune Opaco представляет собой выражение нынешней приверженности Novacolor экологической устойчивости. Чтобы уменьшить «углеродный след», в состав Dune Opaco входит специальное связующее, полученное из экологически чистой биомассы, которое, таким образом, заменяет ископаемое сырье. Это стало возможным благодаря технически-производственному методу под названием «баланс массы», сертифицированному REDcert 2 . ",
        variants: [
            {
                id: 1,
                image: "/img/products/opaco-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/opaco-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/opaco-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/opaco-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/opaco-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/opaco-6.jpg"
            },
        ]
    },
    {
        id: 8,
        category_id: [1],
        image: "/img/products/esterni.jpg",
        name : "Animamundi Per Esterni",
        description_uz : "Animamundi Per Esterni-desc",
        description_ru: "Мягкая металлическая текстура для экстерьера с умеренно перламутровым и непрозрачным эффектом Animamundiper Esterni — это декоративное микропокрытие, также доступное в акрисилоксановом варианте для нанесения на внешние фасады, на опоры, подготовленные соответствующим образом с помощью RustOn Fondo. Animamundi perEsterni — это тонкий металлический оттенок с умеренно жемчужным финишем и сильным материальным оттенком. Никакой защиты поверхности не требуется.",
        variants: [
            {
                id: 1,
                image: "/img/products/esterni-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/esterni-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/esterni-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/esterni-4.jpg"
            },
        ]
    },
    {
        id: 9,
        category_id: [2],
        image: "/img/products/therm.jpg",
        name : "Mi-Ku therm",
        description_uz : "Mi-Ku therm-desc",
        description_ru: "Атермическое декоративное покрытие для интерьеров Mi-Ku Therm — это «функциональный» декоративный элемент для интерьера, мягкий на ощупь, сверкающий на свету и создающий ощущение теплоизоляции основания. Mi-Ku Therm препятствует образованию конденсата, он изменяет точку росы, потому что поверхность нагревается до более высокой температуры, чем опора, и повышает комфорт проживания.Углеродный след Ми-Ка — Therm был сокращен благодаря использованию компонентов из биомассы (массы-баланс) , и получил REDcert 2 сертификации , относящуюся к продуктам , вытекающим из использования биомассы. ",
        variants: [
            {
                id: 1,
                image: "/img/products/therm-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/therm-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/therm-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/therm-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/therm-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/therm-6.jpg"
            },
        ]
    },
    {
        id: 10,
        category_id: [2],
        image: "/img/products/mirror.jpg",
        name : "Mirror",
        description_uz : "Mirror-desc",
        description_ru: "Глянцевая шпатлевка на основе извести для отделки внутренних поверхностей Глянцевая замазка для зеркал извести с добавлением специальных добавок, обеспечивающих превосходный блеск. Он состоит из замазки с добавлением воздушной извести, отобранных заполнителей и модификаторов реологических свойств, обеспечивающих отличную обрабатываемость. Ценные украшения внутренней поверхности. Натуральные известковые штукатурки представляют собой идеальную основу для нанесения Mirror, который химически взаимодействует с ними, создавая единое тело с опорой и значительно продлевая срок службы самой отделки. ",
        variants: [
            {
                id: 1,
                image: "/img/products/mirror-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/mirror-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/mirror-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/mirror-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/mirror-5.jpg"
            },
        ]
    },
    {
        id: 11,
        category_id: [2],
        image: "/img/products/teodorico.jpg",
        name : "Teodorico",
        description_uz : "Teodorico-desc",
        description_ru: "Декоративная штукатурка на основе извести с эффектом золота, серебра и бронзы для внутренних и наружных работ. Teodorico — это интоначино на основе извести, особенно подходящее для украшения престижных интерьеров и экстерьеров. Продукт состоит из гашеной извести, драгоценных мраморных песков, отобранных инертных и реологических модификаторов, обеспечивающих отличную обрабатываемость. Teodorico, благодаря своему составу, позволяет получить компактную, полуглянцевую отделку, похожую на мраморный камень, с насыщенными и яркими цветовыми тонами. Качественный декор внутренних и внешних поверхностей. Натуральные известковые штукатурки представляют собой идеальную основу для нанесения Teodorico, который химически взаимодействует с ними, создавая единое тело с опорой и значительно продлевая срок службы самой отделки. Teodorico также предлагает отличный и элегантный предмет мебели для внутренних поверхностей. ",
        variants: [
            {
                id: 1,
                image: "/img/products/teodorico-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/teodorico-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/teodorico-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/teodorico-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/teodorico-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/teodorico-6.jpg"
            },
            {
                id: 7,
                image: "/img/products/teodorico-7.jpg"
            },
            {
                id: 8,
                image: "/img/products/teodorico-8.jpg"
            },

        ]
    },
    {
        id: 12,
        category_id: [2],
        image: "/img/products/archi.jpg",
        name : "Archi pietra",
        description_uz : "Archi pietra-desc",
        description_ru: "Покрытие стен порошковым методом на основе гидравлической извести для интерьеров с эффектом камня Archi + Pietra — это порошковое минеральное покрытие для стен для внутренних помещений на основе натуральной гидравлической извести NHL 3.5 (EN 459-1), воздушной извести, смеси тщательно отобранных заполнителей и реологических модификаторов, обеспечивающих отличную обрабатываемость. Для создания престижных декоративных отделок. ",
        variants: [
            {
                id: 1,
                image: "/img/products/archi-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/archi-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/archi-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/archi-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/archi-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/archi-6.jpg"
            },

        ]
    },
    {
        id: 13,
        category_id: [2],
        image: "/img/products/florenzia.jpg",
        name : "Florenzia",
        description_uz : "Florenzia-desc",
        description_ru: "Известковая шпатлевка для глянцевой отделки интерьеров. Florenzia — это декоративная минеральная штукатурка для интерьеров на основе чистой отвержденной воздушно-известковой шпатлевки, отобранных заполнителей, модификаторов реологии и органических добавок (<4%). Применение Florenzia позволяет создавать ценные украшения с глянцевым эффектом, мягкими и яркими тонами. ",
        variants: [
            {
                id: 1,
                image: "/img/products/florenzia-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/florenzia-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/florenzia-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/florenzia-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/florenzia-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/florenzia-6.jpg"
            },

        ]
    },
    {
        id: 14,
        category_id: [2, 4],
        image: "/img/products/marmorino.jpg",
        name : "Marmorino ks",
        description_uz : "Marmorino ks-desc",
        description_ru: "MARMORINO KS Гашеная известь для придания гладкости и сатиновой отделки экстерьера и интерьера. Marmorino KS — это известковая шпатлевка для разглаживания и получения матового эффекта отделки, она состоит из гашеной извести, отборного мраморного песка и модификаторов реологических свойств, обеспечивающих отличную обрабатываемость. Marmorino KS позволяет получить мутные эстетические аспекты, с мягкими и яркими цветами или полностью однородные, в имитации классического «венецианского марморино». Это также идеальный продукт для разглаживания оснований, украшенных венецианской эпохой. Качественный декор внутренних и внешних поверхностей. Натуральные известковые штукатурки представляют собой идеальную основу для нанесения Marmorino KS, который химически взаимодействует с ними, создавая единое тело с опорой и значительно продлевая срок службы самой отделки. ",
        variants: [
            {
                id: 1,
                image: "/img/products/marmorino-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/marmorino-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/marmorino-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/marmorino-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/marmorino-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/marmorino-6.jpg"
            },
            {
                id: 7,
                image: "/img/products/marmorino-7.jpg"
            },
            {
                id: 8,
                image: "/img/products/marmorino-8.jpg"
            },
            {
                id: 9,
                image: "/img/products/marmorino-9.jpg"
            },

        ]
    },
    {
        id: 15,
        category_id: [2],
        image: "/img/products/calce.jpg",
        name : "Calce Cruda",
        description_uz : "Calce Cruda-desc",
        description_ru: "Минеральное декоративное покрытие на основе извести и глины для интерьера и экстерьера. CalceCruda — это микропористое декоративное минеральное покрытие с сильным природным оттенком, которое активно способствует комфорту жизни. CalceCruda создано на основе особых свойств гидрата извести, очищенной глины, отборного мрамора и натурального песка, которые при правильном балансе позволяют получить превосходный технологичность и формуемость. Глиняный компонент создает сетчатую структуру частиц, регулирует время обработки и улучшает удобоукладываемость продукта. Присутствие целлюлозных волокон укрепляет и укрепляет структуру, способствуя, в синергии с другими компонентами, созданию большей толщины. CalceCruda позволяет получить прекрасную отделку с непрозрачными эстетическими аспектами, мягкими или теплыми цветами, обеспечивая при этом элегантный аксессуар для внутренней и внешней поверхностей. CalceCruda может значительно снизить концентрацию формальдегида, который может присутствовать в окружающем воздухе. Эффективность этого свойства проверена в соответствии с конкретным стандартом ISO 16000-23. Продолжительность процесса разрушения непостоянна, ведь это свойство тесно связано с условиями окружающей среды. ",
        variants: [
            {
                id: 1,
                image: "/img/products/calce-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/calce-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/calce-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/calce-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/calce-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/calce-6.jpg"
            },

        ]
    },
    {
        id: 16,
        category_id: [3],
        image: "/img/products/ironic.jpg",
        name : "Ironic",
        description_uz : "Ironic-desc",
        description_ru: "Покрытие с эффектом ржавчины для внутренних и наружных работ IRONic — это водорастворимая система, состоящая из основного продукта (IRONic Fondo) и окисляющего покрытия (IRONic Liquido Antichizzante). Нанесение IRONic Liquido Antichizzante на IRONic Fondo вызывает окисление, полностью идентичное тому, которое может быть обнаружено на железной поверхности, подверженной естественной коррозии под воздействием атмосферных агентов. ",
        variants: [
            {
                id: 1,
                image: "/img/products/ironic-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/ironic-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/ironic-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/ironic-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/ironic-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/ironic-6.jpg"
            },
            {
                id: 7,
                image: "/img/products/ironic-7.jpg"
            },
            {
                id: 8,
                image: "/img/products/ironic-8.jpg"
            },
            {
                id: 9,
                image: "/img/products/ironic-9.jpg"
            },

        ]
    },
    {
        id: 17,
        category_id: [3],
        image: "/img/products/verderame.jpg",
        name : "Verderame",
        description_uz : "Verderame-desc",
        description_ru: "Декоративное покрытие с эффектом оксидированной меди Декоративное покрытие с эффектом оксидированной меди для внутренних и наружных работ. Verderame_Wall Painting — это система, состоящая из базового продукта Verderame_WP Fondo и окисляющего покрытия Verderame_WP Liquido Antichizzante. Произведенное окисление полностью идентично окислению поверхности меди, подверженной естественной коррозии под воздействием атмосферных агентов.",
        variants: [
            {
                id: 1,
                image: "/img/products/verderame-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/verderame-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/verderame-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/verderame-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/verderame-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/verderame-6.jpg"
            },
            {
                id: 7,
                image: "/img/products/verderame-7.jpg"
            },
            {
                id: 8,
                image: "/img/products/verderame-8.jpg"
            },

        ]
    },
    {
        id: 18,
        category_id: [3],
        image: "/img/products/zeus.jpg",
        name : "Zeus",
        description_uz : "Zeus-desc",
        description_ru: "Декоративное покрытие с эффектом «металлической фольги» для интерьеров. Зевс — это декоративное покрытие для интерьера с эффектом металлической фольги. Он состоит из специального сополимера, отобранных металлических пигментов и модификаторов реологии, которые гарантируют отличную обрабатываемость продукта. Доступны в вариантах Gold, Silver и Platinum. ",
        variants: [
            {
                id: 1,
                image: "/img/products/zeus-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/zeus-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/zeus-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/zeus-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/zeus-5.jpg"
            },

        ]
    },
    {
        id: 19,
        category_id: [4],
        image: "/img/products/archiplusconcrete.jpg",
        name : "Archi + Concrete",
        description_uz : "Archi + Concrete-desc",
        description_ru: "Известковая штукатурка в виде порошка с эффектом бетона для внутренних и наружных работ. Archi + Concrete — это известково-порошковая штукатурка для интерьеров, разработанная с соблюдением традиционных правил. Он состоит из гашеной извести, белого цемента, тщательно отобранных заполнителей и модификаторов реологических свойств, обеспечивающих отличную удобоукладываемость. Особая гранулометрическая кривая продукта и наложение одного или нескольких слоев акрил-силоксановой глазури с силоксановой фазой позволяют получить эффекты, похожие на «цементный», и по этой причине могут использоваться в самых современных работах по дизайну интерьера. Archi + Concrete позволяет получить скрытый эстетический эффект с мягкими и яркими цветами. Толщина нанесенного продукта гарантирует эффективную защиту с течением времени основы, на которую он нанесен. ",
        variants: [
            {
                id: 1,
                image: "/img/products/archiplusconcrete-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/archiplusconcrete-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/archiplusconcrete-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/archiplusconcrete-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/archiplusconcrete-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/archiplusconcrete-6.jpg"
            },

        ]
    },
    {
        id: 20,
        category_id: [5],
        image: "/img/products/wall2floor.jpg",
        name : "Wall2Floor TOP COAT",
        description_uz : "Wall2Floor TOP COAT-desc",
        description_ru: "Декоративное покрытие для горизонтальных и вертикальных поверхностей Wall2Floor Top Coat — минеральное покрытие для отделки горизонтальных и вертикальных поверхностей в престижных помещениях. Внутренняя отделка высокого качества, в соответствии с самыми современными и актуальными тенденциями в области «бетона» в области архитектуры. ",
        variants: [
            {
                id: 1,
                image: "/img/products/wall2floor-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/wall2floor-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/wall2floor-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/wall2floor-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/wall2floor-5.jpg"
            },
            {
                id: 6,
                image: "/img/products/wall2floor-6.jpg"
            },
            {
                id: 7,
                image: "/img/products/wall2floor-7.jpg"
            },
            {
                id: 8,
                image: "/img/products/wall2floor-8.jpg"
            },
            {
                id: 9,
                image: "/img/products/wall2floor-9.jpg"
            },
            {
                id: 10,
                image: "/img/products/wall2floor-10.jpg"
            },
            {
                id: 11,
                image: "/img/products/wall2floor-11.jpg"
            },
            {
                id: 12,
                image: "/img/products/wall2floor-12.jpg"
            },
            {
                id: 13,
                image: "/img/products/wall2floor-13.jpg"
            },
            {
                id: 14,
                image: "/img/products/wall2floor-14.jpg"
            },

        ]
    },
    {
        id: 21,
        category_id: [6],
        image: "/img/products/supremematt.jpg",
        name : "MATmotion Supreme Мatt",
        description_uz : "MATmotion Supreme Мatt-desc",
        description_ru: "Матовая краска на водной основе для внутренних работ с низким выбросом летучих соединений, без формальдегида и добавок пластификаторов. MATmotion Supreme Matt — это матовая краска для интерьеров, супер моющаяся, противокапельная, профессиональная, подходит для декорирования потолков и стен даже на больших поверхностях. MATmotion Supreme Matt обеспечивает особенно матовую, однородную поверхность, подходящую для помещений, где вы хотите обеспечить превосходный эстетический результат, связанный со скоростью исполнения. Низкое выделение летучих соединений при нанесении, отсутствие формальдегида и добавленных пластификаторов, позволяет быстро повторно использовать окрашенные помещения. Для улучшения характеристик нанесите MATmotion Supreme Matt с помощью микроволоконного или шерстяного валика. ",
        variants: [
            {
                id: 1,
                image: "/img/products/supremematt-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/supremematt-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/supremematt-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/supremematt-4.jpg"
            },
            {
                id: 5,
                image: "/img/products/supremematt-5.jpg"
            },

        ]
    },
    {
        id: 22,
        category_id: [6],
        image: "/img/products/extramatt.jpg",
        name : "MATmotion Extra matt",
        description_uz : "MATmotion Extra matt-desc",
        description_ru: "Сверхмощная краска на водной основе для получения матовых и однородных покрытий внутри помещений, без запаха, с низким содержанием летучих органических соединений, без формальдегида и добавленных пластификаторов MATmotion Extra Matt — это супер-моющаяся матовая краска на водной основе для внутренних работ на основе виниловых сополимеров в водной эмульсии. MATmotion Extra Matt не капает и профессионально, легко наносится , без запаха, с низким уровнем выбросов летучих органических соединений, без формальдегида и добавленных пластификаторов. MATmotion Extra Matt имеет отличную укрывистость , высокую смываемость, однородность поверхности. Обеспечивает чистые и точные результаты благодаря уменьшению брызг при нанесении валиком и кистью. ",
        variants: [
            {
                id: 1,
                image: "/img/products/extramatt-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/extramatt-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/extramatt-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/extramatt-4.jpg"
            },

        ]
    },
    {
        id: 23,
        category_id: [6],
        image: "/img/products/eggy.jpg",
        name : "MATmotion Eggy",
        description_uz : "MATmotion Eggy-desc",
        description_ru: "Водорастворимая эмаль из яичной скорлупы для интерьеров MATmotion Eggy — это легко наносимое, быстросохнущее внутреннее покрытие, характеризующееся матовой яичной скорлупой. Низкое выделение летучих соединений при нанесении, отсутствие формальдегида и добавленных пластификаторов, позволяет быстро повторно использовать окрашенные помещения. MATmotion Eggy находит свое идеальное место для внутренней отделки дверей, рам, молдингов, рам, плинтусов, небольшой мебели. Применение MATmotion Eggy придает подложкам высокую твердость поверхности, устойчивость к истиранию, устойчивость к царапинам, антиблокировку, легкость очистки. ",
        variants: [
            {
                id: 1,
                image: "/img/products/eggy-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/eggy-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/eggy-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/eggy-4.jpg"
            },

        ]
    },
    {
        id: 24,
        category_id: [7],
        image: "/img/products/cerawax.jpg",
        name : "CERA WAX",
        description_uz : "CERA WAX-desc",
        description_ru: "Холодный полиэтиленовый воск для минеральной отделки Cera Wax — это декоративная отделка на водной основе на основе полиэтиленовых восков, специальных металлических пигментов и модификаторов реологии, обеспечивающая отличную обрабатываемость. Его особая формула также позволяет получить высокую степень блеска, различных оттенков, слегка перламутрового цвета, мягкую защиту от воды. Cera Gold, Silver, Bronze, Barocco Gold, Madreperla и Gold Mica, помимо перечисленных выше характеристик, придают стене дополнительный декоративный элемент. Cera Wax используется в качестве декоративного покрытия для интерьеров на минеральных и / или синтетических основаниях. Нанесенный на штукатурку линии Era Veneziana и штукатурку линий Mineral Finishes, Marblestone и Marmorino KS, усиливает ее блеск. Теперь также доступна новая нейтральная версия Cera Wax Plus. ",
        variants: [
            {
                id: 1,
                image: "/img/products/cerawax-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/cerawax-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/cerawax-3.jpg"
            },

        ]
    },
    {
        id: 25,
        category_id: [7],
        image: "/img/products/archiplustadelak.jpg",
        name : "Archi + Tadelakt",
        description_uz : "Archi + Tadelakt-desc",
        description_ru: "Порошковая краска для интерьеров на основе гидравлической извести Archi + Tadelakt — это порошковое минеральное покрытие для стен для внутренних помещений на основе натуральной гидравлической извести NHL 3.5 (EN 459-1), воздушной извести, тщательно отобранных заполнителей и реологических модификаторов, обеспечивающих отличную обрабатываемость. С эстетической точки зрения типичный марокканский Таделакт финиширует.",
        variants: [
            {
                id: 1,
                image: "/img/products/archiplustadelak-1.jpg"
            },
            {
                id: 2,
                image: "/img/products/archiplustadelak-2.jpg"
            },
            {
                id: 3,
                image: "/img/products/archiplustadelak-3.jpg"
            },
            {
                id: 4,
                image: "/img/products/archiplustadelak-4.jpg"
            },

        ]
    },
  ]

export {languages, statsData, newsData, navData, mainInfo, socialLinks, contactInfo, categories, mainProducts}