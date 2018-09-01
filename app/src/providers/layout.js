import _ from 'lodash';
import math from 'mathjs';

/**
 * Error messages in the display
 */
const errorMessages = {
  dimension: 'Error: The layout must be bidimensional and rectangular',
  sheet: 'Error: You can only use images in the sheet and all images in the sheet must be in the layout',
  grid: 'Error: Images in the layout must be rectangular and completely filled'
};

/**
 * Check if layout is bidimensional and form a rectangle
 * @param {array} layout
 * @return {boolean}
 */
const isDimensionValid = layout => (
  Array.isArray(layout) // Is Array
  && _.every(layout, item => Array.isArray(item)) // Not unidimensional
  && _.every(_.flatten(layout), item => typeof item === 'number') // but Matrix
  && _.every(layout, row => row.length === _.head(layout).length) // and Rectangle
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
 * Map the layout to a grid array
 * @param {array} layout
 * @param {array} sheet
 * @return {array}
 */
const mapLayoutToGrid = (layout, sheet) => {
  const images = math.add(_.times(sheet.length), 1);
  const grid = _.times(images.length, _.constant({
    x: null,
    y: null,
    w: 0,
    h: 0
  }));

  _.each(images, (image) => {
    _.each(layout, (row, index) => {
      const firstIndex = _.indexOf(row, image);
      const lastIndex = _.lastIndexOf(row, image);
      if ((firstIndex >= 0) && (grid[image - 1].x === null)) {
        grid[image - 1] = {
          x: firstIndex,
          y: index,
          w: lastIndex - firstIndex + 1,
          h: 1
        };
      }
      else if (firstIndex >= 0) {
        grid[image - 1].h += 1;
      }
    });
  });

  return _.map(grid, (item, index) => ({ ...item, i: `image${index}` }));
};

/**
 * Check if the layout grid is valid
 * @param {array} layout
 * @param {array} grid
 * @return {boolean}
 */
const isGridValid = (layout, grid) => {
  const test = _.times(grid.length, _.constant(false));

  _.each(grid, (item, index) => {
    if (item.w > 1 || item.h > 1) {
      let image = _.slice(layout, item.y, item.y + item.h);
      image = _.map(image, row => _.slice(row, item.x, item.x + item.w));
      test[index] = _.difference(_.flatten(image), [index + 1]).length === 0;
    }
    else {
      test[index] = true;
    }
  });

  return _.every(test);
};

/**
 * Verify if the layout is valid for the sheet provided, returning a grid object
 * or a corresponding error message if it's invalid
 * @param {array} layout
 * @param {array} sheet
 * @return {Object|string}
 */
const getLayoutGrid = (layout, sheet) => {
  if (!isDimensionValid(layout)) {
    return errorMessages.dimension;
  }
  if (!doesLayoutMatchSheet(layout, sheet)) {
    return errorMessages.sheet;
  }
  const grid = mapLayoutToGrid(layout, sheet);
  if (!isGridValid(layout, grid)) {
    return errorMessages.grid;
  }
  return grid;
};

export { getLayoutGrid, errorMessages };
