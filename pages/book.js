import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/book.less'
import { getBookList } from '../lib/api'

export default function Book (props) {
    return (
        <div className={styles.book}>
        <Header></Header>
        <div className={styles.main}>
            <ul className={styles.book_list_wrap}>
                {
                    props.data.map((item) => {
                        return <li className={styles.book_item}>
                            <div className={styles.img_wrap}>
                                <img src={item.img} />
                            </div>
                            <h5>{item.name}</h5>
                            <span>{item.author}</span>
                        </li>
                    })
                }
            </ul>
        </div>
        <Footer></Footer>
        </div>
    )
}



export async function getStaticProps({ params }) {
  let res = await getBookList()
  if (res.code === 200) {
    return {
      props: {
        data: res.data
      }
    }
  }
  return {
    props: {
      data: []
    }
  }
}
