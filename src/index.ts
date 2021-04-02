#!/usr/bin/env node

import * as weather from "weather-js";
import * as prompt from "prompt-promise";

let getWeather = async function(){
    const query = await prompt("I'd like to know what the weather is like in.. ")
    let searchTerms = {
        search: "",
        degreeType: "C"
    }
    weather.find({search: query, degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
       
        console.log(result[0].current.temperature, result[0].current.skytext);
      })

} 

getWeather();