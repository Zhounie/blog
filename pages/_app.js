import { useEffect } from 'react'
import '../styles/globals.less'
import '../styles/reset.less'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('../static/iconfont/iconfont.js')
  }, [])
  return (
    <>
    <style global jsx>
      {`
        .icon {
          width: 1em; height: 1em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
          font-size: 28px;
        }
      `}
    </style>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
