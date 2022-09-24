import { vec } from "@shopify/react-native-skia";

interface DrawGrid {
  gridSize: number;
  height: number;
  width: number;
}

export const drawGrid = ({ gridSize = 25, height, width }: DrawGrid) => {
  const points = [];
  for (let i = 0; i < width; i += gridSize) {
    // points.push(vec(0, i));
    // points.push(vec(width, i));
    points.push(vec(i, 0));
    points.push(vec(i, height));
  }

  for (let i = 0; i < height; i += gridSize) {
    points.push(vec(0, i));
    points.push(vec(width, i));
    // points.push(vec(i, 0));
    // points.push(vec(i, height));
  }
  return points;
};
