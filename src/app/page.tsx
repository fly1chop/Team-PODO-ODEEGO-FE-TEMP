'use client';

import Todo from '@/app/components/todo';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Todo />
      <h1>Homepage</h1>
      {/*Cypress Test*/}
      <Link href="/pages/About">About</Link>
    </>
  );
}
