import * as React from 'react';
import {Donut} from '../YourOverview/Donut'
import {donutType } from '../YourOverview/types'

export const OverviewDonutColumn =({data, key})=> {

        
        return(
            <React.Fragment>
                <div  className='overview-donut-collum'>
            <h1 className="sub-heading">{data.title}</h1>
                <Donut
                londonDonut={true}
                donutType={donutType.gender}
                donutName={`gender-${key}`}
                className="overview-donut"
                radius = {30}
                data={data.gender}
                ></Donut>
                 <Donut
                londonDonut={true}
                donutType={donutType.race}
                donutName={`race-${key}`}
                className="overview-donut"
                radius = {30}
                data={data.race}


                ></Donut>
                </div>
            </React.Fragment>

        )
    
}