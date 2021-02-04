import { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import List from '../components/List'
import Layout from '../components/Layout'
import styles from '../styles/home.less'
import { getBlogList } from '../lib/api'
export default function Home(props) {
  const [active, setActive] = useState('')
  
  useEffect(() => {
    if (Router.router.query.type) {
      setActive(Router.router.query.type)
    }
  }, [])

  const onSetActive = (active) => {
    setActive(active)
    if (active) {
      Router.push({
        pathname: `/index`,
        query: {
          type: active
        }
      })
    } else {
      Router.push({
        pathname: '/'
      })
    }
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
                  <Link as={`/index/all`} href="/index/[active]">全部</Link>
                </p>
                <p className={active === 'vue' ? styles.active : ''}>
                  <Link as={`/index/vue`} href="/index/[active]">Vue</Link>
                </p>
                <p className={active === 'react' ? styles.active : ''}>
                  <Link as={`/index/react`} href="/index/[active]">React</Link>
                </p>
                <p className={active === 'javascript' ? styles.active : ''}>
                  <Link as={`/index/javascript`} href="/index/[active]">Javascript</Link>
                </p>
              </div>
            </div>
          </div>
          <List list={props.data}></List>
        </main>
      </Layout>
    </div>
  )
}

Home.getInitialProps = async function ({query}) {
  const res = await getBlogList(query)
  if (res.code === 200) {
    return {
      data: res.data
    }
  }
  return {
    data: []
  }
}