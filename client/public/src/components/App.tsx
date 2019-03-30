import * as React from 'react';
import { BrowserRouter ,  Route} from 'react-router-dom'
import {YourOverviewConnected } from './YourOverview/YourOverview'
import {OurOverviewConnected} from './OurOverview/OurOverview'
import {OurApplicationTargetsConnected} from './OurApplicationTargets/OurAppTargets'
import { NavBar } from './NavBar/NavBar';


export const App = ()=> (
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