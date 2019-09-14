
const Search = (props) => {
  const {
    searchQuery,
    onChange,
    search
  } = props;


  return <div>
    <div className="finda-social-search">
      <input 
        className="social-search-input" 
        type="text" 
        placeholder="Enter keywords e.g. Canada, Fashion, Football"
        value={searchQuery}
        onChange={onChange}
      />
      <button className="search-btn" onClick={search}>Search</button>
    </div>

    <style jsx>{`
      .finda-social-search {
        border: 2px solid #F32855;
        border-radius: 2px 5.2px 5.2px 2px;
        width: 654px;
        margin: 0 auto;
      }
      .social-search-input {
        border: 0;
        width: 459px;
        background-color: transparent;
        padding-left: 20px;
        color: #CACFD1;
        font-family: Barlow;
        font-size: 16px;
        font-weight: bold;
        line-height: 26px;
      }
      .social-search-input:focus {
        outline: none;
      }
      .search-btn {
        background-color: #F32855;
        border: 0;
        padding: 18px 74px;
        font-size: 20px;
        color: #FFFFFF;
        font-family: 'Barlow', sans-serif;
        font-weight: 700;
        margin-left: -37px;
        position: relative;
        left: 2px;
      }

      .search-btn {
        background-position: center;
        transition: background 0.8s;
      }
      .search-btn:hover {
        background: #F32855 radial-gradient(circle, transparent 1%, #E12155 1%) center/15000%;
      }
      .search-btn:active {
        background-size: 100%;
        transition: background 0s;
      }
      button {
        cursor: pointer;
        outline: none;
      }

    `}</style>
  </div>
};

export default Search;