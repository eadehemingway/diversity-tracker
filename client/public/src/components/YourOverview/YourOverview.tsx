import * as React from 'react';
import { YourOverviewLondonTile } from './YourOverviewLondonTile';
import { YourOverviewUserTile } from './YourOverviewUserTile';
import { donutType } from './Donut';

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
            userData: {gender:{Men:0, Women:0, Other:0}, race: {White:0, Mixed:0, Asian: 0, Black: 0, Other:0}},
            londonData: {gender: {Men: 4000000, Women: 4100000, Other: 33000}, race: {White:4887435, Mixed:405279, Asian: 1511546, Black: 1088640, Other:281041}, title:"LONDON", uuid:"LONDON"}

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
            <div className="Y-O-page-container">

            <h1  className="title">YOUR<br/>  OVERVIEW</h1>
            <div className="Y-O-tile-container">
            <div className="Y-O-gender-container">
            < YourOverviewUserTile type={donutType.gender} title="GENDER" data={this.state.userData.gender} updateUserData={this.updateUserData}/>
            < YourOverviewLondonTile type={donutType.gender} title="GENDER" data={this.state.londonData.gender}/> 
            </div>
            <div  className="Y-O-race-container">           
            < YourOverviewUserTile type={donutType.race} title="RACE" data={this.state.userData.race} updateUserData={this.updateUserData}/>
            < YourOverviewLondonTile type={donutType.race} title="RACE" data={this.state.londonData.race}/> 
            </div>

            </div>
            </div>
            </React.Fragment>


        )
    }
}