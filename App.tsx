// import {
//   Canvas,
//   Image,
//   SkiaView,
//   TouchInfo,
//   useCanvasRef,
//   useDrawCallback,
//   useImage,
//   useTouchHandler,
// } from "@shopify/react-native-skia";
// import React, { useCallback, useState } from "react";
// import {
//   LayoutChangeEvent,
//   SafeAreaView,
//   useWindowDimensions,
//   View,
// } from "react-native";

// export default () => {
//   const ref = useCanvasRef();
//   const { width, height } = useWindowDimensions();
//   const [canvasHeight, setCanvasHeight] = useState(600);
//   console.log({ height });
//   const image = useImage(
//     require("./assets/blueprints/FLOOR-PLAN-BUILDINGS.jpg")
//   );

//   const onDrawingStart = useCallback((touchInfo: TouchInfo) => {
//     // if (currentPath.current) return
//     const { x, y } = touchInfo;
//     console.log(x, y);
//   }, []);

//   const touchHandler = useTouchHandler({
//     // onActive: onDrawingActive,
//     onStart: onDrawingStart,
//     // onEnd: onDrawingFinished,
//   });

//   const onDraw = useDrawCallback((_canvas, info) => {
//     touchHandler(info.touches);

//     // if (currentPath.current) {
//     //   canvas.current?.drawPath(
//     //     currentPath.current.path,
//     //     currentPath.current.paint
//     //   )
//     // }

//     // if (!canvas.current) {
//     //   useDrawingStore.getState().setCanvasInfo({
//     //     width: info.width,
//     //     height: info.height,
//     //   })
//     //   canvas.current = _canvas
//     // }
//   }, []);

//   const onLayout = (event: LayoutChangeEvent) => {
//     // setCanvasHeight(event.nativeEvent.layout.height)
//   };

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "#f0f0f0",
//           flex: 1,
//           alignItems: "center",
//         }}
//       >
//         <View
//           onLayout={onLayout}
//           style={{
//             width: width - 24,
//             flexGrow: 1,
//             backgroundColor: "#000",
//             borderRadius: 10,
//             overflow: "hidden",
//             elevation: 1,
//           }}
//         >
//           <SkiaView
//             onDraw={onDraw}
//             style={{ height: canvasHeight, width: width - 24, zIndex: 10 }}
//           />
//           <Canvas
//             style={{
//               height: canvasHeight,
//               width: width - 24,
//               position: "absolute",
//               backgroundColor: "#000000",
//             }}
//             ref={ref}
//           >
//             {/* <DisplayImage image={image} /> */}
//             {image && (
//               <Image
//                 image={image}
//                 fit="fill"
//                 x={0}
//                 y={0}
//                 width={600}
//                 height={600}
//               />
//             )}
//           </Canvas>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

import React from "react";
import { Map } from "./src/Map";

const App = () => {
  return <Map />;
};

// eslint-disable-next-line import/no-default-export
export default App;
