import React, { useState } from 'react';

function SearchBox({ doSubmit }) {
    const [ searchText, setSearchText ] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(searchText.length) {
            doSubmit(searchText.toLowerCase());
        }
    }
    
    return (
        <div className="search">
            <form onSubmit={ handleFormSubmit }>
                <input
                    defaultValue={ searchText }
                    onChange={ handleInputChange }
                    type="text"
                    placeholder="Busca tu pokemon"/>
                <br/>
                <br/>
            </form>
        </div>
    )
}

export default SearchBox;