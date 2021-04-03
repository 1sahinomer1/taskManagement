import { useState } from "react";

export const useLocalStroage = (key: any, INITIAL_VALUE: any) => {
  const [state, setState] = useState(() => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : INITIAL_VALUE;
  });
  const updateStorage = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, updateStorage];
};
