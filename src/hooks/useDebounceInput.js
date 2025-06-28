import { useState, useEffect } from "react";

export const useDebouncedInput = (inputValue, timeInterval = 500) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, timeInterval);

    return () => clearTimeout(timeoutId);
  }, [inputValue, timeInterval]);

  return debouncedValue;
};
