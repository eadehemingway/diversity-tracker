import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'
import { GenderTileState } from './types';

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
                firstLabel='Men'
                firstAmount={this.state.Men}
                secondLabel='Women'
                secondAmount={this.state.Women}
                thirdLabel='Other'
                thirdAmount={this.state.Other}
                tileName='Gender'
                londonDonut={false}
                ></Donut>
                </div>
            </React.Fragment>

        )
    }
}