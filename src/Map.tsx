/* eslint-disable @typescript-eslint/no-var-requires */
import { Canvas, Skia, useImage, useValue } from "@shopify/react-native-skia";
import React from "react";
import { Dimensions, View } from "react-native";

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
  // const font = useFont(aveny, 56);
  if (!image) {
    return null;
  }
  return (
    <View>
      <Canvas style={{ width, height, backgroundColor: "blue" }}>
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
