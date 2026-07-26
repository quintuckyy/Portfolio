"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: -500, y : -500 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ 
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            };
        }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-0 transition duration-300"
            style ={{
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(147, 51, 234, 0.14), transparent 40%)`,
            }}
        />
    );
}