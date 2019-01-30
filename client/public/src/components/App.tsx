import * as React from 'react';
import {Donut} from './Donut'
import './../../../style.css'
export class App extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }






    render(){
        return(
            <React.Fragment>

                <div>tha app</div>
                <Donut></Donut>
            </React.Fragment>

        )
    }
}