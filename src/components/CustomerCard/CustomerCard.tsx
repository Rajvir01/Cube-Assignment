import React from 'react';
import { Card } from '@nextui-org/react';

interface CustomerCardProps {
  name: string;
  title: string;
  address: string;
  selected: boolean;
  onSelect: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ name, title, address, selected, onSelect }) => {
  return (
    <div
      style={{
        backgroundColor: selected ? '#f0f0f0' : 'white',
        padding: '10px 16px',
        cursor: 'pointer',
        boxShadow: selected ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
        borderRadius: '0px',
        margin: '0',
        width: '100%',
      }}
      onClick={onSelect}
    >
      <h4 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: 'normal' }}>{name}</h4>
      <p style={{ color: 'gray', margin: '0', fontSize: '14px', lineHeight: '1.5em' }}>{title}</p>
      <p style={{ color: 'gray', margin: '0', fontSize: '14px', lineHeight: '1.5em' }}>{address}</p>
    </div>
  );
};



export default CustomerCard;
