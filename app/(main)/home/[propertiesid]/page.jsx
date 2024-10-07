"use client";

import Image from "next/image";
import React from "react";
import { propertiesData } from "../../../lib/StaticData";

const PropertyDetail = ({ params }) => {
  const { propertiesid:id } = params;

  const property = propertiesData.find((item) => item.id == id);

  if (!property) {
    console.error("Property not found for ID:", id);
    return <div>Property not found!</div>;
  }

  return (
    <div className=" w-[90%] mx-auto mt-32">
      <h1>Property Detail Page for ID: {id}</h1>
      <h2>{property?.keyword}</h2>
      <Image src={property?.img} alt="Property Image" width={500} height={300} />
      <p>Place: {property?.place}</p>
      <p>Bedrooms: {property?.bed}</p>
      <p>Bathrooms: {property?.bath}</p>
      <p>Size: {property?.Sqft} sq.ft</p>
      <p>Price: AED {property?.maxprice}</p>
    </div>
  );
};

export default PropertyDetail;
