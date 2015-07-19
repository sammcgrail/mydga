

var chart = c3.generate({
    bindto: document.getElementById('csv_chart'),
    data: {
      columns: [
        ['Single Compound', 3, 139, 79, 92, 106, 101],

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
    },
    x: {
      label: {
        text: 'Date'
      }
    }
  }
  });
