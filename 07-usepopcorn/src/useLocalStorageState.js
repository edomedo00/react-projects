import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    // this function ONLY runs on the initial render
    // it cant accept Arguments
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  // effect for storing watched movies in the local storage
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value)); // this stores the list of watched movies in the browser local storage
    },
    [value, key],
  );

  return [value, setValue];
}
