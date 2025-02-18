"use client"; // Required 
import { useState } from 'react';
import styles from '../styles/Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className={styles.container}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      {count >= 10 && <p>You've reached 10 or more!</p>} {/* Conditional rendering */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}