import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image='https://dummyimage.com/800x400/000/fff'
      title='First Meetup'
      address='Some Street 5, Some City'
      desctiption='This is a first meetup'
    />
  );
};

export default MeetupDetails;
