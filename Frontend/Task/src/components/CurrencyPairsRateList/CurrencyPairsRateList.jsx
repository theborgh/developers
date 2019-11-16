import React from 'react'
import './CurrencyPairsRateList.scss';

export default function CurrencyPairsRateList() {
  return (
    <div className="CurrencyPairsRateList" data-test="component-CurrencyPairsRateList">
      <div className="header">
        <div className="header__pairShorthand">Pair code</div>
        <div className="header__pairName">Extended name</div>
        <div className="header__pairRate">Latest rate</div>
        <div className="header__pairTrend">Trend</div>
      </div>
      <div className="pairlist">
        <div className="pair">
          <div className="pair__code">EUR/USD</div>
          <div className="pair__name">Euro / US Dollar</div>
          <div className="pair__rate">1.1035</div>
          <div className="pair__trend">UP</div>
        </div>
      </div>
    </div>
  )
}
