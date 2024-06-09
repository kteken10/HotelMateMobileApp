import React, { ReactNode } from 'react';
import { View } from './view';


interface PanelInfoProps {
  alwaysVisibleContent?: ReactNode;
}

const PanelInfo: React.FC<PanelInfoProps> = ({ alwaysVisibleContent }) => {
  return (
    <View className=''>
      {alwaysVisibleContent}
    </View>
  );
};

export default PanelInfo;
