import Container from "@/components/container";
import Heading from "@/components/heading";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FC } from "react";
import NewsCard from "@/components/news-card";
import ProductCard from "@/components/product-card";
import { IProductItem } from "@/utils/types";
import { useRouter } from "next/router";


interface SliderSectionProps {
  heading: string;
  products?: IProductItem[];
}

const ProjectsSection: FC<SliderSectionProps> = ({
  heading,
  products,
}) => {

  
  const {locale} = useRouter()
  return (
    <section className="py-[40px] md:py-[70px]">
      <Container>
        <Heading className="text-center mb-4">{heading}</Heading>
        <div className="">
          <Swiper
            grabCursor={true}
            modules={[Navigation, Autoplay]}
            // navigation={{
            //   prevEl: ".prev",
            //   nextEl: ".next",
            // }}
            speed={600}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              408: {
                slidesPerView: 2,
              },
              608: {
                slidesPerView: 3,
              },
              880: {
                slidesPerView: 4,
              },

              1184: {
                slidesPerView: 5,
              },
            }}
          >
            {products?.map((el) => (
                  <SwiperSlide className="py-5" key={el.id}>
                    <ProductCard locale={locale} className={"h-[260px]"}  data={el} key={el.id} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
