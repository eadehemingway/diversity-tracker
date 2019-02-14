import * as React from 'react';
import { LondonTile } from './LondonGenderTile';
import { UserTile } from './UserGenderTile';
import { UserRaceTile } from './UserRaceTile';
import { LondonRaceTile } from './LondonRaceTile';
import { donutType } from './types';



export class YourOverview extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userData: {},
            londonData: {gender: {Men: 31000000, Women:3200000, other:0}}
        }
    }


     updateUserData = (value: number, key:string, diversityCategory)=>{
        console.log('val', value, key)
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
            <div className="user-overview-container">
            < UserTile type={donutType.gender} title="GENDER" data={this.state.userData.gender} updateUserData={this.updateUserData}/>
            < LondonTile type={donutType.gender} title="GENDER" data={this.state.londonData.gender}/> 

            </div>
            </React.Fragment>


        )
    }
}