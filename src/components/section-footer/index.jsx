import React from 'react'
import { SectionFooterDiv } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
export default function SectionFooter(props) {
    const { name = "" } = props;
    let showMessage = "显示全部"
    if (name) {
        showMessage = `显示更多${name}房源`
    }
    return (
        <SectionFooterDiv>
            <div className='info' style={{ color: name ? "#00848A" : "#000" }} >
                <span className='text' >{showMessage}</span>
                <IconMoreArrow />
            </div>
        </SectionFooterDiv>
    )
}
