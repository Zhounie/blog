const API_URL = process.env.API_URL
import qs from 'qs'

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
    const data = await fetchAPI(`/blog/getClientBlogList`)
    return data
}

export async function getBlogDetail(id) {
  const data = await fetchAPI(`/blog/getBlogDetail?id=${id}`)
  return data
}