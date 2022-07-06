import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import styles from '../styles/Layout.module.sass'

const Layout: React.FC<PropsWithChildren & { title: string }> = ({
  children,
  title
}) => {
  return (
    <>
      <Head>
        <title>{`Flacial — ${title}`}</title>
        <meta name="description" content="Flacial home and projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
