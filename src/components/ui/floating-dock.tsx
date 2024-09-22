/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

interface ColorProps {
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
}

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  orientation = "horizontal",
  colors = {},
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
  orientation?: "horizontal" | "vertical";
  colors?: ColorProps;
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        orientation={orientation}
        colors={colors}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        orientation={orientation}
        colors={colors}
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  orientation,
  colors,
}: {
  items: DockItem[];
  className?: string;
  orientation: "horizontal" | "vertical";
  colors: ColorProps;
}) => {
  const [open, setOpen] = useState(false);
  const { bgColor = "bg-blue-500", hoverColor = "hover:bg-blue-600", textColor = "text-white" } = colors;

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className={cn(
              "absolute flex gap-2",
              orientation === "vertical"
                ? "flex-col right-full mr-2 inset-y-0"
                : "flex-row bottom-full mb-2 inset-x-0"
            )}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: orientation === "vertical" ? 0 : 10,
                  x: orientation === "vertical" ? 10 : "-50%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: orientation === "vertical" ? 0 : "-50%",
                }}
                exit={{
                  opacity: 0,
                  y: orientation === "vertical" ? 0 : 2,
                  x: orientation === "vertical" ? 2 : "-50%",
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className={cn("h-10 w-10 rounded-full flex items-center justify-center", bgColor, hoverColor)}
                >
                  <div className={cn("h-4 w-4", textColor)}>{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className={cn("h-10 w-10 rounded-full flex items-center justify-center", bgColor, hoverColor)}
      >
        <IconLayoutNavbarCollapse className={cn("h-5 w-5", textColor)} />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  orientation,
  colors,
}: {
  items: DockItem[];
  className?: string;
  orientation: "horizontal" | "vertical";
  colors: ColorProps;
}) => {
  let mouseX = useMotionValue(Infinity);
  let mouseY = useMotionValue(Infinity);
  const { bgColor = "bg-blue-500" } = colors;

  return (
    <motion.div
      onMouseMove={(e) => {
        mouseX.set(e.pageX);
        mouseY.set(e.pageY);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        mouseY.set(Infinity);
      }}
      className={cn(
        "mx-auto hidden md:flex gap-4 items-center rounded-2xl p-4",
        bgColor,
        orientation === "vertical"
          ? "flex-col h-auto w-20"
          : "flex-row h-16 w-auto",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          mouseY={mouseY}
          key={item.title}
          {...item}
          orientation={orientation}
          colors={colors}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  mouseY,
  title,
  icon,
  href,
  onClick,
  orientation,
  colors,
}: {
  mouseX: MotionValue;
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
  orientation: "horizontal" | "vertical";
  colors: ColorProps;
}) {
  let ref = useRef<HTMLDivElement>(null);
  const { bgColor = "bg-blue-400", hoverColor = "hover:bg-blue-600", textColor = "text-white" } = colors;

  let distance = useTransform(
    orientation === "vertical" ? mouseY : mouseX,
    (val) => {
      let bounds = ref.current?.getBoundingClientRect() ?? {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
      return (
        val -
        (orientation === "vertical" ? bounds.y : bounds.x) +
        (orientation === "vertical" ? bounds.height : bounds.width) / 2
      );
    }
  );

  let widthTransform = useTransform(distance, [-150, 0, 150], [50, 60, 50]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [50, 60, 50]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [24, 28, 24]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [24, 28, 24]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link href={href} onClick={handleClick}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "rounded-full flex items-center justify-center relative",
          bgColor,
          hoverColor,
          orientation === "vertical" ? "flex-col py-2" : "aspect-square"
        )}
      >
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={cn("flex items-center justify-center", textColor)}
        >
          {icon}
        </motion.div>
        {hovered && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 2,
            }}
            className={cn(
              "px-2 py-0.5 whitespace-pre rounded-md bg-blue-100 border border-blue-200 text-blue-700 absolute w-fit text-xs",
              "right-1/2 -translate-x-1/2 bottom-full mb-2"
            )}
          >
            {title}
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
}
