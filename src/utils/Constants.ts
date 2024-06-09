import { Platform ,Dimensions  } from "react-native"


const { width, height } = Dimensions.get('window');

// Calcul des dimensions en pourcentage
const BUTTON_WIDTH_PERCENTAGE = 0.3; // 30% de la largeur de l'écran
const BUTTON_HEIGHT_PERCENTAGE = 0.1; // 10% de la hauteur de l'écran
const BUTTON_PADDING_PERCENTAGE = 0.02; // 2% de la largeur de l'écran pour le padding
const BUTTON_MARGIN_PERCENTAGE = 0.02; // 2% de la largeur de l'écran pour la marge

// Dimensions calculées
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const BUTTON_WIDTH = SCREEN_WIDTH * BUTTON_WIDTH_PERCENTAGE;
export const BUTTON_HEIGHT = SCREEN_HEIGHT * BUTTON_HEIGHT_PERCENTAGE;
export const BUTTON_PADDING = SCREEN_WIDTH * BUTTON_PADDING_PERCENTAGE;
export const BUTTON_MARGIN = SCREEN_WIDTH * BUTTON_MARGIN_PERCENTAGE;

export const ONBOARDING = [
  {
    title: "onboard1",
    subtitle: "onboard1_desc",
    image_src: require('../assets/images/vendorCar.png'),
    bgcolor: "#FFE9DF"
  },
  {
    title: "onboard2",
    subtitle: "onboard2_desc",
    image_src: require('../assets/images/SetupPcWork.jpg'),
    bgcolor: "#E8EFFA"
  },
  {
    title: "onboard3",
    subtitle: "onboard3_desc",
    image_src: require('../assets/images/BMWM3rougeBetongris.jpg'),
    bgcolor: "#E4F8F5"
  }
];

export const DELETE_MESSAGE = [
  "I find this application very difficult to use.",
  "I don't find the app useful anymore",
  "I just want to leave",
  "Doctors take to long to accept an appointment.",
  "Others"
]

export const CELL_COUNT = 6

export const GENDER = {
  MALE: "MALE",
  FEMALE: "FEMALE"
}
export const INVOICE_STATUS = {
  PAID: "PAID",
  UNPAID: "PENDING"
}
export const APPOINTMENT_STATUS = {
  UPCOMING: "UPCOMING",
  PENDING: "PENDING",
  HISTORY: "HISTORY",
  DONE: "DONE",
  CANCELLED: "CANCELLED"
}

export const EYEGLASSE_PROPERTIES = [
  "Eye",
  "Sphere",
  "Cylinder",
  "Axis",
  "Add",
  "Prisme",
  "Base"
]

export const OWNER_NAME = "CHIPS ANALITYCS Inc. NY"

// export const EXPIRE_TOKEN = 30 * 23 * 3600
export const EXPIRE_TOKEN = 20

export const PLATEFORM_APP_BAR_HEIGHT = Platform.OS === "ios" ? 44 : 56


