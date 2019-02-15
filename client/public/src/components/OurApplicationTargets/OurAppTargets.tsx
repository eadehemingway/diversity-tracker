import * as React from 'react';
import {FourDonutTile} from "./FourDonutTile"
import { OurHiresTile } from './OurHiresTile';



export class OurApplicationTargets extends React.Component{
    constructor(props){
        super(props)
            this.state={
                diversityCategory:"Gender",
                selectedDate: "jan18",
                gender: {
                    jan18: {
                        tech: {
                            applications:{
                                men: 2, women: 10
                            },
                            hired: {
                                men: 2, women: 10
                            }
                        },
                    nonTech: {
                            applications:{
                                men: 2, women: 10
                            },
                            hired: {
                                men: 2, women: 10
                            }
                        },
                    date:"jan18"
                    }
                },
            race: {
                jan18: {
                    tech: {
                        applications:{
                            men: 200, women: 2
                        },
                        hired: {
                            men: 29, women: 10
                        }
                    },
                nonTech: {
                        applications:{
                            men: 200, women: 18
                        },
                        hired: {
                            men: 23, women: 10
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