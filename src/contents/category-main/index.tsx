import Container from "@/components/container"
import ProductCard from "@/components/product-card"
import { categories } from "@/utils/consts"
import { IProductItem } from "@/utils/types"
import Link from "next/link"
import { useRouter } from "next/router"
import {FC} from "react"
import {useTranslation} from "react-i18next"

interface CategoryMainProps {
    data: IProductItem[],
    category: any 
}

const CategoryMain: FC<CategoryMainProps> = ({category, data}) => {

    const {locale} = useRouter()
    const {t} = useTranslation()

    return (
        <section className="py-[40px] md:py-[70px]">
            <Container>
                <div className="py-[20px] flex items-center gap-2 mb-4 flex-wrap">
                    {
                        categories.map(item => (
                            <Link key={item.id} href={`/category/${item.id}` } className={`${item.id == category?.id ? "bg-mainBrown text-white" : "bg-transparent text-mainBrown"} font-medium rounded-[15px] px-3 py-1 text-base border-2 border-mainBrown`} >
                             {t(item.name)}
                            </Link>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    data?.map(item => <ProductCard key={item.id} data={item} locale={locale} className="h-[300px] md:h-[400px]"  />)
                }
                </div>
            </Container>
        </section>
    )
}

export default CategoryMain