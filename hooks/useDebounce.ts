"use client";
import { UseDebounce } from "@/types";
import { debounce } from "lodash";
import { useEffect, useMemo } from "react";

const useDebounce: UseDebounce = (callback, delay, dependencies) => {
  const debouncedCallback = useMemo(
    () => debounce(callback, delay),
    [callback, delay]
  );

  useEffect(() => {
    debouncedCallback();

    return () => {
      debouncedCallback.cancel();
    };
  }, [...dependencies]);

  return [];
};

export default useDebounce;
