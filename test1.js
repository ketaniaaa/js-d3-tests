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
    console.log(result);
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



}
getRelated();
