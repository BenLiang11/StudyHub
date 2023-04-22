
function SearchBar(){
    return (
        <div className="SearchBarContainer">
            <img src={require('../imgs/logo.png')} style={{width: '2vw'}} />
            <input className="SearchBar" placeholder="Search"></input>
        </div>
    );
}

export default SearchBar;