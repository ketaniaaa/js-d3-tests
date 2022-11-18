const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5693254345msh210c1f64ca7ef9ap1c28fcjsn0b60a0ba5298',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
//change the following to be dynamic 
const folkloreUrl = [
'https://spotify23.p.rapidapi.com/track_lyrics/?id=0Jlcvv8IykzHaSmj49uNW8',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=4R2kfaDFhslZEMJqAFNpdd',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=2Eeur20xVqfUoM3Q7EFPFt',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=4pvb0WLRcMtbPGmtejJJ6y',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=1MgV7FIyNxIG7WzMRJV5HC',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=0ZNU020wNYvgW84iljPkPP',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=6KJqZcs9XDgVck7Lg9QOTC',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=3hUxzQpSfdDqwM3ZTFQY0K',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=7kt9e9LFSpN1zQtYEl19o1',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=2NmsngXHeC1GQ9wWrzhOMf',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=6VsvKPJ4xjVNKpI8VVZ3SV',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=2QDyYdZyhlP2fp79KZX8Bi',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=08fa9LFcFBTcilB3iq2e2A',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=5kI4eCXXzyuIUXjQra0Cxi',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=7MbT4I8qGntX4fMdqMQgke',
'https://spotify23.p.rapidapi.com/track_lyrics/?id=6MWoRt97mnSTXZhu3ggi9C']


async function getFolklore(){
    var data = {};
    for (var z = 0; z < folkloreUrl.length; z++){
        var url = folkloreUrl[z];
    const response = await fetch(url, options);
    const folkloreData = await response.json();
    const lyricdata = folkloreData.lyrics; //first object
    const linedata = lyricdata.lines; //second array of objects
    var result = linedata.map(({ words }) => words).join();
    console.log(result)


   // console.log(linedata);

    
    var lyrics = linedata.map(x => x.words)

  var count = 0;
    for (var i = 0; i < lyrics.length; i++) {
     var stringArray = lyrics[i].split(" ");
     for (var j = 0; j < stringArray.length; j++){
       stringArray[j] = stringArray[j].replace(/[,"()?]/g,"").toLowerCase();
    //   console.log(stringArray[j]);
        //change search word to user input? or change search word to ask user to give a word to see occurence of it in the songs
// var searchword = "I"

var searchword = "I"
 if (searchword.toLowerCase() === stringArray[j]){
count++;
 }
     }}
    console.log(count);    
     //try get song name? through rapid api 
      data[z] = count;
    console.log(data);
    /*  mapping = {
        0: "the 1",
      1: "cardigan",
      2: "the last great american dynasty",
      3:"exhile",
      4: "my tears ricochet",
      5: "mirrorball",
      6: "seven",
      7: "august",
      8: "this is me trying",
      9: "illicit affairs",
      10: "invisible string",
      11: "mad woman",
      12: "ephiphany",
      13: "betty",
      14: "peace",
      15: "hoax"};
      
      for(let [key, value] of Object.entries(data)){
          data[mapping[key]] = value;
          delete data[key];
      }
      console.log(data);*/
    };



}
getFolklore();



   /*     var result = linedata.map(({ words }) => words).join();
        console.log(result)
  var allLyric = JSON.stringify(result); //converted string 
  var res = allLyric.split(" ", ",");*/

      /*  strFrequency = function (stringArr) { //es6 way of getting frequencies of words
            return stringArr.reduce((count, result) => {
                  count[result] = (count[result] || 0) + 1;
                  return count;
            }, {})
          }//words not to count in the lyrics 

          let obj = strFrequency(allLyric.split(","));*/


    

 
/*
  success: function(data, id) {
                $('#error').empty();
                if (data.tracks.items.length == 0) {
                    console.log("no results");
                    $('#error').append("No Results. Try again!");
                }
                // display search results
                data.tracks.items.forEach(function(track, index) {
                    resultIDs.push(track.id);
                    let newEl = $('<li onClick="trackFeatures(&apos;' + track.id + '&apos;)"></li>').text(track.name + '   |   ' + track.artists[0].name);

                    $('#results').append(newEl);
            




$('#start').on('click', function(){
  
    $.ajax({
        crossDomain: true,
        url: "https://spotify23.p.rapidapi.com/track_lyrics/?id=0Jlcvv8IykzHaSmj49uNW8",
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "5693254345msh210c1f64ca7ef9ap1c28fcjsn0b60a0ba5298",
            "X-RapidAPI-Host": "spotify23.p.rapidapi.com"
      }, success: function (response){
     console.log(" shortartist: " + response.lyrics); }
}); //end ajax call 

});//end function*/
/*
let temp;

    for (let i = 0; i< data.length; i++){
        //console.log(data[i]);

        for (let y = 0; y< data[i].DataClasses.length; y++){
            //console.log(allDatasOne.element.DataClasses[i]);
            //console.log(data[i].DataClasses[y]);

            //allDatasOne.push({"Name": temp});

            temp = data[i].DataClasses[y];

            console.log(temp);


                allDatasOne.push(temp);

                passwordCount++;

                "async": true,
	"crossDomain": true,
	"url": "https://spotify23.p.rapidapi.com/track_lyrics/?id=0Jlcvv8IykzHaSmj49uNW8",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "5693254345msh210c1f64ca7ef9ap1c28fcjsn0b60a0ba5298",
		"X-RapidAPI-Host": "spotify23.p.rapidapi.com"
	}

    */