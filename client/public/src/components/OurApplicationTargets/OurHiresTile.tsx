import * as React from 'react';
import { donutType } from '../YourOverview/types';
import { Donut } from '../YourOverview/Donut';



export class OurHiresTile extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <React.Fragment>
            <h1 className="sub-heading">{this.props.title}</h1>
            <div className="O-H-tile">
            <Donut donutType={donutType.gender}
            donutName={`${this.props.techType}${this.props.data.date}-applications`}
            radius={70}
            data={this.props.data.applications}
            template={false}
            >
            
            </Donut>
            <Donut
            donutName={`${this.props.techType}${this.props.data.date}-hired`}
            radius={70}
            data={this.props.data.hired}
            template={false}
            
            >
            
            </Donut>


            
            </div>
            </React.Fragment>
        )
    }
}

