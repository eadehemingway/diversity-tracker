import * as React from 'react';
import {Donut} from '../YourOverview/Donut'
import {donutType } from '../YourOverview/types'

export const OverviewDonutColumn =(data)=> {

        
        return(
            <React.Fragment>
                <div  className='overview-donut-collum'>
            <h1 className="sub-heading">01/18</h1>
                <Donut
                firstLabel='Men'
                firstAmount={31000000}
                secondLabel='Women'
                secondAmount={32000000}
                thirdLabel='Other'
                thirdAmount={10}
                londonDonut={true}
                donutType={donutType.gender}
                donutName='gender-18'
                className="overview-donut"
                radius = {30}
                ></Donut>
                 <Donut
                firstLabel='white'
                firstAmount={310}
                secondLabel='black'
                secondAmount={900}
                thirdLabel='asian'
                thirdAmount={100}
                londonDonut={true}
                donutType={donutType.race}
                donutName='race-18'
                className="overview-donut"
                radius = {30}

                ></Donut>
                </div>
            </React.Fragment>

        )
    
}