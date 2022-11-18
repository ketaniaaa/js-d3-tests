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

    var names = artistJSON.map( a => a.name);
    var pop = artistJSON.map( b => b.popularity);
   

    console.log("name: " + names + "popularity: " + pop);

    var width = 600;
    var height = 600;

    const svg = d3.select("body")
    .append("svg")
    .attr("witdth", width)
    .attr("height", height);

    svg.selectAll("rect")
    .data(artistJSON)
    .enter()
    .append("rect")
    .attr("x", (d.name))
    .attr("y", (e.popularity));


}
getRelated();
