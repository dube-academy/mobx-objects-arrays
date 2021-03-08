export async function fetchPrice(ticker) {
  const req = await fetch('https://api.kraken.com/0/public/Ticker?pair=' + ticker)
  const price = (await req.json()).result[ticker].a[0]
  return parseFloat(price)
}
