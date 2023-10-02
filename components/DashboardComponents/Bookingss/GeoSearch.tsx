"use client"
import React, { useState } from 'react';
// Import the library
// @ts-ignore
import { OpenStreetMapProvider } from 'leaflet-geosearch';

const GeoSearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const provider = new OpenStreetMapProvider();

  const handleSearch = async () => {
    try {
      const results = await provider.search({ query: searchText });
      // Handle the search results, e.g., pass them to a parent component
       setSearchResults(results)
       console.log(results)
      
    } catch (error) {
      console.error('Error in geosearch:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for a location"
      />
                  <div className='shadow-md p-1 rounded-md
             w-full bg-white z-20'>
            {searchResults.map((item:any,index:number)=>(
                <h2 key={index} className='p-3 hover:bg-gray-100
                cursor-pointer'
             onClick={() =>{setSearchText(item.label); setSearchResults([])}}>{item.label}</h2>
            ))}
           </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default GeoSearchComponent;
