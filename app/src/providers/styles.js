import _ from 'lodash';

/**
 * Theme colors
 */
const colors = {
  primary: 'rgb(46, 31, 39)',
  secondary: 'rgb(160, 108, 213)',
  black: 'rgb(46, 31, 39)',
  white: 'rgb(255, 255, 255)',
  gray: 'rgb(142, 142, 145)',
  blue: 'rgb(0,122,255)',
  orange: 'rgb(255,149,0)',
  red: 'rgb(255,59,48)',
  yellow: 'rgb(255,204,0)',
  green: 'rgb(76,217,100)',
  purple: 'rgb(88,86,214)',
  teal: 'rgb(90,200,250)',
  pink: 'rgb(255,45,85)',
  background: 'rgb(250, 250, 250)',
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
