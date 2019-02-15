import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'
import { GenderTileState, donutType } from './types';

export const YourOverviewUserTile =({updateUserData, type, title, data})=> {



        
        return(

                <div className='Y-O-tile'>
                <h1 className="Y-O-tile-title"> USER<br/> {title}<br/> DEMOGRAPHIC</h1>
                <div className= "Y-O-donut-div">
                <Donut
                    data={data}
                    donutName="userGender"
                    donutType={type}
                    radius={80}
                    className='donut-svg'
                    template={false}
                ></Donut>
                </div>
          
                 <Form 
                    updateUserData={updateUserData}
                    labels={['Men', 'Women', 'Other']}
                    type={type}
                ></Form>
                </div>
                


        )
    
}