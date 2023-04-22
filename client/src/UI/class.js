import React from "react";


function ClassComponent(props){

    const cardStyle = {
        display: 'inline-block',
        width: '20vw',
        marginRight: '1rem',
        marginBottom: '1rem'
      }

    const {courseName, courseTitle} = props;

    return (
    <div class="card " style={cardStyle}>
    <img class="card-img-top" src={require('../imgs/engrbackground.jpg')} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{courseName}</h5>
        <p class="card-text">{courseTitle}</p>
      <a href="#" class="btn btn-primary">Find People</a>
    </div>
  </div>);
}

export default ClassComponent;