import _ from 'lodash';
import math from 'mathjs';

/**
 * Check if layout is two dimensional and form a rectangle
 * @param {array} layout
 * @return {boolean}
 */
const isDimensionCorrect = layout => (
  _.every(_.flatten(layout), Number) // Two dimensional
  && _.every(layout, row => row.length === _.head(layout).length) // Rectangle
);

/**
 * Check if layout uses all sheet images correctly
 * @param {array} layout
 * @param {array} sheet
 * @return {boolean}
 */
const doesLayoutMatchSheet = (layout, sheet) => {
  const validImages = math.add(_.times(sheet.length), 1);

  return (
    _.difference(validImages, _.flatten(layout)).length === 0
  );
};

/**
 * Check if all images are rectangles
 * @param {array} layout
 * @param {array} sheet
 * @return {boolean}
 */
// TODO

/**
 * Verify if the layout is valid for the sheet provided
 * @param {array} layout
 * @param {array} sheet
 * @return {boolean}
 */
const isLayoutValid = (layout, sheet) => (
  doesLayoutMatchSheet(layout, sheet) && isDimensionCorrect(layout)
);

const mapLayoutToGrid = layout => layout;

export { isLayoutValid, mapLayoutToGrid };
