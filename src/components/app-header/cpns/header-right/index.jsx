import React from 'react'
import { HeaderRightDiv } from './style'
import GlobalSvg from "@/assets/svg/icon_global.jsx"
import MenuSvg from "@/assets/svg/icon_menu.jsx"
import AvatarSvg from "@/assets/svg/icon_avatar.jsx"
export default function HeaderRight() {
    return (
        <HeaderRightDiv>
            <div className="btns">
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'><GlobalSvg /></span>
            </div>
            <div className="menu item">
                <MenuSvg />
                <AvatarSvg />
            </div>

        </HeaderRightDiv>
    )
}
