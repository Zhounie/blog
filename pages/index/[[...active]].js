import { useState, useEffect } from 'react'
import path from 'path'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import List from '../../components/List'
import Layout from '../../components/Layout'
import styles from '../../styles/home.less'
import { getBlogList } from '../../lib/api'
import Loading from '../../components/Loading'

export default function Home(props) {
  const router = useRouter()
  let active = ''
  if (Array.isArray(router.query.active)) {
    active = router.query.active[0]
  }
  return (
    <div className={styles.home}>
      <Head>
        <title>首页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <div className={styles.left_box}>
            <div className={styles.classify}>
              <h4>分类</h4>
              <div>
                <p className={!active ? styles.active : ''}>
                  <Link href="/index">
                    <span>全部</span>
                  </Link>
                </p>
                <p className={active === 'vue' ? styles.active : ''}>
                  <Link href="/index/vue">
                    <span>Vue</span>
                  </Link>
                </p>
                <p className={active === 'react' ? styles.active : ''}>
                  <Link href="/index/react">
                    <span>React</span>
                  </Link>
                </p>
                <p className={active === 'javascript' ? styles.active : ''}>
                  <Link href="/index/javascript">
                    <span>Javascript</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {
            router.isFallback ? (
              <Loading>Loading...</Loading>
            ) : <List list={props.data || []}></List>
          }
        </main>
      </Layout>
    </div>
  )
}

export async function getStaticProps({ params }) {
  let query = {}
  if (params.active) {
    query.active = params.active[0]
  }
  const res = await getBlogList(query)
  if (res.code === 200) {
    return {
      props: {
        data: res.data
      }
    }
  }
  return {
    props: {
      data: []
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}