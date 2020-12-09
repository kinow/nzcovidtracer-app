import { createLogger } from "@logger/createLogger";
import { Platform } from "react-native";
import { check, PERMISSIONS } from "react-native-permissions";
import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  appDidBecomeAvailable,
  PermissionStatus,
  setCameraPermission,
} from "../reducer";

const { logError } = createLogger("device/checkCameraPermission");

export function* checkCameraPermission(): SagaIterator {
  yield takeLatest(appDidBecomeAvailable.type, onCheckCameraPermission);
}

function* onCheckCameraPermission(): SagaIterator {
  const CAMERA_PERMISSION =
    Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
  try {
    const permissionStatus: PermissionStatus = yield call(
      check,
      CAMERA_PERMISSION,
    );

    yield put(setCameraPermission(permissionStatus));
  } catch (error) {
    logError(error);
  }
}
