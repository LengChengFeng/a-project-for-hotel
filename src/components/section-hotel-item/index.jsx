import React from 'react'
import PropTypes from 'prop-types'
import { SelectionHotelItemDiv } from './style';
import { Rate } from 'antd';
function SelectionHotelItem(props) {
    const { sectionHotelData = {}, itemWidth = "25%" } = props;
    return (
        <SelectionHotelItemDiv itemWidth={itemWidth}>
            <div className="img-cover">
                <img src={sectionHotelData.picture_url} alt="" />
            </div>
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
