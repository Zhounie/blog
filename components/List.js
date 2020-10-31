import Link from 'next/link'

import styles from '../styles/list.less'

export default function List(props) {
    return (
        <div className={styles.list}>
            {
                props.list.map(item => {
                    return (
                        <div className={styles.item} key={item.id}>
                            <h4 className={styles.title}>{item.title}</h4>
                            <span className={styles.time}>{item.createdAt}</span>
                            <span className={styles.more}>
                            <Link href={{pathname: '/detail', query: {id: item.id}}}>...阅读全文</Link>
                            </span>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

