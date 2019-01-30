import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'

export class GenderTile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            men: 0,
            women: 0,
            other: 0
        }
    }


    handleMenChange = (e)=>{
        const value = e.target.value
        this.setState({men: value})
    }

    handleWomenChange = (e)=>{
        const value = e.target.value
        this.setState({women: value})

    }

    handleOtherChange = (e)=>{
        const value = e.target.value
        this.setState({other: value})
    }



    render(){
        return(
            <React.Fragment>
                <Form 
                handleFirstChange={this.handleMenChange}
                firstLabel='Men'
                handleSecondChange={this.handleWomenChange}
                secondLabel='Women'
                handleThirdChange={this.handleOtherChange}
                thirdLabel='Other'
                ></Form>

                <Donut
                firstLabel='Men'
                firstAmount={this.state.men}
                secondLabel='Women'
                secondAmount={this.state.women}
                thirdLabel='Other'
                thirdAmount={this.state.other}
                ></Donut>
            </React.Fragment>

        )
    }
}