import { makeAutoObservable } from 'mobx'
import { fetchPrice } from '../utils'

class CoinStore {
  name
  ticker

  price = 0
  dateUpdated

  isFavorite = false

  constructor(name, ticker) {
    makeAutoObservable(this)
    this.name = name
    this.ticker = ticker
    this.startInterval()
  }

  async startInterval() {
    setInterval(async () => {
      const price = await fetchPrice(this.ticker)
      this.setPrice(price)
    }, 2000)
  }

  setPrice = price => {
    this.price = price
    this.dateUpdated = new Date()
  }

  toggleFavorite = () => {
    this.isFavorite = !this.isFavorite
  }
}

export default CoinStore
