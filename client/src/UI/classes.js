import React from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from "react-redux";

import ClassComponent from "./class";

const Classes = () => {
    const courses = useSelector((state) => state.courses);

    console.log(courses);

    return;
}

export default Classes;