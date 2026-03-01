import {LayoutOrthographicCamera, motion, MotionCanvas} from "framer-motion-3d";
import {extend, useFrame, useThree} from "@react-three/fiber";

import {transition} from "./settings";
import {AmbientLight, BoxGeometry, CircleGeometry, DirectionalLight, Group, Mesh, MeshStandardMaterial} from "three";
import {useEffect, useRef, useState} from "react";
import {useTheme} from "next-themes";

extend({MeshStandardMaterial, BoxGeometry, Mesh, Group, DirectionalLight, AmbientLight, CircleGeometry});


export function Scene({isFullscreen,theme}) {
    // when
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0, z: 15, zoom: 100});
    useEffect(() => {
        setMousePosition(isFullscreen ? {x: 20, y: 20, z: 20, zoom: 100} : {x: 0, y: 0, z: 15, zoom: 100});
    }, [isFullscreen]);

    return (
        <MotionCanvas
            dpr={[1, 2]}
        >
            <LayoutOrthographicCamera
                initial={{x: 0, y: 0, z: 15, zoom: 100}}
                animate={
                    mousePosition
                }
                transition={
                    transition
                }
            />
            <Lights/>
            <Geometry
                theme={theme}
                size={40}/>
        </MotionCanvas>
    );
}

function Lights() {
    const three = useThree();
    useFrame(() => three.camera.lookAt(0, 0, 0));

    return (
        <>
            <ambientLight intensity={0.3}/>
            <directionalLight
                intensity={0.5}
                position={[0, 5, 0]}
                rotation={[1.8, 0, 0]}
            />
            <directionalLight
                intensity={1.3}
                position={[0, 0, 5]}
                rotation={[0, 0, 0]}
            />
        </>
    );
}


function Box({position, color, theme, color_range}) {
    // random true or false
    const [isRotating, setRotating] = useState(true);
    const meshRef = useRef();
    const step = 0.04;
    const one_rotation = 6.28/4;
    useFrame((state) => {
        if (!meshRef.current) {
            return;
        }
        if (isRotating && meshRef.current.rotation.x < one_rotation) {
            meshRef.current.rotation.x += step;
            meshRef.current.rotation.y -= step;
            // meshRef.current.rotation.z += step;
        }
        if (meshRef.current.rotation.x > one_rotation){
            setRotating(false);
            meshRef.current.rotation.x = 0;
            meshRef.current.rotation.y = 0;
            meshRef.current.rotation.z = 0;
        }
    });

    useEffect(() => {
        setRotating(true)
    }, [theme]);

    const color_change = (color, is_light) => {
        const light = is_light ? color_range : 0;
        const redHex = Math.floor(color.red-light).toString(16).padStart(2, '0');
        const greenHex = Math.floor(color.green-light).toString(16).padStart(2, '0');
        const blueHex = Math.floor(color.blue-light).toString(16).padStart(2, '0');
        return `#${redHex}${greenHex}${blueHex}`;
    }

    return (
        <mesh
            // onPointerOver={() => setRotating(true)}
            // onPointerLeave={() => setRotating(false)}
            position={position}
            ref={meshRef}
            style={{cursor: 'default'}}
        >
            <boxGeometry args={[1, 1, 1]}
            />
            <motion.meshStandardMaterial
                initial={{color: theme === 'dark' ? color_change(color, false) : color_change(color, true)}}
                animate={{color: theme === 'dark' ? color_change(color, true) : color_change(color, false)}}
                transition={{duration: 1}} // 动画持续时间（秒）
            />
        </mesh>
    );
}

function Geometry({size = 20, theme}) {
    const boxes = [];
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (r % 2) {
                const yOffset = c % 2 ? 1 : 0;
                const color_range = 200;
                // Calculate color based on position
                const red = c * ((255-color_range) / size) + color_range;
                const green = c * ((255-color_range) / size) + color_range;
                const blue = c * ((255-color_range) / size) + color_range;
                const color = {red, green, blue};
                // console.log("color: ", color);
                boxes.push(
                    <Box key={`${r}-${c}`} position={[c, r + yOffset, 0]}
                         color={color}
                         color_range={color_range}
                         theme={theme}
                    />
                );
            }
        }
    }



    const offset = -Math.ceil(size / 2);
    return <group
        style={{ cursor: 'default' }} position={[offset, offset, 0]}>{boxes}</group>;
}
