import * as React from "react";
import { OurOverviewTile } from "./OurOverviewTile";
import { map } from "lodash";
import { AppState } from "../../commonTypes";
import { connect } from "react-redux";
import { LondonDataState } from "../../londonData/reducer";
import {
  StaffDemographicPastData,
  TemplateDonutsForFuture
} from "../../ourCompanyData/reducer";

interface LondonDataWithUUID extends LondonDataState {
  title: string;
  uuid: string;
}
interface OurOverviewState {
  londonData: LondonDataWithUUID;
}
export class OurOverview extends React.Component<
  MapStateToProps,
  OurOverviewState
> {
  state = {
    londonData: {
      ...this.props.londonData,
      title: "LONDON",
      uuid: "LONDON"
    }
  };
  render() {
    const { londonData } = this.state;
    return (
      <React.Fragment>
        <div className="O-O-page-container">
          <h1 className="title">
            OUR <br /> OVERVIEW
          </h1>
          <div className="O-O-tile-container">
            <div className="O-O-tile O-O-vertical-label-container">
              <h2 className="sub-heading O-O-vertical-label">GENDER</h2>
              <h2 className="sub-heading O-O-vertical-label">RACE</h2>
            </div>
            {map(this.props.staffDemographicPastData, (col, i) => (
              <OurOverviewTile data={col} key={col.title} template={false} />
            ))}
            {map(this.props.templateDonuts, (col, i) => (
              <OurOverviewTile data={col} key={col.title} template={true} />
            ))}
            <div className="O-O-london-donut-collumn">
              <OurOverviewTile data={londonData} template={false} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

interface MapStateToProps {
  londonData: LondonDataState;
  staffDemographicPastData: StaffDemographicPastData;
  templateDonuts: TemplateDonutsForFuture;
}

export const OurOverviewConnected = connect<MapStateToProps>(
  (appState: AppState) => ({
    londonData: appState.londonData,
    staffDemographicPastData:
      appState.ourCompanyData.staffDemographicOverTime.staffDemographicPastData,
    templateDonuts:
      appState.ourCompanyData.staffDemographicOverTime.templateDonuts
  })
)(OurOverview);
