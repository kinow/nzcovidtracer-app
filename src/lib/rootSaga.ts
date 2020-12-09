import device from "@domain/device/sagas";
import user from "@domain/user/sagas";
import debugging from "@features/debugging/saga";
import diary from "@features/diary/sagas";
import enf from "@features/enf/sagas";
import enfExposure from "@features/enfExposure/sagas";
import exposure from "@features/exposure/sagas";
import maintenance from "@features/maintenance/saga";
import migration from "@features/migration/sagas";
import onboarding from "@features/onboarding/saga";
import otp from "@features/otp/sagas";
import verification from "@features/verification/sagas";
import { SagaIterator } from "redux-saga";
import { all, call } from "redux-saga/effects";

export default function* rootSaga(): SagaIterator {
  yield all([
    call(onboarding),
    call(maintenance),
    call(debugging),
    call(migration),
    call(device),
    call(user),
    call(enf),
    call(exposure),
    call(otp),
    call(diary),
    call(enfExposure),
    call(verification),
  ]);
}
