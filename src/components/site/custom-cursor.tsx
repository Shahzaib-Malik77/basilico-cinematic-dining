import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.documentElement.classList.add("hide-cursor");
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement | null;
      setActive(!!t?.closest("a,button,input,select,textarea,[data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("hide-cursor");
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[999] rounded-full bg-gold mix-blend-difference"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: active ? 10 : 6, height: active ? 10 : 6 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[999] rounded-full border border-gold/50"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: active ? 56 : 30, height: active ? 56 : 30, opacity: active ? 1 : 0.5 }}
        transition={{ type: "spring", stiffness: 220, damping: 25 }}
      />
    </>
  );
}
