import * as React from 'react'
import { pie, arc } from "d3-shape";
import { select } from "d3-selection";



export class Donut extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    // static getDerivedStateFromProps(props, state){
    //     const firstSegment= {'label': props.firstLabel, 'value':props.firstAmount}
    //     const secondSegment= {'label': props.secondLabel, 'value':props.secondAmount}
    //     const thirdSegment= {'label': props.thirdLabel, 'value':props.thirdAmount}
    //     const data = [firstSegment, secondSegment, thirdSegment]
    //     return {data:data}
    // }

    componentWillReceiveProps(nextProps){
        if(nextProps !== this.props){
            const firstSegment= {'label': this.props.firstLabel, 'value': parseFloat(this.props.firstAmount)}
            const secondSegment= {'label': this.props.secondLabel, 'value':parseFloat(this.props.secondAmount)}
            const thirdSegment= {'label': this.props.thirdLabel, 'value':parseFloat(this.props.thirdAmount)}
            const data = [firstSegment, secondSegment, thirdSegment]

            this.setState({data: data}, ()=> {
                this.drawDonut()
            })
        }
    }


    drawDonut=()=>{
        if(this.state.data.length> 2){
        const width = 200;
        const height = 200;
        const radius = 50;
        const color = ['pink', 'salmon', 'white']
        const svg = select('#svg')
            .append('svg')
            .data(this.state.data)
            .attr('width', width)
            .attr('height', height)
            .append('svg:g')
            .attr('transform', 'translate(' + radius + ',' + radius + ')')

        const outerRad = arc()
            .outerRadius(radius)
            .innerRadius(radius * 0.75);
        

        const donut = pie()
            .value(function(d){
                return d.value})(this.state.data)

        const arcs = svg.selectAll('g.slice')
            .data(donut)
            .enter()
                .append('svg:g')
                .attr('class', 'slice')

            arcs.append('svg:path')
                .attr('fill', function(d,i){return color[i]})
                .attr('d', outerRad)
            
    }
}



    



    render(){
        return(
            <React.Fragment>
                <div id='svg'></div>
            </React.Fragment>
        )
    }
}