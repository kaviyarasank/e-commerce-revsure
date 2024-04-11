import React, { useState } from "react"
import "./header.css";
import { StaticValues } from "@/constants";
import ProfileImg from "@/assets/profile.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Popover from '@mui/material/Popover';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const router = useRouter();

    return (
        <header className="header d-flex align-items-center justify-content-between">
            <p className="title" onClick={() => router.push("/")}>{StaticValues.title}</p>
            <Image src={ProfileImg} alt="profile" className="" onClick={handleClick} />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className="p-2">
                    <div className="d-flex cursor-pointer align-items-center">
                        <p className="ms-2 mb-0"><Link className="m-0" href={""}>settings</Link></p>
                    </div>
                    <div className="d-flex cursor-pointer align-items-center mt-3">
                        <p className="ms-2 mb-0">logout</p>
                    </div>

                </div>
            </Popover>
        </header>
    )
};

export default Header;
