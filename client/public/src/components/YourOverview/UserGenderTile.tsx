import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'
import { GenderTileState, donutType } from './types';

export const UserTile =({updateUserData, type, title, data})=> {



        
        return(
            <React.Fragment>
                <div className='tile'>
                <h1 className="user-tile-sub-heading"> USER<br/> {title}<br/> DEMOGRAPHIC</h1>
                <Donut
                    data={data}
                    donutName="userGender"
                    donutType={type}
                    radius={80}
                    className='tileDonuts'
                    template={false}
                ></Donut>
          
                 <Form 
                    updateUserData={updateUserData}
                    labels={['Men', 'Women', 'Other']}
                    type={type}
                ></Form>
                </div>
                
            </React.Fragment>

        )
    
}