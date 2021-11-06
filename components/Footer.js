import styles from '../styles/footer.less'
import icon from '../styles/iconfont.less'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'

export default function Footer() {
    useEffect(() => {
        
    }, [])

    const handleOpen = (url) => {
        window.open(url)
    }
    return (
        <footer>
            <div className={styles.box}>
                <ul className={styles.more}>
                    <li>
                        移动版
                    </li>
                    <li>
                        <Link href="/about">关于我</Link>
                    </li>
                    <li>
                        <Link href="/about">联系我</Link>
                    </li>
                    <li>
                        中文
                    </li>
                    <li>
                        English
                    </li>
                    <li className={styles.friend}>
                        友情链接
                        <ul className={styles.friend_list}>
                            <li>
                                <a href="https://www.ruanyifeng.com/" target="_blank">阮一峰</a>
                            </li>
                            <li>
                                <a href="https://www.zhangxinxu.com/" target="_blank">张鑫旭</a>
                            </li>
                            <li>
                                <a href="http://jspang.com/" target="_blank">技术胖</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className={styles.contact}>
                    <li className={styles.wexin}>
                        <svg className={icon.icon} style={{fontSize: '22px'}} aria-hidden="true">
                            <use xlinkHref="#icon-gongzhonghao"></use>
                        </svg>
                        <div>
                            <img src="/static/images/code.png" />
                        </div>
                    </li>
                    <li onClick={() => handleOpen('https://github.com/zhounie')}>
                        <svg className={icon.icon} style={{fontSize: '22px'}} aria-hidden="true">
                            <use xlinkHref="#icon-github"></use>
                        </svg>
                    </li>
                </ul>
            </div>
        </footer>
    )
}