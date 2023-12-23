import Container from "@/components/container";
import Heading from "@/components/heading";
import ImageGallery from "@/components/image-gallery";
import { IProductItem } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useState } from "react";

interface ProductMainProps {
  data: IProductItem;
}

const ProductMain: FC<ProductMainProps> = ({ data }) => {
  const { locale } = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(1);

  return (
    <section className="py-[40px] md:py-[80px]">
      <Container>
        <div className="md:mx-[70px] lg:mx-[100px] mb-5">
          <Image
            alt={data.name}
            src={data?.image}
            width={1000}
            height={1000}
            loading="lazy"
            className="block w-full h-auto rounded-lg  "
          />
        </div>

        <Heading className="mb-5">{data.name}</Heading>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-6">
          {locale == "uz" ? data?.description_uz : data.description_ru}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {data.variants.map((item) => (
            <button
            key={item.id}
              className="w-full h-max"
              onClick={() => {
                setCurrentId(item.id);
                setOpen(true);
              }}
            >
              <Image
                src={item.image}
                key={item.id}
                alt=""
                width={400}
                loading="lazy"
                height={400}
                className="w-full h-auto object-contain"
              />
            </button>
          ))}
        </div>
      </Container>
      <ImageGallery
        data={data?.variants}
        open={open}
        setCurrentId={setCurrentId}
        setOpen={setOpen}
        currentId={currentId}
      />
    </section>
  );
};

export default ProductMain;
