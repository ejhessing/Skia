"use strict";
exports.__esModule = true;
var react_native_skia_1 = require("@shopify/react-native-skia");
var react_native_1 = require("react-native");
exports["default"] = (function () {
    var ref = (0, react_native_skia_1.useCanvasRef)();
    var image = (0, react_native_skia_1.useImage)(require("./assets/blueprints/FLOOR-PLAN-BUILDINGS.jpg"));
    console.log({ image: image });
    return (<react_native_1.View style={{ height: "80%", margin: 40, backgroundColor: "blue" }}>
      <react_native_skia_1.Canvas style={{ flex: 1 }} ref={ref}>
        {/* <DisplayImage image={image} /> */}
        {image && (<react_native_skia_1.Image image={image} fit="fill" x={0} y={0} width={600} height={600}/>)}
      </react_native_skia_1.Canvas>
    </react_native_1.View>);
});
