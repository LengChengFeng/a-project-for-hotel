import React, { useState } from 'react'
import { SectionTabsDiv } from "./style"

function SelectionTabs(props) {
    const { tabsData = [], tabClick = () => { } } = props;
    const [currenIndex, setCurrentIndex] = useState(0)
    return (
        <SectionTabsDiv>
            {tabsData.map((item, index) => {
                return (
                    <div key={item}
                        onClick={() => { setCurrentIndex(index); tabClick(item, index) }}
                        className={['item', currenIndex === index ? " active" : null].join('')}
                    >{item}</div>
                )
            })}
        </SectionTabsDiv>
    )
}



export default SelectionTabs
