import React from "react";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Logout, Profile } from "iconsax-react-native";
import { Notification as NNotification, Message as NMessage } from 'iconsax-react-native'
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { isTablet } from "../hooks/use-platform-info";
import { View, Text, TouchableOpacity } from ".";
import { colors } from "../theme";
import { useDispatch } from 'react-redux';
import { authentificated} from '../redux/uiSlice'
import { LanguagePicker } from "./language-picker";
type HeaderProps = {
  title: string;
  onMessagePress?(): void | undefined;
  onProfilePress?(): void | undefined;
};

export const HeaderTop: React.FC<HeaderProps> = ({ title,onMessagePress,onProfilePress }) => {

  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const MessageIcon = styled(NMessage)
  const NotificationIcon = styled(NNotification)

  let menu1bg: string = "#fff";
  let menu2bg: string = "#fff";
  let menu1color: string = "#3b3b3e";
  let menu2color: string = "#3b3b3e";

  const handleMenu1 = () => {
    menu1bg = "#dee7d6";
    menu1color = colors.secondary[50];
    // navigate('ManageAccount');
  };

  const handleMenu2 = () => {
    menu2bg = "#dee7d6";
    menu2color = "#3b3b3e";
    dispatch(authentificated(false));
    navigate('LoginScreen');
  };

  return (
    <View className="w-screen h-20  flex flex-row items-center justify-between bg-primary-700" >
      <Text className="text-2xl font-semibold text-white mx-4">{title}</Text>
      <View className="flex flex-row items-center absolute mobile:right-20 tablet:right-20 laptop:right-28">
        <View className='flex-row right-4 top-1'>
         
            <LanguagePicker LanguagePickerStyle={{left:90,top:2}}/>
          <TouchableOpacity className=' laptop:top-1' onPress={onMessagePress}>

            <MessageIcon className='text-white' size={!isTablet ? 28 : 24} variant="Bold" />

          </TouchableOpacity>
          {
            !isTablet && (<TouchableOpacity className='ml-4 laptop:top-1 ' onPress={onProfilePress}>
              <NotificationIcon className='text-white ' size={!isTablet ? 28 : 24} variant="Bulk" />
            </TouchableOpacity>
            )
          }
        </View>
        

      </View>
    </View>
  );
};
