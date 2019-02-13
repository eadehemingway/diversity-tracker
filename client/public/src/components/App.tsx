import * as React from 'react';
import './../../../style.css'
import { UserGenderTile } from './UserGenderTile';
import { UserRaceTile } from './UserRaceTile'
import { LondonGenderTile } from './LondonGenderTile';
import { BrowserRouter ,Router,  Route} from 'react-router-dom'
import { Link} from 'react-router-dom'
import { Home } from './Home/Home'
import {YourOverview } from './YourOverview/YourOverview'
import {OurOverview} from './OurOverview/OurOverview'
import {OurApplicationTargets} from './OurApplicationTargets/OurAppTargets'



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
            <Link to="youroverview"> YOUR OVERVIEW</Link>
            <Link to="ouroverview"> OUR OVERVIEW</Link>
            <Link to="ourapplicationtargets"> OUR APPLICATION TARGETS</Link>
            <Link to="/"></Link>

                <Route exact path="/" component={Home}/>
                <Route path="/youroverview" component={YourOverview}/>
                <Route path="/ouroverview" component={OurOverview}/>
                <Route path="/ourapplicationtargets" component = {OurApplicationTargets}/>

            </React.Fragment>

        </BrowserRouter>
        )
    }
}