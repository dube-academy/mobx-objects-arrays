import { makeAutoObservable } from 'mobx'
import { fetchPrice } from '../utils'

class CoinStore {
  name
  ticker

  history = []

  price = 0
  dateUpdated

  isFavorite = false

  get lastMove() {
    if (!this.history.length) return 'none'
    const lastPrice = this.history[0].price
    if (!lastPrice || lastPrice === this.price) return 'none'
    if (lastPrice < this.price) return 'up'
    return 'down'
  }

  constructor(name, ticker) {
    makeAutoObservable(this)
    this.name = name
    this.ticker = ticker
    this.startInterval()
  }

  async startInterval() {
    setInterval(async () => {
      const price = await fetchPrice(this.ticker)
      if (this.price !== 0) this.history.unshift({ price: this.price, dateUpdated: this.dateUpdated })
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
