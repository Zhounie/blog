import { useEffect, useState, useRef } from 'react'

import Link from 'next/link'
import styles from '../styles/header.less'

import Router from 'next/router'

import icon from '../styles/iconfont.less'

export default function Header(props) {
    const [path, setPath] = useState('')
    const [display, setDisplay] = useState('none')
    const [showSearch, setShowSearch] = useState(false)
    const searchRef = useRef()
    useEffect(() => {
        setPath(Router.asPath)
    }, [])
    
    const onMouseEnter = () => {
        setDisplay('block')
    }
    const onMouseMove = () => {
        setDisplay('none')
    }
    const onShowSearch = (show) => {
        setShowSearch(show)
    }
    const onBlur = () => {
        setShowSearch(false)
    }

    const onSearch = () => {
        
    }
    return (
        <>
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.photo}>
                    <img src="/static/images/photo.jpg" />
                </div>
            </div>
            {
                !showSearch ? 
                <>
                <ul className={styles.menu}>
                    <li className={path === '/' ? styles.active : ''}>
                        <Link href="/">首页</Link>
                    </li>
                    <li className={path === '/about' ? styles.active : ''}>
                        <Link href="/about">关于</Link>
                    </li>
                    <li className={path === '/about' ? styles.active : ''} onMouseEnter={onMouseEnter} onMouseLeave={onMouseMove}>
                        <svg className={icon.icon} aria-hidden="true">
                            <use xlinkHref="#icon-More"></use>
                        </svg>
                        <div className={styles.more} style={{display: display}}>
                            <p>Vue</p>
                            <p>React</p>
                            <p>JavaScript</p>
                        </div>
                    </li>
                </ul>
                </>
                :
                <div className={styles.search}>
                    <svg className={icon.icon} aria-hidden="true" onClick={() => setShowSearch(false)}>
                        <use xlinkHref="#icon-close"></use>
                    </svg>
                    <input ref={searchRef} autoFocus={true} type="text" onBlur={onBlur} />
                    <svg className={icon.icon} aria-hidden="true" onClick={() => onSearch}>
                        <use xlinkHref="#icon-search"></use>
                    </svg>
                </div>
            }
            <div style={{visibility: showSearch ? 'hidden' : 'visible'}} className={styles.right} onClick={() => onShowSearch(true)}>
                <svg className={icon.icon} aria-hidden="true">
                    <use xlinkHref="#icon-search"></use>
                </svg>
            </div>
        </div>
        </>
    )
}