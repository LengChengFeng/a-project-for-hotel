import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { HomerWrapper } from "./style"
import { isEmptyO } from '@/utils'
import HomeBanner from "./cpns/homeBanner"
import {
  homeGoodPriceAction,
  homeHighScoreDataAction,
  HomeDiscountDataAction,
  HomeHotRecommendDataAction,
  HomeLongforDataAction,
  HomePlusDataAction
} from "@/store/modules/homeReducer"
import HomeSectionV1 from './cpns/homeSectionV1'
import HomeSectionV2 from './cpns/homeSectionV2'
import HomeSectionV3 from './cpns/homeSectionV3'


const Home = memo(() => {
  const dispatch = useDispatch()
  //获取数据 放在redux统一进行管理
  useEffect(() => {
    dispatch(homeGoodPriceAction())
    dispatch(homeHighScoreDataAction())
    dispatch(HomeDiscountDataAction())
    dispatch(HomeHotRecommendDataAction())
    dispatch(HomeLongforDataAction())
    dispatch(HomePlusDataAction())
  }, [dispatch])
  //从redux拿数据
  const {
    goodPriceInfo, highScoreInfo,
    discountInfo, recommendInfo,
    longForInfo, plusInfo } = useSelector((state) => ({
      goodPriceInfo: state.home.goodPriceData,
      highScoreInfo: state.home.highScoreData,
      discountInfo: state.home.discountData,
      recommendInfo: state.home.hotRecommendData,
      longForInfo: state.home.longForData,
      plusInfo: state.home.homePlusData
    }), shallowEqual)

  console.log(plusInfo)
  return (
    <HomerWrapper>
      {/* 中间图片 */}
      <HomeBanner />
      <div className="content">
        {/* 热门目的地 */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {/* plus房源 */}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
        {/* 推荐目的地 */}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {/* 你可能想去 */}
        {isEmptyO(longForInfo) && <HomeSectionV3 infoData={longForInfo} />}
        {/* 高分好评房源 */}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 homeSelectionData={highScoreInfo} itemWidth="33.3%" />}
        {/* 高性价比房源 */}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 homeSelectionData={goodPriceInfo} />}
      </div>
    </HomerWrapper>
  )
})

export default Home