import React from 'react';
import Card from '../ui/Card';
import Image from 'next/image';

const MeetupItem = ({ data: { image, title, address } }) => {
  return (
    <li>
      <Card>
        <div className='image'>
          <Image src={image} alt={title} width='600' height='400' />
        </div>
        <div className='content'>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className='actions'>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
