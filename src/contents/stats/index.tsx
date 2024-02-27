import Container from "@/components/container"
import { statsData } from "@/utils/consts"
import {useTranslation} from "react-i18next"
import CountUp from 'react-countup';

const Stats = () => {

    const {t} = useTranslation()
    return (
        <section className="bg-[#333029] relative py-[45px]">
            <Container >
                <img src="/img/stats-bg.png" alt="" className="absolute top-0 left-0 z-[1] w-full h-full object-cover opacity-[0.05]" />
                <div  className=" w-full grid sm:grid-cols-2 md:grid-cols-4">
                    {
                        statsData.map((item, index: number) => (
                            <div key={item.id} className="flex flex-col gap-3 items-center">
                                {/* <p className="text-[55px] font-bold text-white">{item.number + (index > 0 ? "+" : "")}</p> */}
                                <p className="text-[55px] font-bold text-white"><CountUp separator=""  enableScrollSpy scrollSpyOnce end={item.number} duration={3}  />{(index > 0 ? "+" : "")}</p>
                                <p className="text-base font-medium text-[#a4a097]">{t(item.name)}</p>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default Stats