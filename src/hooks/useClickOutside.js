import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export const useClickOutside = handler => {
    const ref = useRef();

    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };

        document.addEventListener("click", listener);

        return () => document.removeEventListener("click", listener);
    }, [ref, handler]);

    return [ref];
};