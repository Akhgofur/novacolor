import Container from "@/components/container";
import Heading from "@/components/heading";
import { useTranslation } from "react-i18next";

const AboutSection = ({ extraDescription }: { extraDescription?: string }) => {
  const { t } = useTranslation();

  return (
    <section className="py-[40px] md:py-[80px]">
      <Container>
        <div className="flex items-center flex-col-reverse md:flex-row gap-5">
          <div className="w-full md:w-1/2">
            <p className="text-subheadColor text-lg font-medium border-b-2 border-b-mainBrown w-fit mb-4">
              {t("about-novacolor")}
            </p>
            <Heading className="mb-5">{t("about-heading")}</Heading>
            <p className="text-lg text-subheadColor">
              {t("about-description")}
            </p>
            {extraDescription && (
              <p className="text-lg text-subheadColor">{extraDescription}</p>
            )}
          </div>
          <img
          loading="lazy"
            src="/img/about.png"
            alt=""
            className="w-full md:w-1/2 h-[500px] object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
