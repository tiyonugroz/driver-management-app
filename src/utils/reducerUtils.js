// Reducer utilities

/**
 * Appends loading state properties to the initial state.
 *
 * @param  {Object} state Current state.
 * @return {Object}       Expanded state.
 */
const appendLoadingStates = state => (
  Object.assign(state, {
    isLoading: false,
    hasError: false,
    error: null,
  })
);

/**
 * Resets loading state of the reducer state.
 *
 * @param  {Object} state Current state.
 * @return {Object}       New state.
 */
const resetLoading = state => ({
  ...state,
  isLoading: false,
  hasError: false,
  error: null,
});

/**
 * Starts loading state of the reducer state.
 *
 * @param  {Object} state Current state.
 * @return {Object}       New state.
 */
const startLoading = state => ({
  ...state,
  isLoading: true,
  hasError: false,
  error: null,
});

/**
 * Finishes loading state of the reducer state.
 *
 * @param  {Object} state Current state.
 * @return {Object}       New state.
 */
const finishLoading = state => ({
  ...state,
  isLoading: false,
  hasError: false,
  error: null,
});

/**
 * Throws an error to the reducer state.
 *
 * @param  {Object} state Current state.
 * @return {Object}       New state.
 */
const errorLoading = (state, error) => ({
  ...state,
  isLoading: false,
  hasError: true,
  error,
});

export {
  appendLoadingStates,
  resetLoading,
  startLoading,
  finishLoading,
  errorLoading,
}
