import React, { useState }  from 'react';
import { Redirect } from 'react-router-dom';

const SearchBar = () => {

    const [keyword, setKeyword] = useState("");
    const [q, setQuery] = useState("");
    const [search, setSearch] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(true);
        setQuery(keyword);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Search for a movie.."></input>
                <input type="submit" style={{display:"none"}}/>
            </form>
            {search && <Redirect to={{ pathname:`/search/${q}` }}/>}
        </div>
    );
}

export default SearchBar;

