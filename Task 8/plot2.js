const plotlib = require('nodeplotlib')
const trace1 = {x: [1, 2], y: [1, 2], type: 'scatter'};
const trace2 = {x: [3, 4], y: [9, 16], type: 'scatter'};
const trace3 = {x: [5, 6], y: [25, 36], type: 'scatter'};
const trace4 = {x: [7, 8], y: [49, 64], type: 'scatter'};
plotlib.plot([trace1, trace2, trace3, trace4]);