import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import LoaderPublic from "../loader/LoaderPublic";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const loader = useSelector((state: RootState) => state.static.loader);


    return (
        <div>
            <Head>
                <title> E-Commerce Dashboard</title>
            </Head>
            {loader && <LoaderPublic />}
            <Header />
            <Sidebar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
