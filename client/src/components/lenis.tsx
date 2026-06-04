// 'use client';

// import { useEffect } from 'react';
// import Lenis from 'lenis';

// export default function LenisScroll() {
//     useEffect(() => {
//         const lenis = new Lenis({
//             duration: 1.2,
//             smoothWheel: true,
//             anchors: {
//                 offset: -100,
//             },
//         });

//         const raf = (time: number) => {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         };

//         requestAnimationFrame(raf);

//         return () => {
//             lenis.destroy();
//         };
//     }, []);

//     return null;
// }
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      anchors: {
        offset: -100,
      },
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Fix Clerk modal scroll lock
    const observer = new MutationObserver(() => {
      if (document.body.style.overflow === "hidden") {
        setTimeout(() => {
          lenis.start();
        }, 100);
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return null;
}
