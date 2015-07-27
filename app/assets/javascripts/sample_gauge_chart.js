if ($("#sample_hydrogen_gauge_chart").length > 0) {
  //////////////////////////////////////////////////////////////////   hydrogen
  var sample_hydrogen_gauge_chart = c3.generate({
      bindto: document.getElementById('sample_hydrogen_gauge_chart'),
      data: {
          columns: [
              ['data', ]
          ],
          type: 'gauge',
      },
      gauge: {
         label: {
             format: function(value, ratio) {
                 return value ;
             },
             show: true
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
          columns: [['Hydrogen', gon.hydrogen]]
      });
  }, 1000);

    var sample_methane_gauge_chart = c3.generate({
        bindto: document.getElementById('sample_methane_gauge_chart'),
        data: {
            columns: [
                ['data', ]
            ],
            type: 'gauge',
        },
        gauge: {
           label: {
               format: function(value, ratio) {
                   return value ;
               },
               show: true
           },
       min: 0,
       max: 1000,
       units: 'Methane',
       width: 39
        },
        color: {
            pattern: [ '#60B044','#F6C600', '#F97600',  '#FF0000',],
            threshold: {
                values: [120, 400, 1000]
            }
        },
        size: {
            height: 180
        }
    });
      setTimeout(function () {
          sample_methane_gauge_chart.load({
              columns: [['Methane', gon.methane]]
          });
      }, 1200);
        var sample_ethane_gauge_chart = c3.generate({
            bindto: document.getElementById('sample_ethane_gauge_chart'),
            data: {
                columns: [
                    ['data', ]
                ],
                type: 'gauge',
            },
            gauge: {
               label: {
                   format: function(value, ratio) {
                       return value ;
                   },
                   show: true
               },
           min: 0,
           max: 150,
           units: 'Ethane',
           width: 39
            },
            color: {
                pattern: [ '#60B044','#F6C600', '#F97600',  '#FF0000',],
                threshold: {
                    values: [65, 100, 150]
                }
            },
            size: {
                height: 180
            }
        });
        setTimeout(function () {
            sample_ethane_gauge_chart.load({
                columns: [['Ethane', gon.ethane]]
            });
        }, 1400);






  var sample_ethylene_gauge_chart = c3.generate({
      bindto: document.getElementById('sample_ethylene_gauge_chart'),
      data: {
          columns: [
              ['data', ]
          ],
          type: 'gauge',
      },
      gauge: {
         label: {
             format: function(value, ratio) {
                 return value ;
             },
             show: true
         },
     min: 0,
     max: 200,
     units: 'Ethylene',
     width: 39
      },
      color: {
          pattern: [ '#60B044','#F6C600', '#F97600',  '#FF0000',],
          threshold: {
              values: [50, 100, 200]
          }
      },
      size: {
          height: 180
      }
  });
  setTimeout(function () {
      sample_ethylene_gauge_chart.load({
          columns: [['Ethylene', gon.ethylene]]
      });
  }, 1600);

  var sample_acetylene_gauge_chart = c3.generate({
      bindto: document.getElementById('sample_acetylene_gauge_chart'),
      data: {
          columns: [
              ['data', ]
          ],
          type: 'gauge',
      },
      gauge: {
         label: {
             format: function(value, ratio) {
                 return value ;
             },
             show: true
         },
     min: 0,
     max: 35,
     units: 'Acetylene',
     width: 39
      },
      color: {
          pattern: [ '#60B044','#F6C600', '#F97600',  '#FF0000',],
          threshold: {
              values: [1, 9, 35]
          }
      },
      size: {
          height: 180
      }
  });
  setTimeout(function () {
      sample_acetylene_gauge_chart.load({
          columns: [['Acetylene', gon.acetylene]]
      });
  }, 1800);
  var sample_carbon_monoxide_gauge_chart = c3.generate({
      bindto: document.getElementById('sample_carbon_monoxide_gauge_chart'),
      data: {
          columns: [
              ['data', ]
          ],
          type: 'gauge',
      },
      gauge: {
         label: {
             format: function(value, ratio) {
                 return value ;
             },
             show: true
         },
     min: 0,
     max: 1400,
     units: 'Carbon Monoxide',
     width: 39
      },
      color: {
          pattern: [ '#60B044','#F6C600', '#F97600',  '#FF0000',],
          threshold: {
              values: [350, 570, 1400]
          }
      },
      size: {
          height: 180
      }
  });
  setTimeout(function () {
      sample_carbon_monoxide_gauge_chart.load({
          columns: [['Carbon Monoxide', gon.carbon_monoxide]]
      });
  }, 2000);

}
  // var sample_carbon_dioxide_gauge_chart = c3.generate({
  //     bindto: document.getElementById('sample_carbon_dioxide_gauge_chart'),
  //     data: {
  //         columns: [
  //             ['Carbon Dioxide', ]
  //         ],
  //         type: 'gauge',
  //     },
  //     gauge: {
  //        label: {
  //            format: function(value, ratio) {
  //                return value ;
  //            },
  //            show: true
  //        },
  //    min: 0,
  //    max: 10000,
  //    units: 'Carbon Dioxide',
  //    width: 39
  //     },
  //     color: {
  //         pattern: [ '#60B044','#F6C600', '#F97600',  '#FF0000',],
  //         threshold: {
  // //            unit: 'value', // percentage is default
  // //            max: 200,
  //             values: [2500, 4000, 10000]
  //         }
  //     },
  //     size: {
  //         height: 180
  //     }
  // });
  // setTimeout(function () {
  //     sample_carbon_dioxide_gauge_chart.load({
  //         columns: [['Carbon Dioxide', gon.carbon_dioxide]]
  //     });
  // }, 2200);
