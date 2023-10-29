import Container from "@/components/container";
import { contactInfo } from "@/utils/consts";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="py-[40px] md:py-[70px]">
      <Container>
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 sm:px-5 md:px-0 lg:gap-14">
          {contactInfo.map((item) => (
            <div
              className="flex flex-col items-center gap-3 text-center p-5 bg-[#f6f2eb] w-full"
              key={item.id}
            >
              <div className="smd:w-[140px] w-[110px] smd:h-[140px] h-[110px] rounded-full flex items-center justify-center bg-mainBrown">
                <img
                  src={item.image}
                  alt=""
                  className="w-[50%] h-[50%] object-contain object-center"
                />
              </div>
              <h2 className="text-[22px] font-bold text-[#333029] ">
                {t(item.name)}
              </h2>
              <p className="text-base text-[#84827d] font-medium hover:text-mainBrown transition-all duration-500" dangerouslySetInnerHTML={{__html: t(item.description)}} >
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactInfo;
