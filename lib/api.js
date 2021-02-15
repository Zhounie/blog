const API_URL = process.env.API_URL

async function fetchAPI(url) {
    const headers = { 'Content-Type': 'application/json' }
    const res = await fetch(API_URL + url, {
      method: 'GET',
      headers
    })
    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json
}

export async function getBlogList(query) {
    let url = `/blog/getClientBlogList`
    if (query.active) {
      url = `/blog/getClientBlogList?type=${query.active}`
    }
    const data = await fetchAPI(url)
    return data
}

export async function getBlogDetail(id) {
  const data = await fetchAPI(`/blog/getBlogDetail?id=${id}`)
  return data
}