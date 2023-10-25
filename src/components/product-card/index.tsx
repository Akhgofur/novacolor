import { IProduct } from "@/contents/news-section"
import Image from "next/image"
import Link from "next/link"
import {FC} from "react"
import {useTranslation} from "react-i18next"

const ProductCard: FC<{data: IProduct}> = ({data}) => {

    const {t} = useTranslation()

    return (
        <div style={{perspective: "1000px"}} className="product-card w-full h-[400px] rounded-lg  overflow-hidden relative group ">
            <div  className="z-[2] w-full max-w-0 group-hover:max-w-full h-full absolute top-0 left-[50%] translate-x-[-50%] transition-all duration-500 bg-gradient-to-b from-transparent to-mainBrown"></div>
            <Image src={data.image} alt={data.name} width={500} height={400} className="absolute z-[1] w-full h-full top-0 left-0 object-cover"></Image>
            <div className="product-card-content absolute z-[3] bottom-0 left-0  w-full py-5 opacity-0 group-hover:opacity-100">
                <div className="px-4 flex flex-col items-center">
                <p className="font-semibold text-white text-xl text-center mb-4">{t(data.name)}</p>
                <p className="text-white text-sm text-center mb-3">{data.description}</p>
                <Link className=" py-2 px-3 block border-mainBlack bg-mainBlack text-white border-2 hover:text-mainBlack hover:bg-transparent transition-all duration-500" href={"#"} >
                    {t("details")}
                </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard