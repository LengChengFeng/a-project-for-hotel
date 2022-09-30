import React from 'react'
import { SectionHotelsDiv } from './style'
import SelectionHotelItem from '@/components/section-hotel-item'
export default function SectionHotels(props) {
    const { hotelList = [], itemWidth = "25%" } = props
    return (
        <SectionHotelsDiv>
            {hotelList.map(item => {
                return <SelectionHotelItem sectionHotelData={item} key={item.id} itemWidth={itemWidth} />
            })}

        </SectionHotelsDiv>
    )
}
