import React from 'react';
import Card from '../ui/Card';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const MeetupItem = ({ data: { id, image, title, address } }) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push('/' + id);
  };

  return (
    <Item>
      <Card>
        <div className='image'>
          <Image src={image} alt={title} width='800' height='400' />
        </div>
        <div className='content'>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className='actions'>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </Item>
  );
};

const Item = styled.li`
  margin: 1rem 0;

  .image {
    width: 100%;
    height: 20rem;
    overflow: hidden;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .content {
    text-align: center;
    padding: 1rem;

    h3 {
      font-size: 1.25rem;
      color: #2c292b;
    }
  }

  .actions {
    padding: 1.5rem;
    text-align: center;

    button {
      font: inherit;
      cursor: pointer;
      color: #77002e;
      border: 1px solid #77002e;
      background-color: transparent;
      padding: 0.5rem 1.5rem;
      border-radius: 4px;

      &:hover,
      &:active {
        background-color: #ffe2ed;
      }
    }
  }
`;

export default MeetupItem;
