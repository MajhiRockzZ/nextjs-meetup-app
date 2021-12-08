import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const MeetupDetail = ({ title, image, address, desctiption }) => {
  return (
    <Wrapper>
      <Image src={image} alt={title} width='800' height='400' />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{desctiption}</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;

  img {
    width: 100%;
  }
`;

export default MeetupDetail;
