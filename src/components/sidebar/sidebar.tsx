import React from "react"
import "./sidebar.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
    const router = useRouter();
    const pathName: any = router?.pathname?.split("/");
    console.log("pathName",pathName);
    

    return (
        <aside className="sidebar">
            <div className="d-flex flex-column gap-3 p-3">
                <Link href={'/sales-analytics'} className={"links"+` ${pathName[1] === 'sales-analytics' ? 'activeLink':""} `}>Sales Analytics</Link>
                <Link href={'/user-activities'}  className={"links"+` ${pathName[1] === 'user-activities' ? 'activeLink':""} `}>User Activities</Link>
                <Link href={'/inventory-status'}  className={"links"+` ${pathName[1] === 'inventory-status' ? 'activeLink':""} `}>Inventory Status</Link>
            </div>
        </aside>
    )
};

export default Sidebar;
