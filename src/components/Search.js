const Search = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Contacts</span>
        </label>
        <input
            type="text"
            id="search"
            placeholder="Search contacts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default Search;