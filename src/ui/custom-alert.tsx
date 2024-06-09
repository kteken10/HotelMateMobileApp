import React, { ReactNode } from 'react';
import { CloseSquare } from 'iconsax-react-native';

import Modal from 'react-native-modal';
import { View,Text,TouchableOpacity } from '.';


interface Props {
  animationType?: 'none' | 'slide' | 'fade';
  children: ReactNode;
  showClose?: boolean;
  twtitleClassName?: string;
  closeIconClassname?: string;
  title?: string;
  modalStyle?: object;
  twmodalClassName?: string;
  isModalVisible: boolean;
  onClose: () => void;
}

export const CustomAlert: React.FC<Props> = React.memo(
  ({
    showClose = true,
    children,
    twtitleClassName,
    closeIconClassname,
    title,
    isModalVisible,
    modalStyle,
    twmodalClassName,
    onClose,
  }) => {
    return (
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        style={modalStyle}
      >
        {/* <BlurView
                style={{
                  width:"100%",
                  height:"100%",
                  right:16
                }}
                intensity={50} 
                tint="light"
            > */}

        <View className={` rounded-lg shadow-md  ${twmodalClassName} `}>
          {showClose && (
            <View className="flex flex-row justify-between px-4 z-10">
              <Text className={`  ${twtitleClassName} `} tx={title} />
              <TouchableOpacity
                onPress={onClose}
                className={`${closeIconClassname}`}
              >
                <CloseSquare size={30} color="#808080" variant="Bulk" />
              </TouchableOpacity>
            </View>
          )}
          {children}
        </View>
        {/* </BlurView> */}
      </Modal>
    );
  }
);
