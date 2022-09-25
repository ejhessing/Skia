/* eslint-disable @typescript-eslint/no-var-requires */
import {
  Canvas,
  Points,
  Skia,
  useImage,
  useTouchHandler,
  useValue,
} from "@shopify/react-native-skia";
import React from "react";
import { Button, Dimensions, View } from "react-native";
import { drawGrid } from "./canvasHelpers";

// import { HelloSticker, HelloStickerDimensions } from "./HelloSticker";
// import { LocationSticker, LocationStickerDimensions } from "./LocationSticker";
import { GestureHandler } from "./GestureHandler";
import { Marker } from "./Marker";
import { Picture, PictureDimensions } from "./Picture";

const { width, height } = Dimensions.get("window");

// const zurich = require("./assets/zurich.jpg");
// const aveny = require("./assets/aveny.ttf");
const blueprint = require("../assets/blueprints/FLOOR-PLAN-BUILDINGS.jpg");
const markerIcon = require("../assets/pin-location.png");

export interface Marker {
  x: number;
  y: number;
  width: number;
  height: number;
  info: {
    title: string;
    status: string;
  };
}

export const Map = () => {
  const pictureMatrix = useValue(Skia.Matrix());
  const helloMatrix = useValue(Skia.Matrix());
  const locationMatrix = useValue(Skia.Matrix());
  const [markers, setMarkers] = React.useState<Array<Marker>>([]);
  const [markerMode, setMarkerMode] = React.useState<boolean>(false);
  const image = useImage(blueprint);
  const canvasHeight = height * 0.8;
  const canvasWidth = width - 24;
  // const touchHandler = useTouchHandler({
  //   onActive: (something) => {
  //     console.log({ something });
  //   },
  // });

  const touchHandler = useTouchHandler({
    onStart: ({ x, y }) => {
      console.log("start", x, y);
    },
    onActive: (something) => {
      console.log({ something });
    },
  });

  // const font = useFont(aveny, 56);
  if (!image) {
    return null;
  }

  const points = drawGrid({
    width: canvasWidth,
    height: canvasHeight,
    gridSize: 25,
  });

  const setMarker = (x: number, y: number) => {
    setMarkers([
      ...markers,
      {
        x,
        y,
        width: 15,
        height: 15,
        info: {
          title: "Title",
          status: "Status",
        },
      },
    ]);
  };

  console.log({ markers, markerMode });

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
        onTouch={touchHandler}
      >
        <Points
          points={points}
          mode="lines"
          color="#CECED9"
          style="stroke"
          strokeWidth={1}
        />
        <Picture matrix={pictureMatrix} image={image} />
        {markers.map((marker) => (
          <Marker
            key={`${marker.x}-${marker.y}`}
            image={markerIcon}
            x={marker.x}
            y={marker.y}
            width={marker.width}
            height={marker.height}
            info={marker.info}
          />
        ))}
      </Canvas>
      <GestureHandler
        matrix={pictureMatrix}
        dimensions={PictureDimensions}
        setMarker={setMarker}
      />
      <Button
        title={"Marker"}
        onPress={() => setMarkerMode(!markerMode)}
        color="#841584"
      />
    </View>
  );
};
