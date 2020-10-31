import { useEffect, useState } from 'react'

import Link from 'next/link'
import styles from '../styles/header.less'

import Router from 'next/router'

import icon from '../styles/iconfont.less'

export default function Header(props) {
    const [path, setPath] = useState('')
    useEffect(() => {
        setPath(Router.asPath)
    }, [])
    return (
        <>
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.photo}>
                    <img src="/static/images/photo.jpg" />
                </div>
            </div>
            <ul className={styles.menu}>
                <li className={path === '/' ? styles.active : ''}>
                    <Link href="/">首页</Link>
                </li>
                <li className={path === '/about' ? styles.active : ''}>
                    <Link href="/about">关于</Link>
                </li>
                <li className={path === '/about' ? styles.active : ''}>
                    <svg className={icon.icon} aria-hidden="true">
                        <use xlinkHref="#icon-More"></use>
                    </svg>
                    <ul className={styles.more}>
                        <li>Vue</li>
                        <li>React</li>
                        <li>Javascript</li>
                    </ul>
                </li>
            </ul>
            <div className={styles.right}>
                <svg className={icon.icon} aria-hidden="true">
                    <use xlinkHref="#icon-search"></use>
                </svg>
            </div>
        </div>
        </>
    )
}