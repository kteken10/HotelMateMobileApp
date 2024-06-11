import React from 'react';
import { Text, TouchableOpacity, Image, View } from '.';
import { Map, Star1 } from 'iconsax-react-native';
import { colors } from '../theme';

interface Chambre {
  id?:string;
  name: string;
  active: boolean;
  prix_par_nuit: string;
  description: string;
  image_path: any;
  onClick?:()=>void
  imageClassName?:string
  list_show?:boolean
  className?:string
}

export const ChambreHotelCard = ({ name, image_path, active, prix_par_nuit ,onClick,imageClassName , list_show=true,className,description}: Chambre) => {
         
  
  return (
    <TouchableOpacity className={` h-58 border bg-white border-neutral-100 mb-4  rounded-2xl ${className}`}  onPress={onClick}>
      <View className='flex-row'>
      <Image source={image_path}  className={`rounded-xl h-52 ${imageClassName}` }/> 
      
      {list_show&&(  <View className='flex flex-col ml-2'>
      <Text className='' font='LTSaeada-Light'>{name}</Text>
      <View className='flex-row gap-2'>
        <Star1 color={colors.warning[500]} size={26} variant='Bulk' />
        <Star1 color={colors.warning[500]} size={26} variant='Bulk' />
        <Star1 color={colors.warning[500]} size={26} variant='Bulk' />
        
        </View>
      <View className='mt-auto flex-row '>
      <Text className='text-primary-700' font='LTSaeada-Bold'>{prix_par_nuit}</Text> 
      <Text className='' font='LTSaeada-ExtraLight'> / Nuit</Text> 
      </View>
     
      </View>)
      
}

   
     
      </View>
      
      {!list_show&&(
       
        <View className='flex bg-white  rounded-3xl bottom-5 px-6 '>
          <View className='h-1 w-2/5 bg-neutral-200 self-center mt-1'></View>
  <Text className='mt-6' font='LTSaeada-Bold'>{name}</Text>

  <View className='bg-slate-100 flex-row w-2/5 justify-center items-center px-2 py-1 rounded-3xl'>
<Text className='text-slate-600 ' font='LTSaeada-Light'>Hotel</Text>
<View className='flex-row gap-2'>
        <Star1 color={colors.warning[500]} size={20} variant='Bulk' />
        <Star1 color={colors.warning[500]} size={20} variant='Bulk' />
        <Star1 color={colors.warning[500]} size={20} variant='Bulk' />
        
        </View>
  </View>

  <View className='flex-row mt-4'>
  <Map color={colors.neutral[300]} size={26} variant='Bulk'/>
  <Text className='text-neutral-500 mr-4 ml-2'>
 {description}
  </Text>

  </View>

        </View>
        
      )
        
      }
     
     
    </TouchableOpacity>
  );
};
