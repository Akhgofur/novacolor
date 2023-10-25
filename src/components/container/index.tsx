import {FC, ReactNode} from "react"

interface ContainerProps {
    children: ReactNode,
    className ?: string 
}

const Container: FC<ContainerProps> = ({children, className}) => {
    return (
        <div className={`max-w-[1240px] w-full px-[20px] mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container