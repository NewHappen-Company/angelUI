import { DependencyList, useCallback, useRef } from 'react';
import { useSafeLayoutEffect } from './useSafeLayoutEffect';

export function useCallbackRef<T extends (...args: any[]) => any>(
  fn: T | undefined,
  deps: DependencyList = []
): T {
  const ref = useRef<any>(null);

  useSafeLayoutEffect(() => {
    if(fn && fn !== ref.current) {
      ref.current = fn;
    }
  });

  return useCallback(((...args) => ref.current?.(...args)) as T, deps);
}