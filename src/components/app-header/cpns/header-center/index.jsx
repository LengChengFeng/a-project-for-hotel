import React from 'react'
import { HeaderCenterDiv } from "./style"
import IconSearchBar from '@/assets/svg/icon-search-bar'
export default function HeaderCenter() {
    return (
        <HeaderCenterDiv>
            <div className="input-wrapper">
                <div className='text'>搜索房源和体验</div>
                <div className='search'><IconSearchBar /></div>
            </div>
        </HeaderCenterDiv>
    )
}
