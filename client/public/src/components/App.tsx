import * as React from 'react';
import './../../../style.css'
import { BrowserRouter ,Router,  Route} from 'react-router-dom'
import { Home } from './Home/Home'
import {YourOverview } from './YourOverview/YourOverview'
import {OurOverview} from './OurOverview/OurOverview'
import {OurApplicationTargets} from './OurApplicationTargets/OurAppTargets'
import { NavBar } from './NavBar/NavBar';



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

                <Route exact path="/" component={Home}/>
                <Route path="/youroverview" component={YourOverview}/>
                <Route path="/ouroverview" component={OurOverview}/>
                <Route path="/ourapplicationtargets" component = {OurApplicationTargets}/>

            </React.Fragment>

        </BrowserRouter>
        )
    }
}