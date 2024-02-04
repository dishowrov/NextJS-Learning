"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Gsap() {
    const container = useRef();
    const tl = useRef();

    const toggleTimeline = () => {
        tl.current.reversed(!tl.current.reversed());
    };


    useGSAP(
        () => {
            const boxes = gsap.utils.toArray(".box");

            tl.current = gsap
                .timeline()
                .to(boxes[0], { x: 120, rotation: 360, stagger: 0.25 },)
                .to(boxes[1], { x: -120, rotation: -360, scale: 2 }, "<")
                .to(boxes[2], { y: -166, opacity: 0.5 })
                .reverse();
        },
        { scope: container }
    );

    return (
        <main className=" m-auto">
            <section className="boxes-container py-12" ref={container}>
                <h2>Use the button to toggle a Timeline</h2>
                <div>
                    <button onClick={toggleTimeline}>Toggle Timeline</button>
                </div>
                <div className="box gradient-blue">Box 1</div>
                <div className="box gradient-blue">Box 2</div>
                <div className="box gradient-blue">Box 3</div>
            </section>
        </main>
    );
}
