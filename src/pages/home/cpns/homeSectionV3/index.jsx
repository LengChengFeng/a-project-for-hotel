import React from 'react'
import { HomeSectionV3Div } from './style'
import SelectionTitle from "@/components/section-title";
import SectionFooter from '@/components/section-footer';
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view';
export default function HomeSectionV3(props) {
    const { infoData = {} } = props;
    return (
        <HomeSectionV3Div>
            <SelectionTitle title={infoData?.title} subTitle={infoData?.subtitle
            } />

            <div className='longfor-list'>
                <ScrollView>
                    {
                        infoData.list.map(item => {

                            return <LongforItem itemData={item} key={item.picture_url} />
                        })
                    }
                </ScrollView>
            </div>

            <SectionFooter />
        </HomeSectionV3Div>
    )
}
