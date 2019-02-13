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
                data={this.state}
                tileName='Race'
                data={{White:310, Black:400, SouthAsian:100, EastAsian:100}}
                ></Donut>
                </div>
            </React.Fragment>

        )
    }
}