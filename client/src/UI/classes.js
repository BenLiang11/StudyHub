import React from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from "react-redux";

import ClassComponent from "./class";

const Classes = () => {
    const courses = useSelector((state) => state.courses);

    console.log(courses);

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

    return classComponents;
}

export default Classes;