"use client";

import Link from "next/link";
import {Poppins} from "next/font/google";
import {usePathname} from "next/navigation";
import {NavbarFootbar} from "./navbar-footbar";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

import { useState } from "react";
import { PanelLeftIcon } from "lucide-react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
    variable: "--font-poppins",
});

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({href, children, isActive}: NavbarItemProps) => {
    return (
        <Button asChild variant = "main" className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg", isActive && "bg-transparent text-orange-600 hover:bg-orange-600 hover:text-white")}>
            <Link href={href}>
                {children}
            </Link>
        </Button>
    );
};

const NavbarItems = [
    { href: "/", children: "Home" },
    { href: "/wishlist", children: "Wishlist" },
    { href: "/upload", children: "Upload" },
    { href: "/messages", children: "Messages" },
    { href: "/profile", children: "Profile" },
];


export const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(true);

    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
                <span className={cn("text-5xl font-semibold", poppins.className)}>Alexandria</span>
            </Link>


            <div className="items-center gap-4 hidden lg:flex">
                {NavbarItems.map((item) => (
                    <NavbarItem key={item.href} href={item.href} isActive={pathname === item.href}>
                        {item.children}
                    </NavbarItem>
                ))}
            </div>

            <div className="hidden lg:flex">
                <Button asChild variant="main" className="border-l-0 border-t-0 border-b-0 border-r-0 px-15 h-full">
                    <Link href="/sign-in">
                        Log In
                    </Link>
                </Button>
                
                
                <Button asChild variant="mpushed" className="border-l border-t-0 border-b-0 border-r-0 px-3 h-full rounded-tr-none rounded-br-none rounded-tl-lg rounded-bl-lg">
                    <Link href="/register">
                        Start Trading
                    </Link>
                </Button>
            </div>
        </nav>
    );
}; 