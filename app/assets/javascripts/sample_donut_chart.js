if ($("#sample_donut_chart").length > 0) {
  var sample_donut_chart = c3.generate({
    bindto: document.getElementById('sample_donut_chart'),
      data: {
          columns: [
             ['Hydrogen', gon.hydrogen],
             ['Oxygen', gon.oxygen],
             ['Nitrogen', gon.nitrogen],
             ['Methane', gon.methane],
             ['Carbon Monoxide', gon.carbon_monoxide],
             ['Ethane', gon.ethane],
             ['Ethylene', gon.ethylene],
             ['Carbon Dioxide', gon.carbon_dioxide],
             ['Acetylene', gon.acetylene],
          ],
          type : 'donut',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "Ethylene : Acetylene"
      },
      color: {
          pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
          threshold: {
  //            unit: 'value', // percentage is default
  //            max: 200, // 100 is default
              values: [30, 60, 90, 100]
          }
      },
  });
}
