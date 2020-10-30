import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/detail.less'

// import Editor from 'editor.md'


import { useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import marked from 'marked'

export default function Detail(props) {
    useEffect(() => {
        document.getElementById('content').innerHTML = marked(props.data.content)
    }, [])
    return (
        <div className={styles.detail}>
            <Header></Header>
            <main className={styles.main}>
                <div id="content"></div>
            </main>
            <Footer></Footer>
        </div>
    )
}

Detail.getInitialProps = async function ({query}) {
    console.log(query);
    if (!query.id) {
        return {}
    }
    const result = await fetch(`http://localhost:8888/blog/getBlogDetail?id=${query.id}`)
    const res = await result.json()
    if (res.code === 200) {
      return {
        data: res.data
      }
    }
    return {
      data: {}
    }
}