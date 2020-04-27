
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
      x: importData.samples[value].sample_values.slice(0,10),//x will be sample count
      y: importData.samples[value].otu_ids.slice(0,10), //string version of OTU id's use slice for top 10
      type: 'bar'
    }
    
  ];
  Plotly.newPlot('bar', data);
  
  

var data2 = [{
  values: importData.samples[value].sample_values.slice(0,10),
  labels: importData.samples[value].otu_ids.slice(0,10),
  type: 'pie'
}];

var layout = {
  height: 600,
  width: 600
};

Plotly.newPlot('pie', data2, layout);

var trace1 = {
  x:  importData.samples[value].sample_values.slice(0,10),
  y: importData.samples[value].otu_ids.slice(0,10),
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
  width: 1000,
  
};

Plotly.newPlot('bubble', data, layout);


}});

