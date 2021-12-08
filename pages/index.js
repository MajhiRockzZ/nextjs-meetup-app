import { MongoClient } from 'mongodb';
import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:admin@cluster0.ojhhw.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

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
