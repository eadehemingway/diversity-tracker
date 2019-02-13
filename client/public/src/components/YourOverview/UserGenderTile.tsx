import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'
import { GenderTileState, donutType } from './types';

export class UserGenderTile extends React.Component<{}, GenderTileState>{
    constructor(props){
        super(props)
        this.state={
            Men: 0,
            Women: 0,
            Other: 0
        }
    }


    handleChange = (value: number, key:string)=>{
        this.setState({[key]: value})
    }


    render(){
        
        return(
            <React.Fragment>
                <div className='tile'>
                <h1> USER GENDER DEMOGRAPHIC</h1>
                <Form 
                handleChange={this.handleChange}
                labels={['Men', 'Women', 'Other']}
                
                ></Form>

                <Donut
                data={this.state}
                londonDonut={false}
                donutName={donutType.gender}
                radius={50}
                className='tileDonuts'
                
                ></Donut>
                </div>
            </React.Fragment>

        )
    }
}