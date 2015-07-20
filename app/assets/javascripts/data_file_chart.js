if ($("#data_file_chart").length > 0) {
  var chart = c3.generate({
      bindto: '#data_file_chart',
      data: {
        rows: [
          [gon.file[0][0],
           gon.file[0][1],
           gon.file[0][2],
           gon.file[0][3],
           gon.file[0][4],
           gon.file[0][5],
           gon.file[0][6],
           gon.file[0][7],
           gon.file[0][8]
         ], //headers

          [gon.file[1][0], gon.file[1][1], gon.file[1][2], gon.file[1][3], gon.file[1][4], gon.file[1][5], gon.file[1][6], gon.file[1][7], gon.file[1][8],  ], //values
          [gon.file[2][0], gon.file[2][1], gon.file[2][2], gon.file[2][3], gon.file[2][4], gon.file[2][5], gon.file[2][6], gon.file[2][7], gon.file[2][8],  ],
          [gon.file[3][0], gon.file[3][1], gon.file[3][2], gon.file[3][3], gon.file[3][4], gon.file[3][5], gon.file[3][6], gon.file[3][7], gon.file[3][8],  ],
          [gon.file[4][0], gon.file[4][1], gon.file[4][2], gon.file[4][3], gon.file[4][4], gon.file[4][5], gon.file[4][6], gon.file[4][7], gon.file[4][8],  ],
          [gon.file[5][0], gon.file[5][1], gon.file[5][2], gon.file[5][3], gon.file[5][4], gon.file[5][5], gon.file[5][6], gon.file[5][7], gon.file[5][8],  ],
          [gon.file[6][0], gon.file[6][1], gon.file[6][2], gon.file[6][3], gon.file[6][4], gon.file[6][5], gon.file[6][6], gon.file[6][7], gon.file[6][8],  ],
          [gon.file[7][0], gon.file[7][1], gon.file[7][2], gon.file[7][3], gon.file[7][4], gon.file[7][5], gon.file[7][6], gon.file[7][7], gon.file[7][8],  ],
          [gon.file[8][0], gon.file[8][1], gon.file[8][2], gon.file[8][3], gon.file[8][4], gon.file[8][5], gon.file[8][6], gon.file[8][7], gon.file[8][8],  ],
          [gon.file[9][0], gon.file[9][1], gon.file[9][2], gon.file[9][3], gon.file[9][4], gon.file[9][5], gon.file[9][6], gon.file[9][7], gon.file[9][8],  ],
          [gon.file[10][0], gon.file[10][1], gon.file[10][2], gon.file[10][3], gon.file[10][4], gon.file[10][5], gon.file[10][6], gon.file[10][7], gon.file[10][8],  ],
          [gon.file[11][0], gon.file[11][1], gon.file[11][2], gon.file[11][3], gon.file[11][4], gon.file[11][5], gon.file[11][6], gon.file[11][7], gon.file[11][8],  ],
          [gon.file[12][0], gon.file[12][1], gon.file[12][2], gon.file[12][3], gon.file[12][4], gon.file[12][5], gon.file[12][6], gon.file[12][7], gon.file[12][8],  ],
          [gon.file[13][0], gon.file[13][1], gon.file[13][2], gon.file[13][3], gon.file[13][4], gon.file[13][5], gon.file[13][6], gon.file[13][7], gon.file[13][8],  ],
          [gon.file[14][0], gon.file[14][1], gon.file[14][2], gon.file[14][3], gon.file[14][4], gon.file[14][5], gon.file[14][6], gon.file[14][7], gon.file[14][8],  ],
          [gon.file[15][0], gon.file[15][1], gon.file[15][2], gon.file[15][3], gon.file[15][4], gon.file[15][5], gon.file[15][6], gon.file[15][7], gon.file[15][8],  ],
          [gon.file[16][0], gon.file[16][1], gon.file[16][2], gon.file[16][3], gon.file[16][4], gon.file[16][5], gon.file[16][6], gon.file[16][7], gon.file[16][8],  ],
          [gon.file[17][0], gon.file[17][1], gon.file[17][2], gon.file[17][3], gon.file[17][4], gon.file[17][5], gon.file[17][6], gon.file[17][7], gon.file[17][8],  ],
          [gon.file[18][0], gon.file[18][1], gon.file[18][2], gon.file[18][3], gon.file[18][4], gon.file[18][5], gon.file[18][6], gon.file[18][7], gon.file[18][8],  ],
          [gon.file[19][0], gon.file[19][1], gon.file[19][2], gon.file[19][3], gon.file[19][4], gon.file[19][5], gon.file[19][6], gon.file[19][7], gon.file[19][8],  ],
          [gon.file[20][0], gon.file[20][1], gon.file[20][2], gon.file[20][3], gon.file[20][4], gon.file[20][5], gon.file[20][6], gon.file[20][7], gon.file[20][8],  ],
          [gon.file[21][0], gon.file[21][1], gon.file[21][2], gon.file[21][3], gon.file[21][4], gon.file[21][5], gon.file[21][6], gon.file[21][7], gon.file[21][8],  ],
          [gon.file[22][0], gon.file[22][1], gon.file[22][2], gon.file[22][3], gon.file[22][4], gon.file[22][5], gon.file[22][6], gon.file[22][7], gon.file[22][8],  ],
          [gon.file[23][0], gon.file[23][1], gon.file[23][2], gon.file[23][3], gon.file[23][4], gon.file[23][5], gon.file[23][6], gon.file[23][7], gon.file[23][8],  ],
          [gon.file[24][0], gon.file[24][1], gon.file[24][2], gon.file[24][3], gon.file[24][4], gon.file[24][5], gon.file[24][6], gon.file[24][7], gon.file[24][8],  ],
          [gon.file[25][0], gon.file[25][1], gon.file[25][2], gon.file[25][3], gon.file[25][4], gon.file[25][5], gon.file[25][6], gon.file[25][7], gon.file[25][8],  ],

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
}
