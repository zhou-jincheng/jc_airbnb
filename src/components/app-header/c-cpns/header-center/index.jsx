import React, { memo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import searchTitles from '@/assets/data/search_titles.json'

import SearchSection from './c-cpns/search-section'
import SearchTabs from './c-cpns/search-tabs'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import { CenterWrapper } from './style'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {

  const { isSearch, searchBarClick } = props
  function handleBarClick() {
    searchBarClick && searchBarClick()
  }

  const [titleIndex, setTitleIndex] = useState(0)
  const handleItemClick = useCallback((index) => {
    setTitleIndex(index)
  }, [])

  const tabs = searchTitles.map(item => item.title)
  return (
    <CenterWrapper>
      <CSSTransition
      in={!isSearch}
      classNames="bar"
      timeout={250}
      unmountOnExit={true}>
        <div className="search-bar" onClick={handleBarClick}>
          <span className="search-text">搜索房源和体验</span>
          <span className="search-icon">
            <IconSearchBar/>
          </span>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}>
        <div className="search-detail">
        <SearchTabs tabs={tabs} itemClick={handleItemClick}/>
          <div className="infos">
            <SearchSection infos={searchTitles[titleIndex].searchInfos}/>
          </div>
        </div>
      </CSSTransition>

    </CenterWrapper>
  )
})

HeaderCenter.propTypes = {
  isSearch: PropTypes.bool,
  searchBarClick: PropTypes.func
}

export default HeaderCenter
