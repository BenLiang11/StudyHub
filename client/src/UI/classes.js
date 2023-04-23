import React from "react";
import { useSelector } from "react-redux";

import ClassComponent from "./class";

const Classes = () => {
    const courses = useSelector((state) => state.courses);

    console.log(courses);

    return(
    <>
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
    </>
    );
}

export default Classes;