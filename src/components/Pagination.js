import React from 'react'

const Pagination = ({charactersPerPage,totalCharacters, paginate}) => {

    const pageNumbers = [];

    for (let i =1 ; i <= Math.ceil(totalCharacters / charactersPerPage); i++ ){
        pageNumbers.push(i);
    }
    
    return (
        <div className="text-xs-center">
            <ul className="pagination">
                { pageNumbers.map(number =>(
                    <li key = { number } style={{display:"inline-block", padding:"5px"}}>
                        <a  onClick={() =>paginate(number)}  href="#" className="page-link">
                            { number }
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination