var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['Hydrogen', 90, 139, 79, 92, 106, 101],
        ['Oxygen', 14500, 3820, 8429, 18700, 9251, 17000],
        ['Nitrogen', 69500, 70485, 51733, 67300, 72033, 73900],
        ['Methane', 4, 10, 3, 4, 9, 5],
        ['Carbon Monoxide', 299, 398, 220, 281, 271, 310],
        ['Ethane', 20, 12, 4, 5, 8, 7],
        ['Ethylene', 1.7, 7, 1, 2, 3, 3],
        ['Carbon Dioxide', 2940, 3522, 2166, 3030, 2899, 3050],
        ['Acetylene', 0, 0, 0, 0, .8, 1.2]
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
