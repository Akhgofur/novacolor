import {FC} from "react"
interface InputProps {
    type ?: string,
    className ?: string,
    placeholder ?: string
}
const Input:FC<InputProps> = ({type = "text", className, placeholder = ""}) => {
    return (
        <input type={type} placeholder={placeholder} className={`w-full py-3 px-5 bg-[#23211b] rounded-[25px] text-white placeholder:text-white outline-none  ${className}`} />
    )
}

export default Input