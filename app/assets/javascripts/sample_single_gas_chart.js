if ($("#sample_single_gas_chart").length > 0) {
  var sample_single_gas_chart = c3.generate({
      bindto: document.getElementById('sample_single_gas_chart'),
      data: {
        rows: [
          ['Hydrogen', 'Oxygen', 'Nitrogen', 'Methane', 'Carbon Monoxide', 'Ethane', 'Ethylene', 'Carbon Dioxide', 'Acetylene'],
          [gon.sample.hydrogen, gon.sample.oxygen, gon.sample.nitrogen, gon.sample.methane, gon.sample.carbon_monoxide, gon.sample.ethane, gon.sample.ethylene, gon.sample.carbon_dioxide, gon.sample.acetylene],
        ],
        type: 'bar'
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
      },
      x: {
        label: {
          text: 'Compound'
        }
      }
    }
    });
}
