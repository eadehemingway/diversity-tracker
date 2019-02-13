import * as React from 'react';
import {Donut} from '../YourOverview/Donut'
import {donutType } from '../YourOverview/types'

export const OverviewDonutColumn =({data})=> {

        
        return(
            <React.Fragment>
                <div  className='overview-donut-collum'>
            <h1 className="sub-heading">01/18</h1>
                <Donut
                londonDonut={true}
                donutType={donutType.gender}
                donutName='gender-18'
                className="overview-donut"
                radius = {30}
                data={data.gender}
                ></Donut>
                 <Donut
                londonDonut={true}
                donutType={donutType.race}
                donutName='race-18'
                className="overview-donut"
                radius = {30}
                data={data.race}


                ></Donut>
                </div>
            </React.Fragment>

        )
    
}