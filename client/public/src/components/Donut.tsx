import * as React from "react";
import { pie, arc } from "d3-shape";
import { select, event } from "d3-selection";
import { interpolate } from "d3-interpolate";
import "d3-transition";
import { forEach, keys } from "lodash";

export enum donutType {
  gender = "gender",
  race = "race"
}

interface DonutProps {
  donutType: donutType;
  donutName: string;
  className?: string;
  radius: number;
  data: {};
  template: boolean;
  padAngle: number;
  target?: boolean;
  width: number;
  height: number;
}

interface DonutState {
  innerRadius: number;
  data: any[];
  prevData: any[];
  padAngle: number;
  colors: string[];
}
export class Donut extends React.Component<DonutProps, DonutState> {
  constructor(props) {
    super(props);
    this.state = {
      innerRadius: this.props.radius / 1.6,
      prevData: [],
      data: [],
      padAngle: 0,
      colors: [
        "rgb(77,87,127)",
        "rgba(211, 101, 67,0.7)",
        "rgb(173,83,55)",
        "rgb(211,101,67)",
        "rgb(219,129,101)"
      ]
    };
  }

  componentDidMount() {
    const { template, target, data } = this.props;
    const dataLabels = keys(data);
    const emptyArcs = dataLabels.map(l => {
      return { label: "emptyArc", value: 0 };
    });

    let colors = this.state.colors;
    if (template) {
      colors = ["rgba(0, 0, 255, 0.03)"];
    }
    if (target) {
      colors = [
        "rgba( 109, 117, 150,0.3)",
        "rgba(211, 101, 67,0.3)",
        "rgba(157, 163, 185,0.3)",
        "rgba(77, 87, 127,0.3)"
      ];
    }

    this.setState({ data: emptyArcs, colors }, () => {
      this.drawEmptyArcs();
      this.updateData(this.props);
    });
  }

  componentWillUpdate(nextProps) {
    if (nextProps !== this.props) {
      this.updateData(nextProps);
    }
  }

  // this is needed for the transitions... this draws an invisible empty arc so that a new arc can come out of this one
  drawEmptyArcs = () => {
    const { radius, width, height, donutName, template } = this.props;
    const { padAngle, colors, innerRadius, data } = this.state;
    const donut = pie()
      .padAngle(padAngle)
      .value(d => {
        return d.value;
      })(data);

    const theArc = arc()
      .outerRadius(radius)
      .innerRadius(innerRadius);

    const leftPadding = radius * 1.2;
    const topPadding = radius * 1.7;
    const svg = select(`#donut-${donutName}`)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("id", `donut-group-${donutName}`)
      // if we transform it just by radius in each direction the edges of top and left of donut will be
      // the corner of the svg, but we need it in a bit so the tooltips arent cut off
      .attr("transform", "translate(" + leftPadding + "," + topPadding + ")");

    svg
      .selectAll("path")
      .data(donut)
      .enter()
      .append("g")
      .attr("class", () => (template ? null : "arc"))
      .append("path")
      .attr("d", theArc)
      .attr("fill", (d, i) => {
        return colors[i];
      });

    if (!template) {
      // only add tooltips to donuts that arent templates
      select(`#donut-${donutName}`)
        .selectAll("rect")
        .data(donut)
        .enter()
        .append("g")
        .attr("class", `tooltip-group-${donutName}`)
        .append("rect")
        .attr("class", `tooltip-rect-${donutName}`);

      select(`.tooltip-group-${donutName}`)
        .selectAll("text")
        .data(donut)
        .enter()
        .append("text")
        .attr("class", `tooltip-${donutName}`);
    }
  };
  updateData = newProps => {
    const dataWithNewValues = [];
    forEach(newProps.data, (value, key) => {
      const arc = { label: key, value };
      return dataWithNewValues.push(arc);
    });
    const filteredData = dataWithNewValues.filter(
      d => d.value !== 0 && !isNaN(d.value)
    );
    const padAngle = filteredData.length > 1 ? this.props.padAngle : 0;
    const prevData = this.state.data;
    this.setState({ data: dataWithNewValues, prevData, padAngle }, () => {
      this.updateDonut();
    });
  };

  updateDonut = () => {
    const { radius, donutName, template, padAngle } = this.props;
    const { colors, innerRadius, data, prevData } = this.state;
    const oldDonut = pie()
      .padAngle(padAngle)
      .value(d => {
        return d.value;
      })(prevData);

    const newDonut = pie()
      .padAngle(padAngle)
      .value(d => d.value)(data);

    const newDonutWithPrevArc = newDonut.map((arc, i) => {
      const prevArc = oldDonut[i];
      return {
        ...arc,
        prevArc
      };
    });
    const createInterpolator = d => {
      // here interpolate is taking two objects (the previous arc object and the new arc object),
      // it can then use these to determine a sort of scale ...
      const i = interpolate(d.prevArc, d);
      return d => theArc(i(d));
    };
    const theArc = arc()
      .outerRadius(radius)
      .innerRadius(innerRadius);

    const path = select(`#donut-group-${donutName}`)
      .selectAll("path")
      .data(newDonutWithPrevArc);

    path
      .enter()
      .append("g")
      .attr("class", () => (template ? null : "arc"))
      .append("path")
      .attr("d", theArc)
      .attr("fill", (d, i) => colors[i]);

    path.exit().remove();

    path
      .transition()
      .duration(1000)
      .attrTween("d", createInterpolator);

    // TOOLTIP
    const tooltipText = select(`.tooltip-${donutName}`);
    const tooltipRect = select(`.tooltip-rect-${donutName}`);
    const tooltipGroup = select(`.tooltip-group-${donutName}`);

    select(`#donut-${donutName}`)
      .selectAll("path")
      .on("mouseover", d => {
        const label = `${d.data.label}: ${d.data.value}`;
        const labelLength = label.length;
        const rectWidth = labelLength * 5 + 20;
        tooltipText.text(label);
        tooltipGroup.style("visibility", "visible");
        tooltipText
          .style("fill", "rgb(77,87,127)")
          .style("z-index", "100")
          .style("font-size", "10px")
          .attr("dx", `5`)
          .attr("dy", `13`);
        tooltipRect
          .attr("fill", "rgb(255,247,242)")
          .style("width", rectWidth)
          .style("height", "20")
          .style("stroke-width", "1.5")
          .style("stroke", "rgba(0, 0, 0, 0.25)");
      })
      .on("mousemove", d =>
        tooltipGroup.attr(
          "transform",
          `translate(${event.offsetX},${event.offsetY - 26})`
        )
      )
      .on("mouseout", () => tooltipGroup.style("visibility", "hidden"));
  };

  render() {
    const { className, donutName } = this.props;
    return <svg id={`donut-${donutName}`} className={`${className}`} />;
  }
}
