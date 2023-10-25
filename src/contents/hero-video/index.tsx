import Container from "@/components/container";
import { FC, useState, useEffect } from "react";
import {useTranslation} from "react-i18next"

const HeroVideo: FC = () => {

    const {t} = useTranslation()


  return (
    <section className="w-full relative">
      <div className="">
        <video
          src="/video/hero-video.mp4"
          className="object-cover w-full h-[60vh] smd:h-screen"
          muted
          loop
          playsInline
          autoPlay
        ></video>
      </div>
      <div className="absolute top-0 left-0 w-full h-[60vh] smd:h-screen z-[2] flex items-center">
        <Container  >
          <div className="md:w-1/2 text-white">
            <h2 className="text-[28px] sm:text-[32px] smd:text-[38px] md:text-[42px] lg:text-[45px] font-semibold mb-2 italic">{t("hero-heading")}</h2>
            <p className="text-base">{t("hero-description")}</p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroVideo;
