import React from 'react';

interface SelectorProps {
  category: string;
  id: string;
  label: string;
  onChange: any;
}
export const Selector = ({ category, id, label, onChange }: SelectorProps) => {
  return (
    <div className='p-[10px] border border-green-500 rounded-10'>
      <input
        type='radio'
        id={id}
        name={category}
        value='1'
        onClick={() => onChange(id, label)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
