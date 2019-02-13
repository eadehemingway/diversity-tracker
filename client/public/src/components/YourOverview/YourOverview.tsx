import * as React from 'react';
import { LondonGenderTile } from './LondonGenderTile';
import { UserGenderTile } from './UserGenderTile';
import { UserRaceTile } from './UserRaceTile';
import { LondonRaceTile } from './LondonRaceTile';



export class YourOverview extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <React.Fragment>

            <h1  className="title">YOUR OVERVIEW</h1>
            < UserGenderTile/>
            < LondonGenderTile/> 
            {/* < UserRaceTile/>
            < LondonRaceTile/> */}
            </React.Fragment>


        )
    }
}