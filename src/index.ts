#!/usr/bin/env node

import * as weather from "weather-js";
import * as prompt from "prompt-promise";
import * as emoji from "node-emoji";

let getWeather = async function(){
    const query = await prompt("I'd like to know what the weather is like in.. ")
    let searchTerms = {
        search: "",
        degreeType: "C"
    }
    weather.find({search: query, degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        const skyText = result[0].current.skytext;
        let weatherEmojis = weatherEmoji(skyText);
        //
        console.log(result[0].current.temperature + skyText + weatherEmojis);
      })
    
} 

getWeather();

function weatherEmoji(skyText){
    if(skyText == "Partly Sunny"){
   return "It is not sunny!"
    } if (skyText == "Mostly Cloudy"){

    } if (skyText == "Cloudy"){

    } if (skyText == "Sunny"){

    } if (skyText == "Rainy"){

    } if (skyText == "Snow"){

}
}

