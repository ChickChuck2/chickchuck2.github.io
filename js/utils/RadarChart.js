export function renderRadarChart() {
    if (typeof d3 === 'undefined') {
        console.error("D3.js is not loaded.");
        return;
    }
    
    if (d3.select("#radar-chart").empty()) {
        console.error("Radar chart container not found.");
        return;
    }

    const data = [
        { skill: 'C#', value: 0.90 },
        { skill: 'Unity', value: 0.85 },
        { skill: 'POO/Arquitetura', value: 0.95 },
        { skill: 'Python', value: 0.70 },
        { skill: 'Web Dev (Front)', value: 0.75 },
        { skill: 'C/C++', value: 0.60 },
    ];

    const chartWidth = 400;
    const chartHeight = 400;
    const radius = Math.min(chartWidth, chartHeight) / 2 - 30;
    const centerX = chartWidth / 2;
    const centerY = chartHeight / 2;

    const total = data.length;
    const angleSlice = (Math.PI * 2) / total;

    const rScale = d3.scaleLinear()
        .range([0, radius])
        .domain([0, 1]); 

    d3.select("#radar-chart").selectAll("*").remove();

    const svg = d3.select("#radar-chart")
        .attr("width", chartWidth)
        .attr("height", chartHeight)
        .append("g")
        .attr("transform", `translate(${centerX}, ${centerY})`);

    const radarLine = d3.lineRadial()
        .curve(d3.curveLinearClosed)
        .radius(d => rScale(d.value))
        .angle((d, i) => i * angleSlice);

    const levels = 5;
    const levelFactor = radius / levels;
    
    const purpleColor = "#A020F0";
    const baseBlue = "#3B82F6";

    for (let i = 0; i < levels; i++) {
        svg.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", levelFactor * (i + 1))
            .style("fill", "none")
            .style("stroke", `rgba(160, 32, 240, 0.2)`)
            .style("stroke-width", 1);
    }

    const axis = svg.selectAll(".axis")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "axis");

    axis.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", (d, i) => rScale(1) * Math.sin(i * angleSlice))
        .attr("y2", (d, i) => rScale(1) * Math.cos(i * angleSlice) * -1)
        .style("stroke", `rgba(160, 32, 240, 0.5)`)
        .style("stroke-width", "1px");

    axis.append("text")
        .attr("class", "legend")
        .style("font-size", "12px")
        .attr("text-anchor", "middle")
        .attr("x", (d, i) => (rScale(1.1) * Math.sin(i * angleSlice)))
        .attr("y", (d, i) => (rScale(1.1) * Math.cos(i * angleSlice)) * -1)
        .attr("dy", "0.35em")
        .text(d => d.skill)
        .style("fill", "white")
        .style("filter", "drop-shadow(0 0 2px black)"); 

    svg.append("path")
        .datum(data)
        .attr("d", radarLine)
        .style("fill", `rgba(160, 32, 240, 0.4)`)
        .style("stroke", `rgba(160, 32, 240, 0.8)`)
        .style("stroke-width", "2px")
        .style("filter", `drop-shadow(0 0 8px rgba(160, 32, 240, 0.8))`) 
        .style("opacity", 0)
        .transition()
        .duration(1500)
        .style("opacity", 1);

    svg.selectAll(".data-point")
        .data(data)
        .enter().append("circle")
        .attr("class", "data-point")
        .attr("r", 5) 
        .attr("cx", 0) 
        .attr("cy", 0)
        .style("fill", baseBlue)
        .style("stroke", "white")
        .style("stroke-width", "1.5px")
        .style("filter", "drop-shadow(0 0 5px white)")
        .on('mouseover', function(d) {
            const value = Math.round(d.value * 100) + '%';
            d3.select(this)
                .transition().duration(200)
                .attr('r', 8)
                .style('fill', 'white');
            svg.append("text")
                .attr('class', 'tooltip-text')
                .attr('x', d3.select(this).attr('cx'))
                .attr('y', parseFloat(d3.select(this).attr('cy')) - 10)
                .attr('text-anchor', 'middle')
                .style('fill', '#F1F5F9')
                .style('font-weight', 'bold')
                .style('font-size', '14px')
                .text(value);
        })
        .on('mouseout', function(d) {
            d3.select(this)
                .transition().duration(200)
                .attr('r', 5)
                .style('fill', baseBlue);
            svg.select('.tooltip-text').remove();
        })
        .transition()
        .duration(1500)
        .attr("cx", (d, i) => rScale(d.value) * Math.sin(i * angleSlice))
        .attr("cy", (d, i) => rScale(d.value) * Math.cos(i * angleSlice) * -1); 
}
