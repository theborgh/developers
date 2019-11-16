import React from 'react'
import './CurrencyPairsSelector.scss';

export default function CurrencyPairsSelector() {
  return (
    <div className="CurrencyPairsSelector" data-test="component-CurrencyPairsSelector">
      <div className="CurrencyPairsSelector__logo">Forex Rates</div>
      <div className="CurrencyPairsSelector__searchbox"><input type="text" placeholder="Search currency pairs by name or code" /></div>
      <div className="CurrencyPairsSelector__toggleShowPinnedButton"><button>Toggle pinned</button></div>
    </div>
  )
}
