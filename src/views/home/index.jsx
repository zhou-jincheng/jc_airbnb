import jcRequest from '@/services'
import React, { memo, useEffect, useState } from 'react'

const Home = memo(() => {
  const [hightscore, setHighscore] = useState({})

  useEffect(() => {
    jcRequest.get({ url: '/home/highscore' }).then(res => {
      setHighscore(res)
    })
  }, [])
  return (
    <div>
      <div className="title">{hightscore.title}</div>
      <div className="subtitle">{hightscore.subtitle}</div>
      <ul className="list">
        {
          hightscore.list?.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default Home
