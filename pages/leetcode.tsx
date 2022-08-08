import React from 'react'
import Layout from '../components/Layout'
import ProblemCard from '../components/ProblemCard'
import styles from '../styles/Leetcode.module.sass'
import { Problem, problems } from '../data/problems'
import { promises as fs } from 'fs'
import path from 'path'

type Props = {
  problems: Problem[]
  explanations: { filename: string; content: string }[]
}

const Leetcode = ({ problems, explanations }: Props) => {
  const problemsToProblemCards = problems.map(p => (
    <ProblemCard
      key={p.id}
      problem={p}
      explanation={explanations.find(e => e.filename === p.short)}
    />
  ))

  return (
    <Layout title="Leetcode">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 className={styles.heading__title}>Leetcode</h1>
          <p className={styles.heading__desc}>
            Here are my super smart solutions for a couple of Leetcode problems.
            Most of them are related to Dynamic Programming.
          </p>
        </div>
        <div className={styles.problems}>{problemsToProblemCards}</div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const explanationsDir = path.join(process.cwd(), 'data/explanations')
  const filenames = await fs.readdir(explanationsDir)

  const explanations = filenames.map(async filename => {
    const filePath = path.join(explanationsDir, filename)
    const fileContents = await fs.readFile(filePath, 'utf8')

    return {
      filename: filename.split('.')[0],
      content: fileContents
    }
  })

  return {
    props: {
      problems,
      explanations: await Promise.all(explanations)
    }
  }
}

export default Leetcode
