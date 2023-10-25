import Container from "@/components/container";
import MobileNav from "@/components/mobilenav";
import { languages, navData } from "@/utils/consts";
import { INavItem } from "@/utils/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const { t } = useTranslation();

  const { locale, asPath, push } = useRouter();

 

  const [lang, setLang] = useState(languages[0]);


  useEffect(() => {
    if (locale == "ru") {
      setLang(languages[1]);
    } else {
      setLang(languages[0]);
    }
  }, [locale]);

  const [isShow, setShow] = useState(false)

  return (
    <header
      className={`bg-[#313131f6] text-white py-[15px] md:py-[32px] fixed left-0 top-0 w-full z-[20]`}
    >
      <Container>
        <MobileNav isShow={isShow} setShow={setShow} />
        <div className="flex items-center justify-between gap-5">
          <Link href={"/"}>
            <img
              src="/img/logo.png"
              alt=""
              className="w-[100px] md:w-[160px] h-[45px] object-contain"
            />
          </Link>

          <div className="flex items-center gap-5">
            <div className=" hidden md:flex items-center gap-5 lg:gap-6 text-base font-semibold ">
              {navData.map((item) => (
                <Link
                  href={item.url}
                  className="block w-fit group"
                  key={item.id}
                >
                  <p className="mb-2">{t(item.name)}</p>
                  <span
                    className={`${
                      item.url == asPath ? "max-w-full" : "max-w-0"
                    } block w-full group-hover:max-w-full h-[2px] bg-mainBrown transition-all duration-500`}
                  ></span>
                </Link>
              ))}
            </div>

            <button
              className="group"
              onClick={() => {
                push(asPath, asPath, { locale: locale == "uz" ? "ru" : "uz" });
              }}
            >
              <div className="flex items-center gap-2 md:mb-2">
                <img
                  src={lang.image}
                  alt=""
                  className="w-[30px] h-[30px] object-contain"
                />
                <span className="block font-semibold">{lang.name}</span>
              </div>
              <span
                className={`hidden md:block max-w-0  w-full group-hover:max-w-full h-[2px] bg-white transition-all duration-500`}
              ></span>
            </button>
            <button className="w-[25px] flex flex-col gap-[6px] md:hidden" onClick={() => {setShow(true)}} >
                <span className="w-full h-[2px] bg-white"></span>
                <span className="w-full h-[2px] bg-white"></span>
                <span className="w-full h-[2px] bg-white"></span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
