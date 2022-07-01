import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { SLayout, SMain } from "./styles";

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const load = (chilData) => { setIsOpen(chilData) }
    return (
        <SLayout>
            <Sidebar load={load}/>
            <SMain isOpen={isOpen}>{children}</SMain>
        </SLayout>
    );
};

export default Layout;
