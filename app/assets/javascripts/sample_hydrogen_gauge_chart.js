if ($("#sample_hydrogen_gauge_chart").length > 0) {
  //////////////////////////////////////////////////////////////////   hydrogen
  var sample_hydrogen_gauge_chart = c3.generate({
      bindto: document.getElementById('sample_hydrogen_gauge_chart'),
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
                 return value ;
             },
             show: true // to turn off the min/max labels.
         },
     min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
     max: 1800,  // 100 is default
     units: 'Hydrogen',
     width: 39 // for adjusting arc thickness
      },
      color: {
          pattern: [ '#60B044','#F6C600', '#F97600',  '#FF0000',], // the four color levels for the percentage values.
          threshold: {
  //            unit: 'value', // percentage is default
  //            max: 200, // 100 is default
              values: [100, 700, 1800]
          }
      },
      size: {
          height: 180
      }
  });
  setTimeout(function () {
      sample_hydrogen_gauge_chart.load({
          columns: [['data', gon.hydrogen]]
      });
  }, 1000);
//////////////////////////////////////////////////////////////////
  var sample_methane_gauge_chart = c3.generate({
      bindto: document.getElementById('sample_methane_gauge_chart'),
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
                 return value ;
             },
             show: true // to turn off the min/max labels.
         },
     min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
     max: 1000,  // 100 is default
     units: 'Methane',
     width: 39 // for adjusting arc thickness
      },
      color: {
          pattern: [ '#60B044','#F6C600', '#F97600',  '#FF0000',], // the four color levels for the percentage values.
          threshold: {
  //            unit: 'value', // percentage is default
  //            max: 200, // 100 is default
              values: [120, 400, 1000]
          }
      },
      size: {
          height: 180
      }
  });
  setTimeout(function () {
      sample_methane_gauge_chart.load({
          columns: [['data', gon.methane]]
      });
  }, 1200);
//////////////////////////////////////////////////////////////////
  var sample_acetylene_gauge_chart = c3.generate({
      bindto: document.getElementById('sample_acetylene_gauge_chart'),
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
                 return value ;
             },
             show: true // to turn off the min/max labels.
         },
     min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
     max: 35,  // 100 is default
     units: 'Acetylene',
     width: 39 // for adjusting arc thickness
      },
      color: {
          pattern: [ '#60B044','#F6C600', '#F97600',  '#FF0000',], // the four color levels for the percentage values.
          threshold: {
  //            unit: 'value', // percentage is default
  //            max: 200, // 100 is default
              values: [1, 9, 35]
          }
      },
      size: {
          height: 180
      }
  });
  setTimeout(function () {
      sample_acetylene_gauge_chart.load({
          columns: [['data', gon.acetylene]]
      });
  }, 1400);
//////////////////////////////////////////////////////////////////
  var sample_ethylene_gauge_chart = c3.generate({
      bindto: document.getElementById('sample_ethylene_gauge_chart'),
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
                 return value ;
             },
             show: true // to turn off the min/max labels.
         },
     min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
     max: 35,  // 100 is default
     units: 'Ethylene',
     width: 39 // for adjusting arc thickness
      },
      color: {
          pattern: [ '#60B044','#F6C600', '#F97600',  '#FF0000',], // the four color levels for the percentage values.
          threshold: {
  //            unit: 'value', // percentage is default
  //            max: 200, // 100 is default
              values: [50, 51, ]
          }
      },
      size: {
          height: 180
      }
  });
  setTimeout(function () {
      sample_ethylene_gauge_chart.load({
          columns: [['data', gon.ethylene]]
      });
  }, 1400);

}
