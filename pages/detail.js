import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/detail.less'
import stylesMarkdown from '../styles/markdown.less'
// import Editor from 'editor.md'

import Up from '../components/Up'


import { useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import marked from 'marked'

export default function Detail(props) {
    useEffect(() => {
        document.getElementById('markdown_content').innerHTML = marked(props.data.content || '')
    }, [])
    return (
        <div className={styles.detail}>
            <Header></Header>
            <main className={styles.main}>
                <div id="markdown_content" className={stylesMarkdown.markdown_content}></div>
            </main>
            <Footer></Footer>
            <Up></Up>
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
    console.log(res);
    if (res.code === 200) {
      return {
        data: res.data
      }
    }
    return {
      data: {}
    }
}