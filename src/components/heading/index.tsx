import {ReactNode, FC} from "react"

interface HeadingProps {
    children: ReactNode,
    className ?: string,
}

const Heading: FC<HeadingProps> = ({children, className}) => {
    return (
        <h2 className={`text-[32px] sm:text-[35px] smd:text-[37px]  md:text-[41px] lg:text-[46px] font-bold  ${className}`}>{children}</h2>
    )
}

export default Heading