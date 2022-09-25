things that I need to check work well with React Skia

- Can put an image on the canvas (done)
- Can draw over the image (done)
- Can I zoom in and out of the image (done)
- Can I pan the image (done)
- Can I draw the grid in the background (done)

- Can place an rectangle on the canvas when tapping on the image, with gesture handler tap does not get pin point location though (done)
- Can
- The way to scale the marker (e.scale, gives you a percentage, potentially can use that to scale the marker images to the correct size)

- Can I place a marker on an image ()
- Can I interact with that marker, have a popover on the marker ()
- Can I have a popover on the marker that has a button that can be clicked ()
- Can I flip the image horizontally when the phone flips, is it possible to hold the markers in the right spot (done)

Problems:

- Can only get a high level touch and location. We would need to match where the x,y coords are of the touch to where the marker is currently sitting on the image, to see whether the person has touched the marker or not;
