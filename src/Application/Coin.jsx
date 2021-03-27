import React, { useEffect } from 'react'
import moment from 'moment'
import { observer } from 'mobx-react'

import SettingsStore from '../Store/Settings'

const Coin = observer(({ coin }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={coin.toggleFavorite} style={{ margin: 15 }}>
        ⭐️
      </button>
      <h3 style={coin.isFavorite ? { backgroundColor: '#ffff00', color: '#fff' } : {}}>
        {coin.name} Price: ${coin.price.toFixed(6)} (
        {moment(coin.dateUpdated).format(SettingsStore.timeFormat)})
      </h3>
      {coin.lastMove !== 'none' && (
        <div
          style={{
            margin: 15,
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: coin.lastMove === 'up' ? '#43a202' : '#f44236',
          }}
        />
      )}
    </div>
  )
})

export default Coin
