import Container from "@/components/container";
import Heading from "@/components/heading";
import { categories } from "@/utils/consts";
import Link from "next/link";
import { useTranslation } from "react-i18next";



const CategoriesSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-[40px]">
      <Container>
        <Heading className="text-center mb-5">
          {t("popular-categories")}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((item) => (
            <div key={item.id} className="flex flex-col items-center p-3 group">
              <Link href={`/category/${item.id}`} className="block w-full h-[100px] p-4">
                <img
                  src={item.icon}
                  alt=""
                  className="w-full group-hover:scale-[1.2] transition-all duration-500 h-full  object-contain object-center mb-4"
                />
              </Link>
              <Link
                href={`/category/${item.id}`}
                className="block text-base font-semibold hover:text-orange-400 transition-all duration-300"
              >
                {t(item.name)}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;
