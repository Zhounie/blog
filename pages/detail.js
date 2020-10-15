import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/detail.less'

// import Editor from 'editor.md'


import { useEffect } from 'react'

import marked from 'marked'
export default function Detail() {
    
    useEffect(() => {
        // const $ = require('jquery')(window)
        // require('../static/js/editormd.min.js')
        // editormd.markdownToHTML("content", {
        //     htmlDecode: "style,script,iframe",
        //     emoji: true,
        //     taskList: true,
        //     tocm: true,
        //     tex: true, // 默认不解析
        //     flowChart: true, // 默认不解析
        //     sequenceDiagram: true, // 默认不解析
        //     codeFold: true
        // })
        document.getElementById('content').innerHTML = marked('# Marked in the browser\n\nRendered by **marked**.')
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