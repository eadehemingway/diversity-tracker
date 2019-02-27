import {values} from 'lodash'
import * as React from 'react';
import {Donut} from './Donut'
import {Form} from './Form'

export const YourOverviewUserTile =({updateUserData, type, title, data})=> {

        const valuesNotEqualToZero = values(data).filter(v=> v !== 0)
        const template = data.template === 1
        const radius = 80 
        const diameter = radius * 2
        const width = radius * 3

        return(
                <div className='Y-O-tile'>
                <h1 className="Y-O-tile-title"> USER<br/> {title}<br/> DEMOGRAPHIC</h1>
                <div className= "Y-O-donut-div">
                <Donut
                    data={data}
                    donutName="userGender"
                    donutType={type}
                    radius={radius}
                    template={false}
                    padAngle={0.03}
                    width = {width}
                    height = {diameter * 2}
                ></Donut>
                <Donut
                    data={{"Men":1, "Women":0, "Other":0}}
                    donutName="template"
                    donutType={type}
                    radius={radius}
                    className='Y-O-template-donut template-donut'
                    template={true}
                    padAngle={0.03}
                    width = {width}
                height = {diameter * 2}
                ></Donut>
    
                </div>
          
                 <Form 
                    updateUserData={updateUserData}
                    labels={['Men', 'Women', 'Other']}
                    type={type}
                ></Form>
                </div>
                


        )
    
}