import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerList from '@/assets/data/footer'
import IconFooterSingle from '@/assets/svg/icon_footer-single'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content">
        <div className="service">
          {
            footerList.map(item => (
              <div key={item.name} className="list-box">
                <h4 className='title'>{item.name}</h4>
                <ul className="list">
                  {
                    item.list.map(item2 => (
                      <li key={item2} className="list-item">{item2}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
        <div className="statement">
          <div className="left">
            <IconFooterSingle/>
          </div>
          <div className="right">
            <div>京ICP备16017121号 京ICP证 160773号 京公网安备 11010502032345号 安彼迎网络（北京）有限公司 营业执照</div>
            <div>© 2023 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter
