
"use client"; // Required 
import { useState } from 'react';
import Form from '../../components/Form';
import Display from '../../components/Display';

export default function Page1() {
  const [message, setMessage] = useState('');

  const handleFormSubmit = (inputValue) => {
    setMessage(`You submitted: ${inputValue}`);
  };

  return (
    <div>
      <h1>Page 1</h1>
      <Form onSubmit={handleFormSubmit} />
      <Display message={message} />
    </div>
  );
}