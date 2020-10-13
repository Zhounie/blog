import Head from 'next/head'

import Header from '../components/Header'
import List from '../components/List'

import styles from '../styles/home.less'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>首页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={styles.main}>
        <List></List>
      </main>
    </div>
  )
}
