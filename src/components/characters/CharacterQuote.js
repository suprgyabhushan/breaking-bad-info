import React from 'react'
import { useState,useEffect} from 'react'


const CharacterQuote = ({ item }) => {   

const [quotes,setQuotes]=useState([]);

const getQuotes=()=>
{
    fetch("https://www.breakingbadapi.com/api/quote?author="+ item.name)
    .then(function(response){
        //console.log(response)
        return response.json();
        })  
    .then(function(myJson) {  
        console.log(myJson);  
        setQuotes(myJson);  
    });
}

useEffect(()=>{
getQuotes()
},[])

return (
<div>
   <h7><b> All Quotes:</b>
   {quotes && quotes.length>0 && quotes.map((q)=><p>{q.quote}</p>)}
   </h7>    
   </div>        
)};

export default CharacterQuote
