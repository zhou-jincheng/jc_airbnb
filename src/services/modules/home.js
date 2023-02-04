import jcRequest from ".."


export function getGoodPriceData() {
  return jcRequest.get({
    url: '/home/goodprice'
  })
}
