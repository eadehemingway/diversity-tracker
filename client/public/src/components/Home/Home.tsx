import * as React from 'react';
import { Link} from 'react-router-dom'
import { Donut } from '../YourOverview/Donut';



export class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <React.Fragment>

            <h1  className="H-title">DIVERSITY<br/>TRACKER</h1>

            </React.Fragment>

        )
    }
}