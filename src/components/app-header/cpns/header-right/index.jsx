import React, { useState, useEffect } from 'react'
import { HeaderRightDiv } from './style'
import GlobalSvg from "@/assets/svg/icon_global.jsx"
import MenuSvg from "@/assets/svg/icon_menu.jsx"
import AvatarSvg from "@/assets/svg/icon_avatar.jsx"
export default function HeaderRight() {

    const [showFuncsWrapper, setShowFuncsWrapper] = useState(false)

    useEffect(() => {
        const showWrapper = () => {
            setShowFuncsWrapper(false)
        }
        window.addEventListener("click", showWrapper, true)
        return () => {
            window.removeEventListener("click", showWrapper, true)
        }
    }, [])

    const handleMenuClick = () => {
        setShowFuncsWrapper(true)
    }
    return (
        <HeaderRightDiv>
            <div className="btns">
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'><GlobalSvg /></span>
            </div>
            <div className="menu item" onClick={() => handleMenuClick()} >
                <MenuSvg />
                <AvatarSvg />
                {
                    showFuncsWrapper && <div className="funcs-wrapper">
                        <div className="top">
                            <div className='funcs'>登录</div>
                            <div className='funcs'>注册</div>
                        </div>
                        <div className="bottom">
                            <div className='funcs'>出租房源</div>
                            <div className='funcs'>开展体验</div>
                            <div className='funcs'>帮助</div>
                        </div>
                    </div>
                }
            </div>

        </HeaderRightDiv>
    )
}
