import Link from 'next/link'

import styles from '../styles/header.less'

export default function Header() {
    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li>
                    <Link href="/">首页</Link>
                </li>
                <li>
                    <Link href="/about">关于</Link>
                </li>
            </ul>
        </div>
    )
}