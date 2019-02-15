import * as React from 'react'
import { FormProps } from './types';
import {DebounceInput} from 'react-debounce-input';


export const Form =({type, labels, updateUserData}) => {
 
        return(
            <React.Fragment>

                    <form onSubmit={e=> e.preventDefault() } className="form">
                    {labels.map(l=> (
                    <div className="input-label-pair" key={l}>

                    <label key={l} className="labels">{l}
                    </label>
                        <DebounceInput 
                        type="text"  
                        className="input"
                        debounceTimeout = {200}
                        onChange={(e)=>{
                            console.log('we are going through changes')
                            const value = parseFloat(e.target.value)
                            updateUserData(value, l, type)
                        }}></DebounceInput>
                        </div>
                    ))}
                    </form>


            </React.Fragment>
        )
    }
