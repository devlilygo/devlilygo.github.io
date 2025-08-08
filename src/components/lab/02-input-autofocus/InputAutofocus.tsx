"use client";

import { useEffect, useRef } from "react";

const InputAutofocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  // auto focusing
  // useEffect(() => {
  //   const hasHash = window.location.hash;
  //   if (!hasHash) {
  //     inputRef.current?.focus({ preventScroll: true });
  //   }
  // }, []);

  // changed: auto focusing when any key down
  useEffect(() => {
    const handleKeyDown = () => {
      inputRef.current?.focus();
      document.removeEventListener("keydown", handleKeyDown);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="p-6 max-w-sm mx-auto">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {`What's your email?`}
      </label>
      <input
        ref={inputRef}
        type="email"
        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="you@example.com"
      />
    </div>
  );
};

export default InputAutofocus;
