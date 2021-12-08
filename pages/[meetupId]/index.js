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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: 'https://dummyimage.com/800x400/000/fff',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MeetupDetails;
