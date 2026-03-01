"use client";
import * as React from "react"
import {ScrollArea} from "@radix-ui/react-scroll-area";
import Background from "../background/background";
import {motion} from "framer-motion";
import {useRef} from "react";
import {useTheme} from "next-themes";
import AppBar from "../../components/AppBar/AppBar";
import Name from "./name";
import MyInfo from "./MyInfo";
import {Button} from "@/components/ui/button";
import {Maximize2,Minimize2} from "lucide-react";
import FullScreenButton from "@/components/FullScreenButton/FullScreenButton";

export default function Me() {

    const ref = useRef(null);
    const [isFullscreen, setFullscreen] = React.useState(false);
    const {resolvedTheme} = useTheme()

    return (
        <div
            className="flex justify-center items-center"
        >
            <AppBar/>
            {/*<motion.div*/}
            {/*    className="progress-bar"*/}
            {/*    style={{scaleX: 0.5}}*/}
            {/*/>*/}
            <motion.div
                className={`box ${resolvedTheme === 'light' ? 'box-light' : 'box-dark'}`}
                initial={{
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    height: isFullscreen ? '100vh' : '80vh',
                    width: isFullscreen ? '100vw' : '90vw',
                    borderRadius: isFullscreen ? '0%' : '2%',
                }}
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                style={{
                    borderRadius: "2%",
                }}
            >
                <ScrollArea className={`
                h-full w-full
                rounded-md p-4`}
                            style={{
                                overflowY: 'scroll',
                                borderRadius: "2%",
                                scrollbarWidth: "none",
                                borderImage: "linear-gradient(to right, #fbbf24, #f97316)",
                            }}
                            initial={{
                                opacity: 0,
                                scale: 0.5,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            ref={ref}
                >
                    <Name parentRef={ref}/>
                    <MyInfo/>
                </ScrollArea>
            </motion.div>
            <FullScreenButton
                className="absolute bottom-10 right-10"
                isFullscreen={isFullscreen} setFullscreen={setFullscreen}/>
            <Background/>
        </div>
    )
}
