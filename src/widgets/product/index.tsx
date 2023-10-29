import ProductMain from "@/contents/product-main"
import { mainProducts } from "@/utils/consts"
import { useRouter } from "next/router"
import {useMemo} from "react"

const ProductInner = () => {

    const {id} = useRouter().query

    const product = useMemo(() => {
        if(id) {
            return mainProducts.find(item => item.id == +id)
        }
    }, [id])

    return (
        <>
            <ProductMain data={product ?? mainProducts[0]} />
        </>
    )
}

export default ProductInner