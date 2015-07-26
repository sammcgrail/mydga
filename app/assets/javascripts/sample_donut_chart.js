if ($("#sample_donut_chart").length > 0) {
  var sample_donut_chart = c3.generate({
    bindto: document.getElementById('sample_donut_chart'),
      data: {
          columns: [
             ['Hydrogen', gon.hydrogen],
             ['Methane', gon.methane],
             ['Ethane', gon.ethane],
             ['Ethylene', gon.ethylene],
             ['Acetylene', gon.acetylene],
          ],
          type : 'donut',
          y: {
  tick: {
    outer: false
  }
      },
      donut: {
          title: "Combustibles"
      },
      color: {
          pattern: ['#ea0628', '#fed801', '#fbab40', '#fc5525', '#ea0628'], // the three color levels for the percentage values.
  //         threshold: {
  // //            unit: 'value', // percentage is default
  // //            max: 200, // 100 is default
  //             values: [30, 60, 90, 100]
  //         }
      },
  });
}
