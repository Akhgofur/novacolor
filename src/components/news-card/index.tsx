import { INews } from "@/contents/news-section";
import {useTranslation} from "react-i18next"
import {FC} from "react"
import Image from "next/image";

interface NewsCardProps {
  data: INews,
 setNews : Function,
 setOpen : Function

}

const NewsCard: FC<NewsCardProps> = ({ data, setNews, setOpen  }) => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden relative group">
      <Image
      width={400}
      height={400}
        src={data.image}
        alt=""
        loading="lazy"
        className="z-[1] absolute w-full h-full top-0 left-0 object-cover group-hover:scale-[1.2] transition-all duration-500"
      />
      <div className="absolute  p-2 w-[80%] left-[50%] bottom-0 translate-x-[-50%] rounded-t-lg bg-white z-[3]">
        <button onClick={() => {
          setNews(data)
          setOpen(true)

        }} className="block w-full text-xl font-bold mb-2 text-center">{data.name}</button>
        <p className="text-center text-base">{data.date}</p>
      </div>
    </div>
  );
};

export default NewsCard