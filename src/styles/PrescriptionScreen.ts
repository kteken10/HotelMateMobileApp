import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  viewCommonStyle: { flexDirection: "row", alignItems: "center" },
  statusStyle: {
    height: 41,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16
  },
  sectionTitle: {
    color: "#333333",
    fontSize: 16,
    fontFamily:  'SFProDisplay-Semibold',
    marginBottom: 16
    // paddingLeft: 16,
  },
  badgeStyle: {
    width: 14,
    height: 14,
    marginLeft: 4,
    backgroundColor: "#FF9160",
  },
  textStyle: {
    fontSize: 16,
    fontFamily:  'SFProDisplay-Semibold'
  },
  badgeContainerStyle: {
    marginTop: 4,
    paddingHorizontal: 8,
    backgroundColor: "rgba(35, 136, 120, 0.2)",
    width: "auto"
  },
  customButtonStyle: {
    position: "absolute",
    bottom: 0,
    height: 88,
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: "#fff"
  },
  sheetTitle: {
    fontSize: 20,
    fontFamily:  'SFProDisplay-Semibold',
    color: "#000",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 32,
    letterSpacing: 0.37
  },
  chip: {
    width: 14,
    height: 14,
    marginLeft: 4,
    backgroundColor: "#FF9160",
  },
  fileContainerStyle: {
    borderColor: "#E8EFFA",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingLeft: 4,
    marginTop: 16,
    borderRadius: 8,
    justifyContent: "center",
    height: 48
  },
  buttonContainerStyle: {
    height: 88,
    paddingTop: 8,
    paddingHorizontal: 20,
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "#fff"
  },
  seeAppointmentTextStyle: {
    fontFamily:  'SFProDisplay-Semibold',
    color: '#006D5B',
    marginRight: 8
  },
  viewForwardingStyle: {
    backgroundColor: "#F2F2F2",
    marginHorizontal: -16,
    paddingHorizontal: 16,
    marginBottom: 24,
    paddingVertical: 8
  },
  boxSymptomStyle: {
    backgroundColor: "#F2F2F2",
    marginTop: 16,
    marginHorizontal: -16,
    paddingHorizontal: 16
  }
})

export default styles
