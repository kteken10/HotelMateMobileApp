/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  type GestureResponderEvent,
  type StyleProp,
  TouchableOpacity,
  type ViewStyle,
} from 'react-native';

/**
 * Props interface for the component.
 */
interface Props {
  /**
   * The children elements of the component.
   */
  children: React.ReactNode;

  /**
   * Optional style to be applied to the container view.
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Callback function to be called when the component is pressed.
   *
   * @param {GestureResponderEvent} ev - The event object for the press event.
   */
  onPress?: (ev: GestureResponderEvent) => void;

  /**
   * The color to be used as the background when the component is in the pressed state.
   */
  underlayColor?: string;

  disabled?: boolean;
}

export default function BoxIcon({
  containerStyle,
  onPress,
  children,
  
  disabled = false,
}: Props) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        {
          width: 34,
          height: 34,
          borderRadius: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        },
        containerStyle,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
}
