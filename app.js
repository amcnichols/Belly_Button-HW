
d3.json("samples.json").then((importData) => {
  console.log(importData),
  d3.select ("#selDataset").on("input",optionChanged)
  buildChart(0)
  

  function optionChanged(){
    value=this.value
    console.log(value)
  }

  
function buildChart (value){
console.log (importData.samples[value].sample_values)

  var data = [
    {
      x: ['otu 1167','otu 2859','otu 482','otu 2264','otu 41','otu 1189','otu 352','otu 189','otu 2318','otu 1977','otu 3450'],//x will be sample count
      y: [163,126,113,78,71,51,50,47,40,40,37], //string version of OTU id's use slice for top 10
      type: 'bar'
    }
    
  ];
  Plotly.newPlot('bar', data);
  
  
}
var data = [{
  values: [163,126,113,78,71,51,50,47,40,40,37],
  labels: ['otu 1167','otu 2859','otu 482','otu 2264','otu 41','otu 1189','otu 352','otu 189','otu 2318','otu 1977','otu 3450'],
  type: 'pie'
}];

var layout = {
  height: 600,
  width: 600
};

Plotly.newPlot('pie', data, layout);

var trace1 = {
  x: ['otu 1167','otu 2859','otu 482','otu 2264','otu 41','otu 1189','otu 352','otu 189','otu 2318','otu 1977','otu 3450'],
  y: [163,126,113,78,71,51,50,47,40,40,37],
  mode: 'markers',
  marker: {
    color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(225, 110, 19)'],
    opacity: [1, 0.9, 0.8, 0.7, .6, .5, .4, .37, .27, .25],
    size: [100, 90, 80, 70,60,50,40,30,20,10]
  }
};

var data = [trace1];

var layout = {
  title: 'Bubble Chart',
  showlegend: false,
  height: 900,
  width: 1000
};

Plotly.newPlot('bubble', data, layout);


});

