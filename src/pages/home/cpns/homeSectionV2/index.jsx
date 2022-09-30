import SectionFooter from '@/components/section-footer'

import SectionHotels from '@/components/section-hotels'
import SectionTabs from "@/components/section-tabs"
import SectionTitle from '@/components/section-title'
import React, { useState } from 'react'
import { HomeSectionV2Div } from './style'

export default function HomeSectionV2(props) {
    const { infoData = {} } = props
    const selectName = Object.keys(infoData.dest_list)[0]
    const [name, setName] = useState(selectName)
    //整理tabs的数据
    const tabsData = infoData?.dest_address?.map(item => item.name)
    tabsData.push("cba")
    tabsData.push("cda")
    tabsData.push("cea")
    //tabs的回调拿到数据
    const tabClick = (item, index) => {
        setName(item)
        console.log(item, index)
    }
    return (
        <HomeSectionV2Div>
            <SectionTitle title={infoData.title} subtitle={infoData.subtitle} />
            <SectionTabs tabsData={tabsData} tabClick={tabClick} />
            <SectionHotels hotelList={infoData.dest_list?.[name]} itemWidth="33.3%" />
            <SectionFooter name={name} />
        </HomeSectionV2Div>
    )
}
