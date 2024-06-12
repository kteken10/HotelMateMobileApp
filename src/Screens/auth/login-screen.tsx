import React, { useContext, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { capitalizeFirstLetter } from "../../utils/string";
import { useTranslation } from "react-i18next";
import SimpleToast from "react-native-simple-toast";
import { isValidPhoneNumber as isValid } from 'libphonenumber-js';
import { useNavigation } from "@react-navigation/native";
import { SButton } from "../../ui/button";
import { CredentialContext } from "../../contexts";
import { Key } from "iconsax-react-native";
// import DateInput from "../../ui/date-input";
import PageHeader from "../../ui/page-header";
import { View, ScrollView, Input,Text} from "../../ui";
import { PhoneNumberInput } from "../../ui/phone-input";
import { colors } from "../../theme";
export const LoginForm = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { phoneNumber, setPhoneNumber } = useContext(CredentialContext);
  // const [phoneNumber, setPhoneNumber] = useState("")
  // const [dateOfBirth, setDateOfBirth] = useState<Date>();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {

    setDisabled(!isValid(phoneNumber));
    console.log(phoneNumber)
  }, [phoneNumber]);

  const signInWithPhoneNumber = async () => {
    navigation.navigate("Verification");

    try {
      // Votre logique de connexion
    } catch (error: any) {
      console.log("signin with phone number error", error);
      SimpleToast.show(capitalizeFirstLetter(error?.message ?? t("network_error")));
    }
  };
  const gotoRegisteredScreen = () => {
    navigation.navigate("RegisteredScreen");
  };
 
  return (
    <ScrollView className=" bg-white  rounded-3xl mx-1 bottom-8 " >
      <View
        className="px-4  "
        onStartShouldSetResponder={() => {
          Keyboard.dismiss();
          return true;
        }}
      >
        <View className="flex flex-1 rounded-xl py-4 px-4 ">
          <View className="flex-1 justify-center  ">
            <PageHeader
              className="mb-8"
              icon={<Key color={colors.primary[700]} size={32} variant="Bulk">

              </Key>}
              title={capitalizeFirstLetter(t("login"))}
              titleClassName="text-primary-700"
              // message={t("login_message") + ""}
            />
            <View>
            {/* <PhoneNumberInput
        label={capitalizeFirstLetter(t("phone_number"))}
        onPhoneNumberChange={(number: string) => {
          setPhoneNumber(number);
          console.log(number)
        }}
      /> */}
     <Text
      font='LTSaeada-Medium' className= {`mobile:text-sm tablet:text-lg laptop:text-lg mt-4 text-gray-500   font-medium `}>
     email
            </Text>
    <Input className=" px-4" placeholder='eg: yokolamil@gmail.com'/>
    <Text
      font='LTSaeada-Medium' className= {`mobile:text-sm tablet:text-lg laptop:text-lg mt-4 text-gray-500   font-medium `}>
     Mot de passe
            </Text>
    <Input className=" px-4" placeholder='************'/>
    
            </View>
          </View>
          <View className="flex mobile:mt-12 mt-12">
            <SButton
              title={capitalizeFirstLetter(t("sign_in"))}
              // disabled={disabled}
              className="self-center mobile:py-3 bg-primary-700 tablet:py-3 w-full mb-4  rounded-3xl"
              onPress={signInWithPhoneNumber}
              titleClassName={disabled ? "text-white" : "text-white"}
            />
            <SButton
              title={capitalizeFirstLetter(t("registered"))}
              className="self-center w-full mb-4"
              titleClassName="text-primary-700 "
              onPress={gotoRegisteredScreen}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


