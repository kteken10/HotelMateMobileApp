import { StyleSheet
 } from "react-native";
const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    pressableItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#E0E0E0",
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginVertical: 10,
    },
    biometricInfoText: {
      color: "#4A4A4A",
      fontWeight: "600",
    },
    biometricInfoSubText: {
      color: "#4A4A4A",
    },
    biometricInfoStatusText: {
      color: "#FF9160",
      position: "absolute",
      left: 80,
      bottom: 1,
    },
    securePinText: {
      color: "#4A4A4A",
    fontWeight: "600",
    },
    securePinSubText: {
      color: "#4A4A4A",
    },
  });
export default styles;  