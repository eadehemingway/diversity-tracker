import * as React from 'react';
import {Donut} from '../YourOverview/Donut'
import {donutType } from '../YourOverview/types'

export const OverviewDonutColumn =({data, template})=> {

        
        return(
            <React.Fragment>
                <div  className='overview-donut-collum'>
            <h1 className="sub-heading">{data.title}</h1>
                <Donut
                donutType={donutType.gender}
                donutName={`gender-${data.uuid}`}
                className="overview-donut"
                radius = {30}
                data={data.gender}
                template={template}
                ></Donut>
                 <Donut
                donutType={donutType.race}
                donutName={`race-${data.uuid}`}
                className="overview-donut"
                radius = {30}
                data={data.race}
                template={template}


                ></Donut>
                </div>
            </React.Fragment>

        )
    
}