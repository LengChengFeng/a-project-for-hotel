import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { HomerWrapper } from "./style"
import { isEmptyO } from '@/utils'
import HomeBanner from "./cpns/homeBanner"
import {
  homeGoodPriceAction,
  homeHighScoreDataAction,
  HomeDiscountDataAction,
  HomeHotRecommendDataAction,
  HomeLongforDataAction
} from "@/store/modules/homeReducer"
import HomeSectionV1 from './cpns/homeSectionV1'
import HomeSectionV2 from './cpns/homeSectionV2'
import HomeSectionV3 from './cpns/homeSectionV3'


export default function Home() {
  const dispatch = useDispatch()
  //获取数据 放在redux统一进行管理
  useEffect(() => {
    dispatch(homeGoodPriceAction())
    dispatch(homeHighScoreDataAction())
    dispatch(HomeDiscountDataAction())
    dispatch(HomeHotRecommendDataAction())
    dispatch(HomeLongforDataAction())
  }, [dispatch])
  //从redux拿数据
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longForInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceData,
    highScoreInfo: state.home.highScoreData,
    discountInfo: state.home.discountData,
    recommendInfo: state.home.hotRecommendData,
    longForInfo: state.home.longForData
  }), shallowEqual)




  return (
    <HomerWrapper>
      {/* 中间图片 */}
      <HomeBanner />
      <div className="content">
        {isEmptyO(longForInfo) && <HomeSectionV3 infoData={longForInfo} />}
        {/* 高分好评房源 */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}


        {/* 高分好评房源 */}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 homeSelectionData={highScoreInfo} itemWidth="33.3%" />}
        {/* 高性价比房源 */}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 homeSelectionData={goodPriceInfo} />}
      </div>
    </HomerWrapper>
  )
}
