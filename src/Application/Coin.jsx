import React, { useEffect } from 'react'
import moment from 'moment'
import { observer } from 'mobx-react'

import SettingsStore from '../Store/Settings'

const Coin = observer(({ coin }) => {
  useEffect(() => {
    console.log(`${coin.name}'s price has been updated!`)
  }, [coin.price])

  return (
    <h3 style={coin.isFavorite ? { backgroundColor: '#43a202', color: '#fff' } : {}}>
      &nbsp; &nbsp;
      <button onClick={coin.toggleFavorite}>⭐️</button>
      &nbsp; &nbsp;
      {coin.name} Price: ${coin.price.toFixed(2)} (
      {moment(coin.dateUpdated).format(SettingsStore.timeFormat)})
    </h3>
  )
})

export default Coin
