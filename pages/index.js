import Head from 'next/head'
import Leaderboard from '../components/Leaderboard'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adt wedstrijd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Adt wedstrijd
        </h1>

        <div className={styles.grid}>
          <Link href="/adtjes">
            <Leaderboard />
          </Link>
          <Link href="/upload">
            <div href="/upload" className={styles.card}>
              <h3 className={styles.title}>Voeg adtje toe!</h3>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
