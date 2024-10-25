import React from 'react'
import CountryCard from './CountryCard'
import { useState, useEffect } from 'react';
import CountriesListShimmer from './CountriesListShimmer';

export default function CountriesList({query}) {
    const [CountriesData, setCountriesData] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res)=> res.json())
        .then((data)=>{
            setCountriesData(data)
        })
    },[]);
    return (
        <>

       {CountriesData.length !==0 ?  <div className="countries-container">
            {CountriesData.filter((country) => {
              return  country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query.toLowerCase())
            }
            ).map((country) => {
                return (
                    <CountryCard
                        key={country.name.common}
                        name={country.name.common}
                        flag={country.flags.svg}
                        population={country.population}
                        region={country.region}
                        capital={country.capital?.[0]}
                        data ={country}
                    />
                )
            })}
        </div> :<CountriesListShimmer/>}
        </>
    )
}