import React from "react";
import { Map } from "./src/Map";

const App = () => {
  return <Map />;
};

// eslint-disable-next-line import/no-default-export
export default App;

// import {
//   Canvas,
//   Circle,
//   useTouchHandler,
//   useValue,
// } from "@shopify/react-native-skia";

// const App = () => {
//   const cx = useValue(100);
//   const cy = useValue(100);

//   const touchHandler = useTouchHandler({
//     onStart: ({ x, y }) => {
//       console.log("start", x, y);
//       cx.current = x;
//       cy.current = y;
//     },
//     onActive: (something) => {
//       console.log({ something });
//     },
//   });

//   return (
//     <Canvas style={{ flex: 1 }} onTouch={touchHandler}>
//       <Circle cx={cx} cy={cy} r={10} color="red" />
//     </Canvas>
//   );
// };

export default App;
