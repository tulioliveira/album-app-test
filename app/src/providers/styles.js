import _ from 'lodash';

/**
 * Theme colors
 */
const colors = {
  primary: '#2E1F27', // Raisin Black
  secondary: '#A06CD5', // Dark Pastel Purple
  white: '#f7fbff', // Mint Cream
  gray: '#e4e5e6', // Platinum
  darkGray: '#c3cdd7', // Lavender Gray
  orange: '#FB6107', // Vivid Orange
  red: '#9A031E', // Hildeberg Red
  green: '#7CB518', // Apple Green,
  purple: '#2E1760', // Russian Violet
  blue: '#5BC0EB' // Blue Jeans
};

/**
 * Valid align-items property values
 */
const alignItemsProperties = [
  'stretch',
  'center',
  'flex-start',
  'flex-end',
  'baseline',
  'initial',
  'inherit'
];

/**
 * Valid justify-content property values
 */
const justifyContentProperties = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'initial',
  'inherit'
];

/**
 * Valid text-align property values
 */
const textAlignProperties = [
  'left',
  'right',
  'center',
  'justify',
  'initial',
  'inherit'
];

/**
 * Check if align-item property value is valid
 * @param {string} property
 * @return {boolean}
 */
const isAlignProperty = property => (_.includes(alignItemsProperties, property));

/**
 * Check if justify-item property value is valid
 * @param {string} property
 * @return {boolean}
 */
const isJustifyProperty = property => (_.includes(justifyContentProperties, property));

/**
 * Check if text-align property value is valid
 * @param {string} property
 * @return {boolean}
 */
const isTextAlignProperty = property => (_.includes(textAlignProperties, property));

export {
  colors,
  isAlignProperty,
  isJustifyProperty,
  isTextAlignProperty
};
