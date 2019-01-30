import * as React from 'react'





export class Form extends React.Component{
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
                        <input type="text"  onChange={(e)=>this.props.handleChange(e, l)}></input>
                    </label>
                    ))}
                    </form>

            </div>
            </React.Fragment>
        )
    }
}