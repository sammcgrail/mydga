if ($("#landing_page_chart").length > 0) {
  var landing_page_chart = c3.generate({
      bindto: document.getElementById('landing_page_chart'),
    //   size: {
    //   width: 1200
    //  },
          data: {
            url: '/testdata.csv'
        },
        transition: {
            duration: 1000
        },
        subchart: {
          show: true
          },
          zoom: {
          enabled: true
          },
        grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
      },
      axis: {
        y: {
          label: {
            text: 'PPM',
            position: 'outer-middle'
          }
        },
        x: {
          label: {
            text: 'Date'
          }
        }
      }
    });

  var landing_page_chart2 = c3.generate({
      bindto: document.getElementById('landing_page_chart2'),
    //   size: {
    //   width: 1200
    //  },
          data: {
            url: '/testdata2.csv'
        },    tooltip: {
        grouped: true // Default true
    },
        subchart: {
          show: true
          },
          zoom: {
          enabled: true
          },
        grid: {
        x: {
            show: true
        },
        y: {
            show: true,
            lines: [{value: 150, text: 'User set limit'}]
        }
      },
      axis: {
        y: {
          label: {
            text: 'PPM',
            position: 'outer-middle'
          }
        },
        x: {
          label: {
            text: 'Date'
          }
        }
      }
    });

    // setTimeout(function () {
    //     landing_page_chart.unload({
    //     });
    // }, 4000);
    //
    // setTimeout(function () {
    //     landing_page_chart.load({
    //         url: '/testdata2.csv'
    //     });
    // }, 5000);

    // setTimeout(function () {
    //     landing_page_chart.unload({
    //     });
    // }, 10000);
    //
    // setTimeout(function () {
    //     landing_page_chart.load({
    //         url: '/testdata3.csv'
    //     });
    // }, 11000);
    //
    // setTimeout(function () {
    //     landing_page_chart.unload({
    //     });
    // }, 15000);
    //
    // setTimeout(function () {
    //     landing_page_chart.load({
    //         url: '/testdata.csv'
    //     });
    // }, 16000);

}



// setTimeout(function () {
//     landing_page_chart.load({
//         url: '/testdata.csv'
//     });
// }, 10000);
