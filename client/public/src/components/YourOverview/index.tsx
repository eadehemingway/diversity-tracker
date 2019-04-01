import * as React from "react";
import { YourOverviewLondonTile } from "./YourOverviewLondonTile";
import { YourOverviewUserTile } from "./YourOverviewUserTile";
import { donutType } from "../Donut";
import { AppState } from "../../commonTypes";
import { connect } from "react-redux";
import { LondonDataState } from "../../londonData/reducer";
import { UserCompanyDataState } from "../../userCompanyData/reducer";

export const YourOverview = ({ userCompanyData, londonData }) => {
  const { gender, race } = donutType;
  return (
    <React.Fragment>
      <div className="Y-O-page-container">
        <h1 className="title">
          YOUR
          <br /> OVERVIEW
        </h1>
        <div className="Y-O-tile-container">
          <div className="Y-O-gender-container">
            <YourOverviewUserTile
              type={gender}
              title="GENDER"
              data={userCompanyData.gender}
            />
            <YourOverviewLondonTile
              type={gender}
              title="GENDER"
              data={londonData.gender}
            />
          </div>
          <div className="Y-O-race-container">
            <YourOverviewUserTile
              type={race}
              title="RACE"
              data={userCompanyData.race}
            />
            <YourOverviewLondonTile
              type={race}
              title="RACE"
              data={londonData.race}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

interface MapStateToYourOverviewProps {
  londonData: LondonDataState;
  userCompanyData: UserCompanyDataState;
}

export const YourOverviewConnected = connect<{}>((appState: AppState) => ({
  londonData: appState.londonData,
  userCompanyData: appState.userCompanyData
}))(YourOverview);
