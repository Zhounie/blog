import { useEffect } from 'react'
import Markdown from 'react-markdown'

import Header from '../components/Header'
import Footer from '../components/Footer'



// import Editor from 'editor.md'

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`


export default function Detail(props) {
    useEffect(() => {
    }, [])
    return (
        <div>
            <Header></Header>
            <main>
                编辑
                <Markdown source={markdown}></Markdown>
            </main>
            <Footer></Footer>
        </div>
    )
}