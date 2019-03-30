
import * as React from 'react';
import {Donut} from './Donut'
import {FormConnected} from './Form'

export const YourOverviewUserTile =({ type, title, data})=> {
        const radius = 80 
        const diameter = radius * 2
        const width = radius * 4
        const height = diameter * 1.5
        const labels = Object.keys(data)
        const padAngle = 0.03
        
        return(
                <div className='Y-O-tile'>
                <h1 className="Y-O-tile-title"> USER<br/> {title}<br/> DEMOGRAPHIC</h1>
                <div className= "Y-O-donut-div">
                <Donut
                    data={data}
                    donutName={`user${type}`}
                    donutType={type}
                    radius={radius}
                    template={false}
                    padAngle={padAngle}
                    width = {width}
                    height = {height}
                ></Donut>
                <Donut
                    data={{"Men":1, "Women":0, "Other":0}}
                    donutName={`template${type}`}
                    donutType={type}
                    radius={radius}
                    className='Y-O-template-donut template-donut'
                    template={true}
                    padAngle={padAngle}
                    width = {width}
                    height = {height}
                ></Donut>
    
                </div>
          
                 <FormConnected 
                    labels={labels}
                    diversityCategory={type}
                ></FormConnected>
                </div>
                


        )
    
}