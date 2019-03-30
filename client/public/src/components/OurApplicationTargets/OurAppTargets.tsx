import * as React from 'react';
import { OurHiresTile } from './OurHiresTile';
import { AppState } from '../../commonTypes';
import { connect} from 'react-redux'
import { GenderHireStats, RaceHireStats } from '../../ourCompanyData/reducer';

interface OurAppProps {
    ourCompanyDataGender:  {tech:GenderHireStats, nonTech: GenderHireStats},
    ourCompanyDataRace:  {tech: RaceHireStats, nonTech: RaceHireStats}
}

interface OurAppState {
    diversityCategory: string
};
export class OurApplicationTargets extends React.Component<OurAppProps, OurAppState>{
    constructor(props){
        super(props)
            this.state={
                diversityCategory:"Gender",
             }
    }
    render(){

        const data = this.state.diversityCategory === 'Gender' ?  this.props.ourCompanyDataGender : this.props.ourCompanyDataRace
        const genderFocused = this.state.diversityCategory === 'Gender' ? 'O-H-focused-tab' : '';
        const raceFocused = this.state.diversityCategory === 'Race' ? 'O-H-focused-tab': '';
        return(
            <React.Fragment>

            <div className="O-H-page-container">
            <div className="O-H-sticky-titles">

                <h1  className="title">OUR <br/> APPLICATION <br/> TARGETS</h1>

                    <div className="O-H-diversity-category-tab-container">
                        <button className={`O-H-diversity-category-tab ${genderFocused}`} onClick={()=>this.setState({diversityCategory:"Gender"})}>GENDER</button>
                        <button className={`O-H-diversity-category-tab ${raceFocused}`} onClick={()=>this.setState({diversityCategory:"Race"})}>RACE</button>
                    </div>

                    <div className="O-H-horizontal-sub-headings">
                        <h1 className="sub-heading">APPLICATIONS</h1>
                        <h1 className="sub-heading">HIRED</h1>
                    </div>
                    </div>
                        <OurHiresTile techType='tech' title="TECH" data={data.tech}></OurHiresTile>
                        <OurHiresTile techType='nonTech' title="NON TECH" data={data.nonTech}></OurHiresTile>
                    </div>

            </React.Fragment>
      
        )
    }
}




export const OurApplicationTargetsConnected = connect<{}, {}>(
    (appState: AppState)=>({
        ourCompanyDataGender: appState.ourCompanyData.ourHiringStatistics.gender,
        ourCompanyDataRace: appState.ourCompanyData.ourHiringStatistics.race

    }),
    (dispatch)=>({
    }))(OurApplicationTargets)