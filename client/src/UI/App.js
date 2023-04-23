import React, { useEffect } from 'react'
import ListGroup from './LeftList';
import SearchBar from './LogoSearch';
import ClassComponent from './class';
import Calendar from './Schedule';
import Student from './Students';
import Classes from './classes';
import 'bootstrap/dist/css/bootstrap.css';

import { useDispatch } from 'react-redux';
import { getCourses } from '../index.js';

const App = () => {

    // const dispatch = useDispatch;

    // useEffect(()=> {
    //   dispatch(getCourses);
    // }, [dispatch]);

    const cardContainerStyles={
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        marginTop:'3%'
        };
        
    const studentContainerStyles={
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        marginTop:'3%'
        };

    const midSection={
        margin: '0 -5px',
        width: '70%',
        marginLeft: 'auto',
        marginTop: '5%', 
        marginRight: '5%'
        };

        const classList = [
            { courseName: "ENGR-2", courseTitle: "Technology and Society" },
            { courseName: "MATH-3", courseTitle: "Calculus" },
            { courseName: " PHYS-4", courseTitle: "Classical Mechanics" }, 
            { courseName: "ENGR-2", courseTitle: "Technology and Society" },
            { courseName: "MATH-3", courseTitle: "Calculus" },
            { courseName: "PHYS-4", courseTitle: "Classical Mechanics" }, 
            { courseName: "ENGR-2", courseTitle: "Technology and Society" },
            { courseName: "MATH-3", courseTitle: "Calculus" },
            { courseName: " PHYS-4", courseTitle: "Classical Mechanics" }, 
            { courseName: "ENGR-2", courseTitle: "Technology and Society" },
            { courseName: "MATH-3", courseTitle: "Calculus" },
            { courseName: "PHYS-4", courseTitle: "Classical Mechanics" }, 
            { courseName: "ENGR-2", courseTitle: "Technology and Society" },
            { courseName: "MATH-3", courseTitle: "Calculus" },
            { courseName: " PHYS-4", courseTitle: "Classical Mechanics" }, 
            { courseName: "ENGR-2", courseTitle: "Technology and Society" },
            { courseName: "MATH-3", courseTitle: "Calculus" },
            { courseName: "PHYS-4", courseTitle: "Classical Mechanics" }, 
            { courseName: "ENGR-2", courseTitle: "Technology and Society" },
            { courseName: "MATH-3", courseTitle: "Calculus" },
            { courseName: " PHYS-4", courseTitle: "Classical Mechanics" }, 
            { courseName: "ENGR-2", courseTitle: "Technology and Society" },
            { courseName: "MATH-3", courseTitle: "Calculus" },
            { courseName: "PHYS-4", courseTitle: "Classical Mechanics" }
          ];
          
        const classComponents = classList.map((classObj) => (
        <ClassComponent
            courseName={classObj.courseName}
            courseTitle={classObj.courseTitle}
        />
        ));

        const StudentList = [
            { name: "Ben Liang", description: "2nd year CS Major" }, 
            { name: "Jack Lee", description: "2nd year CS Major" }, 
            { name: "Oscar Zheng", description: "2nd year CS Major" }, 
            { name: "Samantha Li", description: "2nd year BioSci Major" }, 
            { name: "Jacky Hoang", description: "2nd year Business Economics Major" }, 
            { name: "Ben Liang", description: "2nd year CS Major" }, 
            { name: "Jack Lee", description: "2nd year CS Major" }, 
            { name: "Oscar Zheng", description: "2nd year CS Major" }, 
            { name: "Samantha Li", description: "2nd year BioSci Major" }, 
            { name: "Jacky Hoang", description: "2nd year Business Economics Major" }, 
            { name: "Ben Liang", description: "2nd year CS Major" }, 
            { name: "Jack Lee", description: "2nd year CS Major" }, 
            { name: "Oscar Zheng", description: "2nd year CS Major" }, 
            { name: "Samantha Li", description: "2nd year BioSci Major" }, 
            { name: "Jacky Hoang", description: "2nd year Business Economics Major" }
          ];
          
        const AllStudents = StudentList.map((studentObj) => (
        <Student
            name={studentObj.name}
            description={studentObj.description}
        />
        ));

        return (
            <div>
              <SearchBar />
              <div style={{display: 'flex'}}>
                <div style={{marginTop: '5%', marginLeft:"1%"}}>
                  <ListGroup/>  
                </div>
                <div style={midSection}>
                    <h1>
                        Courses
                    </h1>
                    <div className="card-container" style={cardContainerStyles}>

                    {classComponents}
                    {/*
                    Prob do something like:
            
                    for class in classList:
                        create ClassComponent with course Name and courseTitle
            
                    */}
                      <>
                        <Classes/>
                      </>
                    </div>

                    {/* <h1>
                        Students
                    </h1>
                    <div className="students-container" style={studentContainerStyles}>
                        {AllStudents}
                    </div> */}

                </div>
                
              </div>
            </div>
          );
        }

export default App;