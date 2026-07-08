import { useCallback } from "react";
import * as htmlToImage from "html-to-image";

export function useCircuitCapture() {
  const capture = useCallback(async (element: HTMLElement): Promise<HTMLImageElement | null> => {
    if (!element) return null;

    try {
      // Capture the DOM as PNG data URL
      const dataUrl = await htmlToImage.toPng(element, {
        cacheBust: true,
        style: {
          transform: "scale(1)",
          transformOrigin: "top left",
        },
        // Filter out components that are not capture-safe (like iframes or custom cursors)
        filter: (node) => {
          const htmlNode = node as HTMLElement;
          const id = htmlNode.id || "";
          const className = (htmlNode.getAttribute && htmlNode.getAttribute("class")) || "";
          return (
            id !== "custom-cursor" &&
            !className.includes("fixed") && // avoid capturing sticky elements separately if they duplicate
            !className.includes("z-[9999]") // avoid capturing the transition layer itself
          );
        },
      });

      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = dataUrl;
      });
    } catch (err) {
      console.error("Error in useCircuitCapture:", err);
      return null;
    }
  }, []);

  return { capture };
}
