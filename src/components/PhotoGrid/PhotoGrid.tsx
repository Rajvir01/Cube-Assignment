import React from 'react';
import { Card } from '@nextui-org/react';

interface PhotoGridProps {
  photoUrls: string[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photoUrls }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      {photoUrls.map((photo, index) => (
        <Card key={index} isHoverable style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <img
            src={photo}
            alt={`Photo ${index + 1}`}
            style={{
              width: '90%',
              height: '90%',
              objectFit: 'cover',
              borderRadius: '10px'
            }}
          />
        </Card>
      ))}
    </div>
  );
};

export default PhotoGrid;
