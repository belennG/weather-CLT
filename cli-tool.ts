import weather from "weather-js";
import * as prompt from "prompt-promise";



let getWeather = async function(){
    const query = await prompt("I'd like to know what the weather is like in.. ")
    let searchTerms = {
        search: "",
        degreeType: "C"
    }
    weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
       
        console.log(JSON.stringify(result, null, 2));
      })

} 

