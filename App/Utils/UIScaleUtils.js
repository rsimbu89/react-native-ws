import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
export const guidelineBaseWidth = 360;//350;
export const guidelineBaseHeight = 640;//680;

export const scale = size => (shortDimension / guidelineBaseWidth) * size;

export const verticalScale = size => (longDimension / guidelineBaseHeight) * size;
  
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export const moderateVerticalScale = (size, factor = 0.5) => size + (verticalScale(size) - size) * factor;

/*
// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
let screenHeight = Dimensions.get('window').height;
export const guidelineBaseWidth = 640;
export const guidelineBaseHeight = 360;
/**
 * Converts provided width to independent pixel (dp).
 * @param  {string} width The value of screen's width that UI element should cover as per mock
 * @return {number} The calculated dp depending on current device's screen width.
 */
/*
export const scale = width => {
  // Parse string input and convert it to number.
  const givenWidth = typeof width === "number" ?  width : parseFloat(width);

  const widthPercent = parseFloat((givenWidth / guidelineBaseWidth) * 100);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(screenWidth * widthPercent / 100);
};

/**
 * Converts provided height to independent pixel (dp).
 * @param  {string} height The value of screen's height that UI element should cover as per mock
 * @return {number} The calculated dp depending on current device's screen height.
 */
/*
export const verticalScale = height => {
  // Parse string input and convert it to number.
  const givenHeight = typeof height === "number" ?  height : parseFloat(height);
  
  const heightPercent = parseFloat((givenHeight / guidelineBaseHeight) * 100);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(screenHeight * heightPercent / 100);
};
*/
/*
export default {
    scale,
    verticalScale,
    moderateScale,
    moderateVerticalScale,
    guidelineBaseWidth,
    guidelineBaseHeight
}*/