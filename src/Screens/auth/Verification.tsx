import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { OtpInput } from 'react-native-otp-entry';
import {  Keyboard } from "react-native"
import { CredentialContext } from '../../contexts';
import { authentificated } from '../../redux/uiSlice';
import { View,Text, TouchableOpacity, ScrollView } from '../../ui';
import { isTablet } from '../../hooks/use-platform-info';
import { colors } from '../../theme';
import { useDispatch } from 'react-redux';
import PageHeader from '../../ui/page-header';
import { Brodcast } from 'iconsax-react-native';
import { capitalizeFirstLetter } from '../../utils/string';
import { useTranslation } from 'react-i18next';
import { SButton } from '../../ui/button';
export const VerificationForm=()=> {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  // const { colors } = useColorContext();
  const { phoneNumber } = useContext(CredentialContext);
  const deviceType = isTablet ? 'tablet' : 'phone';
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(59);
  const [attemptCount, setAttemptCount] = useState(0);
  const maxAttempts = 3;
  const [couldConfirm, setCouldConfirm] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);
  const { t } = useTranslation();
  useEffect(() => {
  generateRandomOTP()
    
  }, []);
  
  function generateRandomOTP() {
    const otpLength: number = 5;
    let otp: string = '';

    for (let i = 0; i < otpLength; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    setGeneratedOtp(otp)
    console.log(otp)
}
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(timer);
          showMessage({
            message: 'Time Out',
            description: 'The verification code has expired',
            type: 'danger',
            icon: 'danger',
          });
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
   
    return () => clearInterval(timer);
  }, [minutes, seconds]);

  const handleOtpFilled = (otp: string) => {

    // Vérifier si l'OTP saisi est correct
    if (!(otp === generatedOtp)){
      // Code correct, ajoutez vos actions ici
      dispatch(authentificated(true));
      setCouldConfirm(true);
      showMessage({
        message: 'Success',
        description: 'Verification successful!',
        type: 'success',
        icon: 'success',
      });
     
     
    } else {
      setAttemptCount(attemptCount + 1);

      if (attemptCount + 1 >= maxAttempts) {
        showMessage({
          message: 'Too many attempts',
          description:
            'You have reached the maximum number of attempts. Please reset the code.',
          type: 'danger',
          icon: 'danger',
        });
      } else {
        showMessage({
          message: 'Incorrect code',
          description: 'Please enter the correct verification code.',
          type: 'danger',
          icon: 'danger',
        });
      }
    }
  };

  const resetTimer = () => {
    setMinutes(2);
    setSeconds(59);
    setAttemptCount(0);
  };

  return (
 
    <ScrollView className=" bg-white  rounded-3xl mx-1 bottom-8" >
      <View
        className="flex-1  "
        onStartShouldSetResponder={() => {
          Keyboard.dismiss()
          return true
        }}
      >
         <View className="flex flex-1 rounded-xl py-4 px-4 ">
        
           <PageHeader
              className="mb-8"
              icon={<Brodcast color="green" size={32} variant="Bulk"/>}

             
              title={capitalizeFirstLetter(t("verification_code"))}
              titleClassName="text-secondary-600"
              message='verification_code_mobile_desc'
              // message={t("login_message") + ""}
            />
          

          <View className="laptop:mb-4">
          
            <Text className="mobile:text-sm tablet:text-xl laptop:text-xl text-center  font-bold   text-slate-700 ">{phoneNumber}</Text>
            <OtpInput
              numberOfDigits={5}
              focusColor={colors.purple[200]}
              autoFocus={true}
              focusStickBlinkingDuration={500}
              onFilled={handleOtpFilled}
              theme={{
                pinCodeContainerStyle: {
                  width: deviceType === 'tablet' ? 70 : 50,
                  height: deviceType === 'tablet' ? 70 : 50
                },

                pinCodeTextStyle: {
                 
                  fontSize: deviceType === 'tablet' ? 56 : 30
                },
              }}
            />
            <View className="flex justify-center items-center flex-row tablet:mb-4 laptop:mt-12">
              <Text className="text-center mt-3 tablet:text-xl laptop:text-2xl mobile:text-base" tx="time_left_enter_code"/>
              
              <Text className="text-center mt-3 font-bold">
                {' '}
                {` ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
              </Text>
            </View>
            <TouchableOpacity onPress={resetTimer} className=''>
              <Text
                className="text-center text-secondary-50 underline mobile:text-sm tablet:text-xl laptop:text-xl font-bold mt-3">
                Resend the Code
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => {
                if (couldConfirm) {
                }
              }}
              className={
                couldConfirm
                  ? 'flex justify-center items-center   mobile:h-12 tablet:h-14 laptop:h-14 rounded-lg mt-6'
                  : 'flex justify-center items-center  border border-secondary-50 mobile:h-12 rounded-lg  tablet:h-14 laptop:h-14 mt-6'
              }
              style={{
                backgroundColor: couldConfirm ? colors.secondary[100] : 'white',

              }}
            >
              <Text className={couldConfirm ? 'text-white mobile:text-base tablet:text-xl laptop:text-xl' : 'text-secondary-50  mobile:text-lg tablet:text-xl laptop:text-xl'}>
                Confirm
              </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              onPress={() => navigate('LoginScreen')}
              className="flex justify-center items-center mt-6"
            >
              <Text className=" font-bold  tablet:text-xl laptop:text-xl " style={{
                color: colors.purple[100]
              }}>
                Sign In
              </Text>
            </TouchableOpacity> */}
             <View className="flex mobile:mt-12 mt-12">
            <SButton
              title={capitalizeFirstLetter(t("sign_in"))}
              // disabled={disabled}
              className="self-center mobile:py-3 bg-secondary-600 tablet:py-3 w-full mb-4  rounded-3xl"
              titleClassName='text-white'
            />
            <SButton
              title={capitalizeFirstLetter(t("registered"))}
              className="self-center w-full"
              titleClassName="text-secondary-600"
              // onPress={gotoRegisteredScreen}
            />
          </View>
          </View>
        </View>
      </View>
      </ScrollView>
   
  );
};