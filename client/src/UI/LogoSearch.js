
function SearchBar(){
    return (
        <div className="SearchBarContainer" style={{marginTop:"1%"}}>
            <h1 style={{ display: 'flex', alignItems: 'center' }}>
                <div className="LogoName" style={{ display: 'flex', alignItems: 'center', width: '30%', marginLeft:"1%"}}>
                    <img src={require('../imgs/logo.png')} style={{ width: '2vw', marginRight: '1rem' }} />
                    <span>StudyHub</span>
                </div>
                <input className="SearchBar" placeholder="Search" style={{ width: '50%', borderRadius: '25px', fontSize:"35px",  marginRight: '5%'}} />
                <a href="https://cdn.discordapp.com/attachments/1095409925959733350/1099483502984056862/IMG_1485.png" class="btn btn-primary Log In" style={{ height: '1%', width: '5%', borderRadius: '20px', fontSize: 'initial', marginRight: '1%'}}> Log In</a>
                <a href="https://cdn.discordapp.com/attachments/1095409925959733350/1099484256914387044/IMG_1486.png" className="btn btn-primary Sign Up" style={{ height: '1%', width: '6%', borderRadius: '20px', fontSize: 'initial'}}>Sign Up</a>
            </h1>
        </div>
    );
}

export default SearchBar;