import * as React from 'react';
import './../../../style.css'
import { GenderTile } from './GenderTile';


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
                <GenderTile></GenderTile>
            </React.Fragment>

        )
    }
}