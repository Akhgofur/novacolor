import Container from "@/components/container";
import Heading from "@/components/heading";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const categories = [
  {
    id: 1,
    image: "/img/categories/1.png",
    name: "category-1",
  },
  {
    id: 2,
    image: "/img/categories/2.png",
    name: "category-2",
  },
  {
    id: 3,
    image: "/img/categories/3.png",
    name: "category-3",
  },
  {
    id: 4,
    image: "/img/categories/4.png",
    name: "category-4",
  },
  {
    id: 5,
    image: "/img/categories/5.png",
    name: "category-5",
  },
  {
    id: 6,
    image: "/img/categories/6.png",
    name: "category-6",
  },
  {
    id: 7,
    image: "/img/categories/7.png",
    name: "category-7",
  },
  {
    id: 8,
    image: "/img/categories/8.png",
    name: "category-8",
  },
];

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
              <div className="w-full h-[100px] p-4">
                <img
                  src={item.image}
                  alt=""
                  className="w-full group-hover:scale-[1.2] transition-all duration-500 h-full  object-contain object-center mb-4"
                />
              </div>
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
