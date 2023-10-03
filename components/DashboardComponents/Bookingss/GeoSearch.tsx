"use client"
import React, { useState, useEffect } from 'react';
// Import the library
// @ts-ignore
import { OpenStreetMapProvider } from 'leaflet-geosearch';


interface Iprop {
    propUseState?: (value: string) => void; 
  }

const GeoSearchComponent:React.FC<Iprop> = ({propUseState}) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchText, setDebouncedSearchText] = useState('');
  const provider = new OpenStreetMapProvider();


  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500); // Adjust the debounce delay as needed

    return () => clearTimeout(debounceTimer);
  }, [searchText]);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const results = await provider.search({ query: debouncedSearchText });
        setSearchResults(results);
      } catch (error) {
        console.error('Error in geosearch:', error);
      }
    };

 
    handleSearch();
  }, [debouncedSearchText]);

      const handleSearch = async () => {
      try {
        const results = await provider.search({ query: debouncedSearchText });
        setSearchResults(results);
      } catch (error) {
        console.error('Error in geosearch:', error);
      }
    };



  return (
    <div>
      <input
        type="text"
        className='bg-transparent w-full p-2 border-b border-gray-600 outline-none focus:border-[#2387FE] relative'
        value={searchText}
        onChange={(e) => {setSearchText(e.target.value); 
            if (propUseState) {
            propUseState(e.target.value);
          }}}
        onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSearch(); // Call search on Enter key press
            }
          }}
          placeholder='address'
      />
  {searchResults.length > 0 ? ( // Check if searchResults is not empty
    <div className='absolute top-[70px] shadow-md p-1 rounded-md w-full bg-white z-20 h-[200px] overflow-y-scroll'>
      {searchResults.map((item:any, index:number)=>(
        <h2
          key={index}
          className='p-3 hover:bg-gray-100 cursor-pointer'
          onClick={() => {
            setSearchText(item.label);
            setSearchResults([]);
            if (propUseState) {
                propUseState(item.label);
              }
          }}
        >
          {item.label}
        </h2>
      ))}
    </div>
  ) : null /* Render null when searchResults is empty */}

    </div>
  );
};

export default GeoSearchComponent;
