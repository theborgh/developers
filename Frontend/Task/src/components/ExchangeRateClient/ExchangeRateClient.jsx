import React from 'react'
import CurrencyPairsSelector from '../CurrencyPairsSelector/CurrencyPairsSelector';
import CurrencyPairsRateList from '../CurrencyPairsRateList/CurrencyPairsRateList';

export default function ExchangeRateClient() {
  return (
    <div>
      <CurrencyPairsSelector />
      <CurrencyPairsRateList />
    </div>
  )
}
