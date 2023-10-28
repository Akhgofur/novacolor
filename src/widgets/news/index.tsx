import NewsMain from "@/contents/news-main"
import { newsData } from "@/utils/consts"

const NewsInner = () => {
    return (
        <div className="">
            <NewsMain data={newsData} />
        </div>
    )
}

export default NewsInner