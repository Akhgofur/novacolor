import Container from "@/components/container";
import MobileNav from "@/components/mobilenav";
import { languages, mainInfo, navData, socialLinks } from "@/utils/consts";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const { t } = useTranslation();

  const { locale, asPath, push } = useRouter();

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleSetSticky = () => {
      if (window.scrollY > 65) {
        setSticky(true);
      } else [setSticky(false)];
    };

    window.addEventListener("scroll", handleSetSticky);

    return () => window.removeEventListener("scroll", handleSetSticky);
  });

  const [lang, setLang] = useState(languages[0]);

  useEffect(() => {
    if (locale == "ru") {
      setLang(languages[1]);
    } else {
      setLang(languages[0]);
    }
  }, [locale]);

  const [isShow, setShow] = useState(false);

  return (
    <header>
      <MobileNav isShow={isShow} setShow={setShow} />
      <div
        className={` w-full `}
      >
        <div className="top bg-[#313131] py-3 md:py-6">
          <Container>
            <div className="flex items-center justify-between gap-4">
              <Link href={"/"}>
                <img
                  src="/img/logo.png"
                  alt=""
                  className="w-[100px] md:w-[160px] h-[45px] object-contain"
                />
              </Link>
              <div className="hidden md:flex items-center gap-6">
                {mainInfo.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-[45px] h-[45px] flex items-center justify-center bg-mainBlack rounded-full">
                      <img
                        src={item.image}
                        alt=""
                        className="w-[50%] h-[50%] object-contain"
                      />
                    </div>
                    <div className="">
                      <p className="text-[#a4a097] text-sm font-medium">
                        {t(item.name)}
                      </p>
                      <Link
                        href={item.url}
                        className="text-base text-white font-bold hover:text-orange-400 transition-all duration-500"
                      >
                        {item.value}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
        <div className="bottom w-full bg-white py-4">
          <Container>
            <div className="flex items-center justify-between gap-4">
              <button
                className="w-[25px] flex flex-col gap-[6px] md:hidden"
                onClick={() => {
                  setShow(true);
                }}
              >
                <span className="w-full h-[2px] bg-black"></span>
                <span className="w-full h-[2px] bg-black"></span>
                <span className="w-full h-[2px] bg-black"></span>
              </button>
              <div className="md:flex items-center gap-5 text-base font-semibold hidden">
                {navData.map((item) => (
                  <Link
                    href={item.url}
                    className="block w-fit group"
                    key={item.id}
                  >
                    <p
                      className={`mb-[6px] ${
                        item.url == asPath ? "text-mainBrown" : "text-[#84827c]"
                      }`}
                    >
                      {t(item.name)}
                    </p>
                    <span
                      className={`${
                        item.url == asPath ? "max-w-full" : "max-w-0"
                      } block w-full group-hover:max-w-full h-[2px] bg-mainBrown transition-all duration-500`}
                    ></span>
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="group"
                  onClick={() => {
                    push(asPath, asPath, {
                      locale: locale == "uz" ? "ru" : "uz",
                    });
                  }}
                >
                  <div className="flex items-center gap-2 ">
                    <img
                      src={lang.image}
                      alt=""
                      className="w-[30px] h-[30px] object-contain"
                    />
                    <span className="block font-semibold">{lang.name}</span>
                  </div>
                 
                </button>
                <div className="flex items-center gap-3">
                  {
                    socialLinks.map(item => (
                      <Link href={item.url} target="_blank" key={item.id} className="flex hover:bg-mainBrown transition-all duration-500 items-center justify-center w-[35px] h-[35px] rounded-full bg-[#f6f2eb]">
                        <img src={item.image} alt="" className="w-[50%] h-[50%] object-contain" />
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div
        className={`bg-[#313131f6] text-white py-[15px] md:py-[32px] fixed left-0  w-full z-[20] transition-all duration-1000 ${
          sticky ? "top-0" : "top-[-100%] opacity-0"
        }`}
      >
        <Container>
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
                  push(asPath, asPath, {
                    locale: locale == "uz" ? "ru" : "uz",
                  });
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
                  className={`hidden md:block max-w-0  w-full group-hover:max-w-full h-[2px] bg-mainBrown transition-all duration-500`}
                ></span>
              </button>
              <button
                className="w-[25px] flex flex-col gap-[6px] md:hidden"
                onClick={() => {
                  setShow(true);
                }}
              >
                <span className="w-full h-[2px] bg-white"></span>
                <span className="w-full h-[2px] bg-white"></span>
                <span className="w-full h-[2px] bg-white"></span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
