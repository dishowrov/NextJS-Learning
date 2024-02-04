"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroMan from "/src/app/img/pic-profile-2.png";

function Hero() {
    return (
        <section>
            <div className='bg-[#EBFDF5] py-[75px]'>
                <div className='container m-auto'>
                    <div className="flex justify-between items-center">

                        {/* Details */}
                        <div>
                            <h6>My Specialize</h6>
                            <h1 className='font-normal text-[56px] leading-[3.5rem]'> I'm an Developer </h1>
                            <p className='text-lg text-[#555] leading-[2.25rem]'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                            <button>
                                <Link href={"#"}>
                                    SEE MY PORTFOLIO
                                </Link>
                            </button>
                        </div>
                        
                        {/* Image */}
                        <div>
                            <Image
                                src={heroMan}
                                alt='Me'
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
