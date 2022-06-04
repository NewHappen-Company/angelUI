import React, { useCallback, useEffect, useState } from 'react';
import { useId } from './useId';

export interface IUseLoadingButtonProps {
  onLoading?(): void;
  styleLoading?: string;
  id?: string;
}

export function useLoadingButton(props: IUseLoadingButtonProps = {}) {
  const { 
    styleLoading: styleLoadingProp,
    id: idProp,
  } = props;
  const [styleLoading, setStyleLoading] = useState(styleLoadingProp);
  const [loadingIndicator, setLoadingIndicator] = useState();

  const id = useId(idProp, "loading-button");

  function onLoading() {
    setStyleLoading("cursor-not-allowed opacity-75");
  }

  useEffect(() => {
    onLoading();
  }, [onLoading])

  return {
    onLoading,
    styleLoading,
    getButtonProps: (props: any = {}) => ({
      ...props,
      "aria-expanded": "true",
      "aria-controls": id,
    }),
    getLoadingButtonProps: (props: any = {}) => ({
      ...props,
      id
    })
  }
}

export type UseLoadingButtonReturn = ReturnType<typeof useLoadingButton>;