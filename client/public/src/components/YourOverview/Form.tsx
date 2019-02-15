import * as React from 'react'
import { FormProps } from './types';
import {DebounceInput} from 'react-debounce-input';


export const Form =({type, labels, updateUserData}) => {
 
        return(
            <React.Fragment>

                    <form onSubmit={e=> e.preventDefault() } className="Y-O-form">
                    {labels.map(l=> (
                    <div className="Y-O-input-label-pair" key={l}>

                    <label key={l} className="Y-O-input-labels">{l}
                    </label>
                        <DebounceInput 
                        type="text"  
                        className="Y-O-input"
                        debounceTimeout = {200}
                        onChange={(e)=>{
                            const value = parseFloat(e.target.value)
                            updateUserData(value, l, type)
                        }}></DebounceInput>
                        </div>
                    ))}
                    </form>


            </React.Fragment>
        )
    }
