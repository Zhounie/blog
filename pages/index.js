import { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/List'

import styles from '../styles/home.less'
// import fetch from 'isomorphic-unfetch'
import axios from 'axios'

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
        pathname: '/',
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
      <Header></Header>
      <main className={styles.main}>
        <div className={styles.left_box}>
          <div className={styles.classify}>
            <h4>分类</h4>
            <div>
              <p className={!active ? styles.active : ''} onClick={() => onSetActive()}>
                <span>全部</span>
              </p>
              <p className={active === 'vue' ? styles.active : ''} onClick={() => onSetActive('vue')}>
                <span>Vue</span>
              </p>
              <p className={active === 'react' ? styles.active : ''} onClick={() => onSetActive('react')}>
                <span>React</span>
              </p>
              <p className={active === 'javascript' ? styles.active : ''} onClick={() => onSetActive('javascript')}>
                <span>Javascript</span>
              </p>
            </div>
          </div>
        </div>
        <List list={props.data}></List>
      </main>
      <Footer></Footer>
    </div>
  )
}

Home.getInitialProps = async function ({query}) {
  console.log('----------');
  let res = await axios.get(`http://81.69.28.107:8888/blog/getBlogList`, {
    params: query
  })
  if (res.data.code === 200) {
    return {
      data: res.data.data
    }
  }
  return {
    data: []
  }
}
