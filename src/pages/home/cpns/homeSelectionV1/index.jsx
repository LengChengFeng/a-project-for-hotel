import React from "react";
import SelectionTitle from "@/components/selection-title";
import SelectionHotelItem from "@/components/section-hotel-item";
import { HomeSelectionV1Div } from "./style"
export default function HomeSelectionV1(props) {
    const { homeSelectionData = {}, itemWidth = "25%" } = props;
    return (
        <HomeSelectionV1Div>
            <SelectionTitle title={homeSelectionData?.title} subTitle={homeSelectionData?.subtitle
            } />
            <div className="hotels">
                {homeSelectionData?.list?.slice(0, 8)?.map((item) => {
                    return <SelectionHotelItem sectionHotelData={item} key={item.id} itemWidth={itemWidth} />;
                })}
            </div>
        </HomeSelectionV1Div>
    );
}
