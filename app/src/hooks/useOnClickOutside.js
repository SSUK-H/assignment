import React, { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      console.log("ref", ref.current);

      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
