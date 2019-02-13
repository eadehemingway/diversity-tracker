
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
            data:[],
            prevData: []
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
        const data = []
        forEach(this.props.data, ( value, key)=> {
            const arc = {label: key, value:value}
           return data.push(arc)
        })
        this.setState({data, prevData:this.state.data}, ()=>{
            this.updateDonut()

        })
    }

    updateDonut = () =>{
        const {radius } = this.props
        const color = this.props.donutType === donutType.gender ? ['#57575E', '#D36543', '#4D577E', '#D36543'] : ['grey', '#D36543', 'pink', '#D36543']

        const oldDonut = pie()
        .padAngle(.03)
            .value(function(d){
                return d.value
            })(this.state.prevData)

        const newDonut = pie()
        .padAngle(.03)
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
            .transition()
            .duration(750)
            .attrTween('d', createInterpolator)
            .remove()

        path.transition().duration(1000).attrTween("d", createInterpolator)

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
        const {radius} = this.props
        const width = radius * 2;
        const height = radius * 2;
        const color = this.props.donutType === donutType.gender ? ['#57575E', '#D36543', '#4D577E', '#D36543'] : ['grey', '#D36543', 'pink', '#D36543']
       
        const donut = pie()
            .padAngle(.03)
            .value(function(d){
                return d.value})(this.state.data)

        const theArc = arc()
        .outerRadius(radius)
        .innerRadius(radius/1.6);

        const svg = select(`#donut-${this.props.donutName}`)
            .attr('width', width)
            .attr('height', height)
            .attr('class', 'svg')
            .append('g')
            .attr('id', `donut-group-${this.props.donutName}`)
            .attr('transform', 'translate(' + radius + ',' + radius + ')')

        const path = svg.selectAll('path')
                    .data(donut)

        path.enter()
            .append('g')
            .attr('class', 'arc')
            .append('path')
            .attr('d', theArc)
            .attr('fill', function(d,i){return color[i]})


    }
            

    render(){

        return(
            <React.Fragment>
                <svg id={`donut-${this.props.donutName}`} className={this.props.className}></svg>
            </React.Fragment>
        )
    }
}