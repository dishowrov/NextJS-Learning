import React from "react";
import Image from "next/image";
import siteLogo from "/src/app/img/logo-dark.png";

function Header() {
    return (
        <header>
            <div className="bg-purple-50">

                <div className="container m-auto">

                    {/* Left */}
                    <div>
                        <Image src={siteLogo} alt="Website Logo" />
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;
