import { Group, rect, RoundedRect, SkImage } from "@shopify/react-native-skia";
import React from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const PictureDimensions = rect(0, 0, width, height);

interface MarkerProps {
  image: SkImage;
  x: number;
  y: number;
  width: number;
  height: number;
  info: {
    title: string;
    status: string;
  };
}

export const Marker = ({ image, x, y, info, width, height }: MarkerProps) => {
  return (
    // <View style={{ zIndex: 2, elevation: 2 }}>
    <Group>
      <RoundedRect
        x={x}
        y={y}
        width={15}
        height={15}
        r={25}
        color="lightblue"
      />
      {/* <Image x={x} y={y} width={15} height={15} image={image} fit="none" /> */}
    </Group>
    // </View>
  );
};
