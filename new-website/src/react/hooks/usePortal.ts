/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react';

export const usePortal = (id: string): HTMLDivElement => {
  const el = useRef(document.createElement('div'));
  useEffect(() => {
    const root = document.querySelector(`#${id}`);
    root?.appendChild(el.current);
    return () => {
      el.current.remove();
    };
  }, []);
  return el.current;
};
