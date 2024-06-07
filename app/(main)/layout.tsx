import React from "react";
import Sidebar from '@/components/sidebar'
import Infobar from "@/components/infobar";
type Props = {children: React.ReactNode}

const Layout = (props: Props) => {
    return <div>
        <div className="flex overflow-hidden h-screen">
            <Sidebar />
            <div className="w-full">
                <Infobar />
                {props.children}
            </div>
        </div>
    </div>
}
export default Layout;