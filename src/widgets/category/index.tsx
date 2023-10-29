import CategoryMain from "@/contents/category-main"
import PageHeader from "@/contents/page-header"
import { categories, mainProducts } from "@/utils/consts"
import { useRouter } from "next/router"
import {useMemo} from "react"
import {useTranslation} from "react-i18next"

const CategoryInner = () => {

    const {id} = useRouter().query

    const data = useMemo(() => {
        if(id) {
            if(id == "all") {
                return mainProducts
            }else {
               return mainProducts.filter(item => item.category_id.includes(+id))
            }
        }
    }, [id])

    const category = useMemo(() => {
        if(id) {
            return categories.find(item => item.id == id)
        }
    }, [id])

    const {t} = useTranslation()

    console.log(data, "data");
    console.log(category, "category");
    


    return (
        <>
        <PageHeader isCategory image={category?.image} title={t(category?.name ?? "")} />
        <CategoryMain category={category} data={data ?? []} />
        </>
    )
}

export default CategoryInner