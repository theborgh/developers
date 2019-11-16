import React from 'react'
import CurrencyPairsSelector from '../CurrencyPairsSelector/CurrencyPairsSelector';
import CurrencyPairsRateList from '../CurrencyPairsRateList/CurrencyPairsRateList';
import './ExchangeRateClient.scss';

export default function ExchangeRateClient() {
  return (
    <div className="ExchangeRateClient" data-test="component-ExchangeRateClient">
      <CurrencyPairsSelector />
      <CurrencyPairsRateList />
    </div>
  )
}
