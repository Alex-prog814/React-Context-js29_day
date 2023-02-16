import React, { useContext } from 'react';
import { counterContext } from '../../counterContext';

const Counter = () => {
    const { counter, increment, decrement } = useContext(counterContext);

  return (
    <div>
        {/* <button onClick={decrement}>-1</button>
        <h2>{counter}</h2>
        <button onClick={increment}>+1</button> */}
        <h1>Hello</h1>
    </div>
  )
}

export default Counter