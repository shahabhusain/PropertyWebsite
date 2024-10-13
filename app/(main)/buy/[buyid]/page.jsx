import React from 'react'
import {BuyPropertiesData} from '../../../lib/StaticData'
const page = ({params}) => {
    const { buyid: id } = params;

    const property = BuyPropertiesData.find((item) => item.id == id);
  
    if (!property) {
      console.error("Property not found for ID:", id);
      return <div>Property not found!</div>;
    }
  return (
    <div>
        <h1>Property Detail Page for ID: {id}</h1>
    </div>
  )
}

export default page