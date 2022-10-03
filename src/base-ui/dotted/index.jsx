import React, { memo, useEffect, useRef } from 'react'
import { DottedDiv } from './style'
const DottedComponent = memo((props) => {
    const { selectIndex = 0 } = props;
    const contentRef = useRef()
    useEffect(() => {
        //选中元素
        const currentEle = contentRef.current.children[selectIndex]
        //选中的元素距离左边的宽度
        const currentLeft = currentEle.offsetLeft
        //选中的元素本身宽度的一半
        const currentEleWidth = currentEle.clientWidth * 0.5
        //盒子的宽度
        const contentWidth = contentRef.current.clientWidth * 0.5;
        const contentScroll = contentRef.current.scrollWidth
        //需要滚动的距离
        let distance = currentLeft + currentEleWidth - contentWidth;
        if (distance < 0) distance = 0
        const totalDistance = contentScroll - contentWidth
        if (distance > totalDistance) distance = totalDistance
        contentRef.current.style.transform = `translate(${-distance}px)`
    }, [selectIndex])
    return (
        <DottedDiv>
            <div className="contents" ref={contentRef} >
                {props.children}
            </div>
        </DottedDiv>
    )
})
export default DottedComponent