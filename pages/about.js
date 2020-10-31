import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/about.less'

export default function About() {
    return (
        <div className={styles.about}>
            <Head>
                <title>关于</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <main className={styles.main}>
                <div className={styles.about_item_box}>
                    <div className={styles.title}>关于我</div>
                    <div className={styles.content}>1231231212312312123123121231231212312312</div>
                </div>
                <div className={styles.about_item_box}>
                    <div className={styles.title}>联系我</div>
                    <div className={styles.content}>1231231212312312123123121231231212312312</div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}