import jcRequest from ".."


export function getGoodPriceData() {
  return jcRequest.get({
    url: '/home/goodprice'
  })
}

export function getHighScoreData() {
  return jcRequest.get({
    url: '/home/highscore'
  })
}


export function getDiscountData() {
  return jcRequest.get({
    url: '/home/discount'
  })
}

export function getHotRecommendData() {
  return jcRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getLongForData() {
  return jcRequest.get({
    url: '/home/longfor'
  })
}

export function getPlusData() {
  return jcRequest.get({
    url: '/home/plus'
  })
}
