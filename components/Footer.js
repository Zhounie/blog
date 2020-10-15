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
                        联系我们
                    </li>
                    <li>
                        中文
                    </li>
                    <li>
                        English
                    </li>
                </ul>
                <ul className={styles.contact}>
                    <li>
                        <svg className={icon.icon} style={{fontSize: '22px'}} aria-hidden="true">
                            <use xlinkHref="#icon-gongzhonghao"></use>
                        </svg>
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