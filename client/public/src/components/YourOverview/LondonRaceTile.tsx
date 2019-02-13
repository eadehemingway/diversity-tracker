import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'

export class LondonRaceTile extends React.Component{
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
                <Form 
                handleChange={this.handleChange}
                labels={['White', 'Black', 'Asian', 'Mixed', 'Other']}
                title='Race'

                ></Form>

                <Donut
                firstLabel='Men'
                firstAmount={this.state.men}
                secondLabel='Women'
                secondAmount={this.state.women}
                thirdLabel='Other'
                thirdAmount={this.state.other}
                tileName='Race'
                ></Donut>
                </div>
            </React.Fragment>

        )
    }
}