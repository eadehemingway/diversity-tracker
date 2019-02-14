import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'
import { GenderTileState, donutType } from './types';

export class UserTile extends React.Component<{}, GenderTileState>{
    constructor(props){
        super(props)
        this.state={
            Men: 0,

        }
    }


  


    render(){

        
        return(
            <React.Fragment>
                <div className='tile'>
                <h1 className="user-tile-sub-heading"> USER<br/> {this.props.title}<br/> DEMOGRAPHIC</h1>
                <Donut
                    data={this.props.data}
                    donutName="userGender"
                    donutType={this.props.type}
                    radius={80}
                    className='tileDonuts'
                    template={false}
                ></Donut>
          
                 <Form 
                    updateUserData={this.props.updateUserData}
                    labels={['Men', 'Women', 'Other']}
                    type={this.props.type}
                ></Form>
                </div>
                
            </React.Fragment>

        )
    }
}