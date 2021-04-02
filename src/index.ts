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
        if(err) console.log("Sorry, I could not find the place you are looking for");
        const skyText = result[0].current.skytext;
        let weatherEmojis = weatherEmoji(skyText);
        //
        console.log(result[0].current.temperature + " C° " + skyText + " " + weatherEmojis);
      })
      getWeather();
    
} 

getWeather();


function weatherEmoji(skyText){
    if(skyText == "Partly Sunny"){
        return emoji.get("barely_sunny")
        } 
    if (skyText == "Mostly Cloudy"){
        return emoji.get("sun_behind_cloud")
        } 
    if (skyText == "Cloudy"){
        return emoji.get("cloud");
        } 
    if (skyText == "Sunny"){
        return emoji.get("sunny");
        } 
    if (skyText == "Rainy"){
        return emoji.get("rain_cloud");
        } 
    if (skyText == "Snow"){
        return emoji.get("snow_cloud")
    }
    if (skyText == "Mostly Clear"){
        return emoji.get("sun_small_cloud")
    }
    if (skyText == "Clear"){
        return emoji.get("full_moon")
    }
    }

