import * as React from 'react'





export class Form extends React.Component{
    constructor(props){
        super(props)
    }




    render(){
        return(
            <React.Fragment>

                <p>Form</p>
                    <form onSubmit={e=> e.preventDefault() }>
                    <label>{this.props.firstLabel}

                        <input type="text" onChange={this.props.handleFirstChange}></input>
                    </label>
                    <label>{this.props.secondLabel}

                        <input type="text" onChange={this.props.handleSecondChange}></input>
                    </label>
                    <label>{this.props.thirdLabel}

                        <input type="text" onChange={this.props.handleThirdChange}></input>
                    </label>
        

                    </form>

            </React.Fragment>
        )
    }
}