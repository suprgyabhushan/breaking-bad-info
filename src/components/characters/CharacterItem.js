import React from 'react'

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
              <strong>All Quotes:</strong> <a href={"https://www.breakingbadapi.com/api/quote?author="+ item.name} target="_blank">Link</a> 
            </li>            
          </ul>
        </div>
      </div>
    </div>
  )
  
}

export default CharacterItem
