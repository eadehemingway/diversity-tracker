import * as React from 'react';
import './../../../style.css'
import { UserGenderTile } from './UserGenderTile';
import { UserRaceTile } from './UserRaceTile'
import { LondonGenderTile } from './LondonGenderTile';


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
                <UserGenderTile/>
                <LondonGenderTile/>
                {/* <UserRaceTile/> */}

            </div>
            </React.Fragment>

        )
    }
}