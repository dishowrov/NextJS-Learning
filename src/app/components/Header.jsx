import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteLogo from "/src/app/img/logo-dark.png";

function Header() {
    return (
        <header>
            <div className="bg-purple-50">
                <div className="container m-auto">
                    <div className="flex justify-between">

                        {/* Left */}
                        <div>
                            <Image src={siteLogo} alt="Website Logo" />
                        </div>

                        {/* Right */}
                        <div>
                            <ul>
                                <li>
                                    <Link href={"#"}> Home </Link>
                                </li>

                                <li>
                                    <Link href={"#"}> About </Link>
                                </li>

                                <li>
                                    <Link href={"#"}> Services </Link>
                                </li>

                                <li>
                                    <Link href={"#"}> Portfolio </Link>
                                </li>

                                <li>
                                    <Link href={"#"}> Experiences </Link>
                                </li>

                                <li>
                                    <Link href={"#"}> Contact Us </Link>
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
