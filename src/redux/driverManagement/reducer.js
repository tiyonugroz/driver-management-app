import {
  DRIVER_LIST_REQUEST,
  DRIVER_LIST_SUCCESS,
  DRIVER_LIST_FAILURE,
} from "./actions";
import {
  startLoading,
  finishLoading,
  errorLoading,
} from "../../utils/reducerUtils";

const initState = {
  list: null,
};

export default function driverManagementReducer(state = initState, action) {
  switch (action.type) {
    case DRIVER_LIST_REQUEST:
      return {
        ...state,
        list: {
          ...startLoading(state.list),
        },
      };

    case DRIVER_LIST_SUCCESS:
      return {
        ...state,
        list: {
          ...finishLoading({
            data: action.data,
          }),
        },
      };

    case DRIVER_LIST_FAILURE:
      return {
        ...state,
        list: {
          ...errorLoading(state.list, action.error.message),
        },
      };

    default:
      return state;
  }
}
