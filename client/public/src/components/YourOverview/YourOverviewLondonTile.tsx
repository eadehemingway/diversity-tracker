import * as React from 'react';
import {Donut, donutType} from './Donut'
import { map } from 'lodash'

export const YourOverviewLondonTile =({type, title, data})=> {
const radius = 80
const diameter = radius * 2
const width = radius * 4
        return(
            <React.Fragment>
                <div className='Y-O-tile'>
                <h1 className="Y-O-tile-title">LONDONS <br/>{title} <br/>DEMOGRAPHIC</h1>
                <div className= "Y-O-donut-div">
                <Donut
                    donutName={`london${type}`}
                    donutType={donutType.gender}
                    radius={radius}
                    template={false}
                    data={data}
                    padAngle={0.03}
                    width = {width}
                    height = {diameter * 1.5}

                ></Donut>
                </div>
                <div className="Y-O-form">
                {map(data, (v, k)=> <p key={k}>{`${k}: ${v}`}</p>)}
           
                </div>
                </div>
     


            </React.Fragment>

        )
    
}