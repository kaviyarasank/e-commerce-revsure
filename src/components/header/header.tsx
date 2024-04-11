import React, { useState } from "react"
import "./header.css";
import { StaticValues } from "@/constants";
import ProfileImg from "@/assets/profile.svg";
import Image from "next/image";
import { Popover } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Header = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <header className="header d-flex align-items-center justify-content-between">
            <p className="title" onClick={()=>router.push("/")}>{StaticValues.title}</p>
            <Popover
                content={<div className="p-2">
                    <div className="d-flex cursor-pointer align-items-center">
                        <p className="ms-2 mb-0"><Link className="m-0" href={""}>settings</Link></p>
                    </div>
                    <div className="d-flex cursor-pointer align-items-center mt-3">
                        <p className="ms-2 mb-0">logout</p>
                    </div>

                </div>}
                trigger="click"
                open={open}
                placement="bottomLeft"
                onOpenChange={(value) => setOpen(value)}
            >
                <Image src={ProfileImg} alt="profile" className="" />
            </Popover>
        </header>
    )
};

export default Header;
