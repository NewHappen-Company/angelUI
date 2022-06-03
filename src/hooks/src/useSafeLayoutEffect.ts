import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from '../../utils/src/dom';

export const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect;