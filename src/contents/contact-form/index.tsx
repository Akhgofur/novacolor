import ContactInput from "@/components/contact-input";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Map from "@/components/map";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <section className="py-[40px] md:pb-[80px]">
      <Container className="">
        <p className="text-subheadColor mx-auto text-lg font-medium border-b-2 border-b-mainBrown w-fit mb-4">
          {t("contact-subhead")}
        </p>
        <Heading className="text-center mb-6">{t("contact-head")}</Heading>

        <div className="grid sm:mx-8 md:mx-0  grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-xl shadow-xl mb-[-50px] relative z-[10] bg-white">
          <div className="w-full">
            <Image
              src={"/img/contact-form.jpg"}
              className="w-full  h-[300px] rounded-lg object-cover object-center"
              alt="Contact us"
              width={500}
              height={400}
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <ContactInput placeholder={t("name")} />
            <ContactInput type="tel" placeholder={t("phone")} />
            <ContactInput multiline rows={3} placeholder={t("message")} />
            <button className="rounded-[20px] p-3 bg-mainBrown text-white text-base font-semibold hover:bg-transparent border-2 border-mainBrown transition-all duration-500 hover:text-mainBrown ">
              {t("send")}
            </button>
          </div>
        </div>
      </Container>
      <Map />
    </section>
  );
};

export default ContactForm;
