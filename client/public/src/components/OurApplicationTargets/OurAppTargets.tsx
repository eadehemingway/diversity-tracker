import * as React from 'react';

import { OurHiresTile } from './OurHiresTile';

interface OurAppProps {
}

interface OurAppState {
    diversityCategory: string, 
    selectedDate: string, 
    gender: any,
    race: any
}
export class OurApplicationTargets extends React.Component<OurAppProps, OurAppState>{
    constructor(props){
        super(props)
            this.state={
                diversityCategory:"Gender",
                selectedDate: "jan18",
                gender: {
                    jan18: {
                        tech: {
                            applications:{
                                men: 17, women: 1
                            },
                            hired: {
                                men: 5, women: 1
                            }
                        },
                    nonTech: {
                            applications:{
                                men: 22, women: 17
                            },
                            hired: {
                                men: 1, women: 1
                            }
                        },
                    date:"jan18"
                    }
                },
            race: {
                jan18: {
                    tech: {
                        applications:{
                            white:20, Asian: 1
                        },
                        hired: {
                            white:5
                        }
                    },
                nonTech: {
                        applications:{
                            white:27, mixedEthnic:1, Asian: 2, black: 2
                        },
                        hired: {
                            white:2
                        }
                    },
                title:"jan18"
                }
            }
        }
    }
    render(){
        const data = this.state.diversityCategory === 'Gender' ?  this.state.gender : this.state.race

        return(
            <React.Fragment>

            <div className="O-H-page-container">
            <h1  className="title">OUR <br/> APPLICATION <br/> TARGETS</h1>
            <div className="O-H-tile-container">
            <div className="O-H-diversity-category-tab-container">

            <button className="O-H-diversity-category-tab" onClick={()=>this.setState({diversityCategory:"Gender"})}>GENDER</button>
            <button className="O-H-diversity-category-tab" onClick={()=>this.setState({diversityCategory:"Race"})}>RACE</button>
            </div>

            <div className="O-H-horizontal-sub-headings">
            <h1 className="sub-heading">APPLICATIONS</h1>
            <h1 className="sub-heading">HIRED</h1>
            </div>
            <OurHiresTile techType='tech' title="TECH" data={data[this.state.selectedDate].tech}></OurHiresTile>
            <OurHiresTile techType='nonTech' title="NON TECH" data={data[this.state.selectedDate].nonTech}></OurHiresTile>
            </div>
            </div>
            </React.Fragment>
      
        )
    }
}