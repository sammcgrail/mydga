if ($("#sample_ratio_chart").length > 0) {
  var sample_ratio_chart = c3.generate({
    bindto: document.getElementById('sample_ratio_chart'),
      size: {
        height: 240,
        width: 480
      },
      data: {
          columns: [
             ['R1', gon.r1],
             ['R2', gon.r2],
             ['R3', gon.r3]
          ],
          type : 'bar',
      },

    });
}
