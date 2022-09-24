/* eslint-disable @typescript-eslint/no-var-requires */
import {
  Canvas,
  Points,
  Skia,
  useImage,
  useValue,
} from "@shopify/react-native-skia";
import React from "react";
import { Dimensions, View } from "react-native";
import { drawGrid } from "./canvasHelpers";

// import { HelloSticker, HelloStickerDimensions } from "./HelloSticker";
// import { LocationSticker, LocationStickerDimensions } from "./LocationSticker";
import { GestureHandler } from "./GestureHandler";
import { Picture, PictureDimensions } from "./Picture";

const { width, height } = Dimensions.get("window");

// const zurich = require("./assets/zurich.jpg");
// const aveny = require("./assets/aveny.ttf");
const blueprint = require("../assets/blueprints/FLOOR-PLAN-BUILDINGS.jpg");

export const Map = () => {
  const pictureMatrix = useValue(Skia.Matrix());
  const helloMatrix = useValue(Skia.Matrix());
  const locationMatrix = useValue(Skia.Matrix());
  const image = useImage(blueprint);
  const canvasHeight = height * 0.8;
  const canvasWidth = width - 24;
  // const font = useFont(aveny, 56);
  if (!image) {
    return null;
  }

  const points = drawGrid({
    width: canvasWidth,
    height: canvasHeight,
    gridSize: 25,
  });

  return (
    <View
      style={{
        backgroundColor: "#f0f0f0",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "black",
      }}
    >
      <Canvas
        style={{
          width: width - 24,
          height: height * 0.8,
          backgroundColor: "#fff",
        }}
      >
        {/* <Line
          p1={vec(0, 0)}
          p2={vec(256, 256)}
          color="lightblue"
          style="stroke"
          strokeWidth={4}
        /> */}
        <Points
          points={points}
          mode="lines"
          color="#CECED9"
          style="stroke"
          strokeWidth={1}
        />
        <Picture matrix={pictureMatrix} image={image} />
        {/* <HelloSticker matrix={helloMatrix} />
        <LocationSticker font={font} matrix={locationMatrix} /> */}
      </Canvas>
      <GestureHandler matrix={pictureMatrix} dimensions={PictureDimensions} />
      {/* <GestureHandler
        matrix={helloMatrix}
        dimensions={HelloStickerDimensions}
      />
      <GestureHandler
        matrix={locationMatrix}
        dimensions={LocationStickerDimensions}
      /> */}
    </View>
  );
};
