
import * as React from 'react';
import {ApplicationTileProps} from './type'
import { Donut } from '../YourOverview/Donut';
import { donutType } from '../YourOverview/types';
import { OurHiresTile } from './OurHiresTile';


export class FourDonutTile extends React.Component{
    constructor(props){
        super(props)
 

        
    }
    render(){
        return(
            <React.Fragment>
                <OurHiresTile techType='tech' title="TECH" data={this.props.data[this.props.selectedDate].tech}></OurHiresTile>
                <OurHiresTile techType='nonTech' title="NON TECH" data={this.props.data[this.props.selectedDate].nonTech}></OurHiresTile>
            </React.Fragment>
        )
    }
}
