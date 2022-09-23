import { Image, useCanvas } from "@shopify/react-native-skia";

export const DisplayImage = (image) => {
  const { size } = useCanvas();

  // const rct = useComputedValue(() => {
  //   return rect(0, 0, size.current.width, size.current.height / 2);
  // }, [size]);
  console.log(JSON.stringify(image));
  console.log("here");
  return (
    <>
      {image && (
        <Image
          image={image}
          fit="fitScale"
          x={0}
          y={0}
          width={200}
          height={200}
        />
      )}
    </>
  );
};
