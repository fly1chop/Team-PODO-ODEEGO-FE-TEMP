"use client"

import styles from './page.module.css';
import Todo from "@/app/components/todo";


export default function Home() {
  return (
    <main className={styles.main}>
      <Todo/>
    </main>
  );
}
