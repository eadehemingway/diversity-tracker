import * as React from 'react'
import { pie, arc } from "d3-shape";
import { select } from "d3-selection";
import {interpolate } from "d3-interpolate"




export class Donut extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[{'label':null, 'value': 100}, {'label':null, 'value': 100}, {'label':null, 'value': 100}],
            prevData: [{'label':null, 'value': 100}, {'label':null, 'value': 100}, {'label':null, 'value': 100}]
        }
    }

    componentWillReceiveProps(nextProps){
        // console.log(this.props, nextProps)
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
        const donut = pie()
            .value(function(d){
                return d.value
                })
                (this.state.data)

        const theArc = arc()
            .outerRadius(radius)
            .innerRadius(radius * 0.75);


        const path = select(`#donut-${this.props.tileName}`)
            .selectAll('path')
            .data(donut)

        path.attr("d", theArc)


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
            
        const theArc = arc()
            .outerRadius(radius)
            .innerRadius(radius * 0.75);
 

       const g = svg.selectAll('path')
                    .data(donut)

            g.enter()
                    .append('g')
                    .attr('class', 'arc')
                    .append('path')
                    .attr('d', theArc)
                    .attr('fill', function(d,i){return color[i]})
                    .each(function(d) { this._current = d; });


                }
                


    render(){
        return(
            <React.Fragment>
                <div id={`donut-${this.props.tileName}`} className='donuts'></div>
            </React.Fragment>
        )
    }
}