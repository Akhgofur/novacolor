import { INews, IProduct } from "@/contents/news-section"
import { INavItem } from "./types"

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


const productsData: IProduct[] = [
    {
        id: 1,
        description: "",
        image: "/img/products/product-1.jpg",
        name: "gallery"
    },
    {
        id: 2,
        description: "MATmotion Supreme Мatt Матовая краска на водной основе для внутренних … ",
        image: "/img/products/product-2.jpg",
        name: "Matmotion "
    },
    {
        id: 3,
        description: "IRONic Покрытие с эффектом ржавчины для внутренних и наружных работ … ",
        image: "/img/products/product-3.jpg",
        name: "Ironic "
    },
    {
        id: 4,
        description: "Verderame_Wall Painting Декоративное покрытие с эффектом оксидированной меди Декоративное покрытие … ",
        image: "/img/products/product-4.jpg",
        name: "Verderame "
    },
    {
        id: 5,
        description: "ZEUS Декоративное покрытие с эффектом «металлической фольги» для интерьеров. Зевс … ",
        image: "/img/products/product-5.jpg",
        name: "Zeus"
    },
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
      url: "/products",
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

export {languages, statsData, newsData, productsData, navData, mainInfo, socialLinks}