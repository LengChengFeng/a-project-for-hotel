import React from 'react'
import { HeaderDiv } from './style'
import HeaderLeft from "./cpns/header-left"
import HeaderRight from "./cpns/header-right"
import HeaderCenter from "./cpns/header-center"
export default function Header() {
    return (
        <HeaderDiv>
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </HeaderDiv>
    )
}
