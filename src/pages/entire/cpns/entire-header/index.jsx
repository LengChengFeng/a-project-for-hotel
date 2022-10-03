import React, { useState } from 'react'
import tabData from "@/assets/data/filter_data.json"
import { EntireHeaderDiv } from "./style"
export default function EntireHeader() {
    const [tagActive, setTagActive] = useState([])

    const handleSelect = (tag) => {
        const tags = [...tagActive]
        if (tags.includes(tag)) {
            const index = tags.findIndex((item) => item === tag)
            tags.splice(index, 1)
        } else {
            tags.push(tag)
        }
        setTagActive(tags)
    }
    return (
        <EntireHeaderDiv>
            <div className="tabs">
                {tabData.map((item) => {
                    return (
                        <div key={item}
                            className={['tabs-item', tagActive.find((tag) => tag === item) ? " active" : null].join('')}
                            onClick={() => handleSelect(item)}>{item}</div>
                    )
                })}
            </div>
        </EntireHeaderDiv>
    )
}
