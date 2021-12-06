import React from 'react';
import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>
            NextJS Is A Great Framework
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
