import * as React from 'react';
import { Link} from 'react-router-dom'
import { Donut } from '../YourOverview/Donut';
import { donutType } from '../YourOverview/types';



export class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <React.Fragment>

            <h1  className="title">HOME</h1>
            <div style={{marginLeft: '16rem', position:'relative', width:'200px', height:'200px'}}>

                <Donut donutType={donutType.gender}
                donutName={`one`}
                radius={70}
                data={{
                    men: 12, women: 2
                }}
                template={false}
                className="small-donut"
                padAngle={0}
                />
                <Donut donutType={donutType.gender}
                donutName={`two`}
                radius={100}
                data={{
                    men: 12, women: 6
                }}
                template={false}
                className="big-donut"
                target={true}
                padAngle={0}
                />


            </div>
            </React.Fragment>

        )
    }
}