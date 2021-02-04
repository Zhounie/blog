import marked from 'marked'
import stylesMarkdown from '../styles/markdown.less'
import style from '../styles/content.less'

export default function Content({ content }) {
    return (
        <div className={style.content}>
            <div
                className={stylesMarkdown.markdown_content}
                dangerouslySetInnerHTML={{__html: marked(content)}}
            />
        </div>
    )
}