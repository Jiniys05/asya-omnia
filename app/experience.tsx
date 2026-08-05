"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Experience() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.location.hash) {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    }
  }, [pathname]);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty(
        "--pointer-x",
        `${event.clientX / window.innerWidth - 0.5}`,
      );
      document.documentElement.style.setProperty(
        "--pointer-y",
        `${event.clientY / window.innerHeight - 0.5}`,
      );
    };

    let scrollFrame = 0;
    const updateScrollProgress = () => {
      scrollFrame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(Math.min(1, Math.max(0, progress))),
      );
    };
    const onScroll = () => {
      if (!scrollFrame) {
        scrollFrame = window.requestAnimationFrame(updateScrollProgress);
      }
    };

    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
