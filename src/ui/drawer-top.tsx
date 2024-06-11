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
        <View className='flex-row right-4'>
         
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
        <View className=" ">
          <Menu>
            <MenuTrigger>
              {/* <Image
                className="image-cover bg-white mobile:w-7 mobile:h-7 tablet:w-9 tablet:h-9 laptop:w-10 laptop:h-10 laptop:bottom flex-none rounded-full border border-neutral-200"
                source={require('../assets/images/Avatar.png')}
                alt="Profile picture"
              /> */}
            </MenuTrigger>
            <MenuOptions>
              <MenuOption
                onSelect={() => handleMenu1()}
                customStyles={{
                  optionWrapper: {
                    backgroundColor: menu1bg,
                    shadowColor: menu1bg,
                  }
                }}
              >
                <View className="w-full h-10 flex flex-row items-center p-2">
                  <Profile size="24" color={menu1color} variant="Outline" />
                  <Text className="text-lg ml-2" style={{ color: menu1color }} tx="manage_account" />
                </View>
              </MenuOption>
              <MenuOption onSelect={() => handleMenu2()}>
                <View
                  className="w-full h-10 flex flex-row items-center p-2"
                  style={{ backgroundColor: menu2bg }}
                >
                  <Logout size="24" color={menu2color} variant="Outline" />
                  <Text className="text-lg ml-2" style={{ color: menu2color }} tx="logout" />
                </View>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>

      </View>
    </View>
  );
};
