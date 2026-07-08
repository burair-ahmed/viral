export interface Path {
  exitX: number;
  exitY: number;
  startX: number; // for incoming
  startY: number; // for incoming
  stepped: "horizontal-first" | "vertical-first";
}

export function generateTracePaths(
  cols: number,
  rows: number,
  originCol: number,
  originRow: number,
  cellWidth: number,
  cellHeight: number,
  screenWidth: number,
  screenHeight: number
): Path[] {
  const paths: Path[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Vector from origin to current cell
      let dx = c - originCol;
      let dy = r - originRow;

      // Handle center coordinate edge case
      if (dx === 0 && dy === 0) {
        const angle = Math.random() * Math.PI * 2;
        dx = Math.cos(angle);
        dy = Math.sin(angle);
      }

      // Normalize
      const length = Math.sqrt(dx * dx + dy * dy);
      const ndx = dx / length;
      const ndy = dy / length;

      // Calculate offscreen target (multiply by screen dimensions to ensure it's offscreen)
      // We add an extra margin to clear the screen boundaries fully
      const exitDist = Math.max(screenWidth, screenHeight) * 1.2;
      const exitX = ndx * exitDist;
      const exitY = ndy * exitDist;

      // Let's decide if the PCB trace steps horizontally first or vertically first
      // We can alternate them or base it on which distance is greater
      const stepped = Math.abs(dx) > Math.abs(dy) ? "horizontal-first" : "vertical-first";

      // The incoming start points are mirrored from offscreen
      // Flying in from the opposite side looks like a flow-through
      const startX = -exitX;
      const startY = -exitY;

      paths.push({
        exitX,
        exitY,
        startX,
        startY,
        stepped,
      });
    }
  }

  return paths;
}
