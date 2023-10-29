import Map from "@/components/map"
import AboutSection from "@/contents/about-section"
import CategoriesSection from "@/contents/categories-section"
import ClientsSection from "@/contents/clients"
import HeroVideo from "@/contents/hero-video"
import SliderSection from "@/contents/news-section"
import ProjectsSection from "@/contents/projects-section"
import Stats from "@/contents/stats"
import { mainProducts, newsData } from "@/utils/consts"
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
        <SliderSection heading={t("all-products")} type="products" products={mainProducts} />
        <ProjectsSection heading={t("projects")} products={mainProducts} />
        <ClientsSection />
        <Map />
        </>
    )
}

export default HomeInner