import React, { Component } from 'react';
import * as d3 from 'd3';

import Dataset from '../components/data.jsx';
import IconUrl from '../international/iconsMap.jsx'
import { nodeProcess, linkProcess } from '../components/functions.jsx';


class Topology extends Component {
  componentDidMount() {
    this.drawNode();
  }

  drawNode() {
    const margin = ({top: 0, right: 0, bottom: 5, left: 5}); 
    const [SVG_WIDTH, SVG_HEIGHT] = [1350, 580];
    const [titleSize, numberSize, iconSize] = [11, 14, 35]

    const svg = d3.select('body')
      .append('svg')
      .attr("width", SVG_WIDTH + margin.left + margin.right)
      .attr("height", SVG_HEIGHT + margin.top + margin.bottom)
    
    let nodeData = Dataset().nodes;
    let linkData = Dataset().links;

    nodeData = nodeProcess(nodeData, SVG_WIDTH, SVG_HEIGHT, titleSize, numberSize, iconSize);
    linkData.forEach(item => {
      item.path = linkProcess(item, SVG_WIDTH, SVG_HEIGHT, iconSize);
    })

    const nodes = svg.selectAll(".nodes")
      .data(nodeData)
      .enter()
      .append("g")
      .attr("class", "nodes")
    let pathLength;

    // 导入节点部分
    nodes.append("image")
      .attr("xlink:href", function(d) {
        return IconUrl(d.urlIndex)
      })
      .attr("x", d => {return d.transferedX;})
      .attr("y", d => {return d.transferedY;})
      .attr("width", iconSize)
      .attr("height", iconSize);

    nodes.append('text')
      .attr("x", d => {return d.titleX;})
      .attr("y", d => {return d.titleY;})
      .attr('align', "center")
      .attr('font-size', titleSize)
      .text(d => d.name)  

    nodes.append('text')
      .attr("x", d => {return d.numberX;})
      .attr("y", d => {return d.numberY;})
      .attr('font-size', numberSize)
      .text(d => d.number)  

    // 导入连接线部分
    const lines = svg.selectAll(".links")
      .data(linkData)
      .enter()
      .append("g")
      .attr("class", "links")

    lines.append("path")
      .attr("d", d => {return d.path})
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", 2)
      .attr("stroke-opacity", .7)

    linkData.forEach(item => {
      const animateRect = svg.append("path")
      .attr("d", item.path)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 10)
      .attr("stroke-dasharray", function() {
        pathLength = this.getTotalLength();
        return [10, pathLength - 10];
      })
      .attr("stroke-dashoffset", pathLength)

      animateRect
        .transition()
        .duration(4000)
        .attr("stroke-dashoffset", 10.5)
    })
    
  }
  render() {
    return <div></div>
  }
}

export default Topology