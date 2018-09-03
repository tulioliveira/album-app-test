import _ from 'lodash';

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
  const validImages = _.range(1, sheet.length + 1);

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
  const images = _.range(1, sheet.length + 1);
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

/**
 * Apply offset to grid
 * @param {array} grid
 * @param {number} offsetX
 * @param {number} offsetY
 * @return {array} - Grid with center offset
 */
const offsetGrid = (grid, offsetX, offsetY) => _.map(grid, item => ({
  ...item,
  x: item.x + offsetX,
  y: item.y + offsetY
}));

/**
 * Get vertical padding proportional to height and number of rows
 * @param {number} height
 * @param {number} rows
 * @return {number}
 */
const getVerticalPadding = (height, rows) => (height * (1 - (rows / (rows + 0.5))));

/**
 * Get grid division for different ratios and the display grid object
 * @param {array} grid
 * @param {number} height - Display Height
 * @return {object} - Contains number of columns, rows and centeredGrid
 */
const getDisplayGrid = (grid, height) => {
  const displayGrid = {
    cols: 1,
    rows: 1,
    paddingVertical: 0,
    data: grid
  };

  if (grid.length > 0) {
    const lastVerticalImage = _.maxBy(grid, image => (image.y + image.h));
    const lastHorizontalImage = _.maxBy(grid, image => (image.x + image.w));
    const largestImage = _.maxBy(grid, 'w');
    const tallestImage = _.maxBy(grid, 'h');
    displayGrid.cols = lastHorizontalImage.x + lastHorizontalImage.w;
    displayGrid.rows = lastVerticalImage.y + lastVerticalImage.h;
    // Not Full Size
    if (largestImage.w > 1 || tallestImage.h > 1) {
      // Vertical
      if ((1.5 * displayGrid.rows) > displayGrid.cols) {
        const { cols } = displayGrid;
        const dividedCols = cols > 6 ? (cols + (cols % 2)) : (6 + (cols % 2));
        const offsetX = (dividedCols - cols) / 2;
        displayGrid.cols = dividedCols;
        displayGrid.data = offsetGrid(grid, offsetX, 0);
      }
      // Horizontal
      else {
        displayGrid.paddingVertical = getVerticalPadding(height, displayGrid.rows);
      }
    }
  }
  return displayGrid;
};

export { getLayoutGrid, getDisplayGrid, errorMessages };
