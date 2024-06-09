import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
// ***  Personale information Styles ***
smallContainer: {
  position: "absolute",
  top:60,
  left:28,
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: 1000,
  backgroundColor: "#006D5B"
  },

  cardPersonalInfo: {
    height: 170,
    
    marginHorizontal: 16,
  },

  container: {
    flex: 1,
    position: "absolute",
    top:7
    // alignItems: "center",
    // alignContent: "center",
    // justifyContent: "space-between",
    
  },
  text1: {
    fontSize: 14,
    color: "#808080"
  },
  text2: {
    fontSize: 13,

    color: "#292D32",
    fontWeight: "500"
  },
  logOutButton: {
    alignSelf:"center",
    flexDirection: "row",
    top:90
   
  },
cardProfileUser: {
 
  marginVertical: 16,
  marginHorizontal: 16,
  height: 150,
  width: 352,
  alignItems: "center",
  justifyContent  : "center",
  alignContent: "center",

},
  text3: {
    color: "#006D5B",

    fontWeight: "600"
  },
})
export default styles;