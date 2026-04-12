"use client";

import { Ref, forwardRef, useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const PhotoGallery = ({
  animationDelay = 0.5,
  title,
  subtitle,
  buttonLabel = "Barchasini ko'rish",
  photos: photosProp,
}: {
  animationDelay?: number;
  title?: React.ReactNode;
  subtitle?: string;
  buttonLabel?: string;
  photos?: { src: string; alt?: string }[];
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => setIsVisible(true), animationDelay * 1000);
    const animationTimer = setTimeout(() => setIsLoaded(true), (animationDelay + 0.4) * 1000);
    return () => { clearTimeout(visibilityTimer); clearTimeout(animationTimer); };
  }, [animationDelay]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const photoVariants: import("framer-motion").Variants = {
    hidden: () => ({ x: 0, y: 0, rotate: 0, scale: 1 }),
    visible: (custom: { x: string; y: string; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  const defaultSrcs = [
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg",
  ];

  const srcs = (photosProp ?? []).length >= 5
    ? photosProp!.slice(0, 5)
    : defaultSrcs.map((src, i) => ({ src, alt: `Demo Day ${i + 1}` }));

  const photos = [
    { id: 1, order: 0, x: "-320px", y: "15px", zIndex: 50, direction: "left" as Direction, ...srcs[0] },
    { id: 2, order: 1, x: "-160px", y: "32px", zIndex: 40, direction: "left" as Direction, ...srcs[1] },
    { id: 3, order: 2, x: "0px",    y: "8px",  zIndex: 30, direction: "right" as Direction, ...srcs[2] },
    { id: 4, order: 3, x: "160px",  y: "22px", zIndex: 20, direction: "right" as Direction, ...srcs[3] },
    { id: 5, order: 4, x: "320px",  y: "44px", zIndex: 10, direction: "left" as Direction,  ...srcs[4] },
  ];

  return (
    <div className="relative py-20">
      {/* grid background */}
      <div className="absolute inset-0 max-md:hidden top-[200px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {subtitle && (
        <p className="my-2 text-center text-xs font-light uppercase tracking-widest text-slate-500">
          {subtitle}
        </p>
      )}
      {title && (
        <div className="z-20 mx-auto max-w-2xl py-3 text-center text-4xl md:text-6xl font-bold font-display tracking-tight text-[#1A1A1A]">
          {title}
        </div>
      )}

      <div className="relative mb-8 h-[350px] w-full items-center justify-center lg:flex">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative h-[220px] w-[220px]">
              {[...photos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }}
                  variants={photoVariants}
                  custom={{ x: photo.x, y: photo.y, order: photo.order }}
                >
                  <Photo
                    width={220}
                    height={220}
                    src={photo.src}
                    alt={photo.alt ?? "Demo Day"}
                    direction={photo.direction}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex w-full justify-center">
        <Button className="bg-[#1A1A1A] hover:bg-black text-white rounded-full px-8 h-11">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

function getRandomNumberInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

const MotionImage = motion(
  forwardRef(function MotionImage(props: ImageProps, ref: Ref<HTMLImageElement>) {
    return <Image ref={ref} {...props} />;
  })
);

type Direction = "left" | "right";

export const Photo = ({
  src, alt, className, direction, width, height, ...props
}: {
  src: string; alt: string; className?: string;
  direction?: Direction; width: number; height: number;
}) => {
  const [rotation, setRotation] = useState<number>(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const r = getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(r);
  }, [direction]);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{ scale: 1.1, rotateZ: 2 * (direction === "left" ? -1 : 1), zIndex: 9999 }}
      whileDrag={{ scale: 1.1, zIndex: 9999 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width, height, perspective: 400,
        zIndex: 1,
        WebkitTouchCallout: "none", WebkitUserSelect: "none",
        userSelect: "none", touchAction: "none",
      }}
      className={cn(className, "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing")}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }}
      onMouseLeave={() => { x.set(200); y.set(200); }}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-md">
        <MotionImage
          className="rounded-3xl object-cover"
          fill
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};
