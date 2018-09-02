import { PUSH_MESSAGE, REMOVE_MESSAGE, RESET_MESSAGES } from './types';

/**
 * "Push Message" action cretor
 * @param {string} type - The message type
 * @param {string} message - The message content
 * @return {Object} - "Push Message" action
 */
export const pushMessage = (type, message) => ({
  type: PUSH_MESSAGE,
  payload: {
    type,
    message
  }
});

/**
 * "Remove Message" action cretor
 * @param {number} payload - The message index
 * @return {Object} - "Remove Message" action
 */
export const removeMessage = payload => ({
  type: REMOVE_MESSAGE,
  payload
});

/**
 * "Reset Messages" action cretor
 * @return {Object} - "Reset Messages" action
 */
export const resetMessages = () => ({ type: RESET_MESSAGES });
