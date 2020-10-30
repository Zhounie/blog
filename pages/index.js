import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/List'

import styles from '../styles/home.less'
// import fetch from 'isomorphic-unfetch'
import axios from 'axios'

export default function Home(props) {
  return (
    <div className={styles.home}>
      <Head>
        <title>首页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={styles.main}>
        <List list={props.data}></List>
      </main>
      <Footer></Footer>
    </div>
  )
}

Home.getInitialProps = async function () {
  // const result = await fetch('', {
  //   herders: {
  //     'Access-Control-Request-Method': '*'
  //   },
  //   mode: 'no-cors'
  // })
  // console.log(result);
  // if (result) {
  //   const res = await result.json()
  //   if (res.code === 200) {
  //     return {
  //       data: res.data
  //     }
  //   }
  // }

  let res = await axios.get('http://localhost:8888/blog/getBlogList')
  if (res.data.code === 200) {
    return {
      data: res.data.data
    }
  }
  return {
    data: []
  }
}
