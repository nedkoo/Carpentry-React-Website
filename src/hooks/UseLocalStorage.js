import { useState } from "react";

const useLocalStorage = (key, initialState) => {
    const [state, setState] = useState(() => {
        try {
            let item = localStorage.getItem(key);

            return item 
                ? JSON.parse(item) 
                : initialState;
        } catch(err) {
            console.log(err);
            return initialState;
        }
    });

    const setItem = (value) => {
        // TODO: add support for functions
        try {
            localStorage.setItem(key, JSON.stringify(value))

            setState(value);
        } catch(err) {
            console.log(err);
        }
    };

    return [
        state,
        setItem
    ];
};

export default useLocalStorage;