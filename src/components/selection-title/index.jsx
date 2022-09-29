import React from 'react'
import PropTypes from 'prop-types'
import { SelectionTitleDiv } from "./style"
function SelectionTitle(props) {
    const { title = "", subTitle = "" } = props;
    return (
        <SelectionTitleDiv >
            <h2>{title}</h2>
            {subTitle && <div className='sub-title'>{subTitle}</div>}
        </SelectionTitleDiv>
    )
}

SelectionTitle.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default SelectionTitle
