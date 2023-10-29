import { IProductItem, IProductVariant } from "@/utils/types"
import Image from "next/image"
import {FC} from "react"

interface ImageGalleryProps {
    data : IProductVariant[]
    currentId : number,
    open: boolean,
    setOpen : Function,
    setCurrentId: Function
}
const ImageGallery:FC<ImageGalleryProps> = ({data, currentId, open, setOpen, setCurrentId}) => {
    const handleClose = () => {
        setOpen(false)
        setCurrentId(1)
    }
    return (
        <div className={open ? "fixed bg-[#0000006c] top-0 left-0 w-full h-screen z-[100] p-2 md:p-5 " : "hidden"}>
            <div className="flex justify-end">
                <button className="md:w-[40px] w-[30px] md:h-[40px] h-[30px] flex flex-col items-center justify-center" onClick={handleClose} >
                    <span className="block w-full h-[2px] md:h-[3px] bg-white rotate-45"></span>
                    <span className="block w-full h-[2px] md:h-[3px] bg-white mt-[-2px] md:mt-[-3px] -rotate-45"></span>
                </button>
            </div>
            <div className="w-full h-full flex items-center justify-center py-2 md:p-5 ">
                <div className="w-full h-full bg-white rounded-md p-3 relative">
                    <button className="md:w-[40px] w-[30px] h-[40px] md:h-[40px] opacity-80 absolute top-[50%] left-0 translate-y-[-50%]" onClick={() => {
                        if(currentId != data[0].id) {
                            setCurrentId(currentId - 1)
                        }
                    }} >
                        <img src="/img/right-arrow.png" alt="" className="w-full h-full object-contain rotate-180" />
                    </button>
                    <button className="md:w-[40px] w-[30px] h-[40px] md:h-[40px] opacity-80 absolute top-[50%] right-0 translate-y-[-50%]" onClick={() => {
                        if(currentId != data[data.length - 1].id) {
                            setCurrentId(currentId + 1)
                        }
                    }}>
                        <img src="/img/right-arrow.png" alt="" className="w-full h-full object-contain " />
                    </button>
                {
                    data?.map(item => (
                        <div key={item.id} className={`w-full h-full ${item.id == currentId ? "block" : "hidden"}`}>
                            <Image alt="" width={500} height={600} src={item.image} className="w-full h-full object-contain object-center" />
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default ImageGallery