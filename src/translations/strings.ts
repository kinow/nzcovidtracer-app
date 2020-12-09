import { strings as dashboard } from "@features/dashboard/strings";
import { strings as oldDiary } from "@features/diary/strings";
import { strings as enf } from "@features/enf/strings";
import { strings as exposure } from "@features/exposure/strings";
import { strings as nhi } from "@features/nhi/strings";
import { strings as onboarding } from "@features/onboarding/strings";
import { strings as otp } from "@features/otp/strings";
import { strings as profile } from "@features/profile/strings";
import { strings as scan } from "@features/scan/strings";
import _ from "lodash";

const strings = {
  en: {
    common: {
      required: "Required",
      optional: "Optional",
      recommended: "Recommended",
      tab1of3: "1 of 3",
      tab2of3: "2 of 3",
      tab3of3: "3 of 3",
      ok: "OK",
    },
    accessibility: {
      textFieldHint1: "Please swipe right to edit text field",
      textFieldHint2: "Please swipe right twice to edit text field",
      textFieldLabel: "{0} {1}. error, {2}",
      datePicker: {
        selectDateAndTime: "double tap to select the entry date and time",
      },
      button: {
        diaryHistory: "diary history",
        startTutorial: "start tutorial",
        back: "Go back",
        close: "close",
      },
    },
    screenTitles: {
      dashboard: "Dashboard",
      diary: "Diary",
      diaryEntry: "Diary entry",
      editDiary: "Edit entry",
      recorded: "Visit recorded",
      addEntryManually: "Add manual entry",
      shareDiary: "Share my diary",
      addNHI: "Add your NHI number",
      nhiAdded: "NHI added",
      nhiView: "My NHI details",
      requestCallback: "Send your details",
      requestCallbackConfirm: "Send your details",
      myData: "My data",
    },
    components: {
      diaryDisclaimer: {
        disclaimer:
          "Your digital diary is kept securely on your phone. Whenever you open the app, entries older than 60 days will be automatically deleted.",
      },
    },
    screens: {
      diaryEntry: {
        placeOrActivity: "Place or activity",
        dateTime: "Date & time",
        address: "Address",
        gln: "Global location number",
        details: "Details",
        edit: "Edit",
        delete: "Delete entry",
        deleteModal: {
          title: "",
          message: "Are you sure you want to delete this entry?",
          ok: "OK",
          cancel: "Cancel",
        },
      },
      editDiaryEntry: {
        placeOrActivity: "Place or activity",
        dateTime: "Date & time",
        address: "Address",
        gln: "Global location number",
        details: "Details",
        save: "Save changes",
        disclaimer:
          "Describing who you were with and what you were doing can help the Contact Tracing team if you share your diary.",
        areYouSure: {
          message: "Are you sure you want to discard these changes?",
          cancel: "Cancel",
          ok: "Yes",
        },
      },
      addManualDiaryEntry: {
        placeOrActivity: "Place or activity",
        address: "Address",
        gln: "Global location number",
        details: "Details",
        save: "Add entry",
        disclaimer:
          "Describing who you were with and what you were doing can help the Contact Tracing team if you share your diary.",
        datePicker: "Arrival date & time",
      },
      shareDiary: {
        title: "Share my digital diary",
        description:
          "This will share your digital diary from the past 60 days with Contact Tracers.",
        dataRequestCode: "Data request code",
        dataRequestCodeInfo: "Enter the code given to you by a Contact Tracer",
        share: "Share",
      },
    },
    validations: {
      errorTitle: "Error",
      email: {
        notValid:
          "Enter an email address in the correct format, like name@example.com",
        required: "Enter an email address",
        tooManyAttempts: "Too many attempts. Try again later.",
        generic: "An unknown error occurred. Please try again.",
      },
      code: {
        notValid: "Enter a 6-digit code",
        required: "Enter a 6-digit code",
        invalidAuthSession:
          "The verification has timed out. Please go back and enter your email again.",
        invalidAuthCode: "Incorrect code. Check your code and try again",
        generic: "An unknown error occurred. Please try again.",
        tooManyAttempts: "Too many attempts. Try again later.",
      },
      placeOrActivity: {
        tooLong: "Place or activity can be up to 140 characters long",
        required: "Enter place or activity",
      },
      startDate: {
        noFutureDate: "Date and time must be in the past",
        noOlderThan60Days:
          "Arrival date must be no more than 60 days in the past",
        required: "This field is required",
      },
      dateOfBirth: {
        noFutureDate: "Date of birth can't be in the future",
        required: "This field is required",
      },
      details: {
        tooLong: "Details can be up to 255 characters long",
      },
      firstName: {
        required: "Enter first name",
        tooLong: "First name can be up to 50 characters long",
        noNumbersOrSymbols:
          "First name must only include letters a to z, hyphens, spaces and apostrophes",
      },
      middleName: {
        tooLong: "Middle name can be up to 100 characters long",
        noNumbersOrSymbols: "You can’t use  numbers or symbols",
      },
      lastName: {
        required: "Enter last name",
        tooLong: "Last name can be up to 50 characters long",
        noNumbersOrSymbols:
          "Last name must only include letters a to z, hyphens, spaces and apostrophes",
      },
      dataRequestCode: {
        required: "Enter the data request code",
        invalidFormat: "The code should contain 6 characters",
      },
      enfRequestCode: {
        required: "Enter data request code",
        invalidFormat: "The code should contain 6 digits",
      },
      phone: {
        invalid:
          "Enter a telephone number in the correct format, like +6421123456",
        required: "Enter phone number",
      },
      nhi: {
        required: "Enter NHI number",
        invalid: "Incorrect NHI. Check your entry and try again",
      },
    },
    errors: {
      error: "Error",
      generic: "Something went wrong. Please try again.",
      // TODO verify string
      network:
        "A network error occurred. Check your internet connection and try again.",
      dataRequestCode: {
        incorrectCode: "Incorrect code. Check your code and try again",
        network:
          "Something went wrong. Check your code and network connection and try again.",
      },
    },
  },
};

export default _.merge(
  strings,
  onboarding,
  profile,
  dashboard,
  exposure,
  oldDiary,
  otp,
  nhi,
  enf,
  scan,
);
