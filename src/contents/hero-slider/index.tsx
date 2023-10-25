import { FC, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Image from "next/image";
import Container from "@/components/container";
const { Fade } = require("react-reveal");

export interface IHeroSlider {
  image: string;
  id: number;
  subheading?: string;
  heading?: string;
}

interface HeroSliderProps {
  data?: IHeroSlider[];
}

const HeroSlider: FC<HeroSliderProps> = ({ data }) => {

  const [active, setActive] = useState<number | undefined>(0)
  return (
    <div className=" w-full ">
      <Carousel
        autoPlay
        
        stopAutoPlayOnHover={false}
        // NextIcon={<NextIcon />}
        // PrevIcon={<PrevIcon />}
        // navButtonsProps={{
        //     style: {
        //         background: "transparent",
        //         borderRadius: "100%"
        //     }
        // }}
        interval={5000}
        IndicatorIcon={<div className=""></div>}
        indicatorIconButtonProps={{
          style: {
            width: "40px",
            height: "2px",
            backgroundColor: "#eaeaea",
            margin: "5px",
            borderRadius: 0,
            
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            height: "4px",
            backgroundColor: "#fff"
          }
        }}

        onChange={(now: number | undefined, prev: number | undefined) => {
          console.log(now, "now");
          console.log(prev, "prev");
          setActive(now)
          
        }}

        indicatorContainerProps={{
          style: {
            marginTop: "-34px",
            position: "relative",
            zIndex: "10",
            paddingBottom: "10px"
          }
        }}

        navButtonsAlwaysVisible
      >
        {data?.map((item, index) => (
          <SliderItem index={index} active={active} key={item?.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

const SliderItem: FC<{ item: IHeroSlider, active: number | undefined, index: number }> = ({ item, active, index }) => {
  return (
    <div className="w-full ">
      <Paper>
        <div className="w-full sm:h-[70vh] h-[55vh] smd:h-screen overflow-hidden relative">
          <Image
            className="w-full h-full object-cover image-zoom-animation absolute top-0 left-0 z-[1]"
            src={item.image}
            alt="img"
            width={1300}
            height={600}
          />
          <div className="content  w-full h-full relative z-[2] ">
            <Container className="h-full flex flex-col justify-center" >
              <div className="w-full smd:w-2/3 md:w-1/2 md:ml-auto text-white  ">
                <Fade bottom cascade when={index == active} >
                  <div className="">
                    <p className="text-sm sm:text-base smd:text-lg lg:text-xl uppercase mb-4">{item.subheading}</p>
                    <h3 className=" text-[22px] sm:text-[30px] smd:text-[40px] md:text-[50px] lg:text-[60px] font-medium capitalize leading-[1.1]">
                      {item.heading}
                    </h3>
                  </div>
                </Fade>
              </div>
            </Container>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default HeroSlider;
