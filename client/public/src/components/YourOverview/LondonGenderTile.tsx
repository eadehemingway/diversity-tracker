import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'
import { GenderTileState, donutType } from './types';

export const LondonTile =({type, title, data})=> {

        
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
                    <p>Men: 310000000</p>
                    <p>Women: 310000000</p>
                    <p>Other: 310000000</p>


                </div>
                </div>
     


            </React.Fragment>

        )
    
}