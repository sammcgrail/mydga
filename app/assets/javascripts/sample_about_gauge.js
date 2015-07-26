if ($("#sample_about_gauge").length > 0) {
  var sample_about_gauge = c3.generate({
      bindto: document.getElementById('sample_about_gauge'),
      data: {
          columns: [
              ['TCG', ]
          ],
          type: 'gauge',
      },
      gauge: {
         label: {
             format: function(value, ratio) {
                 return value;
             },
             show: true // to turn off the min/max labels.
         },
     min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
     max: 4630, // 100 is default
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
      sample_about_gauge.load({
          columns: [['TCG', gon.hydrogen]]
      });
  }, 1000);
  setTimeout(function () {
      sample_about_gauge.load({
          columns: [['TCG', 730]]
      });
  }, 2000);
  setTimeout(function () {
      sample_about_gauge.load({
          columns: [['TCG', 1930]]
      });
  }, 3000);
  setTimeout(function () {
      sample_about_gauge.load({
          columns: [['TCG', 4629]]
      });
  }, 4000);
  setTimeout(function () {
      sample_about_gauge.load({
          columns: [['TCG', 4631]]
      });
  }, 5000);

  var sample_ratio_r2 = c3.generate({
    bindto: document.getElementById('sample_ratio_r2'),

    data: {
        columns: [
            ['CH4/H2', .3],
        ],
        type: 'bar'
    },
    axis: {

    },
    regions: [
        {axis: 'y', start: 0.1, class: 'regionY',},
    ]
  });
  var sample_ratio_r1 = c3.generate({
    bindto: document.getElementById('sample_ratio_r1'),

    data: {
        columns: [
            ['C2H4/C2H6', .9],
        ],
        type: 'bar'
    },
    axis: {

    },
    regions: [
        {axis: 'y', start: 0.1, class: 'regionY',},
    ]
  });
  var sample_ratio_r5 = c3.generate({
    bindto: document.getElementById('sample_ratio_r5'),

    data: {
        columns: [
            ['C2H4/C2H6', .8],
        ],
        type: 'bar'
    },
    axis: {

    },
    regions: [
        {axis: 'y', start: 1.0, class: 'regionY',},
    ]
  });


}
