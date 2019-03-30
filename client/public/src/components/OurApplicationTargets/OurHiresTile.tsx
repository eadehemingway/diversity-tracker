import * as React from 'react';
import { Donut, donutType } from '../Donut';


export class OurHiresTile extends React.Component<any, any>{
    constructor(props){
        super(props)
    }
    render(){
        const radius = 70 
        const diameter = radius * 2
        const width = diameter * 2
        const height = radius * 3
        const targetRadius = 100
        const targetWidthHeight = targetRadius * 3
        return(
            <React.Fragment>
            <h1 className="sub-heading O-H-vertical-sub-heading">{this.props.title}</h1>
            <div className="O-H-tile">

                <div style={{position:"relative"}}>
                    {/* APPLICATION DONUT */}
                     <Donut donutType={donutType.gender}
                        donutName={`${this.props.techType}${this.props.data.date}-applications`}
                        radius={radius}
                        data={this.props.data.applications}
                        template={false}
                        padAngle={0.03}
                        className="small-donut"
                        width = {width}
                        height = {height}
                        />
                    {/* APPLICATION TARGET DONUT */}
                        <Donut donutType={donutType.gender}
                            donutName={`target-application-${this.props.techType}`}
                            radius={targetRadius}
                            data={this.props.data.applicationTargets}
                            template={false}
                            className="big-donut"
                            target={true}
                            padAngle={0}
                            width = {targetWidthHeight}
                            height = {targetWidthHeight}
                            />
                    </div>


                <div style={{position:"relative"}}>
                    {/* HIRE DONUT */}
                        <Donut donutType={donutType.gender}
                            donutName={`${this.props.techType}${this.props.data.date}-hired`}
                            radius={radius}
                            data={this.props.data.hired}
                            template={false}
                            padAngle={0.03}
                            className="small-donut"
                            width = {width}
                            height = {height}/>
                    {/* APPLICATION TARGET DONUT */}
                        <Donut donutType={donutType.gender}
                            donutName={`target-hired-${this.props.techType}`}
                            radius={targetRadius}
                            data={this.props.data.applicationTargets}
                            template={false}
                            className="big-donut"
                            target={true}
                            padAngle={0}
                            width = {targetWidthHeight}
                            height = {targetWidthHeight}
                            />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

