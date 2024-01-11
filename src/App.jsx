import React, { useState } from 'react';

const InputBoxWithList = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  console.log(items);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <label htmlFor="myInput">Type Something:</label>
      <input
        type="text"
        id="myInput"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddItem}>Add to List</button>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputBoxWithList;
