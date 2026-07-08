import { transitionConfig } from "./transitionConfig";

export interface Fragment {
  index: number;
  col: number;
  row: number;
  // Target position on screen
  targetX: number;
  targetY: number;
  // Crop coordinates from source image
  sourceX: number;
  sourceY: number;
  sourceWidth: number;
  sourceHeight: number;
  // Animation offsets and states
  x: number;
  y: number;
  scale: number;
  opacity: number;
  rotation: number;
  glow: number;
}

export function createFragmentGrid(
  cols: number,
  rows: number,
  cellWidth: number,
  cellHeight: number
): Fragment[] {
  const fragments: Fragment[] = [];
  let index = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const targetX = c * cellWidth;
      const targetY = r * cellHeight;

      fragments.push({
        index,
        col: c,
        row: r,
        targetX,
        targetY,
        sourceX: targetX,
        sourceY: targetY,
        sourceWidth: cellWidth,
        sourceHeight: cellHeight,
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotation: 0,
        glow: 0,
      });

      index++;
    }
  }

  return fragments;
}
