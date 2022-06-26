import React from 'react'
import Layout from '../components/Layout'
import ProblemCard from '../components/ProblemCard'
import styles from '../styles/Leetcode.module.sass'
import { Problem, problems } from '../data/problems'

type Props = {
  problems: Problem[]
}

const Leetcode = ({ problems }: Props) => {
  const problemsToProblemCards = problems.map(p => <ProblemCard key={p.id} problem={p} />)

  return (
    <Layout title='Leetcode'>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 className={styles.heading__title}>Leetcode</h1>
          <p className={styles.heading__desc}>Here are my super smart solutions for a couple of Leetcode problems. Most of them are related to Dynamic Programming.</p>
        </div>
        <div className={styles.problems}>
          {problemsToProblemCards}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      problems
    }
  }
}

export default Leetcode