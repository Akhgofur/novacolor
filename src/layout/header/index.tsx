import Container from "@/components/container";
import { languages } from "@/utils/consts";
import { INavItem } from "@/utils/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";


const Header: FC = () => {
  const { t } = useTranslation();

  const {locale, asPath, push} = useRouter()

  const navData: INavItem[] = [
      {
        id: 1,
        name: t("main"),
        url: "/",
      },
      {
        id: 2,
        name: t("products"),
        url: "/products",
      },
      {
        id: 3,
        name: t("about"),
        url: "/about",
      },
      {
        id: 4,
        name: t("news"),
        url: "/news",
      },
      {
        id: 5,
        name: t("contact"),
        url: "/contact",
      },
    ]

    const [lang, setLang] = useState(languages[0])

    const [sticky, setSticky]  = useState(false)

    useEffect(() => {
        const handleSetSticky = () => {
            if(window.scrollY > 50) {
                setSticky(true)
            }else {
                setSticky(false)
            }
        }

        window.addEventListener("scroll" , handleSetSticky)

        return window.removeEventListener("scroll" , handleSetSticky)
    }, [])

    useEffect(() => {
        if(locale == "ru") {
            setLang(languages[1])
        }else {
            setLang(languages[0])
        }
    }, [locale])

  return (
    <header className={`bg-mainBlack text-white py-[32px] ${sticky ? "fixed left-0 top-0 w-full z-[20]" : ""}`}>
      <Container>
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <img
              src="/img/logo.png"
              alt=""
              className="w-[160px] h-[45px] object-contain"
            />
          </Link>

          <div className="flex items-center gap-6 text-base font-semibold ">
            {navData.map((item) => (
              <Link href={item.url} className="block w-fit group" key={item.id}>
                <p className="mb-2" >{item.name}</p>
                <span className={`max-w-0 block w-full group-hover:max-w-full h-[2px] bg-white transition-all duration-500`}></span>
              </Link>
            ))}
          </div>

          <button className="flex items-center gap-2" onClick={() => {
            push(asPath, asPath, {locale : locale == "uz" ? "ru" : "uz"})
          }} >
            <img src={lang.image} alt="" className="w-[30px] h-[30px] object-contain" />
            <span className="block font-semibold" >{lang.name}</span>
          </button>

        </div>
      </Container>
    </header>
  );
};

export default Header;
