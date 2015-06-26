'use strict'




var red = ['South Station', 'Park', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'];

var green = ['Haymarket', 'Government Center', 'Park', 'Bolyston', 'Arlington', 'Copley'];

var orange = ['North Station', 'Haymarket', 'Park', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];

var MBTALines = {'red':red, 'orange':orange,'green':green};
console.log(MBTALines);


var numberOfStopsOnRed = function(start, end){
  var count = ('red'.indexOf(end) - 'red'.indexOf(start));
  if (red.indexOf(start) > red.indexOf(end)) {
    return -count;
  } else if ('red'.indexOf(start) < 'red'.indexOf(end)) {
    return count;
  } else {
    return 0;
  }
console.log(numberOfStopsOnRed('South Station, Alewife'));
 };

var numberOfStopsOnGreen = function(start, end){
  var count = (green.indexOf(end) - green.indexOf(start));
  if (green.indexOf(start) > green.indexOf(end)) {
    return -count;
  } else if (green.indexOf(start) < green.indexOf(end)) {
    return count;
  } else {
    return 0;
  }
console.log(numberOfStopsOnGreen('Copley', 'Government Center'));
};


var numberOfStopsOnOrange = function(start, end) {
  var count = (orange.indexOf(end) - orange.indexOf(start));
  if (orange.indexOf(start) > orange.indexOf(end)) {
    return -count;
  } else if (orange.indexOf(start) < orange.indexOf(end)) {
    return count;
  } else {
    return 0;
  }
console.log(numberOfStopsOnOrange('Back Bay', 'Chinatown'));
};


var stopBetweenStations = function (startLine, endLine, startStation, endStation){
  var totalStops;
  if (startLine === endLine){
     if (startLine === 'red'){
      totalStops = numberOfStopsOnRed(startStation, endStation);
    } if (startLine === 'green'){
    totalStops = numberOfStopsOnGreen(startStation, endStation);
    } else { totalStops = numberOfStopsOnOrange(startStation, endStation);
    }
    return totalStops;
} else { totalStops = startLine.indexOf(startStation) - startLine.indexOf('park') + endLine.indexOf(endStation) - endLine.indexOf('park');
}
};
if(stopBetweenStations(red, green, 'Central', 'Bolyston') === (3 || 4 || 5)){
  return console.log('holy fuck you fairly close if not dead nuts on');
} else {console.log('SHHHIIIIIIIIIT\!\!\!\!\!\!\! WHY WONT THIS FUCKING THING WORK');}

