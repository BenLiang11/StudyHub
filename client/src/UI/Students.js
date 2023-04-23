import React from "react";

function Student(props){

    const {name, description} = props;

    const StudentContainer = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        marginTop:'3%', 
        backgroundColor: '#c3d6bd', 
        borderRadius: '10px', 
        height: '7vh', 
        alignItems: 'center'
    };

    const detailContainerStyles = {
        marginLeft:'1%', 
        marginRight:'1%'
    };


    return (
        <div className="Student" style={StudentContainer}>
            <h3 style={detailContainerStyles}>{name}</h3>
            <h4>{description}</h4>
            <button className="btn btn-primary" style={detailContainerStyles}>View Schedule</button>
        </div>
    );

}

export default Student;