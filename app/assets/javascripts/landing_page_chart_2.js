if ($("#landing_page_chart2").length > 0) {
  var landing_page_chart2 = c3.generate({
    bindto: document.getElementById('landing_page_chart2'),
      data: {
            x: 'date',
            xFormat: '%Y-%m-%d %H:%M:%S',
            json: [{
              "date": "2015-10-26 12:26:07",
              "temp": 28
            }, {
              "date": "2015-10-26 13:26:07",
              "temp": 26
            }, {
              "date": "2015-10-26 14:26:07",
              "temp": 30
            }, {
              "date": "2015-10-26 15:26:07",
              "temp": 33
            }
            ],

            keys: {x: 'date', value: ['temp']}},
            axis: {x: {type: 'timeseries',
            tick: {format: "%Y-%m-%d %H"}}},
            line:     {width: {ratio: 0.5}},
            tooltip:  {grouped: true},
            subchart: {show: true},
            zoom:     {enabled: true},
            grid:     {x: {show: true},
                       y: {show: true}},
  });}






// data: {
//   // x: 'date',
//   // xFormat: '%Y-%m-%d %H:%M:%S',
//         url: "oneobject_copy.json",
//         mimeType: 'json'
//         });
//       axis: {x: {type: 'timeseries', tick: {format: "%Y-%m-%d %H:%M:%S"}}},
//       line:     {width: {ratio: 0.5}},
//       tooltip:  {grouped: true},
//       subchart: {show: true},
//       zoom:     {enabled: true},
//       grid:     {x: {show: true},
//                  y: {show: true}},
// });}
//
//
// //
// //
// // url: "/path/to/json",
// // mineType: 'json'
