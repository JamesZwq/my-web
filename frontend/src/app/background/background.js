"use client";

import "./styles.css";
import {Suspense, useEffect, useState} from "react";
import {motion, MotionConfig} from "framer-motion";
import {Scene} from "./Scene";
import {transition} from "./settings";
import {useTheme} from "next-themes";
// import {is} from "@react-three/fiber/dist/declarations/src/core/utils";

export default function Background() {
    const [isFullscreen, setFullscreen] = useState(false);
    const [justLoaded, setJustLoaded] = useState(true);

    useEffect(() => {
        window.addEventListener('load', function () {
            setJustLoaded(false);
        })
    }, [isFullscreen]);

    useEffect(() => {
        setFullscreen(false);
        setTimeout(() => {
            setFullscreen(true);
        }, 1000)
    }, [justLoaded])

    const {resolvedTheme} = useTheme()


    return (
        <MotionConfig transition={transition}>
            <div
                className="w-screen h-screen"
                onClick={() => setFullscreen(!isFullscreen)}
                data-is-fullscreen={isFullscreen}
                style={{ position: 'absolute', zIndex: -1 }}
            >
                <motion.div
                    className="w-screen h-screen"
                            layout>
                    <Suspense fallback={null}>
                        <Scene
                            theme={resolvedTheme}
                            isFullscreen={isFullscreen}/>
                    </Suspense>
                </motion.div>
            </div>
        </MotionConfig>
    );
}
