import React from 'react';

interface CustomerDetailProps {
  customer: {
    name: string;
    title: string;
    address: string;
    photos: string[];
  };
}

const CustomerDetail: React.FC<CustomerDetailProps> = ({ customer }) => {
  return (
    <div style={{
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
    </div>
  );
};

export default CustomerDetail;
