import React from 'react'
import { HeaderLeftDiv } from './style'
import IconSvg from "@/assets/svg/icon_logo.jsx"
export default function HeaderLeft() {
    return (
        <HeaderLeftDiv>
            <div className="logo">
                <IconSvg />
            </div>
        </HeaderLeftDiv>
    )
}
