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

                    <form onSubmit={e=> e.preventDefault() } className="form">
                    {this.props.labels.map(l=> (
                    <div className="input-label-pair">

                    <label key={l} className="labels">{l}
                    </label>
                        <DebounceInput 
                        type="text"  
                        className="input"
                        debounceTimeout = {200}
                        onChange={(e)=>{
                            console.log('we are going through changes')
                            const value = parseFloat(e.target.value)
                            this.props.updateUserData(value, l, this.props.type)
                        }}></DebounceInput>
                        </div>
                    ))}
                    </form>


            </React.Fragment>
        )
    }
}