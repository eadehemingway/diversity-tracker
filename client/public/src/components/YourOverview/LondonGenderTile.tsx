import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'
import { GenderTileState, donutType } from './types';

export const LondonGenderTile =()=> {

        
        return(
            <React.Fragment>
                <div className='tile'>
                <h1 className="user-tile-sub-heading">LONDONS <br/>GENDER <br/>DEMOGRAPHIC</h1>
                <Donut
                    donutName='londonGender'
                    donutType={donutType.gender}
                    className='tileDonuts'
                    radius={80}
                    template={false}
                    data={{Men: 31000000, Women:3200000, other:0}}
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