import React, { useEffect, useState } from 'react'
import { Pagination } from 'antd';
import { entireApi } from "@/services/entireData"
import { EntireRoomListDiv } from "./style"
import SectionHotels from "@/components/section-hotels";
const { GetEntireRoomList } = entireApi
export default function EntireRoomList() {

    const [hotelList, setHotelList] = useState([])
    const [total, setTotal] = useState(0)
    const [params, setParams] = useState({
        offset: 0,
        size: 20
    })
    useEffect(() => {
        GetEntireRoomList(params).then(res => {
            console.log(res)
            setTotal(res.totalCount)
            setHotelList(res.list)
        })
    }, [params])

    const handlePaginationChange = (page, size) => {
        window.scrollTo(0, 0)
        const newParams = { ...params }
        newParams.offset = page * 20
        newParams.size = size
        setParams(newParams)
    }
    return (
        <EntireRoomListDiv>
            <SectionHotels hotelList={hotelList} />
            <div className="pagination">
                <Pagination total={total} pageSize={params.size} onChange={handlePaginationChange}
                    showSizeChanger={false} />
            </div>
        </EntireRoomListDiv>
    )
}
