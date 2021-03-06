import { DebuggingState } from "@features/debugging/reducer";
import { DiaryState } from "@features/diary/types";
import { ENFState } from "@features/enf/reducer";
import { ENFExposureState } from "@features/enfExposure/reducer";
import { ExposureState } from "@features/exposure/reducer";
import { MigrationState } from "@features/migration/reducer";
import { OnboardingState } from "@features/onboarding/reducer";
import { OTPState } from "@features/otp/reducer";
import { VerificationState } from "@features/verification/reducer";

import { DeviceState } from "./device/reducer";
import { UserState } from "./user/types";

export interface ReduxState {
  user: UserState;
  diary: DiaryState;
  device: DeviceState;
  enf: ENFState;
  enfExposure: ENFExposureState;
  exposure: ExposureState;
  migration: MigrationState;
  onboarding: OnboardingState;
  otp: OTPState;
  verification: VerificationState;
  debugging: DebuggingState;
}
