import DottedComponent from '@/base-ui/dotted'
import React, { useState } from 'react'

export default function System() {
  const [selectIndex, setSelectIndex] = useState(0)
  const arr = ["abc", "add", "sub", "der", "text", "arrd", "bed"]
  return (
    <div>
      <div className="dot" style={{ width: "100px" }}>
        <DottedComponent selectIndex={selectIndex}>
          {arr.map((item, index) => {
            return <button key={item} onClick={() => { setSelectIndex(index) }}>{item}</button>
          })}
        </DottedComponent>
      </div>
    </div >
  )
}
