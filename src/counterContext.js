import React, { useState } from 'react';

export const counterContext = React.createContext();

const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    function increment() {
        setCounter(counter + 1);
    };

    function decrement() {
        setCounter(counter - 1);
    };

    function plus10() {
        setCounter2(counter2 + 10);
    };

    function minus10() {
        setCounter2(counter2 - 10);
    };

    return (
        <counterContext.Provider value={{
            counter: counter,
            counter2: counter2,

            increment,
            decrement,
            plus10,
            minus10
        }}>
            { children }
        </counterContext.Provider>
    )
};

export default CounterContextProvider;