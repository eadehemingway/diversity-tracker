import * as React from 'react';
import { LondonGenderRaceDonuts } from './LondonGenderRaceDonut';
import { OverviewDonutColumn } from './OverviewDonutColumn';



export class OurOverview extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <React.Fragment>

            <h1>OUR OVERVIEW</h1>
            <div className="our-overview-container">
            <OverviewDonutColumn/>
            <LondonGenderRaceDonuts/>
            </div>
            </React.Fragment>
        )
    }
}