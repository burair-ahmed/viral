"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function EzoicRouteListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip initial mount; individual placeholders handle initial render.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window !== "undefined" && window.ezstandalone) {
      window.ezstandalone.cmd.push(() => {
        try {
          if (window.ezstandalone?.enabled) {
            window.ezstandalone.destroy();
            window.ezstandalone.define();
            window.ezstandalone.enable();
            window.ezstandalone.display();
          }
        } catch (e) {
          console.error("Ezoic SPA refresh error:", e);
        }
      });
    }
  }, [pathname, searchParams]);

  return null;
}

