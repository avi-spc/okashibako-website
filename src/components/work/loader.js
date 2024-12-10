import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = () => {
    const loaderRef = useRef();
    const loaderCircleRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to("body", {
            overflow: "hidden",
        })
            .to(loaderCircleRef.current, {
                scale: 2,
                yoyo: true,
                duration: 0.5,
                ease: "circ.out",
                repeat: 4,
            })
            .to(
                loaderCircleRef.current,
                {
                    scale: 100,
                    duration: 1,
                    ease: "circ.out",
                },
                "-=.4"
            )
            .to(loaderRef.current, {
                delay: 0.1,
                opacity: 0,
                duration: 1.5,
                ease: "circ.out",
            })
            .to(loaderRef.current, { display: "none" })
            .to("body", {
                overflow: "auto",
            });
    });

    return (
        <div className="loader" ref={loaderRef}>
            <div className="loader__circle" ref={loaderCircleRef}></div>
        </div>
    );
};

export default Loader;