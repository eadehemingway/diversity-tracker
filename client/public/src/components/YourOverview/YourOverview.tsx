import * as React from 'react';
import { YourOverviewLondonTile } from './YourOverviewLondonTile';
import { YourOverviewUserTile } from './YourOverviewUserTile';
import { donutType } from './Donut';
import { AppState } from '../../commonTypes';
import { connect} from 'react-redux'

export const YourOverview = ({userCompanyData, londonData})=> (
        <React.Fragment>
            <div className="Y-O-page-container">
                <h1  className="title">YOUR<br/>  OVERVIEW</h1>
                <div className="Y-O-tile-container">
                    <div className="Y-O-gender-container">
                        < YourOverviewUserTile type={donutType.gender} title="GENDER" data={userCompanyData.gender}/>
                        < YourOverviewLondonTile type={donutType.gender} title="GENDER" data={londonData.gender}/> 
                    </div>
                    <div  className="Y-O-race-container">           
                        < YourOverviewUserTile type={donutType.race} title="RACE" data={userCompanyData.race}/>
                        < YourOverviewLondonTile type={donutType.race} title="RACE" data={londonData.race}/> 
                    </div>
                </div>
            </div>
        </React.Fragment>

)

export const YourOverviewConnected= connect<{}, {}>(
    (appState: AppState)=>({
        londonData: appState.londonData,
        userCompanyData: appState.userCompanyData
    }))(YourOverview)