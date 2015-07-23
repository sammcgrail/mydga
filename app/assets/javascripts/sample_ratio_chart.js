if ($("#sample_ratio_chart").length > 0) {
  var sample_ratio_chart = c3.generate({
      bindto: document.getElementById('sample_ratio_chart'),
      data: {
          columns: [
              ['TCG', ]
          ],
          type: 'gauge',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      gauge: {
         label: {
             format: function(value, ratio) {
                 return value;
             },
             show: true // to turn off the min/max labels.
         },
     min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
     max: 5000, // 100 is default
     units: 'Total Combustible Gas Level',
     width: 39 // for adjusting arc thickness
      },
      color: {
          pattern: [ '#60B044','#F6C600', '#F97600',  '#FF0000',], // the three color levels for the percentage values.
          threshold: {
  //            unit: 'value', // percentage is default
  //            max: 200, // 100 is default
              values: [720, 1920, 4630]
          }
      },
      size: {
          height: 180
      }
  });
  setTimeout(function () {
      sample_ratio_chart.load({
          columns: [['data', 500]]
      });
  }, 1000);
  setTimeout(function () {
      sample_ratio_chart.load({
          columns: [['data', 730]]
      });
  }, 2000);
  setTimeout(function () {
      sample_ratio_chart.load({
          columns: [['data', 1930]]
      });
  }, 3000);
  setTimeout(function () {
      sample_ratio_chart.load({
          columns: [['data', 4629]]
      });
  }, 4000);
  setTimeout(function () {
      sample_ratio_chart.load({
          columns: [['data', 4631]]
      });
  }, 5000);
  setTimeout(function () {
      sample_ratio_chart.load({
          columns: [['data', 10000]]
      });
  }, 6000);

}
