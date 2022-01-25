import { all } from "redux-saga/effects";
import driverManagementSagas from "./driverManagement/saga";

export default function* rootSaga() {
  yield all([driverManagementSagas()]);
}
