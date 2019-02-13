import * as React from 'react';
import {Donut} from '../YourOverview/Donut'
import {donutType } from '../YourOverview/types'

export const LondonGenderRaceDonuts =()=> {

        
        return(
            <React.Fragment>
                <div className="overview-london-donut-collumn" >
            <h1 className="sub-heading">LONDON</h1>
                <Donut
                londonDonut={false}
                donutType={donutType.gender}
                donutName='london-overview-gender'
                className="overview-donut"
                radius = {30}
                data={{Men: 31000000, Women:3200000, other:0}}
                ></Donut>
                 <Donut
                londonDonut={false}
                donutType={donutType.race}
                className="overview-donut"
                donutName='london-overview-race'
                radius = {30}
                data={{White:310, Black:400, SouthAsian:100, EastAsian:100}}
                ></Donut>
                </div>
            </React.Fragment>

        )
    
}