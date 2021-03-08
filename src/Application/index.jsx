import React, { useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import moment from 'moment'

import GlobalStyles from './GlobalStyles'

import Store from '../Store'
import SettingsStore from '../Store/Settings'

const Heading = styled.h1``

const Application = observer(() => {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading>MobX Data Structures</Heading>
        {Store.coins.map(coin => (
          <h3 key={coin.ticker}>
            {coin.name} Price: ${coin.price.toFixed(2)} (
            {moment(coin.dateUpdated).format(SettingsStore.timeFormat)})
          </h3>
        ))}
        <button onClick={SettingsStore.toggleFormat}>Toggle Time Format</button>
      </div>
    </>
  )
})

export default Application
