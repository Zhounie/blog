import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/book.less'
import axios from 'axios'

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

Book.getInitialProps = async function ({query}) {
    console.log('----------');
    let res = await axios.get(`http://localhost:8888/book/getBookList`, {
      params: query
    })
    console.log(res.data);
    if (res.data.code === 200) {
      return {
        data: res.data.data
      }
    }
    return {
      data: []
    }
  }
  