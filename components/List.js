import Link from 'next/link'

import styles from '../styles/list.less'

export default function List(props) {
    const list = [
        {
            id: 1,
            title: '这是文章标题1',
            time: '这是时间'
        }, {
            id: 2,
            title: '这是文章标题2',
            time: '这是时间'
        }, {
            id: 3,
            title: '这是文章标题3',
            time: '这是时间'
        }, {
            id: 4,
            title: '这是文章标题4',
            time: '这是时间'
        }
    ]
    return (
        <div className={styles.list}>
            {
                props.list.map(item => {
                    return (
                        <div className={styles.item} key={item.id}>
                            <h4 className={styles.title}>{item.title}</h4>
                            <span className={styles.time}>{item.create_time}</span>
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

