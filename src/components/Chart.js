import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';

import * as actions from '../actions';
import * as members from '../members.json';

class Chart extends Component {

  renderChart(){
    const height = 400;
    const width = 1000;
    const padding = 50;
    const barPadding = 1;

    const svg = d3.select('svg').attr('height', height).attr('width', width);

    svg.append("g")
      .attr("transform", "translate(0," + (height - padding) + ")")
      .classed("x-axis", true);

    svg.append("g")
      .attr("transform", "translate(" + padding + ", 0)")
      .classed("y-axis", true);

    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height - 10)
      .style("text-anchor", "middle")
      .text("Total Votes");

    let yScale = d3.scaleLinear()
      // .domain(d3.max([0, d3.max(this.props.senators, d => d.total_votes)]))
      // .domain(d3.extent(members, d => d.total_votes).reverse())
      .domain([280, 40])
      .rangeRound([padding, height - padding]);

      console.log('d3extent', d3.extent(members, d => d.total_votes));

    // let histogram = d3.histogram()
    //   .domain(yScale.domain())
    //   .thresholds(yScale.ticks(100))
    //   .value(d => d.total_votes);

    // let bins = histogram(members);

    let xScale = d3.scaleLinear()
      .domain([1, 100])
      .range([padding, width - padding]); 

    let histogram = d3.histogram()
                        .domain(xScale.domain())
                        .thresholds(xScale.ticks(100))
                        .value(d => d.total_votes);

    let bins = histogram(members);

    d3.select(".y-axis")
      .call(d3.axisLeft(yScale));

    d3.select(".x-axis")
      .call(d3.axisBottom(xScale)
              .ticks(100))
      .selectAll("text")
        .attr("y", -3)
        .attr("x", 10)
        .attr("transform", "rotate(90)")
        .style("text-anchor", "start");

    let rect = svg
      .selectAll("rect")
      .data(bins);

    console.log('bins', bins);

    rect
      .exit()
      .remove();

    rect
      .enter()
        .append("rect")
      .merge(rect)
        .attr("x", d => xScale(d.x0))
        // .attr("y", d => yScale(d.total_votes))
        .attr("y", d => {console.log('d', yScale(d.length)); return padding + (300 - 261)})
        // .attr("y", d => {console.log(yScale(d)); return 261 + padding})
        // .attr("height", d => height - padding - yScale(d.total_votes))
        .attr("height", d => height - padding - padding - (300 - 261))
        // .attr("height", padding)
        .attr("width", d => width / xScale(d.length) / 2.5 - barPadding)
        .attr("fill", "blue");

    d3.select(".bin-count")
        .text("Number of bins: " + bins.length);
  }

  componentDidMount() {
    this.renderChart();
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h2>Chart goes here</h2>
        <svg>
        </svg>
      </div>
    )
  }
}

function mapStateToProps({ senators }) {
  return { senators };
}

export default connect(mapStateToProps, actions)(Chart);