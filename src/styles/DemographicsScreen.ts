import { StyleSheet } from "react-native";
import theme from "./theme";

export const demographicstyle = StyleSheet.create({

    container: {
        flex: 1,
        height:600*2
       
      
      },
      sections: {
      },
      cardPersonalInfo: {
        height: 320,
      },
      cardTelecomInfo: {
        
        zIndex:-1

      },
      cardContactInfo: {
        height: 135,
      },
      cartBirthInfo: {
        height:200
      },
      cardAddressInfo: {
        height: 215,
      },
     
      cardTitle: {
        color: theme.colors.primary,
        fontSize: 18,
        fontFamily: 'SFProDisplay-Regular',
        marginBottom: 10,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:5,
        flexWrap: 'wrap',
      },
      primaryRow: {
        flexDirection: 'row',
        position:'absolute',
        
        
      },
      label: {
        marginBottom: 5,
        fontSize: 15,
        fontFamily: 'SFProDisplay-Light',
        color: "#808080",
      },
      button: {
        borderWidth:1.5,
        borderColor: theme.colors.green,
        padding: 10,
        borderRadius: 5,
        width:130,
        left:182,
        bottom:17,
        marginBottom:16
      },
      value: {
        marginBottom: 5,
        fontSize: 15,
        fontFamily: 'SFProDisplay-Medium',
        color: theme.colors.dark_gray,
        
      },
});
