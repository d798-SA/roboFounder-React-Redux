import React from "react";


const SearchBox = ({ searchBoxChange }) => {
    return (
        <div className='pa2 search1'>
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search here"
                onChange={searchBoxChange}
            />
        </div>
    )
}




export default SearchBox;