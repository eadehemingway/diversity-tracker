
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
            raceColors: ['#6D7596','rgba(211, 101, 67, 1)', '#9DA3B9', '#D36543','#6D7596', '#9DA3B9'],
            genderColors: ['#4D577F','#6D7596', '#9DA3B9'],
            targetColors: ['rgba( 109, 117, 150,0.3)', 'rgba(211, 101, 67,0.3)','rgba(157, 163, 185,0.3)', 'rgba(77, 87, 127,0.3)'],
            templateColors: ['hsla(240,100%,50%, 0.03)']
        }
    }


    componentWillReceiveProps(nextProps){
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

        forEach(newProps.data, ( value, key)=> {
            const arc = {label: key, value:value}
            return dataWithNewValues.push(arc)
        })
        
        const filteredData=  dataWithNewValues.filter(d=>d.value !== 0)

        const padAngle = this.props.padAngle



        let prevData=this.state.data

        // if(this.state.data.length === 0){
        //     prevData = [{'label':'Men', 'value':NaN}]
        // }
        this.setState({data:dataWithNewValues, prevData, padAngle}, ()=>{
            this.updateDonut()

        })
    }

    updateDonut = () =>{

        const {radius } = this.props
        const { raceColors, genderColors, templateColors, padAngle, targetColors} = this.state
        let color;
        if(this.props.template){
            color=templateColors
        }else if (this.props.target){
            color= targetColors}else{
         color = raceColors
        }

        const oldDonut = pie()
        .padAngle(padAngle)
            .value(function(d){
                return d.value
            })(this.state.prevData)
        


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
            .append('text')
            .attr('class', 'tooltip-text')


    


        select(`#donut-${this.props.donutName}`)
            .selectAll('path')
            .on('mouseover', (d)=> {

                tooltip.text(`${d.data.label}: ${d.data.value}`)
                tooltip.style('visibility', 'visible')
                tooltip.style('fill', '#4D577F')
                tooltip.attr('dx', `15px`)
                tooltip.attr('dy', `15px`)

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

        const {radius} = this.props
        const {padAngle} = this.state
        const width = radius * 2;
        const height = radius * 2;
        const { raceColors, genderColors, templateColors, targetColors} = this.state
        let color;
   


        if(this.props.template){
            color=templateColors
        }else if (this.props.target){
            color= targetColors}else{
         color = raceColors
        }


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
            .attr('class', 'tooltip-text')
        // const tooltip = svg.selectAll(".arc")
        //     .append('div')
        //     .style('position', 'absolute')
        //     .style('visibility', 'hidden')
        //     .text('ttttttttttttttext')


        // select('.arc')
        //     .on('mouseover', ()=> tooltip.style('visibility', 'visible'))


    }
            

    render(){

        return(


            

                <svg id={`donut-${this.props.donutName}`} className={`${this.props.className}`}></svg>



        )
    }
}