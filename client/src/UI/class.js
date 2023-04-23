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
    <div class="card-body">
      <h5 class="card-title">{courseName}</h5>
        <p class="card-text">{courseTitle}</p>
      <a href="#" class="btn btn-primary">View Students</a>
    </div>
  </div>);
}

export default ClassComponent;