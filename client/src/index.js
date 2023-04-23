import react from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'

import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as api from './api'

import App from "./UI/App"


//Reducers
const courses = (courses = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return courses;
        default:
            return courses;
    }
}

const reducers = combineReducers({ courses });

//Store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

//getCourses
export const getCourses = () => async(dispatch) => {
    try {
        const { data } = await api.fetchCourses();

        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
