import { StyleSheet } from "react-native"
 
import theme from "./theme"
const ICON_SIZE = 164;

const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height:800,
   
  },
  phoneLabel: {
    paddingLeft: 16,
    fontFamily: "SFProDisplay-Regular",
    fontSize: 12,
    lineHeight: 14,
    color: "#8392A1"
  },
  commonContainerStyle: {
    paddingVertical: 0,
    backgroundColor: "transparent"
  },
  codeFieldRoot: { marginBottom: 40, paddingHorizontal: 40 },
  cell: {
    width: 39,
    height: 39,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  },
  focusCell: {
    borderColor: theme.colors.green
  },
  inputCodeFieldStyle: {
    fontSize: 24,
    fontFamily: 'SFProDisplay-Bold',
    color: "#000"
  },
  codeTextStyle: {
    fontSize: 12,
    fontFamily: "SFProDisplay-Regular",
    lineHeight: 14,
    letterSpacing: 0.374,
    color: "#40464D",
    marginTop: 24,
    marginBottom: 48
  },
  codeRetryStyle: {
    fontFamily: 'SFProDisplay-Bold',
    color: "#006D5B",
    textAlign: "center"
  },
  headerTitleStyle: {
   
    fontSize: 36,
    fontFamily: 'SFProDisplay-Bold',
    color: "#585572",
    textAlign: "center",
    width: "70%",
   
    top:80
  },
  headerSubtitleStyle:{
    color: theme.colors.gray,
    marginTop:100,
    
  },
  phoneInputContainerStyle: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16
  },
// *** OnboardingScreenStyles.js ***

  iconContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    backgroundColor: "#FFE9DF",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    color: "#585572",
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    marginVertical: 20,
    fontFamily: "SFProDisplay-Bold"
  },
  Flagselected: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  subtitle: {
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
    marginVertical: 16,
    fontFamily: "SFProDisplay-Regular"
  },
  startBtnStyle: {
    borderRadius: 40,
    minWidth: 140,
    paddingLeft: 8,
    marginHorizontal: 24,
    marginTop: "25%",
    backgroundColor: 'blue',
    padding: 15,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4
  },
  skipText: {
    textTransform: 'capitalize',
    color: '#8392A1',
  },

//***  Language Switcher Style ***
container: {
  alignItems: 'center',
  zIndex: 1,
  position: 'absolute',
  right: 10,
  top: 20,
},
pickerButton: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 2,
},
dropdown: {
  marginLeft: 10,
  marginTop: 5,
},
flatList: {
  maxHeight: 200,
  position: 'relative',
},
countryList: {
  left: -45,
  marginTop: 27,
  position: 'absolute',
  borderWidth: 0.5,
  borderColor: 'gray',
},
countryItem: {
  paddingVertical: 4,
  paddingHorizontal: 10,
  marginTop: 2,
  left: -9,
  borderWidth: 0.5,
  borderColor: 'gray',
},
selectedCountryItem: {
  backgroundColor: "#FFA500"
},
countryInfo: {
  flexDirection: 'row',
  alignItems: 'center',
},
countryText: {
  marginLeft: 7,
  fontSize: 12,
  fontWeight: '500',
  color: '#000',
},


//***  HomeScreen Style ***
sheetTitle: {
  fontSize: 16,
  fontFamily: "SFProDisplay-Semibold",
  color: "#000",
  marginTop: 16,
  marginBottom: 32,
  letterSpacing: 0.37
},
alertTextStyle: {
  marginTop: 24,
  color: "#000",
  fontSize: 20,
  fontFamily: "SFProDisplay-Semibold"
},
alertMessageStyle: {
  marginBottom: 48,
  marginTop: 16,
  color: "#4A4A4A",
  width: "90%"
},
btnStyle: {
  marginTop: 24,
  backgroundColor: theme.colors.green,
  borderRadius: 8,
  height: 48
},

//***  Billing Home Style ***
  textStyle: { color: "#F2F2F2", fontFamily: "SFProDisplay-Bold", fontSize: 18 },
  commonViewStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonStyle: {
    height: 41,
    borderRadius: 43,
    backgroundColor: "red"
  },
  titleStyle: {
    fontSize: 16,
    color: "#4A4A4A",
    fontFamily: "SFProDisplay-Semibold"
  },
  btnContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    backgroundColor: "#DCDCE1",
    borderRadius: 43,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24
  },
  tagStyle: {
    borderRadius: 8,
    width: 104,
    marginRight: 12
  },

})

export default styles

