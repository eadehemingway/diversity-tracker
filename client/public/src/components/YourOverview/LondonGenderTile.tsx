import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'
import { GenderTileState, donutType } from './types';

export const LondonGenderTile =()=> {

        
        return(
            <React.Fragment>
                <div className='tile'>
            <h1>LONDONS GENDER DEMOGRAPHIC</h1>
                <Donut
                londonDonut={true}
                donutName={donutType.gender}
                className='tileDonuts'
                radius={50}
                template={false}
                data={{Men: 31000000, Women:3200000, other:0}}
                ></Donut>
                </div>
            </React.Fragment>

        )
    
}