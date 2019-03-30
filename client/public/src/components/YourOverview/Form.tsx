import * as React from 'react'
import {DebounceInput} from 'react-debounce-input';
import { connect} from 'react-redux'


export interface FormProps {
    labels: any[];
    updateUserData: (value:number, key:string, diversityCategory:string)=> void
}

const Form =({diversityCategory, labels, updateUserData}) => (
        <React.Fragment>
            <form onSubmit={e=> e.preventDefault() } className="Y-O-form">
                {labels.map(label=> (
                    <div className="Y-O-input-label-pair" key={label}>

                    <label key={label} className="Y-O-input-labels">{label}
                    </label>
                        <DebounceInput 
                        type="text"  
                        className="Y-O-input"
                        debounceTimeout = {200}
                        onChange={(e)=>{
                            const value = parseFloat(e.target.value)
                            updateUserData(value, label, diversityCategory)
                        }}/>
                        </div>
                    ))}
            </form>
        </React.Fragment>
)
    

export const FormConnected = connect(
   null,
    (dispatch)=>({
        updateUserData: (value, label, diversityCategory)=>dispatch({type:"UpdateUserDataAction", value, label, diversityCategory})
    }))(Form)