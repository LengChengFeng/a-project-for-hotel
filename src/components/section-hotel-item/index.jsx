import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { SelectionHotelItemDiv } from './style';
import { Carousel } from 'antd';
import { Rate } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import DottedComponent from '@/base-ui/dotted';
function SelectionHotelItem(props) {
    const { sectionHotelData = {}, itemWidth = "25%" } = props;
    const swiperRef = useRef()
    const [selectIndex, setSelectIndex] = useState(0)

    const handleTransform = (type) => {
        console.log(type)
        type ? swiperRef?.current.prev() : swiperRef?.current.next()
        let currentIndex = type ? selectIndex - 1 : selectIndex + 1;
        console.log(currentIndex)
        if (currentIndex > sectionHotelData?.picture_urls.length - 1) {
            console.log('wwee');
            currentIndex = 0
        }
        if (currentIndex < 0) {
            currentIndex = sectionHotelData?.picture_urls.length - 1
        }

        setSelectIndex(currentIndex)
        console.log('我被执行')
    }
    return (
        <SelectionHotelItemDiv itemWidth={itemWidth}>

            {!sectionHotelData?.picture_urls &&
                <div className='img-cover'>
                    <img src={sectionHotelData.picture_url} alt="" />
                </div>
            }
            {!!sectionHotelData?.picture_urls &&
                <div className="swiper" >
                    <Carousel dots={false} ref={swiperRef}>
                        {sectionHotelData?.picture_urls.map((item, index) => {
                            return (
                                <div className='imgs-swiper'>
                                    <span className='pre'
                                        onClick={() => handleTransform(true)}>
                                        <IconArrowLeft />
                                    </span>
                                    <img src={item} key={index} className="my-img" alt="" />
                                    <span className='next' onClick={() => handleTransform(false)}>
                                        <IconArrowRight />
                                    </span>
                                </div>
                            )
                        })}
                    </Carousel>
                    <div className="dotted-wrapper">
                        <DottedComponent selectIndex={selectIndex}>
                            {
                                sectionHotelData?.picture_urls.map((item, index) => {
                                    return (
                                        <div className='dotted-item'>
                                            <span className={['dotted', selectIndex === index ? " active" : null].join('')} key={index}></span>
                                        </div>
                                    )
                                })
                            }
                        </DottedComponent>
                    </div>
                </div>
            }
            <div className="type" style={{ color: sectionHotelData?.verify_info?.text_color }}>
                {sectionHotelData?.verify_info?.messages}
            </div>
            <div className="desc">
                {sectionHotelData.name}
            </div>
            <div className="price">
                {sectionHotelData.price_format}/晚
            </div>
            <div className="rate">
                <Rate allowHalf value={sectionHotelData.star_rating ?? 5} disabled style={{
                    fontSize: "12px",
                    color: "red"
                }} />
                <div className='text'>
                    <span className='count'>{sectionHotelData.reviews_count}</span>
                    {
                        sectionHotelData.bottom_info && <span className='extra'>·{sectionHotelData.bottom_info?.content}</span>
                    }
                </div>
            </div>
        </SelectionHotelItemDiv>)
}



SelectionHotelItem.propTypes = {
    sectionHotelData: PropTypes.object.isRequired
}

export default SelectionHotelItem
