import React from 'react';
import styled from 'styled-components';
import MeetupItem from './MeetupItem';

const MeetupList = ({ meetups }) => {
  return (
    <List>
      {meetups.map((meetup, index) => {
        return <MeetupItem key={index} data={{ ...meetup }} />;
      })}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default MeetupList;
