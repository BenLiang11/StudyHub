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
                    </div>

                </div>
                
              </div>
            </div>
          );
        }

export default App;