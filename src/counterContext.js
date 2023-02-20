import React, { useState } from 'react';

export const counterContext = React.createContext();

const INIT_STATE = {
    counter: 0,
    counter2: 0
};

function reducer(state=INIT_STATE, action) {
    switch(action.type) {
        case 'INCREMENT':
            return { ...state, counter: action.payload };
        case 'DECREMENT':
            return { ...state, counter: action.payload };
        case 'PLUS_10':
            return { ...state, counter2: action.payload };
        case 'MINUS_10':
            return { ...state, counter2: action.payload };
        default:
            return state;
    };
};

const CounterContextProvider = ({ children }) => {
    // const [counter, setCounter] = useState(0);
    // const [counter2, setCounter2] = useState(0);
    const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

    function increment() {
        // setCounter(counter + 1);
        dispatch({
            type: 'INCREMENT',
            payload: state.counter + 1
        });
    };

    function decrement() {
        // setCounter(counter - 1);
        dispatch({
            type: 'DECREMENT',
            payload: state.counter - 1
        });
    };

    function plus10() {
        // setCounter2(counter2 + 10);
        dispatch({
            type: 'PLUS_10',
            payload: state.counter2 + 10
        });
    };

    function minus10() {
        // setCounter2(counter2 - 10);
        dispatch({
            type: 'MINUS_10',
            payload: state.counter2 - 10
        });
    };

    return (
        <counterContext.Provider value={{
            counter: state.counter,
            counter2: state.counter2,

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