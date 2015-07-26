if ($("#sample_ratio_chart").length > 0) {
  var sample_ratio_chart = c3.generate({
    bindto: document.getElementById('sample_ratio_chart'),
      size: {
        height: 240,
        width: 480
      },
      data: {
          columns: [
             ['R1', gon.r1],
             ['R2', gon.r2],
             ['R3', gon.r3]
          ],
          type : 'bar',
      },

    });
  var sample_ratio_chart2 = c3.generate({
    bindto: document.getElementById('sample_ratio_chart2'),
      size: {
        height: 140,
        width: 180
      },
      data: {
          columns: [
             ['CH4/H2', gon.methane/gon.hydrogen],
          ],
          type : 'bar',
      },
      axis: {
        y: {
            label: '',
            tick: {
                count:3,
                format: function(){return''}
            }
        }
     },
      grid: {
        y: {
            lines: [
                // {value: 50, text: 'Case 0'},
                // {value: 50, text: 'Case 1'},
                {value: .1, text: ''},
                {value: .3, text: 'Case 2'},
                // {value: 150, text: 'Case 3'},
                // {value: 200, text: 'Case 4'},
                // {value: 350, text: 'Case 5', position: 'middle'}
            ]
          }
        }
    });
}
