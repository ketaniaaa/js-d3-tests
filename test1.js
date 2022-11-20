const auth = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5693254345msh210c1f64ca7ef9ap1c28fcjsn0b60a0ba5298',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
const taylorUrl = 'https://spotify23.p.rapidapi.com/artist_related/?id=06HL4z0CvFAxyc27GXpf02'
async function getRelated(){
    var data ={};
    
    const response = await fetch (taylorUrl, auth);
    const taylorRel = await response.json();
    const artistJSON = taylorRel.artists;
    const Images = artistJSON.images;
    console.log(artistJSON);

    let names = artistJSON.map( a => a.name);
    let pop = artistJSON.map( b => b.popularity);
    let images1 = artistJSON.map( c => c.images);


    let images2 = images1.map( d => d[1]);
    let imageUrl = images2.map (e => e.url);
    let result = pop.map((popstat, i) => ({popstat, artistname: names[i], img: imageUrl[i]})); //made all three arrays into one array
    console.log(result);  //result for d3 calls
    var chart = relatedChart(result);
      d3.select("#relatedChart").data(result).call(chart);
}
getRelated();
 //   var chart = relatedChart(result);
 //   d3.select("#relatedArtists").data(result).call(chart);
  /*  var names = artistJSON[0].name;
    var pop = artistJSON[0].popularity;
    for (var a =0; a < artistJSON.length; a++){
        var names = artistJSON[a].name;
    } var stringArray = lyrics[i].split(" ")
    for (var b = 0; b < artistJSON.length; b++){
        var pop = artistJSON[b].popularity;
    }
   for (var z = 0; z < folkloreUrl.length; z++){
        var url = folkloreUrl[z];*/

 // console.log(names); //this for toolip 
 // console.log(pop); //this for node size
 // console.log(images1);
//  console.log(images2);
//  console.log(imageUrl); //use this for pictures

  /*start d3 functions  */

  //var iconSource = imageUrl;

/*var nameData = selection.enter().data(names);
var popData = selection.enter().data(pop);
var imgData = selection.enter().data(imageUrl);
    var width = 600;
    var height = 600;
    
    const svg = d3.select("body")
    .append("svg")
    .attr("witdth", width)
    .attr("height", height);

    var scaleRadius = d3.scaleLinear.domain([
        d3.min(popData, function(d){
            return + d;
        }),
        d3.max(popData, function (d){
            return +d;
        })
    ]).range([10,30])

var node = svg.selectAll("circle")
.data(popData)
.enter()
.append("circle")
.attr("r", function(d){
    return scaleRadius(d);
}).style()*/





function relatedChart(){

    var width = 500;
    var height = 500;
    var popRad = "popstat";
    var circleName = "artistname";
    var circleFill = "img";

    function chart(selection){

        var data =
        selection.enter().data();
        //seleting svg that i have added to the container and seeting the parameters 
        var svg = d3.select("#relatedAChart");
        svg.attr('width', width).attr('height', height);

        var artistTooltip = selection.append("div")
        .attr('id','bubbleTool')
        .style("position", "absolute")
        .style("opacity", 0)
        .style("text-decoration", "none")
        .style("padding", "12px")
        .style("background-color", "rgb(230, 230, 230)")
        .style("border-radius", "4px")
        .style("text-align", "left")
        .style("width", "200px")
        .style("line-height", "150%").text("");
          
        
        //this code aims to make the bubbles move a little when the chart loads though ideally I would like to improve this so that the bubbles move a little when clicked on
        var simulation = d3.forceSimulation(data)
        .force("charge", d3.forceManyBody().strength([-90]))
        .force("x", d3.forceX())
        .force("y", d3.forceY()).on("tick", ticked); 
        function ticked(e){
          node.attr("cx", function(d) {
            return d.x * 1;
        }).attr("cy", function(d) {
            return d.y * 1;
        });
        }
        
var scaleRadius = d3.scaleLinear().domain([
  d3.min(data, function(d) {
      return + d[popRad];
  }),
  d3.max(data, function(d) {
      return + d[popRad];
  })
]).range([10, 30]);

var node = svg.selectAll("circle")
.data(data).enter()
.append("circle")

.attr('r', function(d) {
  return scaleRadius(d[popRad]);
}).style("fill", function(d) {
  return '#5c6a55c8'}) //green nodes that reflect the site color palette
.attr("id", 'artistBubble') //id so that I can style the bubbles from my css file because styling in JS is sometimes confusing.

.attr('transform', 'translate(' + [
  width / 2,
  height / 2
] + ')')
.on('mouseover', function(event, d){

var matrix = this.getScreenCTM()
.translate(+ this.getAttribute("cx"), + this.getAttribute("cy"));

artistTooltip.style("opacity", 1.0);
artistTooltip.html(d[circleName])
.style("left", (window.pageXOffset + matrix.e + 15) + "px")
.style("top", (window.pageYOffset + matrix.f - 30)+ "px");

}).on("mouseout", function() {
return artistTooltip.style("opacity", 0);
});

}

chart.width = function(value) {
if (!arguments.length) {
return width;
}
width = value;
return chart;
};

chart.height = function(value) {
if (!arguments.length) {
return height;
}
height = value;
return chart;
};
return chart;
            
}