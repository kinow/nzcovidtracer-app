import AsyncStorage from "@react-native-community/async-storage";
import {
  createAction,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import { AnyScreen } from "@views/screens";
import { AppStateStatus } from "react-native";
import { persistReducer } from "redux-persist";

export type PermissionStatus = "unavailable" | "denied" | "blocked" | "granted";

export interface SubscriptionState {
  fulfilled: boolean;
  error?: SerializedError;
}

export interface DeviceState {
  notificationPermission: PermissionStatus;
  cameraPermission: PermissionStatus;
  hasRequestedCameraPermission: boolean;
  appState: AppStateStatus;
  subscriptions: { [name: string]: SubscriptionState };
  currentRouteName?: AnyScreen;
  isScreenReaderEnabled: boolean;
}

const initialState: DeviceState = {
  notificationPermission: "denied",
  cameraPermission: "denied",
  hasRequestedCameraPermission: false,
  appState: "unknown",
  subscriptions: {},
  isScreenReaderEnabled: false,
};

const persistConfig = {
  storage: AsyncStorage,
  key: "device",
  whitelist: ["subscriptions"],
};

/**
 * This action fires after app initialization & app did become active,
 * It is used to improve launch performance
 */
export const appDidBecomeAvailable = createAction(
  "device/appDidBecomeAvailable",
);

export const requestNotificationPermission = createAction(
  "device/requestNotificationPermission",
);

export const requestCameraPermission = createAction(
  "device/requestCameraPermission",
);

export interface SubscriptionRejected {
  name: string;
  error: SerializedError;
}

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setNotificationPermission(
      state,
      { payload }: PayloadAction<PermissionStatus>,
    ) {
      state.notificationPermission = payload;
    },
    setCameraPermission(state, { payload }: PayloadAction<PermissionStatus>) {
      state.cameraPermission = payload;
    },
    setAppState(state, { payload }: PayloadAction<AppStateStatus>) {
      state.appState = payload;
    },
    subscriptionFulfilled(state, { payload }: PayloadAction<string>) {
      state.subscriptions[payload] = {
        fulfilled: true,
      };
    },
    subscriptionRejected(
      state,
      { payload }: PayloadAction<SubscriptionRejected>,
    ) {
      state.subscriptions[payload.name] = {
        fulfilled: false,
        error: payload,
      };
    },
    setCurrentRouteName(state, { payload }: PayloadAction<AnyScreen>) {
      state.currentRouteName = payload;
    },
    setIsScreenReaderEnabled(state, { payload }: PayloadAction<boolean>) {
      state.isScreenReaderEnabled = payload;
    },
    setHasRequestedCameraPermission(state) {
      state.hasRequestedCameraPermission = true;
    },
  },
  extraReducers: {},
});

const { reducer, actions } = deviceSlice;

export const {
  setNotificationPermission,
  setCameraPermission,
  setAppState,
  subscriptionFulfilled,
  subscriptionRejected,
  setCurrentRouteName,
  setIsScreenReaderEnabled,
  setHasRequestedCameraPermission,
} = actions;

export default persistReducer(persistConfig, reducer);
