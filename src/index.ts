#!/usr/bin/env node

import * as weather from "weather-js";
import * as prompt from "prompt-promise";
import * as emoji from "node-emoji";

let getWeather = async function () {
  const query = await prompt("I'd like to know what the weather is like in.. ");

  weather.find({ search: query, degreeType: "C" }, function (err, results) {
    if (err) {
      console.log("Something went wrong", err);
      getWeather();
      return;
    }
    if (results.length == 0) {
      console.log("Could not find what you are looking for :(");

      return getWeather();
    }
    const skyText = results[0].current.skytext;
    let weatherEmojis = weatherEmoji(skyText);
    //
    console.log(
      results[0].current.temperature + " C° " + skyText + " " + weatherEmojis
    );
    if (results.length > 1) {
      console.log(
        "Now what you were looking for? Here are some other options: "
      );
      const arrayWithCities = results.map(function (result) {
        return result.location.name;
      });
      arrayWithCities.shift();
      console.log(arrayWithCities);
    }
    getWeather();
  });
};

getWeather();

function weatherEmoji(skyText) {
  if (skyText == "Partly Sunny") {
    return emoji.get("barely_sunny");
  }
  if (skyText == "Mostly Cloudy") {
    return emoji.get("sun_behind_cloud");
  }
  if (skyText == "Cloudy") {
    return emoji.get("cloud");
  }
  if (skyText == "Sunny") {
    return emoji.get("sunny");
  }
  if (skyText == "Rainy") {
    return emoji.get("rain_cloud");
  }
  if (skyText == "Snow") {
    return emoji.get("snow_cloud");
  }
  if (skyText == "Mostly Clear") {
    return emoji.get("sun_small_cloud");
  }
  if (skyText == "Clear") {
    return emoji.get("full_moon");
  }
}
