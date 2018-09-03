import { PUSH_IMAGE, REMOVE_IMAGE, RESET_SHEET } from './types';

/**
 * "Push Image" action cretor
 * @param {number} payload - The image to be added
 * @return {Object} - "Push Image" action
 */
export const pushImage = payload => ({
  type: PUSH_IMAGE,
  payload
});

/**
 * "Remove Image" action cretor
 * @param {number} payload - The image index to be removed
 * @return {Object} - "Remove Image" action
 */
export const removeImage = payload => ({
  type: REMOVE_IMAGE,
  payload
});

/**
 * "Reset Sheet" action cretor
 * @return {Object} - "Reset Sheet" action
 */
export const resetSheet = () => ({ type: RESET_SHEET });
