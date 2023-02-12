import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
  const names = ['abc', 'bca', 'nba', 'mba', 'aaa', 'bbb', 'ccc', 'ddd']

  const [selectedIndex, setSelectedIndex] = useState(0)
  function handleControlClick(num) {
    let newIndex = selectedIndex + num
    if (newIndex < 0) newIndex = names.length - 1
    if (newIndex > names.length - 1) newIndex = 0
    setSelectedIndex(newIndex)
  }
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={e => handleControlClick(-1)}>左边按钮</button>
        <button onClick={e => handleControlClick(+1)}>右边按钮</button>
      </div>
      <Indicator selectedIndex={selectedIndex}>
        {
          names.map((item, index) => (
            <div className={classNames('item', { active: selectedIndex === index })} key={item}>{item}</div>
          ))
        }
      </Indicator>
    </DemoWrapper>
  )
})

export default Demo
