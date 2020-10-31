
import { useEffect, useState, useRef } from 'react'

export default function Up() {
    const [showUp, setShowUp] = useState(false)
    const [height, setHeight] = useState(60)
    const upRef = useRef()
    useEffect(() => {
        let flag = true
        document.onscroll = () => {
            if (flag) {
                flag = false
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 當前滾動距離
                let clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight) // 屏幕寬度
                let pageHeight = document.body.clientHeight // 页面高度
                // 页面高度 - (滚动距离 + 屏幕高度) = 当前距离底部的距离
                let bottomHeight = pageHeight - (scrollTop + clientHeight)
                if (bottomHeight < 180) {
                    setHeight(Math.abs(bottomHeight - 180) + 60)
                } else {
                    setHeight(60)
                }
                if(scrollTop > 1400) {
                    setShowUp(true)
                } else {
                    setShowUp(false)
                }
                setTimeout(() => {
                    flag = true
                })
            }
        }
    }, [])

    const onClick = () => {
        document.documentElement.scrollTop = 0
    }
    return (
        <>
        <style jsx>
            {`
                .up {
                    width: 50px;
                    height: 50px;
                    background: #ddd;
                    position: fixed;
                    bottom: 60px;
                    left: 50%;
                    margin-left: 630px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    cursor: pointer;
                    border-radius: 6px;
                }
                .up:hover {
                    background: #ccc;
                }
            `}
        </style>
        {
            showUp ? (<div ref={upRef} className='up' style={{bottom: height + 'px'}} onClick={onClick}>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-up"></use>
                </svg>
            </div>) : ''
        }
        </>
    )
}