import { navData } from "@/utils/consts"
import Link from "next/link"
import {FC} from "react"
import {useTranslation} from "react-i18next"

interface MobileNavProps {
    isShow: boolean,
    setShow: Function
}



const MobileNav: FC<MobileNavProps> = ({isShow, setShow}) => {

    const {t} = useTranslation()

    return (
        <div className={isShow ?  "md:hidden fixed z-[50] top-0 left-0 w-full h-screen bg-[#00000085]" : "hidden"} onClick={() => {setShow(false)}} >
            <div className=" w-[75%] sm:w-full sm:max-w-[350px] h-full bg-mainBlack text-white px-4 py-8" onClick={(e) => {
                e.stopPropagation()
            }} >
                <div className="flex items-center justify-between">
                <Link href={"/"} className="block" >
                    <img src="/img/logo.png" alt="" className="w-[130px] h-[50px] object-contain" />
                </Link>
                <button className="w-[24px] h-[24px] flex flex-col items-center justify-center" onClick={() => {
                    setShow(false)
                }} >
                    <span className="block bg-white w-full h-[2px] rotate-45" ></span>
                    <span className="block bg-white w-full h-[2px] mt-[-2px] -rotate-45" ></span>
                </button>
                </div>
                <div className="flex flex-col gap-4 py-4 ">
                    {
                        navData?.map(item => (
                            <Link key={item.id} className="border-b pb-2" href={item.url} >
                                {t(item.name)}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MobileNav