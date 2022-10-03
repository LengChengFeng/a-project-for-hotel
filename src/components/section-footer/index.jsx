import React from 'react'
import { SectionFooterDiv } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router';
export default function SectionFooter(props) {
    const navigate = useNavigate()
    const { name = "" } = props;
    let showMessage = "显示全部"
    if (name) {
        showMessage = `显示更多${name}房源`
    }
    return (
        <SectionFooterDiv>
            <div className='info' style={{ color: name ? "#00848A" : "#000" }}
                onClick={() => { navigate("/entire") }}>
                <span className='text' >{showMessage}</span>
                <IconMoreArrow />
            </div>
        </SectionFooterDiv>
    )
}
