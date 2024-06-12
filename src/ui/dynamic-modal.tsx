import type { BottomSheetModal } from '@gorhom/bottom-sheet';
import {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import * as React from 'react';
import { DynamicModalProps, ModalRef } from './types';
import { Modal, useModal } from './modal';


export const DynamicModal = React.forwardRef(
  (
    { snapPoints = ['CONTENT_HEIGHT'], children, ...props }: DynamicModalProps,
    ref: ModalRef
  ) => {
    const modal = useModal();
    const {
      animatedHandleHeight,
      animatedSnapPoints,
      animatedContentHeight,
      handleContentLayout,
    } = useBottomSheetDynamicSnapPoints(snapPoints as Array<number | string>); 

    React.useImperativeHandle(
      ref,
      () => (modal.ref.current as BottomSheetModal) || null
    );

    return (
      <Modal
        {...props}
        
        ref={modal.ref}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
      >
        <BottomSheetView onLayout={handleContentLayout}>
          {children}
        </BottomSheetView>
      </Modal>
    );
  }
);
