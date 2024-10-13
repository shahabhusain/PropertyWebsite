import React from 'react'
import {OfflinePropertiesData} from '../../../lib/StaticData'
const OfflineDetail = ({params}) => {
    const {offlineid: id} = params
    const property = OfflinePropertiesData.find((item) => item.id = id )

    if(!property){
        console.log("Property not found")
        return <div><h1>Property not found</h1></div>
    }
  return (
    <div>
        <h1>Property no {id}</h1>
    </div>
  )
}

export default OfflineDetail