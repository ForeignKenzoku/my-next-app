
"use client"; // Required 
import { useState } from 'react';
import styles from '../styles/Form.css';

export default function Form({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue); // Pass the input value to the parent component
    setSubmitted(true); // Update state to show success message
    setInputValue(''); // Clear the input field
  };

  return (
    <div className={styles.container}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a message"
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Form submitted successfully!</p>} 
    </div>
  );
}