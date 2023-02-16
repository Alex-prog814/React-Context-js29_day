import React, { useContext } from 'react';
import { counterContext } from '../../counterContext';

const Counter2 = () => {
  const { counter2, plus10, minus10 } = useContext(counterContext);

  return (
    <div>
      <button onClick={minus10}>-10</button>
      <h2>{counter2}</h2>
      <button onClick={plus10}>+10</button>
    </div>
  )
}

export default Counter2