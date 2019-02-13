import * as React from 'react';
import {Donut} from '../YourOverview/Donut'
import {donutType } from '../YourOverview/types'

export const LondonDonutCollumn =()=> {

        
        return(
            <React.Fragment>
                <div className="overview-london-donut-collumn" >
            <h1 className="sub-heading">LONDON</h1>
                <Donut
                donutType={donutType.gender}
                donutName='london-overview-gender'
                className="overview-donut"
                radius = {30}
                data={{Men: 31000000, Women:32000000, other:12000}}
                template={false}
                ></Donut>
                 <Donut
                donutType={donutType.race}
                className="overview-donut"
                donutName='london-overview-race'
                radius = {30}
                template={false}
                data={{White:4887435, Asian:1511546, Black:1088640, Mixed:405279, Other: 175021}}
                ></Donut>
                </div>
            </React.Fragment>

        )
    
}