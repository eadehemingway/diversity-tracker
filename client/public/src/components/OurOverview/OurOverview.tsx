import * as React from 'react';
import { LondonGenderRaceDonuts } from './LondonGenderRaceDonut';
import { OverviewDonutColumn } from './OverviewDonutColumn';
import {map} from "lodash";


export class OurOverview extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: {
                jan18: {gender: {men: 2, women: 10}, race: {white:2, other:10}, title:"01/18", uuid:"jan18"},
                jun18: {gender: {men: 4, women: 20}, race: {white:4, other:10}, title:"06/18", uuid:"june18"},
                jan19: {gender: {men:7, women: 2}, race: {white: 9, other: 7}, title: "01/19", uuid:"jan19"}
            },
            templateDonuts: {
                june19: {gender: {t: 1}, race: {t:1}, title:"06/19", uuid:"june19"},
                jan20: {gender: {t:1}, race: {t:1}, title:"01/20", uuid:"jan20"},
                june20: {gender: {t:1}, race: {t:1}, title: "06/20", uuid:"june20"},
                jan21: {gender: {t:1}, race: {t:1}, title:"01/21", uuid:"jan21"},
                // june21: {gender: {t:1}, race: {t:1}, title:"06/21", uuid:"june21"},
                // jan22: {gender: {t:1}, race: {t:1}, title: "01/22", uuid:"jan22"},
                // june22: {gender: {t:1}, race: {t:1}, title:"06/22", uuid:"june22"},
                // jan23: {gender: {t:1}, race: {t:1}, title:"01/23", uuid:"jan23"},
                // june23: {gender: {t:1}, race: {t:1}, title: "06/23", uuid:"june23"}
            }
        }
    }
    render(){
        return(
            <React.Fragment>

            <h1 className="title">OUR OVERVIEW</h1>
            <div className="our-overview-container">
            <div  className="overview-donut-collum collum-label-container">
                <h1 className="sub-heading collumn-labels">GENDER</h1>
                <h1 className="sub-heading collumn-labels">RACE</h1>
            </div>
             {map(this.state.data, (col, i)=>  <OverviewDonutColumn data={col} key={col.title} template={false}/>)}
             {map(this.state.templateDonuts, (col, i)=>  <OverviewDonutColumn data={col} key={col.title} template={true}/>)}

        

            <LondonGenderRaceDonuts/>
            </div>
            </React.Fragment>
        )
    }
}