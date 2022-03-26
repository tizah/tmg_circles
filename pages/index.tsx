import type { NextPage } from 'next'
import { useAuth0 } from "@auth0/auth0-react";
import React, {useEffect} from 'react';

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header/Header'

const Home: NextPage = () => {

  const { loginWithRedirect } = useAuth0();
  // const url = window.location.origin

  
  let window: any = undefined;


  return (

    <div className={styles.container}>
      <Head>
        <title>tmg_cirlce</title>
        <meta name="description" content="Tangale Medical Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Tangale Medical Group Circle
        </h1>

        <p className={styles.description}>
          Make the change you want to see.
        </p>

        <div className={styles.grid}>
          <Link href='/join'>
            <a className={styles.card}>
              <h2>JOIN A CIRCLE </h2>
              <p>Browse a list of existing Circles and find one that you'd like to join or support with a donation.</p>
            </a>
          </Link>

          <a onClick={() => loginWithRedirect()} className={styles.card}>
            <h2>START A CIRCLE </h2>
            <p>Create a new Giving Circle and invite like-minded people to support worthy projects by qualified organizations.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>HOW IT WORKS</h2>
            <p>
            Learn more about how Giving Circles work, and how you can participate to make a difference in sustainable development projects worldwide.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
           <a href='tmg.us.com'>Tangale Medical Group</a>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
