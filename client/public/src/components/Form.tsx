import * as React from 'react'
import { FormProps } from './types';
import {DebounceInput} from 'react-debounce-input';


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
                        <DebounceInput 
                        type="text"  
                        debounceTimeout = {200}
                        onChange={(e)=>{
                             const value = parseFloat(e.target.value)
                             this.props.handleChange(value, l)
                        }}></DebounceInput>
                    </label>
                    ))}
                    </form>

            </div>
            </React.Fragment>
        )
    }
}