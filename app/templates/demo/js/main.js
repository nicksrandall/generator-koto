// Initialize
var chart = new koto.<%= global %>(d3.select('#chart'));

// Render
var data = [
  [{name: 'North', value: 51}],
  [{name: 'East', value: 71}],
  [{name: 'South', value: 21}],
  [{name: 'West', value: 61}]
];

chart.draw(data);