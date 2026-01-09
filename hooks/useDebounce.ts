"use client";
import { UseDebounce } from "@/types";
import { debounce } from "lodash";
import { useEffect, useMemo, useRef } from "react";

const useDebounce: UseDebounce = (callback, delay, dependencies) => {
  // Use ref to always have the latest callback without recreating debounced function
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const debouncedCallback = useMemo(
    () => debounce(() => callbackRef.current(), delay),
    [delay]
  );

  useEffect(() => {
    debouncedCallback();

    return () => {
      debouncedCallback.cancel();
    };
  }, [...dependencies]);
};

export default useDebounce;
