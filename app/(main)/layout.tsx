import React from "react";
import Sidebar from '@/components/sidebar'
import Infobar from "@/components/infobar";
type Props = {children: React.ReactNode}

const Layout = (props: Props) => {
    return (
        <div className="flex flex-col md:flex-row overflow-hidden h-screen">
            <Sidebar />
            <div className="w-full overflow-y-auto">
                <Infobar />
                <div className="p-4">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default Layout;