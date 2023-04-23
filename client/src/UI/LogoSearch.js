
function SearchBar(){
    return (
        <div className="SearchBarContainer" style={{marginTop:"1%"}}>
            <h1 style={{ display: 'flex', alignItems: 'center' }}>
                <div className="LogoName" style={{ display: 'flex', alignItems: 'center', width: '30%', marginLeft:"1%"}}>
                    <img src={require('../imgs/logo.png')} style={{ width: '2vw', marginRight: '1rem' }} />
                    <span>StudyHub</span>
                </div>
                <input className="SearchBar" placeholder="Search" style={{ width: '50%', borderRadius: '25px', fontSize:"35px",  marginRight: '5%'}} />
                <button class="btn btn-primary Log In" style={{ height: '1%', width: '5%', borderRadius: '20px', fontSize: 'initial', marginRight: '1%'}}> Log In</button>
                <button className="btn btn-primary Sign Up" style={{ height: '1%', width: '6%', borderRadius: '20px', fontSize: 'initial'}}>Sign Up</button>
            </h1>
        </div>
    );
}

export default SearchBar;