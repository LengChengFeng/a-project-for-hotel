import React from 'react'
import EntireHeader from './cpns/entire-header'
import EntireRoomList from './cpns/entrie-roomList'

import { EntireDiv } from "./style"
export default function Entire() {
    return (
        <EntireDiv>
            <EntireHeader />
            <EntireRoomList />
        </EntireDiv>
    )
}
