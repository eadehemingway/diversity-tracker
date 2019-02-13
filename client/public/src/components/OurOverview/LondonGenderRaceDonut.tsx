import * as React from 'react';
import {Donut} from '../YourOverview/Donut'
import {donutType } from '../YourOverview/types'

export const LondonGenderRaceDonuts =()=> {

        
        return(
            <React.Fragment>
                <div className="overview-london-donut-collumn" >
            <h1 className="sub-heading">LONDON</h1>
                <Donut
                firstLabel='Men'
                firstAmount={31000000}
                secondLabel='Women'
                secondAmount={32000000}
                thirdLabel='Other'
                thirdAmount={10}
                londonDonut={false}
                donutType={donutType.gender}
                donutName='london-overview-gender'
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
                londonDonut={false}
                donutType={donutType.race}
                className="overview-donut"
                donutName='london-overview-race'
                radius = {30}

                ></Donut>
                </div>
            </React.Fragment>

        )
    
}