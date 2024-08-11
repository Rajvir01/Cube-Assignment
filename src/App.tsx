import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList/CustomerList';
import CustomerDetail from './components/CustomerDetail/CustomerDetail';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import NavBar from './components/Navbar/Navbar';
import customersData from './assests/customerData.json';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<number | null>(1);
  const [photos, setPhotos] = useState<string[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const customersWithIds = customersData.map((customer, index) => ({
      ...customer,
      id: index + 1
    }));
    setCustomers(customersWithIds);
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchPhotos = async () => {
    const fetchedPhotos = await Promise.all(
      Array.from({ length: 9 }, () =>
        fetch('https://picsum.photos/200').then(res => res.url)
      )
    );
    setPhotos(fetchedPhotos);
  };

  const customerDetail = selectedCustomer
    ? customers.find(c => c.id === selectedCustomer) || {
      name: `Customer ${selectedCustomer}`,
      title: 'Customer',
      address: 'N/A',
      photos: photos,
    }
    : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '94vh', overflow: 'hidden' }}>
      <NavBar />
      <div style={{ display: 'flex', overflow: 'hidden', marginTop: '50px', flexDirection: 'row' }}>
        <div style={{
          flex: 1,
          overflowY: 'auto',
          boxSizing: 'border-box',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
          <CustomerList
            onSelectCustomer={(id: number) => setSelectedCustomer(id)}
            selectedCustomer={selectedCustomer}
          />
        </div>
        <div style={{
          flex: 2,
          padding: '0px 20px 0px 20px',
          overflowY: 'auto',
          boxSizing: 'border-box',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {selectedCustomer && customerDetail && (
            <>
              <CustomerDetail customer={{
                name: customerDetail.name,
                title: customerDetail.title,
                address: customerDetail.address,
                photos: photos
              }} />
              <PhotoGrid photoUrls={photos} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;