import { MongoClient } from 'mongodb';
import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = ({ meetups }) => {
  console.log(meetups);
  return <MeetupList meetups={meetups} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:admin@cluster0.ojhhw.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();
  console.log(meetups);

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
