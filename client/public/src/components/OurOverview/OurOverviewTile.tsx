import * as React from 'react';
import {Donut, donutType} from '../Donut'

export const OurOverviewTile =({data, template})=> {
const radius = 30
const height = 81
const diameter = radius *2
const width = diameter * 4
const padAngle = 0.03
        return(
            <React.Fragment>
                <div  className='O-O-tile'>
            <h1 className="O-O-collumn-heading" style={{width: diameter}}>{data.title}</h1>
                <Donut
                    donutType={donutType.gender}
                    donutName={`gender-${data.uuid}`}
                    className="O-O-donut"
                    radius = {radius}
                    data={data.gender}
                    template={template}
                    padAngle={padAngle}
                    width = {width}
                    height = {height}
                    />
                 <Donut
                    donutType={donutType.race}
                    donutName={`race-${data.uuid}`}
                    className="O-O-donut"
                    radius = {radius}
                    data={data.race}
                    template={template}
                    padAngle={padAngle}
                    width = {width}
                    height = {height}
                />
                </div>
            </React.Fragment>

        )
    
}