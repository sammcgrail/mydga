if ($("#sample_ratio_r1").length > 0) {
  var sample_ratio_r2 = c3.generate({
    bindto: document.getElementById('sample_ratio_r2'),

    data: {
        columns: [
            ['CH4/H2', gon.methane/gon.hydrogen],
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
            ['C2H4/C2H6', gon.acetylene/gon.ethylene],
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
            ['C2H4/C2H6', gon.ethylene/gon.ethane],
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
