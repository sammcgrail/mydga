if ($("#data_file_chart").length > 0) {
  var chart = c3.generate({
      bindto: '#data_file_chart',
      data: {
        columns: [
            gon.hydrogen,
            gon.oxygen,
            gon.nitrogen,
            gon.methane,
            gon.carbon_monoxide,
            gon.ethane,
            gon.carbon_dioxide,
            gon.ethylene,
            gon.acetylene,
        ]
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
}
