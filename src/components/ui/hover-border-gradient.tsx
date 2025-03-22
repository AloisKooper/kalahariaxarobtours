"use client";
import React, { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(30% 50% at 50% 0%, hsl(0, 0%, 0%) 0%, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0) 100%)",
    LEFT: "radial-gradient(25% 50% at 0% 50%, hsl(0, 0%, 0%) 0%, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0) 100%)",
    BOTTOM:
      "radial-gradient(30% 50% at 50% 100%, hsl(0, 0%, 0%) 0%, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0) 100%)",
    RIGHT:
      "radial-gradient(25% 50% at 100% 50%, hsl(0, 0%, 0%) 0%, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0) 100%)",
  };

  const highlight =
    "radial-gradient(80% 200% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0.95) 30%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full content-center bg-white/20 hover:bg-white/40 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto z-10 px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(10px)",
          position: "absolute",
          width: "110%",
          height: "110%",
          left: "-5%",
          top: "-5%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className={`absolute z-[1] flex-none inset-[2px] rounded-[inherit] transition-colors duration-300 ${hovered ? 'bg-black' : 'bg-kalahari-brown'}`} />
    </Tag>
  );
}