export const DRIVER_LIST_REQUEST = 'DRIVER_LIST_REQUEST';
export const DRIVER_LIST_SUCCESS = 'DRIVER_LIST_SUCCESS';
export const DRIVER_LIST_FAILURE = 'DRIVER_LIST_FAILURE';

export const DriverListFetched = (payload) => ({
  type: DRIVER_LIST_REQUEST,
  payload
});

