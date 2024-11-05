import { options } from '@/constants/index.data';
import React, { useState } from 'react';
import Select from 'react-select';
import './_style.scss';

const index: React.FC = () => {
  const savedValue = localStorage.getItem('selectedDay');
  const initialValue = savedValue ? JSON.parse(savedValue) : null;
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleChange = (selectedOption: any) => {
    setSelectedValue(selectedOption);
    if (selectedOption) {
      localStorage.setItem('selectedDay', JSON.stringify(selectedOption));
    } else {
      localStorage.removeItem('selectedDay');
    }
  };

  return (
    <>
      <Select
        value={selectedValue}
        onChange={handleChange}
        options={options}
        placeholder="Xafta kunini tanlang"
        isClearable
        className="weekselect"
      />
    </>
  );
};

export default index;
