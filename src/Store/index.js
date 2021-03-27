import { makeAutoObservable, toJS } from 'mobx'

import CoinStore from './Coin'

class Store {
  meta = {
    provider: 'kraken',
  }

  coins = [
    new CoinStore('Bitcoin', 'XBTUSDT'),
    new CoinStore('Ethereum', 'ETHUSDT'),
    new CoinStore('Cardano', 'ADAUSDT'),
    new CoinStore('Polkadot', 'DOTUSDT'),
  ]

  constructor() {
    makeAutoObservable(this)
  }
}

export default new Store()
