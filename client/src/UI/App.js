import React from 'react'
import ListGroup from './LeftList';
import SearchBar from './LogoSearch';
import ClassComponent from './class';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

    const cardContainerStyles={
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: '0 -5px',
        width: '70%',
        marginLeft: 'auto',
        marginTop: '10%', 
        marginRight: '5%'
        };

    return 
        <>
            <div>
                <h1>StudyHub</h1>
            </div>

            <div>
                <ListGroup/>
            </div>
        </>
      <div>
        <SearchBar />
        <div className="card-container" style={cardContainerStyles}>

        {/*
        Prob do something like:

        for class in classList:
            create ClassComponent with course Name and courseTitle
        
        */}

          <ClassComponent courseName="ENGR-2" courseTitle="Technology and Society" />
          <ClassComponent courseName="ENGR-2" courseTitle="Technology and Society" />
          <ClassComponent courseName="ENGR-2" courseTitle="Technology and Society" />
          <ClassComponent courseName="ENGR-2" courseTitle="Technology and Society" />
          <ClassComponent courseName="ENGR-2" courseTitle="Technology and Society" />
          <ClassComponent courseName="ENGR-2" courseTitle="Technology and Society" />
          <ClassComponent courseName="ENGR-2" courseTitle="Technology and Society" />
          <ClassComponent courseName="ENGR-2" courseTitle="Technology and Society" />
          <ClassComponent courseName="ENGR-2" courseTitle="Technology and Society" />
          <ClassComponent courseName="ENGR-2" courseTitle="Technology and Society" />
          <ClassComponent courseName="ENGR-2" courseTitle="Technology and Society" />
          <ClassComponent courseName="ENGR-2" courseTitle="Technology and Society" />
        </div>
      </div>
    );
  }

export default App;