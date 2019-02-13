import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'
import { GenderTileState, donutName } from './types';

export const LondonGenderTile =()=> {

        
        return(
            <React.Fragment>
                <div className='tile'>
            <h1>LONDONS GENDER DEMOGRAPHIC</h1>
                <Donut
                firstLabel='Men'
                firstAmount={31000000}
                secondLabel='Women'
                secondAmount={32000000}
                thirdLabel='Other'
                thirdAmount={10}
                londonDonut={true}
                donutName={donutName.gender}
                className='tileDonuts'
                radius={50}

                ></Donut>
                </div>
            </React.Fragment>

        )
    
}