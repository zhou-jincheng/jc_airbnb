import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SearchTabs = memo((props) => {
  const { tabs = [], itemClick } = props

  const [activedIndex, setActivedIndex] = useState(0)
  function handleItemClick(index) {
    setActivedIndex(index)
    itemClick && itemClick(index)
  }

  return (
    <TabsWrapper>
      {
        tabs.map((item, index) => (
          <div key={item} className="tab-item" onClick={() => handleItemClick(index)}>
            <div className="text">{item}</div>
            { index === activedIndex && <div className="bottom"></div>}
          </div>
        ))
      }
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {
  tabs: PropTypes.array,
  itemClick: PropTypes.func
}

export default SearchTabs
