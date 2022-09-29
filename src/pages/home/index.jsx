import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { HomerWrapper } from "./style"
import HomeBanner from "./cpns/homeBanner"
import { homeGoodPriceAction, homeHighScoreDataAction, HomeDiscountDataAction } from "@/store/modules/homeReducer"
import HomeSelectionV1 from './cpns/homeSelectionV1'
import SectionTabs from "@/components/section-tabs"
export default function Home() {
  const dispatch = useDispatch()
  //获取数据
  useEffect(() => {
    dispatch(homeGoodPriceAction())
    dispatch(homeHighScoreDataAction())
    dispatch(HomeDiscountDataAction())
  }, [dispatch])
  //从redux拿数据
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceData,
    highScoreInfo: state.home.highScoreData,
    discountInfo: state.home.discountData
  }), shallowEqual)

  const tabsData = discountInfo?.dest_address?.map(item => item.name)
  const tabClick = (item, index) => {
    console.log(item, index)
  }
  return (
    <HomerWrapper>
      <HomeBanner />
      <div className="content">
        <SectionTabs tabsData={tabsData} tabClick={tabClick} />
        <HomeSelectionV1 homeSelectionData={highScoreInfo} itemWidth="33.3%" />
        <HomeSelectionV1 homeSelectionData={goodPriceInfo} />
      </div>
    </HomerWrapper>
  )
}
