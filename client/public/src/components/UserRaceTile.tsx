import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'

export class UserRaceTile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            White: 0,
            Black: 0,
            Asian: 0,
            Mixed: 0,
            Other: 0
        }
    }


    handleChange = (e, k)=>{
        const value = parseFloat(e.target.value)
        this.setState({[k]: value})
    }

    render(){
        return(
            <React.Fragment>
                <div className='tile'>
                <h1> USER RACE DEMOGRAPHIC</h1>
                <Form 
                handleChange={this.handleChange}
                labels={['White', 'Black', 'Asian', 'Mixed', 'Other']}
                ></Form>

                <Donut
                firstLabel='Men'
                firstAmount={this.state.men}
                secondLabel='Women'
                secondAmount={this.state.women}
                thirdLabel='Other'
                thirdAmount={this.state.other}
                londonDonut={false}
                ></Donut>
                </div>
            </React.Fragment>

        )
    }
}