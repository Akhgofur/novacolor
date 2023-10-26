import AboutSection from "@/contents/about-section"
import CategoriesSection from "@/contents/categories-section"
import ClientsSection from "@/contents/clients"
import HeroVideo from "@/contents/hero-video"
import SliderSection from "@/contents/news-section"
import ProjectsSection from "@/contents/projects-section"
import Stats from "@/contents/stats"
import { newsData, productsData } from "@/utils/consts"
import {useTranslation} from "react-i18next"

const HomeInner = () => {


    const {t} = useTranslation()

    return (
        <>
        <HeroVideo />
        <AboutSection />
        <CategoriesSection />
        <Stats />
        <SliderSection heading={t("news")} type="news" news={newsData} />
        <SliderSection heading={t("all-products")} type="products" products={productsData} />
        <ProjectsSection heading={t("projects")} products={productsData} />
        <ClientsSection />
        <div className="">
            <iframe className="w-full h-[400px]" src="https://yandex.uz/map-widget/v1/?ll=69.277172%2C41.322507&mode=whatshere&whatshere%5Bpoint%5D=69.277388%2C41.322883&whatshere%5Bzoom%5D=17&z=18.26" width={560} height={400} frameBorder={1} />
        </div>
        </>
    )
}

export default HomeInner