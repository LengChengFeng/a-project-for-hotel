import React, { useEffect, useRef, useState } from 'react'
import { ScrollViewDiv } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
export default function ScrollView(props) {
    const [showRightBtn, setShowRightBtn] = useState(false)
    const [showLeftBtn, setShowLeftBtn] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [distance, setDistance] = useState(0)
    const contentRef = useRef()
    useEffect(() => {
        const scrollWidth = contentRef.current.scrollWidth;
        const clientWidth = contentRef.current.clientWidth;
        const totalDistance = scrollWidth - clientWidth;
        setDistance(totalDistance)
        setShowRightBtn(totalDistance > 0)
    }, [props.children])
    const handleMove = (right) => {
        let newIndex = right ? currentIndex + 1 : currentIndex - 1;
        const moveDistance = contentRef.current.children[newIndex].offsetLeft
        contentRef.current.style.transform = `translate(-${moveDistance}px)`
        setCurrentIndex(newIndex)
        setShowRightBtn(moveDistance < distance)
        setShowLeftBtn(moveDistance > 0)
    }
    return (
        <ScrollViewDiv>
            {showLeftBtn &&
                <div className='control left'
                    onClick={() => handleMove(false)}>
                    <IconArrowLeft />
                </div>}
            <div className="scroll-content">
                <div className="content-wrapper" ref={contentRef}>
                    {props.children}
                </div>
            </div>
            {showRightBtn &&
                <div className="control right"
                    onClick={() => handleMove(true)}>
                    <IconArrowRight />
                </div>}
        </ScrollViewDiv>
    )
}
