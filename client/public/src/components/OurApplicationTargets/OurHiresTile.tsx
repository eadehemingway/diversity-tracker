import * as React from 'react';
import { Donut, donutType } from '../Donut';


export const OurHiresTile =({title, data, techType})=>{
        const radius = 70 
        const diameter = radius * 2
        const width = diameter * 2
        const height = radius * 3
        const targetRadius = 100
        const targetWidthHeight = targetRadius * 3
        return(
            <React.Fragment>
            <h1 className="sub-heading O-H-vertical-sub-heading">{title}</h1>
            <div className="O-H-tile">

                <div style={{position:"relative"}}>
                    {/* APPLICATION DONUT */}
                     <Donut donutType={donutType.gender}
                        donutName={`${techType}${data.date}-applications`}
                        radius={radius}
                        data={data.applications}
                        template={false}
                        padAngle={0.03}
                        className="small-donut"
                        width = {width}
                        height = {height}
                        />
                    {/* APPLICATION TARGET DONUT */}
                        <Donut donutType={donutType.gender}
                            donutName={`target-application-${techType}`}
                            radius={targetRadius}
                            data={data.applicationTargets}
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
                            donutName={`${techType}${data.date}-hired`}
                            radius={radius}
                            data={data.hired}
                            template={false}
                            padAngle={0.03}
                            className="small-donut"
                            width = {width}
                            height = {height}/>
                    {/* APPLICATION TARGET DONUT */}
                        <Donut donutType={donutType.gender}
                            donutName={`target-hired-${techType}`}
                            radius={targetRadius}
                            data={data.applicationTargets}
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


