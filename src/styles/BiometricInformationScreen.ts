import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flexDirection: "row",
    paddingHorizontal: 2,
    justifyContent: "space-between",
  },
  addContainer: {
    marginRight: 10,
    backgroundColor: "#006D5B30", // Couleur avec opacité correcte
    width: 20,
    height: 20,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  commonStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  textStyle: { color: "#F2F2F2", fontFamily: 'SFProDisplay-Bold', fontSize: 18 },
  textItemContainerStyle: {
    backgroundColor: "#fff"
  }
});

export default styles;
