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

export interface INews {
  date: string;
  name: string;
  image: string;
  id: number;
  description: string;
}

export interface IProduct {
  name: string;
  description: string;
  image: string;
  id: number;
}

interface SliderSectionProps {
  news?: INews[];
  type: string;
  heading: string;
  products?: IProduct[];
}

const SliderSection: FC<SliderSectionProps> = ({
  news,
  type = "news",
  heading,
  products,
}) => {
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
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              608: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {type == "news"
              ? news?.map((el) => (
                  <SwiperSlide className="py-5" key={el.id}>
                    <NewsCard data={el} key={el.id} />
                  </SwiperSlide>
                ))
              : products?.map((el) => (
                  <SwiperSlide className="py-5" key={el.id}>
                    <ProductCard className="w-[400px]" data={el} key={el.id} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default SliderSection;
