import React from "react";
import SelectionTitle from "@/components/section-title";
import { HomeSelectionV1Div } from "./style"
import SectionFooter from "@/components/section-footer";
import SectionHotels from "@/components/section-hotels";
export default function HomeSelectionV1(props) {
    const { homeSelectionData = {} } = props;
    return (
        <HomeSelectionV1Div>
            <SelectionTitle title={homeSelectionData?.title} subTitle={homeSelectionData?.subtitle
            } />
            <SectionHotels hotelList={homeSelectionData?.list?.slice(0, 8)} />
            <SectionFooter />
        </HomeSelectionV1Div>
    );
}
