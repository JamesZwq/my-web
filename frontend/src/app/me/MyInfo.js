import AppBar from "../../components/AppBar/AppBar";
import {motion} from "framer-motion";
import {ScrollArea} from "@radix-ui/react-scroll-area";
import Background from "../background/background";
import * as React from "react";

export default function MyInfo() {
    const date = new Date();
    const hours = date.getHours();
    return (
        <div className="
                    flex
                    flex-col
                    justify-center
                    items-center
                    h-full w-full">
            I am a
            <div
                className="
                    text-center text-transparent bg-clip-text animated-gradient"
                style={{
                    backgroundImage: "linear-gradient(to right, #a855f7, #f43f5e)",
                    textShadow: "0px -1px 2px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
            >
                software engineer
            </div>

        </div>
    )

}