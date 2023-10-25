import Container from "@/components/container"
import Heading from "@/components/heading"
import Image from "next/image"
import {useTranslation} from "react-i18next"

const clients = [
    "/img/clients/client-1.svg",
    "/img/clients/client-2.png",
    "/img/clients/client-3.png",
    "/img/clients/client-4.png",
]

const ClientsSection = () => {
    const {t} = useTranslation()

    return (
        <section className="py-[50px]">
            <Container>
                <Heading className="text-center mb-3 " >
                    {t("clients-heading")}
                </Heading>
                <div className="grid  grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
                    {
                        clients?.map(item => (
                            <div key={item} className="sm:p-3">
                                <Image src={item} alt="clients" key={item} width={300} height={300} className="w-full h-[150px] object-contain object-center hover:scale-[1.2] transition-all duration-500" />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default ClientsSection