import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { App } from './src/components/App';
import { londonDataReducer } from './src/londonData/reducer';
import { ourCompanyDataReducer } from './src/ourCompanyData/reducer';
import { userCompanyDataReducer } from './src/userCompanyData/reducer';


//REDUCERS



//STYLES


export const allReducers = combineReducers({
    londonData: londonDataReducer,
    ourCompanyData: ourCompanyDataReducer,
    userCompanyData: userCompanyDataReducer
})


export const store = createStore(
    allReducers
)









ReactDOM.render(<App />, document.getElementById('root'));
