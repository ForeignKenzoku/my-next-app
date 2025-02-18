
"use client"; // Required 
import { useState } from 'react';
import '../../styles/Page2.css'; 

export default function Page2() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Item Manager</h1>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            <span className="item-number">{index + 1}.</span>
            {item}
          </li>
        ))}
      </ul>
      <button className="add-button" onClick={addItem}>
        ＋ Add New Item
      </button>
    </div>
  );
}