import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'
import { GenderTileState, donutType } from './types';
import { map } from 'lodash'

export const YourOverviewLondonTile =({type, title, data})=> {

        return(
            <React.Fragment>
                <div className='Y-O-tile'>
                <h1 className="Y-O-tile-title">LONDONS <br/>{title} <br/>DEMOGRAPHIC</h1>
                <div className= "Y-O-donut-div">
                <Donut
                    donutName='london'
                    donutType={}
                    className='donut-svg'
                    radius={80}
                    template={false}
                    data={data}
                padAngle={0.03}

                ></Donut>
                </div>
                <div className="Y-O-form">
                {map(data, (v, k)=> <p key={k}>{`${k}: ${v}`}</p>)}
           
                </div>
                </div>
     


            </React.Fragment>

        )
    
}