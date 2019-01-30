import * as React from 'react'
import { pie, arc } from "d3-shape";
import { select } from "d3-selection";



export class Donut extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[{'label':null, 'value': 100}, {'label':null, 'value': 100}, {'label':null, 'value': 100}]
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps !== this.props){
            const firstSegment= {'label': this.props.firstLabel, 'value': parseFloat(nextProps.firstAmount)}
            const secondSegment= {'label': this.props.secondLabel, 'value':parseFloat(nextProps.secondAmount)}
            const thirdSegment= {'label': this.props.thirdLabel, 'value':parseFloat(nextProps.thirdAmount)}
            const data = [firstSegment, secondSegment, thirdSegment]
            this.setState({data: data}, ()=> {
                this.updateDonut()
            })
        }
    }

    componentDidMount(){
        this.drawFirstDonut()
    }

    updateDonut = () =>{

        const radius = 50;
        // const color = ['pink', 'salmon', 'white']
        // console.log('stata', this.state.data)


        const donut = pie()
            .value(function(d){
                return d.value
                })
                (this.state.data)
        // console.log('CORRECT STATE', donut)

        const theArc = arc()
            .outerRadius(radius)
            .innerRadius(radius * 0.75);
        // console.log('the arc', theArc)

        const path = select('#donut')
            .selectAll('path')
            .data(donut)

        path.attr("d", theArc)
        


    }
    drawFirstDonut=()=>{
        const width = 200;
        const height = 200;
        const radius = 50;
        const color = ['pink', 'salmon', 'white']
        const svg = select('#donut')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + radius + ',' + radius + ')')

        const donut = pie()
            .value(function(d){
                return d.value})(this.state.data)
            
        const theArc = arc()
            .outerRadius(radius)
            .innerRadius(radius * 0.75);
 

       const g = svg.selectAll('arc')
                    .data(donut)
                    .enter()
                    .append('g')
                    .attr('class', 'arc')

             g.append('path')
                    .attr('d', theArc)
                    .attr('fill', function(d,i){return color[i]})
    }



    render(){
        return(
            <React.Fragment>
                <div id='donut'></div>
            </React.Fragment>
        )
    }
}