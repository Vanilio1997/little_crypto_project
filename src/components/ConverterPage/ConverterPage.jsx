import React from 'react'
import Converter from './Converter'
import CoinHistory from './CoinHistory'

const ConverterPage = () => {
  return (
    <div className='converterPage_wrapper'>
      <Converter />
      <CoinHistory />
    </div>
  )
}

export default ConverterPage