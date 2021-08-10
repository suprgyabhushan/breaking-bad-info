import React from 'react'
import CharacterQuote from './CharacterQuote'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>  
          <ul>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation.join(",")}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Appearance:</strong> {item.appearance.join(",")}
            </li>   
            <li>
              <strong>Link To All Quotes:</strong> <a download = "Quotes.txt" href={"https://www.breakingbadapi.com/api/quote?author="+ item.name}>Link</a> 
            </li>                
          </ul> 
          <CharacterQuote key={item.char_id} item={item}></CharacterQuote>    
          </div>
      </div>
    </div>
  )
  
}

export default CharacterItem
