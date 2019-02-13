
import * as React from 'react';
import {ApplicationTileProps} from './type'
import { Donut } from '../YourOverview/Donut';
import { donutType } from '../YourOverview/types';
import { RoleTile } from './RoleTile';


export class FourDonutTile extends React.Component{
    constructor(props){
        super(props)
 

        
    }
    render(){
        return(
            <React.Fragment>
                <RoleTile techType='tech' title="TECH" data={this.props.data[this.props.selectedDate].tech}></RoleTile>
                <RoleTile techType='nonTech' title="NON TECH" data={this.props.data[this.props.selectedDate].nonTech}></RoleTile>
            </React.Fragment>
        )
    }
}
