import {Button} from "../ui/button";
import React from "react";
import Link from "next/link";
import DarkLightButton from "../dark-light-button/dark-light-button";
import {useTheme} from "next-themes";
import {motion} from "framer-motion";

export default function AppBar() {
    const {resolvedTheme} = useTheme()
    return (
        <>
        <motion.header className="bg-gray-800
        top-0
        mx-auto flex justify-between items-center
        text-white p-4"
            style={{ position: 'fixed',
                zIndex: 10,
                width: '100%',
                top: 0,
                height: '4rem',
                padding: '1rem',
                backgroundColor: resolvedTheme === 'light' ? 'white' : 'black',
                color: resolvedTheme === 'light' ? 'black' : 'white'
        }}
        >
            <div className="mx-auto flex justify-between items-center">
                {/*<div className="text-lg font-bold">*/}
                {/*    <Link href="/">MyApp</Link>*/}
                {/*</div>*/}
                <DarkLightButton />
                <DarkLightButton />
                <DarkLightButton />
                <DarkLightButton />
                <DarkLightButton />
                <DarkLightButton />
                <DarkLightButton />
            </div>
        </motion.header>

            <div style={{
                position: 'absolute',
                top: 0,
                width: '100vw',
                height: '4rem'}}
            >
            </div>
        </>
    );
}