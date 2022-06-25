import React, { PropsWithChildren } from 'react'
import styles from '../styles/Layout.module.sass'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
      <main className={styles.main}>
          {children}
      </main>
  )
}

export default Layout