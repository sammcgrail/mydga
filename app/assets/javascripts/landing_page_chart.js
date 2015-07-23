if ($("#landing_page_chart").length > 0) {
  var landing_page_chart = c3.generate({
      bindto: document.getElementById('landing_page_chart'),
    //   size: {
    //   width: 1200
    //  },
          data: {
            url: '/testdata.csv'
        }
    });
    setTimeout(function () {
        landing_page_chart.unload({
        });
    }, 2000);

    setTimeout(function () {
        landing_page_chart.load({
            url: '/testdata2.csv'
        });
    }, 2500);

    setTimeout(function () {
        landing_page_chart.unload({
        });
    }, 6000);

    setTimeout(function () {
        landing_page_chart.load({
            url: '/testdata3.csv'
        });
    }, 6500);
}



// setTimeout(function () {
//     landing_page_chart.load({
//         url: '/testdata.csv'
//     });
// }, 10000);
