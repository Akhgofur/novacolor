import Container from "@/components/container";
import Input from "@/components/input";
import { mainProducts, navData, socialLinks } from "@/utils/consts";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSendMessage = () => {
    if (name?.trim() && phone?.trim()) {
      const myText = `Имя: ${name} %0AТелефон: ${phone}`;

      const token = "1744479144:AAHSwGrgeOQZe5S7GyeLJ5V2vYCY5IHOVr8";
      const chatId = "-1001848221223";

      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${myText}`;
      const api = new XMLHttpRequest();
      api.open("Get", url, true);
      api.send();
      setPhone("");
      setName("");
      alert("Заявка принята");
    }
  };

  return (
    <footer className="py-[30px] md:py-[60px] bg-mainBlack text-white">
      <Container>
        <div className="grid grid-cols-1  text-center sm:text-start  sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-4 justify-between">
          <div className="flex flex-col items-center sm:items-start">
            <Link href={"/"} className="block">
              <img
                src="/img/logo.png"
                alt=""
                className="w-[150px] h-[70px] object-contain"
              />
            </Link>
            <p className="text-sm font-medum mb-4">{t("footer-text")}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <Link
                  href={item.url}
                  target="_blank"
                  key={item.id}
                  className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#f6f2eb]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-[50%] h-[50%] object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <p className="mb-3 pb-1 border-b-mainBrown border-b-2 w-fit font-semibold">
              {t("links")}
            </p>
            <div className="flex flex-col gap-[6px]">
              {navData.map((item) => (
                <Link key={item.id} className="text-base" href={item.url}>
                  {t(item.name)}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <p className="mb-3 pb-1 border-b-mainBrown border-b-2 w-fit font-semibold">
              {t("products")}
            </p>
            <div className="flex flex-col gap-[6px]">
              {mainProducts?.slice(0, 5).map((item) => (
                <Link
                  key={item.id}
                  className="text-base"
                  href={`/product/${item?.id}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <p className=" mb-3 pb-1 ml-3 border-b-mainBrown border-b-2 w-fit font-semibold">
              {t("contact")}
            </p>
            <Input
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              placeholder={t("name")}
              className="mb-3"
            />
            <Input
              value={phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
              }
              placeholder={t("phone")}
              className="mb-3"
            />
            <button
              onClick={handleSendMessage}
              className="w-full  py-3 px-5 bg-[#23211b] hover:bg-mainBrown transition-all duration-500 hover:text-mainBlack rounded-[25px] text-white outline-none"
            >
              {t("send")}
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
