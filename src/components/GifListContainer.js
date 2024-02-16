import React, { useEffect, useState } from "react";
import GifList from './GifList';
import GifSearch from './GifSearch';


const GifListContainer = () => {
  const [gifs, setGifs]=useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
    if (searchTerm !== '') {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=C9Z4EQEfep9MQBf56gXTUc7iIn4NXfhl`)
        .then((response) => response.json())
        .then((data) => setGifs(data.data))
        .catch((error) => console.error(error));
    }
  },[searchTerm])

  const handleSearchSubmit = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <div>
      <GifSearch onSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
     </div>
  )
}

export default GifListContainer ;