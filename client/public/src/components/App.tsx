import * as React from 'react';
import './../../../style.css'
import { BrowserRouter ,  Route} from 'react-router-dom'
import {YourOverviewConnected } from './YourOverview/YourOverview'
import {OurOverviewConnected} from './OurOverview/OurOverview'
import {OurApplicationTargetsConnected} from './OurApplicationTargets/OurAppTargets'
import { NavBar } from './NavBar/NavBar';
import { AppState } from '../commonTypes';
import { connect} from 'react-redux'


export class App extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
        <BrowserRouter>
        
            <React.Fragment>
                <NavBar/>
                <Route exact path="/" component={OurOverviewConnected}/>
                <Route path="/youroverview" component={YourOverviewConnected}/>
                <Route path="/ouroverview" component={OurOverviewConnected}/>
                <Route path="/ourapplicationtargets" component = {OurApplicationTargetsConnected}/>

            </React.Fragment>

        </BrowserRouter>
        )
    }
}

// export const AppConnected = connect<{}, {}>(
//     (appState: AppState)=>({
//         londonData: appState.londonData,
//         ourCompanyData: appState.ourCompanyData,
//         userCompanyData: appState.userCompanyData
//     }),
//     (dispatch)=>({
//     }))(App)