var chart = c3.generate({
    bindto: '#csv_chart',
    data: {
        url: '/data/c3_test.csv'
    }
});
