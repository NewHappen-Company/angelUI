import { runIfFn } from "../../utils/src/function";
import * as React from "react"
import { useCallbackRef } from "./useCallbackRef"

export function useControllableProp<T>(prop: T | undefined, state: T) {
  const isControlled = prop !== undefined
  const value = isControlled && typeof prop !== "undefined" ? prop : state
  return [isControlled, value] as const
}

export interface UseControllableStateProps<T> {
  value?: T
  defaultValue?: T | (() => T)
  onChange?: (value: T) => void
  shouldUpdate?: (prev: T, next: T) => boolean
}

export function useControllableState<T>(props: UseControllableStateProps<T>) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev, next) => prev !== next,
  } = props
  const onChangeProp = useCallbackRef(onChange)
  const shouldUpdateProp = useCallbackRef(shouldUpdate)

  const [valueState, setValue] = React.useState(defaultValue as T)

  const isControlled = valueProp !== undefined
  const value = isControlled ? (valueProp as T) : valueState

  const updateValue = React.useCallback(
    (next: React.SetStateAction<T>) => {
      const nextValue = runIfFn(next, value)

      if (!shouldUpdateProp(value, nextValue)) {
        return
      }

      if (!isControlled) {
        setValue(nextValue)
      }

      onChangeProp(nextValue)
    },
    [isControlled, onChangeProp, value, shouldUpdateProp],
  )

  return [value, updateValue] as [T, React.Dispatch<React.SetStateAction<T>>]
}