
import * as React from 'react'
import { pie, arc } from "d3-shape";
import { select } from "d3-selection";
import {interpolate } from "d3-interpolate"
import 'd3-transition';
import { DonutState, DonutProps, donutType } from './types';
import {forEach} from 'lodash'



export class Donut extends React.Component<DonutProps, DonutState>{
    constructor(props){
        super(props)
        this.state={
            // data:[{'label':null, 'value': 100}, {'label':null, 'value': 100}],
            prevData: [{'label':'Men', 'value':0}],
            data:[{'label':'Men', 'value':0}],
            padAngle: 0, 
            raceColors: ['#4D577F','#6D7596', '#9DA3B9'],
            genderColors: ['#4D577F','#6D7596', '#9DA3B9'],
            templateColors: ['hsla(240,100%,50%, 0.03)']
        }
    }


    componentWillReceiveProps(nextProps){
        // console.log('recieved props') 
        if(nextProps !== this.props){
            this.updateData(nextProps)

        }
    }

    componentDidMount(){

        this.updateData(this.props)
        this.drawFirstDonut()
        
    }


    updateData =(newProps) =>{
        const dataWithNewValues = []
        console.log('nnnn', newProps.data)
        forEach(newProps.data, ( value, key)=> {
            const arc = {label: key, value:value}
            return dataWithNewValues.push(arc)
        })
        // console.log('data updating satae', dataWithNewValues)
        
        const filteredData=  dataWithNewValues.filter(d=>d.value !== 0)
        const padAngle = filteredData.length > 1 ? 0.05 :0

        console.log('padangle', padAngle)
        let prevData=this.state.data
        // console.log('prev data updating satae', prevData)

        // if(this.state.data.length === 0){
        //     prevData = [{'label':'Men', 'value':NaN}]
        // }
        this.setState({data:dataWithNewValues, prevData, padAngle}, ()=>{
            this.updateDonut()

        })
    }

    updateDonut = () =>{
        // console.log('update donut')
        const {radius } = this.props
        const { raceColors, genderColors, templateColors, padAngle} = this.state
        let color;
        if(this.props.template){
            color=templateColors
        }else{
         color = raceColors
        }
        console.log('ppppppppppprev', this.state.prevData)
        const oldDonut = pie()
        .padAngle(padAngle)
            .value(function(d){
                return d.value
            })(this.state.prevData)
        

        console.log('oldDonut', oldDonut)
        const newDonut = pie()
        .padAngle(padAngle)
            .value(function(d){
                return d.value
                })
                (this.state.data)


        const newDonutWithPrevArc = newDonut.map((arc, i)=>{
            const prevArc = oldDonut[i]
            return {
                ...arc,
                prevArc
                // {
                //     data: {label: "label", value: "Men"},
                //     endAngle: 0.05,
                //     index: 0,
                //     padAngle: 0.05,
                //     startAngle: 0,
                //     value: NaN
                // }
            }
        })

        console.log('newdonutiwthprevarc', newDonutWithPrevArc)

        const theArc = arc()
            .outerRadius(radius)
            .innerRadius(radius/1.6);



        const path = select(`#donut-group-${this.props.donutName}`)
            .selectAll('path')
            .data(newDonutWithPrevArc)

        path.enter()
            .append('g')
            .attr('class', 'arc')
            .append('path')
            .attr('d', theArc)
            .attr('fill', function(d,i){return color[i]})

        
        path.exit()
            .remove()

        path.transition().duration(1000).attrTween("d", createInterpolator)
        const tooltip = select(`#donut-${this.props.donutName}`)
            .select('.arc')
            .append('text')
            // .style('position', 'absolute')


    


        select(`#donut-${this.props.donutName}`)
            .selectAll('path')
            .on('mouseover', (d)=> {
                
                tooltip.text(d.data.label)
                tooltip.style('visibility', 'visible')
                console.log(tooltip)
            
                
            })
            .on('mouseout', (d)=> {
                tooltip.text(d.data.label)
                .style('visibility', 'hidden')

            })
        

        function createInterpolator(d) {
            // here interpolate is taking two objects (the previous arc object and the new arc object),
            // it can then use these to determine a sort of scale ...
            const i =interpolate(d.prevArc, d);
            return function(d) {
              return theArc(i(d))
            }
          
          }

    }

    drawFirstDonut=()=>{
        console.log('draw first donut')
        const {radius} = this.props
        const {padAngle} = this.state
        const width = radius * 2;
        const height = radius * 2;
        const color = this.state.raceColors
       
        const donut = pie()
            .padAngle(padAngle)
            .value(function(d){
                return d.value
            })
            (this.state.data)



        const theArc = arc()
        .outerRadius(radius)
        .innerRadius(radius/1.6);

        const svg = select(`#donut-${this.props.donutName}`)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('id', `donut-group-${this.props.donutName}`)
            .attr('transform', 'translate(' + radius + ',' + radius + ')')

        const path = svg.selectAll('path')
            .data(donut)
            .enter()
            .append('g')
            .attr('class', 'arc')
            .append('path')
            .attr('d', theArc)
            .attr('fill', function(d,i){return color[i]})
        
            svg.selectAll('path')
            .data(donut)
            .enter()
            .append("text")
        // const tooltip = svg.selectAll(".arc")
        //     .append('div')
        //     .style('position', 'absolute')
        //     .style('visibility', 'hidden')
        //     .text('ttttttttttttttext')


        // select('.arc')
        //     .on('mouseover', ()=> tooltip.style('visibility', 'visible'))


    }
            

    render(){
        console.log('prevdata', this.state.prevData)
        console.log('currentdata', this.state.data)
        return(


            <div className= "tile-donut-container">

                <svg id={`donut-${this.props.donutName}`} className={this.props.className}></svg>
            </div>


        )
    }
}