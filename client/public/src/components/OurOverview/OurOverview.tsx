import * as React from 'react';
import { LondonGenderRaceDonuts } from './LondonGenderRaceDonut';
import { OverviewDonutColumn } from './OverviewDonutColumn';
import {map} from "lodash";


export class OurOverview extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: {
                jan18: {gender: {men: 2, women: 0}, race: {white:2, other:0}, title:"01/18"},
                jun18: {gender: {men: 4, women: 0}, race: {white:4, other: 0}, title:"06/18"},
                jan19: {gender: {men:7, women: 2}, race: {white: 9, other: 7}, title: "01/19"}
            }
        }
    }
    render(){
        return(
            <React.Fragment>

            <h1>OUR OVERVIEW</h1>
            <div className="our-overview-container">
             {map(this.state.data, (col, i)=>  <OverviewDonutColumn data={col} key={col.title}/>)}

        

            <LondonGenderRaceDonuts/>
            </div>
            </React.Fragment>
        )
    }
}