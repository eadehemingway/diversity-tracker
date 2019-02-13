import * as React from 'react';

import { Link} from 'react-router-dom'




export class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(

        
            <React.Fragment>
            <div className= "navbar">
            <Link to="youroverview" className="navbar-link"> YOUR <br/> OVERVIEW</Link>
            <Link to="ouroverview" className="navbar-link"> OUR <br/>OVERVIEW</Link>
            <Link to="ourapplicationtargets" className="navbar-link"> OUR <br/>APPLICATION <br/>TARGETS</Link>
            <Link to="/"></Link>

            </div>


            </React.Fragment>

        )
    }
}