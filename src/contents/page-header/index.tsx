import Breadcrump, { IBreadcrumpItem } from "@/components/breadcrump"
import Container from "@/components/container"
import {FC} from "react"

interface PageHeaderProps {
    title: string,
    breadcrump ?: IBreadcrumpItem[],
    image ?: string,
    isCategory ?: boolean 
}

const PageHeader: FC<PageHeaderProps> = ({title, breadcrump, image, isCategory}) => {
    return (

        <section style={{backgroundImage: isCategory ? `url(${image})` : "url(/img/page-header.jpg)", backgroundSize: "cover", backgroundPosition: "center"}} className="py-[70px] md:py-[120px] relative" >
            <div className={isCategory ? "z-[1] absolute top-0 left-0 w-full h-full backdrop-blur-[2px]" : "hidden" }></div>
            <Container className="relative z-[2]" >
                {
                    !isCategory && <Breadcrump data={breadcrump ?? []} />  
                } 
                <h2 className={`text-[40px] sm:text-[45px] md:text-[60px] font-bold capitalize text-[#333029]`}>{title}</h2>   
            </Container>
        </section>
    )
}


export default PageHeader