import Image from "next/image"

const Loading = () => {
    return (
        <div className=" fixed z-[100] bg-mainBlack w-full h-screen flex items-center justify-center">
            <div className="relative overflow-hidden w-[240px] h-[130px]">
            <Image src={"/img/logo.png"} alt="logo loading" width={500} height={400} className="absolute w-[230px] h-[120px] object-contain object-center anime" />
            </div>
        </div>
    )
}

export default Loading