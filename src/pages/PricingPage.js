import React from 'react'
import Pricing from '../components/Pricing'

const PricingPage = (props) => {
  const { price, setPrice } = props;
  return (
    <div>
      <Pricing price={price}  setPrice={setPrice}  />
    </div>
  )
}

export default PricingPage
