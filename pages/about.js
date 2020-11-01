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
                    <div className={styles.content}>
                        <p>
                            <h5>现居地：</h5>
                            浙江·杭州
                        </p>
                        <p>
                            <h5>职业生涯：</h5>
                            2018年08月在杭州滨江开始我的第一份前端岗位，次年08月由于公司业务结构调整离开第一份工作；<br/>
                            2019年08月同滨江开始了我的第二份前端工作，没满一年，公司出现财务状况，无奈解散；<br/>
                            2020年07月也是杭州，但是区域换到了近江，也是前端至今...<br/>
                            前进中...
                        </p>
                    </div>
                </div>
                <div className={styles.about_item_box}>
                    <div className={styles.title}>联系我</div>
                    <div className={styles.content}>
                        <p>
                            <svg style={{fontSize: '20px', color: '#666'}} className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-gongzhonghao"></use>
                            </svg>
                            <span>iszhounie</span>
                        </p>
                        <p>
                            <svg style={{fontSize: '20px', color: '#666'}} className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-email-fill"></use>
                            </svg>
                            <span>iszhounie@aliyun.com</span>
                        </p>
                        <p>
                            <svg style={{fontSize: '20px', color: '#666'}} className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-mobile-phone"></use>
                            </svg>
                            <span>18024546675</span>
                        </p>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}