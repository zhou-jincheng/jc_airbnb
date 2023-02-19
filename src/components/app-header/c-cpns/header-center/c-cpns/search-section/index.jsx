import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from './style'

const SearchSection = memo((props) => {
  const { infos = [] } = props
  return (
    <SectionWrapper>
      {
        infos.map(item => (
          <div key={item.title} className="info-item">
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
          </div>
        ))
      }
    </SectionWrapper>
  )
})

SearchSection.propTypes = {
  infos: PropTypes.array
}

export default SearchSection
