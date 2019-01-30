import * as React from 'react';
import './../../../style.css'
import { GenderTile } from './GenderTile';
import { RaceTile } from './RaceTile'


export class App extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }






    render(){
        return(
            <React.Fragment>
            <div className='tile-container'>
                <GenderTile/>
                <RaceTile/>

            </div>
            </React.Fragment>

        )
    }
}