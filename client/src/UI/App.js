import React, { useEffect } from 'react'
import ListGroup from './LeftList';
import SearchBar from './LogoSearch';
import ClassComponent from './class';
import Classes from './classes';
import 'bootstrap/dist/css/bootstrap.css';

import { useDispatch } from 'react-redux';
import { getCourses } from '../index.js';

const App = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
      dispatch(getCourses);
    }, [dispatch]);

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
                    {/*
                    Prob do something like:
            
                    for class in classList:
                        create ClassComponent with course Name and courseTitle
            
                    */}
                      <>
                        <Classes/>
                      </>
                    </div>

                </div>
                
              </div>
            </div>
          );
        }

export default App;