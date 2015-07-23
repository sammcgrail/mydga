if ($("#sample_ratio_chart").length > 0) {
  var sample_ratio_chart = c3.generate({
      bindto: document.getElementById('sample_ratio_chart'),
      data: {
          columns: [
              ['Hydrogen', ]
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
     max: 100000, // 100 is default
     units: 'Total Combustible Gas Level',
     width: 39 // for adjusting arc thickness
      },
      color: {
          pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
          threshold: {
  //            unit: 'value', // percentage is default
  //            max: 200, // 100 is default
              values: [30, 60, 90, 100]
          }
      },
      size: {
          height: 180
      }
  });

  setTimeout(function () {
      sample_ratio_chart.load({
          columns: [['data', gon.oxygen]]
      });
  }, 1000);

}
