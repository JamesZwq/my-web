import AppBar from "../../components/AppBar/AppBar";
import {motion} from "framer-motion";
import {ScrollArea} from "@radix-ui/react-scroll-area";
import Background from "../background/background";
import * as React from "react";
import {useTheme} from "next-themes";

export default function Name({ parentRef }) {
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = hours < 12 ? "morning" : hours < 18 ? "afternoon" : "evening";
    const {resolvedTheme} = useTheme()
    return (
        <div className="
                    flex
                    flex-col
                    justify-center
                    items-center
                    h-full w-full">
            <h1
                className="
                        font-bold
                        text-center
                        w-full
                        "
                style={{
                    fontSize: 'clamp(1.5rem, 5vw, 5rem)',
                }}
            >
                Good {timeOfDay},
                <span className="text-blue-500">&nbsp;I&apos;m</span>
            </h1>
            <h1
                className="
                        h-60 grid
                        font-bold text-center text-transparent bg-clip-text
                        sm:text-6xl lg:text-8xl
                        justify-center items-center
                        w-full animated-gradient
                        "
                style={{
                    backgroundImage: "linear-gradient(to right, #a855f7, #f43f5e)",
                    fontSize: 'clamp(2rem, 8vw, 9rem)',
                }}
            >
                Wenqian Zhang
            </h1>
            <div
                className="
                        font-bold
                        text-center
                        break-words
                        w-3/4
                        "
                style={{
                    fontSize: 'clamp(1.5rem, 5vw, 5rem)',
                }}

            >
                <span className="
                text-center text-transparent bg-clip-text animated-gradient"
                      style={{
                          backgroundImage: "linear-gradient(to right, #f6d365, #fda085)",
                          textShadow: "0px -1px 2px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.1)",
                      }}
                >
                    Welcome
                </span>
                &nbsp;to my&nbsp;
                <span className="
                {/*font-*/}
                text-center text-transparent bg-clip-text animated-gradient"
                      style={{
                          backgroundImage: "linear-gradient(to right, #2193b0, #6dd5ed)",
                      }}
                >
                    Personal Website
                </span>
            </div>

            <motion.div
                style={{
                    bottom: "20px",
                    position: "absolute",
                    cursor: "pointer",
                }}
                whileHover={{scale: 1.5}}
                animate={{y: -10}}
                onClick={() => {
                    const height = parentRef.current.clientHeight;
                    parentRef.current.scrollTo({top: height, behavior: 'smooth'}
                )}}

                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 50,
                    repeat: Infinity, // 无限循环
                    repeatType: "mirror", // 使动画来回循环
                    duration: 3 // 动画持续时间
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="sm:w-10 sm:h-10 w-8 h-8"
                     viewBox="0 0 24 24" fill="none">
                    <path d="M7 10L12 15L17 10"
                          stroke={resolvedTheme === 'light' ? "black" : "white"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </motion.div>
        </div>
    )

}