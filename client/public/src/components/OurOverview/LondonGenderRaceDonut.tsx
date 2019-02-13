import * as React from 'react';
import {Donut} from '../YourOverview/Donut'
import {donutType } from '../YourOverview/types'

export const LondonGenderRaceDonuts =()=> {

        
        return(
            <React.Fragment>
                <div className="overview-london-donut-collumn" >
            <h1 className="sub-heading">LONDON</h1>
                <Donut
                donutType={donutType.gender}
                donutName='london-overview-gender'
                className="overview-donut"
                radius = {30}
                data={{Men: 31, Women:32, other:12}}
                ></Donut>
                 <Donut
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