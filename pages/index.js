import Head from 'next/head'
import styles from '../styles/Home.module.sass'
import { GoMarkGithub } from 'react-icons/go';
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flacial</title>
        <meta name="description" content="Flacial home and projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={`${styles.nav} ${styles.orangefade}`}>
        <Marquee pauseOnHover gradientColor={'black'} speed={40}>
          <a href={'https://github.com/flacial/flacial-app'} target='_blank' rel="noreferrer">You can track the progress on <GoMarkGithub /></a>
        </Marquee>
      </nav>
      <main className={styles.main}>
        <h1 className={`${styles.title} ${styles.gradient}`}>
          Coming soon...
        </h1>
      </main>
    </div>
  )
}
