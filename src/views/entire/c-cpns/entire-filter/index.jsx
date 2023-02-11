import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data'
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const [selectedArr, setSelectedArr] = useState([])
  function handleItemClick(item) {
    const newArr = [...selectedArr]
    if (selectedArr.includes(item)) {
      const index = selectedArr.findIndex(item2 => item2 === item)
      newArr.splice(index, 1)
    } else {
      newArr.push(item)
    }
    setSelectedArr(newArr)
  }
  return (
    <FilterWrapper>
      {
        filterData.map(item => (
          <div
            key={item}
            className={classNames('item', { active: selectedArr.includes(item) })}
            onClick={() => handleItemClick(item)}>
            {item}
          </div>
        ))
      }
    </FilterWrapper>
  )
})

export default EntireFilter
