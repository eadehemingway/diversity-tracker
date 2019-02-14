import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'
import { GenderTileState, donutType } from './types';

export class UserGenderTile extends React.Component<{}, GenderTileState>{
    constructor(props){
        super(props)
        this.state={
            Men: 0,

        }
    }


    handleChange = (value: number, key:string)=>{
        // console.log('val', value, key)
        this.setState({[key]: value})
    }


    render(){

        
        return(
            <React.Fragment>
                <div className='tile'>
                <h1 className="user-tile-sub-heading"> USER<br/> GENDER<br/> DEMOGRAPHIC</h1>
           

                <Donut
                data={this.state}
                donutName="userGender"
                donutType={donutType.gender}
                radius={80}
                className='tileDonuts'
                template={false}
                ></Donut>
          
           <Form 
                handleChange={this.handleChange}
                labels={['Men', 'Women', 'Other']}
                
                ></Form>
                </div>
                
            </React.Fragment>

        )
    }
}