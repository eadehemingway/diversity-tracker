import * as React from 'react'
import { pie, arc } from "d3-shape";
import { select } from "d3-selection";
import {interpolate } from "d3-interpolate"
import 'd3-transition';
import { DonutState, DonutProps } from './types';




export class Donut extends React.Component<DonutProps, DonutState>{
    constructor(props){
        super(props)
        this.state={
            data:[{'label':null, 'value': 100}, {'label':null, 'value': 100}, {'label':null, 'value': 100}],
            prevData: [{'label':null, 'value': 100}, {'label':null, 'value': 100}, {'label':null, 'value': 100}]
        }
    }

    componentWillReceiveProps(nextProps){

        if(nextProps !== this.props){
            const firstSegment= {'label': this.props.firstLabel, 'value': nextProps.firstAmount}
            const secondSegment= {'label': this.props.secondLabel, 'value':nextProps.secondAmount}
            const thirdSegment= {'label': this.props.thirdLabel, 'value':nextProps.thirdAmount}
            const data = [firstSegment, secondSegment, thirdSegment]
            this.setState({data, prevData:this.state.data}, ()=>{
            this.updateDonut()
            })
        }
    }

    componentDidMount(){
        this.drawFirstDonut()
    }

    updateDonut = () =>{
        const radius = 50;

        const oldDonut = pie()
            .value(function(d){
                return d.value
            })(this.state.prevData)

        const newDonut = pie()
            .value(function(d){
                return d.value
                })
                (this.state.data)

        const newDonutWithPrevArc = newDonut.map((arc, i)=>{
            const prevArc = oldDonut[i]
            return {
                ...arc,
                prevArc
            }
        })
        const theArc = arc()
            .outerRadius(radius)
            .innerRadius(33);


        const path = select(`#donut-${this.props.tileName}`)
            .selectAll('path')
            .data(newDonutWithPrevArc)

        path.attr("d", theArc).transition().duration(1000).attrTween("d", createInterpolator)

        function createInterpolator(d) {
            // here interpolate is taking two objects (the previous arc object and the new arc object),
            // it can then use these to determine a sort of scale ...
            const i =interpolate(d.prevArc, d);
            return function(t) {
              return theArc(i(t))
            }
          
          }

    }

    drawFirstDonut=()=>{
        const width = 100;
        const height = 100;
        const radius = 50;
        const color = ['pink', 'salmon', 'white']
        const svg = select(`#donut-${this.props.tileName}`)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('class', 'svg')
            .append('g')
            .attr('transform', 'translate(' + radius + ',' + radius + ')')

        const donut = pie()
            .value(function(d){
                return d.value})(this.state.data)
        // console.log('DONUT ORIG', donut)
        const theArc = arc()
            .outerRadius(radius)
            .innerRadius(33);
 

        const g = svg.selectAll('path')
                    .data(donut)

        g.enter()
            .append('g')
            .attr('class', 'arc')
            .append('path')
            .attr('d', theArc)
            .attr('fill', function(d,i){return color[i]})


    }
                


    render(){
        return(
            <React.Fragment>
                <div id={`donut-${this.props.tileName}`} className='donuts'></div>
            </React.Fragment>
        )
    }
}