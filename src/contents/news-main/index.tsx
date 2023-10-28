import Container from "@/components/container"
import Heading from "@/components/heading"
import { useTranslation } from "react-i18next"
import { INews } from "../news-section"
import {FC, useState} from "react"
import NewsCard from "@/components/news-card"
import NewsModal from "@/components/news-modal"

const NewsMain: FC <{data: INews[]}> = ({data}) => {

    const {t} = useTranslation()


    const [currentNews, setCurrentNews] = useState(null)
    const [open, setOpen] = useState(false)

    return (
        <section className="py-[40px] md:py-[80px]" >
            <Container>
                <Heading className="text-center mb-5" >
                    {t("news")}
                </Heading>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8">
                    {
                        data.map(item => <NewsCard setOpen={setOpen} setNews={setCurrentNews} data={item} key={item.id} />)
                    }
                </div>
                <NewsModal news={currentNews} setNews={setCurrentNews} open={open} setOpen={setOpen} />
            </Container>
        </section>
    )
}

export default NewsMain