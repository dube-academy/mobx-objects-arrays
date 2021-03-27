import React, { useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import GlobalStyles from './GlobalStyles'

import Store from '../Store'
import SettingsStore from '../Store/Settings'

import Coin from './Coin'

const Heading = styled.h1``

const Application = observer(() => {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading>MobX Data Structures</Heading>
        {Store.coins.map(coin => (
          <Coin key={coin.ticker} coin={coin} />
        ))}
        <button onClick={SettingsStore.toggleFormat}>Toggle Time Format</button>
      </div>
    </>
  )
})

export default Application
