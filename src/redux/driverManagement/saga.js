import { all, takeEvery, fork, call, race, put } from "redux-saga/effects";
import { delay, notifyError } from "../../utils/helper";
import config from "../../settings/config";
import {
  DRIVER_LIST_REQUEST,
  DRIVER_LIST_SUCCESS,
  DRIVER_LIST_FAILURE,
} from "./actions";

export function* driverListRequest() {
  yield takeEvery(DRIVER_LIST_REQUEST, function* ({ payload }) {
    try {
      const { endpoint, method } = payload;
      const url = config.api.url + endpoint;

      const { response, timeout } = yield race({
        response: call(fetch, url, {
          method: method,
        }),
        timeout: call(delay, 20000),
      });

      if (response) {
        const json = yield call(response.json.bind(response));

        yield put({ type: DRIVER_LIST_SUCCESS, data: json.results });
      } else {
        yield put({ type: DRIVER_LIST_FAILURE, timeout });
      }
    } catch (error) {
      if (error.statusCode >= 500 && error.statusCode < 600) {
        const message = `[${error.statusCode}] Internal Server Error: failed to driver list`;
        notifyError(message, "topRight", "505-driverList");
        return;
      }
      notifyError(
        error.message,
        "topRight",
        `${error.statusCode}-${new Date()}`
      );
      yield put({ type: DRIVER_LIST_FAILURE, error });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(driverListRequest)]);
}
