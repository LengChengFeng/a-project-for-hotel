import React from 'react'
import { HomeSectionV3Div } from './style'
import SelectionTitle from "@/components/section-title";
import SectionFooter from '@/components/section-footer';
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view';
export default function HomeSectionV3(props) {
    const { infoData = {} } = props;
    console.log(infoData);
    return (
        <HomeSectionV3Div>
            <SelectionTitle title={infoData?.title} subTitle={infoData?.subtitle
            } />

            <div className='longfor-list'>
                <ScrollView>
                    {
                        infoData.list.map(item => {
                            return <LongforItem itemData={item} key={item.city} />
                        })
                    }
                </ScrollView>
            </div>

            <SectionFooter />
        </HomeSectionV3Div>
    )
}
