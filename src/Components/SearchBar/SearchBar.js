import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <input type="text" 
            value={props.value} 
            onChange={props.onChange} 
            name={props.name}
            placeholder="What products are you looking for?"/>
        </div>
    )
}

export default SearchBar