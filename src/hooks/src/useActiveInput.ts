import { useCallback, useState } from 'react';
import { callAllHandlers } from '../../utils/src/function';
import { useCallbackRef } from './useCallbackRef';
import { useControllableProp } from './useControllable';
import { useId } from './useId';

export interface IUseActiveInputProps {
  isActive?: boolean;
  defaultIsActive?: boolean;
  onFocus?(): void;
  onBlur?(): void;
  id?: string;
}

export function useActiveInputProps(props: IUseActiveInputProps = {}) {
  const { 
    isActive: isActiveProp,
    defaultIsActive: defaultIsActiveProp,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    id: idProp,
  } = props;

  const onFocusPropCallbackRef = useCallbackRef(onFocusProp);
  const onBlurPropCallbackRef = useCallbackRef(onBlurProp);
  const [isActive, setIsActive] = useState(defaultIsActiveProp || false);
  const [isControlled, isAct] = useControllableProp(isActiveProp, isActive);

  const id = useId(idProp, "active-input");

  const onFocus = useCallback(() => {
    if(!isControlled) {
      setIsActive(true);
    }
    onFocusPropCallbackRef?.()
  }, [isControlled, onFocusPropCallbackRef]);

  const onBlur = useCallback(() => {
    if(!isControlled) {
      setIsActive(false);
    }
    onBlurPropCallbackRef?.()
  }, [isControlled, onBlurPropCallbackRef]);

  const onToggle = useCallback(() => {
    const action = isActive ? onBlur : onFocus;
    action();
  }, [isActive, onFocus, onBlur]);

  return {
    isActive: !!isActive,
    onFocus,
    onBlur,
    onToggle,
    isControlled,
    getInputProps: (props: any = {}) => ({
      ...props,
      "aria-expanded": "true",
      "aria-controls": id,
      onFocus: callAllHandlers(props.onFocus, onToggle),
      onBlur: callAllHandlers(props.onBlur, onToggle),
    }),
    getActiveInputProps: (props: any = {}) => ({
      ...props,
      hidden: !isActive,
      id
    })
  }
}

export type UseActiveInputReturn = ReturnType<typeof useActiveInputProps>;