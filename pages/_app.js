import { useEffect } from 'react'
import '../styles/globals.less'
import '../styles/reset.less'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('../static/iconfont/iconfont.js')
  }, [])
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
