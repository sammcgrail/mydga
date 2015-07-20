var chart = c3.generate({
    bindto: '#data_file_chart',
    data: {
      rows: [
        [gon.file[0][0], gon.file[0][1] ], //headers

        [gon.file[1][0], gon.file[1][1] ], //values
        [gon.file[1][1], gon.file[1][2] ],
      ],
      type: 'line'
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
    }
  }
});
