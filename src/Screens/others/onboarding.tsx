import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { capitalizeFirstLetter } from "../../utils/string"
import PagerView from 'react-native-pager-view'
import { useTranslation } from 'react-i18next'
import { LanguagePicker } from '../../ui/language-picker'
import { ONBOARDING } from '../../utils/Constants'
import { firstOpen } from '../../redux/uiSlice'
import { View,Text,Image } from '../../ui'
import { SButton } from '../../ui/button'

export default function OnboardingScreen(
  navigate:any
) {
  const pageViewRef = useRef<PagerView>(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();
 

  const [index, setIndex] = useState(0);
  const onPageScroll = (page: number) => {
    setIndex(page);
    if (page > ONBOARDING.length - 1 && isLastPage()) {
      
    }
  };

  const onSkip = () => {
    dispatch(firstOpen(true));
    console.log('Go to Auth')
    
    
  };

  const isLastPage = () => {
    return index === ONBOARDING.length - 1;
  };

  return (
    <View   className="flex-1 bg-white" >
      {/* <View style={styles.Flagselected}> */}
        <LanguagePicker  LanguagePickerStyle={{top:30,right:16}} dropcolor='black'/>
      {/* </View> */}
      <PagerView
        ref={pageViewRef}
        style={{ flex:5 }}
        onPageScroll={(e) => {
          onPageScroll(e.nativeEvent.position);
        }}
        initialPage={0}
      >
        {ONBOARDING.map((el) => (

          <View key={el.title} className="mt-24">
            <View className=" justify-center items-center  px-4"
            >
             
             <Image source={el.image_src} className="w-full h-64" />


            </View>
            <View className='h-24'>
            <Text
            font='LTSaeada-SemiBold'
             className="laptop:text-4xl mobile:text-xl tablet:text-3xl text-secondary-50 text-center mx-4  self-center my-5  h-14">
              {capitalizeFirstLetter(t(el.title))}
            </Text>

            {el?.subtitle !== "" ? (
              <Text className="justify-center text-center  text-neutral-400  laptop:text-2xl mx-4 "
              font='LTSaeada-Medium'>
                {capitalizeFirstLetter(t(el.subtitle))}
              </Text>
            ) : null}

</View>
            
          </View>

        ))}
      </PagerView>
      <View className='flex mobile:mx-4 tablet:mx-6 laptop:mx-8'>
      <SButton
        titleClassName="text-white"
       title={capitalizeFirstLetter(t(isLastPage() ? "start" : "skip"))}
       onPress={onSkip}
       className="self-center bg-primary-700 mobile:py-3 tablet:py-3 w-full shadow-md shadow-slate-600"  
      />
      </View>

      <View
        className='flex-1 items-center flex-row justify-center '>
        {ONBOARDING.map((_item, itemIndex) => (
          <View
            key={itemIndex}
            className={`
            w-3 h-3  mx-2 rounded-full
            ${itemIndex===index ?  "bg-primary-700 w-3 h-3":"border border-secondary-600"}
            `}
          />
        ))}
      </View>
    
    </View>
  );
}
