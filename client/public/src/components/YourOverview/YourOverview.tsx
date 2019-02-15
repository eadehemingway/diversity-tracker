import * as React from 'react';
import { YourOverviewLondonTile } from './YourOverviewLondonTile';
import { YourOverviewUserTile } from './YourOverviewUserTile';
import { donutType } from './types';

interface YourOverviewProps {

}


interface YourOverviewState {
    userData: {gender: {}},
    londonData: {gender: {}}
}
export class YourOverview extends React.Component<YourOverviewProps, YourOverviewState>{
    constructor(props){
        super(props)
        this.state={
            userData: {gender:{"Men":0, "Women":0, "Other":0}},
            londonData: {gender: {Men: 31000000, Women:3200000, other:0}}
        }
    }


     updateUserData = (value: number, key:string, diversityCategory)=>{
        const newUserData = {...this.state.userData, 
            [diversityCategory]: {...this.state.userData[diversityCategory], 
                [key]:value}
            }
        this.setState({userData: newUserData})
    }
    render(){
        return(
            <React.Fragment>
            <h1  className="title">YOUR OVERVIEW</h1>
            <div className="Y-O-page-content-container">
            < YourOverviewUserTile type={donutType.gender} title="GENDER" data={this.state.userData.gender} updateUserData={this.updateUserData}/>
            < YourOverviewLondonTile type={donutType.gender} title="GENDER" data={this.state.londonData.gender}/> 

            </div>
            </React.Fragment>


        )
    }
}