
  /*song one */


var margin = {top: 10, right: 40, bottom: 30, left: 30},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
var svg = d3.select("#chart1")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

      console.log("d3 has begun")

      var data = [
        {
            name: "energy",
            color: "#DAE2E7C7",
            value: 36
        },
        {
            name: "dance",
            color: "#BBAE80C7",
            value: 77
        },
        {
            name: "speechiness",
            color: "#919F65C7",
            value: 52
        },
        {
            name: "acousticness",
            color: "#56764DC7",
            value: 76
        },
       /* */
        {
            name: "valence",
            color: "#4F5E46C7",
            value: 18
        },
        {
            name: "liveliness",
            color: "#000000",
            value: 12
        },
      ];

       xAxis = d3.scaleLinear()
      .domain([0,170])
      .range([0, width]);

     var x = d3.scaleBand()
      .range([ 0, width ])
      .domain(data.map(function(d) { return d.name; }));
/*
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
       // .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");*/
      /*svg.append('g')
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xAxis));*/

      var y = d3.scaleLinear()
      .domain([0, 100])
      .range([ height, 0]);

      const rVal = d3.scaleLinear().domain([
        d3.min(data, function(d){
            return + d.value
        }),
        d3.max(data, function(d){
            return + d.value
        })
      ]).range([0, 100]);

     var cx = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, width - margin.right +200])
      .padding(1);
     
      var node = svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cy", 200)
      .attr("cx", (d, i)=> cx(i))
      .attr("r", (d) => rVal(d.value))
      .attr("fill", function(d){
        return d.color;
      });
      
      svg.append("g")
      .attr("stroke", "#000000")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", 3,3)
    .selectAll("line")
    .data(data)
    .join("line")
      .attr("x1", 135)
      .attr("x2", 135)
      .attr("y1", 200)
      .attr("y2", 360);

      svg.append("g")
      .attr("stroke", "#000000")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", 3,3)
    .selectAll("line")
    .data(data)
    .join("line")
      .attr("x1", 240)
      .attr("x2", 240)
      .attr("y1", 200)
      .attr("y2", 360); 
      
      
      svg.append("g")
      .attr("stroke", "#000000")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", 3,3)
    .selectAll("line")
    .data(data)
    .join("line")
      .attr("x1", 350)
      .attr("x2", 350)
      .attr("y1", 200)
      .attr("y2", 360);

      svg.append("g")
      .attr("stroke", "#000000")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", 3,3)
    .selectAll("line")
    .data(data)
    .join("line")
      .attr("x1", 460)
      .attr("x2", 460)
      .attr("y1", 200)
      .attr("y2", 360);

      svg.append("g")
      .attr("stroke", "#000000")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", 3,3)
    .selectAll("line")
    .data(data)
    .join("line")
      .attr("x1", 572)
      .attr("x2", 572)
      .attr("y1", 200)
      .attr("y2", 360);
 ///////////////////////////////////////////remember to change this     
svg.append("text") //energy
.text("0.36")
.attr("x", 120)
.attr("y", 380)
.attr("id", "songFeatLabel");
     
svg.append("text") //dance
.text("0.77")
.attr("x", 220)
.attr("y", 380)
.attr("id", "songFeatLabel");

svg.append("text") //speechiness
.text("0.52")
.attr("x", 330)
.attr("y", 380)
.attr("id", "songFeatLabel");

svg.append("text") //acous
.text("0.76")
.attr("x", 440)
.attr("y", 380)
.attr("id", "songFeatLabel");

svg.append("text") //valence
.text("0.18")
.attr("x", 550)
.attr("y", 380)
.attr("id", "songFeatLabel");