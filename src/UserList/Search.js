import React from 'react'

const Search = (props) => (
    <div>
        <input value={props.searchPhrase} onChange={props.onSearchPhraseChanged}/>
        
    </div>
)

export default Search