export default function Loading({children}) {
    return (
        <h1 dangerouslySetInnerHTML={{__html: children}} />
    )
}