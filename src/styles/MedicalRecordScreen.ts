// *** Medical Record Styles ***
import { StyleSheet } from "react-native";

const MedicalRecordScreenStyle = StyleSheet.create({
commonStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    marginBottom: 5,
    fontSize: 15,
    fontFamily: 'SFProDisplay-Medium',
    color: "#808080",
  },
  smallContainer: {
    position: "absolute",
    top:40,
    left:19,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 1000,
    backgroundColor: "#006D5B"
  },
  textStyle: { 
  color: "#F2F2F2", fontFamily: 'SFProDisplay-Bold', fontSize: 18 },
  groupStyle: { marginRight:65},
    toggleButton: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      paddingVertical: 10,
      backgroundColor: '#EFEFEF',
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
    }
,

  
  panel: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 8,
    marginTop: 16,
    padding: 16,
  },
  buttonGroupContainer: {
    // borderTopLeftRadius: 12,
    // borderBottomLeftRadius: 12,
    // borderTopRightRadius: 12,
    // borderBottomRightRadius: 12,
    // borderWidth: 1,
    // borderColor: '#D0D5DD',
    
    marginBottom: 8,

  },
  buttonGroupItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
   
  },
  buttonGroupItemActive: {
    backgroundColor: "orange",
    
  },
  buttonGroupItemText: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: "gray",
    // marginHorizontal:110,

  },

 
   dataTextStyle :{ fontFamily: 'SFProDisplay-Light' }

   
});
export default MedicalRecordScreenStyle 