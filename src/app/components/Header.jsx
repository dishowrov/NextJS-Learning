import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteLogo from "/src/app/img/logo-dark.png";

function Header() {
    return (
        <header>
            <div className="bg-purple-50 py-[50px]">
                <div className="container m-auto">
                    <div className="flex justify-between">

                        {/* Left */}
                        <div>
                            <Image src={siteLogo} alt="Website Logo" />
                        </div>

                        {/* Right */}
                        <div>
                            <ul>
                                <li className="inline-block ml-5">
                                    <Link href={"#"} className="active:text-red-200 border-b border-blue-500"> Home </Link>
                                </li>

                                <li className="inline-block ml-5">
                                    <Link href={"#"} className="active:text-red-200 border-b border-blue-500"> About </Link>
                                </li>

                                <li className="inline-block ml-5">
                                    <Link href={"#"} className="active:text-red-200 border-b border-blue-500"> Services </Link>
                                </li>

                                <li className="inline-block ml-5">
                                    <Link href={"#"} className="active:text-red-200 border-b border-blue-500"> Portfolio </Link>
                                </li>

                                <li className="inline-block ml-5">
                                    <Link href={"#"} className="active:text-red-200 border-b border-blue-500"> Experiences </Link>
                                </li>

                                <li className="inline-block ml-5">
                                    <Link href={"#"} className="active:text-red-200 border-b border-blue-500"> Contact Us </Link>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
