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
