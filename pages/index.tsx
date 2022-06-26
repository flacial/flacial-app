import styles from '../styles/Home.module.sass'
import { GoMarkGithub } from 'react-icons/go';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title='Home'>
        <nav className={styles.nav} >
          <a href={'https://github.com/flacial/flacial-app'} target='_blank' rel="noreferrer">You can track the progress on <GoMarkGithub /></a>
        </nav>
        <main className={styles.main}>
          <h1 className={`${styles.title} ${styles.gradient}`}>
            Coming soon...
          </h1>
        </main>
    </Layout>
  )
}
