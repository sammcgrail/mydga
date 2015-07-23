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
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "Combustibles"
      },
      color: {
          pattern: ['#a6a6a6'], // the three color levels for the percentage values.
  //         threshold: {
  // //            unit: 'value', // percentage is default
  // //            max: 200, // 100 is default
  //             values: [30, 60, 90, 100]
  //         }
      },
  });
}
