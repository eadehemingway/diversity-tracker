import * as React from 'react'
import { FormProps } from './types';


export class Form extends React.Component<FormProps>{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
            <div id='form'>

                <p>{this.props.title}</p>
                    <form onSubmit={e=> e.preventDefault() }>
                    {this.props.labels.map(l=> (
                    <label key={l}>{l}
                        <input type="text"  onChange={(e)=>{
                             const value = parseFloat(e.target.value)
                            return this.props.handleChange(value, l)
                        }}></input>
                    </label>
                    ))}
                    </form>

            </div>
            </React.Fragment>
        )
    }
}