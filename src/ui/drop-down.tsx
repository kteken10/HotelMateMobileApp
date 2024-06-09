import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View } from '.';

type Item = {
  label: string;
  value: string;
};

type DropdownProps = {
  data: Item[];
  outFocusedColorBorder?: string;
  focusedColor?: string;
  onDropChange(item):void;
  className:string
};

export const DropDown = ({ data, outFocusedColorBorder, focusedColor ,onDropChange,className}: DropdownProps) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View className={`${className}`}>
      <Dropdown
        style={[
          styles.dropdown,
          { borderColor: isFocus ? focusedColor || 'blue' : outFocusedColorBorder, borderWidth: isFocus ? 2 : 1 },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={'...'}
        searchPlaceholder=""
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item?.value || null);
          setIsFocus(false);
          onDropChange(item)
          
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? focusedColor : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
