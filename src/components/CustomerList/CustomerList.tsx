import React, { useEffect, useState } from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';
import customersData from '../../assests/customerData.json'

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

interface CustomerListProps {
  onSelectCustomer: (id: number) => void;
  selectedCustomer: number | null;
}

const CustomerList: React.FC<CustomerListProps> = ({ onSelectCustomer, selectedCustomer }) => {
  const customers: Customer[] = customersData.map((customer, index) => ({
    ...customer,
    id: index + 1
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      {customers.map(customer => (
        <div key={customer.id} style={{ borderBottom: '1px solid #ccc' }}>
          <CustomerCard
            name={customer.name}
            title={customer.title}
            address={customer.address}
            selected={selectedCustomer === customer.id}
            onSelect={() => onSelectCustomer(customer.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
// interface Customer {
//   name: string;
//   title: string;
//   address: string;
// }

// const CustomerList: React.FC<CustomerListProps> = ({ onSelectCustomer, selectedCustomer }) => {
//   const [customers, setCustomers] = useState<Customer[]>([]);

//   useEffect(() => {
//     const fetchCustomerData = async () => {
//       const response = await fetch('/data/customerData.json'); // Update the path as needed
//       const data = await response.json();
//       setCustomers(data);
//     };

//     fetchCustomerData();
//   }, []);

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
//       {customers.map((customer, index) => (
//         <div key={index} style={{ borderBottom: '1px solid #ccc' }}>
//           <CustomerCard
//             name={customer.name}
//             title={customer.title}
//             selected={selectedCustomer === index} // Use index for selection
//             onSelect={() => onSelectCustomer(index)} // Use index for selection
//           />
//         </div>
//       ))}
//     </div>
//   );
// };


