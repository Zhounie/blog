import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import Content from '../../components/Content'
import Loading from '../../components/Loading'
import { getBlogDetail } from '../../lib/api'
import styles from '../../styles/posts.less'

export default function Post({ data }) {
    const router = useRouter()
    if (!router.isFallback && !data?.id) {
        return <ErrorPage statusCode={502}></ErrorPage>
    }
    return (
        <div className={styles.posts}>
            <Layout>
                <div className={styles.main}>
                    {
                        router.isFallback ? (
                            <Loading>Loading...</Loading>
                        ) : (
                            <Content content={data.content}></Content>
                        )
                    }
                </div>
            </Layout>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const res = await getBlogDetail(params.slug)
    if(res.code === 200) {
        return {
            props: {
                data: res.data
            }
        }
    }
    return {
        props: {
            content: []
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}