import * as React from 'react';
import { Link} from 'react-router-dom'




export const NavBar =()=>(
            <React.Fragment>
            <div className= "navbar">
            <Link to="ouroverview" className="navbar-link"> OUR <br/>OVERVIEW</Link>
            <Link to="youroverview" className="navbar-link"> YOUR <br/> OVERVIEW</Link>
            <Link to="ourapplicationtargets" className="navbar-link"> OUR <br/>APPLICATION <br/>TARGETS</Link>
            <Link to="/"></Link>
            </div>
            </React.Fragment>
        )
