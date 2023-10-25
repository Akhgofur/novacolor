import { FC, ReactNode } from "react"
import Header from "./header"

interface LayoutProps {
    children : ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow" >
                {children}
            </main>
        </div>
    )
}

export default Layout