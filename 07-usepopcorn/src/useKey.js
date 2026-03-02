import { useState, useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        // convert oth strings to lowercase to compare them
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key],
  );
}
