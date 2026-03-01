import "./styles.css";
import {useTheme} from "next-themes"
// import {  ThemeProviderProps } from "next-themes/dist/types"
import {motion} from "framer-motion";
import {Button} from "../ui/button";
import {useEffect} from "react";
import * as React from "react";
export default function FullScreenButton({isFullscreen, setFullscreen, ...props}){
    return (
        <Button
            {...props}
            onClick={() => setFullscreen(!isFullscreen)}
            variant="outline" size="icon">
            <div
                className={`w-full h-full flex justify-center items-center icon-container ${
                    isFullscreen ? "scale-minimize" : "scale-maximize"
                }`}
            >
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-minimize-2">
                    <motion.polyline
                        points={isFullscreen ? "4 14 10 14 10 20" : "15 3 21 3 21 9"}
                        animate={{points: isFullscreen ? "4 14 10 14 10 20" : "15 3 21 3 21 9"}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <motion.polyline
                        points={isFullscreen ? "20 10 14 10 14 4" : "9 21 3 21 3 15"}
                        animate={{points: isFullscreen ? "20 10 14 10 14 4" : "9 21 3 21 3 15"}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <motion.line
                        x1="14"
                        x2="21"
                        y1="10"
                        y2="3"
                        animate={{x1: isFullscreen ? 14 : 3, x2: isFullscreen ? 21 : 10, y1: isFullscreen ? 10 : 21, y2: isFullscreen ? 3 : 14}}
                        transition={{duration: 0.3, ease: "easeInOut"}}/>
                    <motion.line
                        x1="3"
                        x2="10"
                        y1="21"
                        y2="14"
                        animate={{x1: isFullscreen ? 3 : 14, x2: isFullscreen ? 10 : 21, y1: isFullscreen ? 21 : 10, y2: isFullscreen ? 14 : 3}}
                        transition={{duration: 0.3, ease: "easeInOut"}}/>
                </motion.svg>
            </div>
        </Button>
    );
}