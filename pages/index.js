import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://dummyimage.com/800x400/000/fff',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://dummyimage.com/800x400/000/fff',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a second meetup!',
  },
];

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
