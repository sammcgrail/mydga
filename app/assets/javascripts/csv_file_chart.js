if ($("#csv_file_chart").length > 0) {
  var chart = c3.generate({
      bindto: document.getElementById('csv_file_chart'),
    //   size: {
    //   width: 1200
    //  },
          data: {
            url: '/testdata.csv'
        }
    });
}
