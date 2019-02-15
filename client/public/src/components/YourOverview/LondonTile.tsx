import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'
import { GenderTileState, donutType } from './types';
import { map } from 'lodash'

export const LondonTile =({type, title, data})=> {

        console.log('daaaaaaaaaaaaata', data)
        return(
            <React.Fragment>
                <div className='tile'>
                <h1 className="user-tile-sub-heading">LONDONS <br/>{title} <br/>DEMOGRAPHIC</h1>
                <Donut
                    donutName='london'
                    donutType={}
                    className='tileDonuts'
                    radius={80}
                    template={false}
                    data={data}
                ></Donut>

                <div className="form">
                {map(data, (v, k)=> <p key={k}>{`${k}: ${v}`}</p>)}
           
                </div>
                </div>
     


            </React.Fragment>

        )
    
}