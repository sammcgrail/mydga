if ($("#landing_page_chart").length > 0) {
  var landing_page_chart = c3.generate({
    bindto: document.getElementById('landing_page_chart'),
    data: {
          x: 'date',
          xFormat: '%Y-%m-%d %H:%M:%S',
        json: [{
        	"date": "2015-10-26 12:26:07",
        	"temp": 22
        }, {
        	"date": "2015-10-26 13:26:07",
        	"temp": 26
        }, {
        	"date": "2015-10-26 14:26:07",
        	"temp": 30
        }, {
        	"date": "2015-10-26 15:26:07",
        	"temp": 33
        }, {
        	"date": "2015-10-26 16:26:07",
        	"temp": 16
        }, {
        	"date": "2015-10-26 17:26:07",
        	"temp": 23
        }, {
        	"date": "2015-10-26 18:26:07",
        	"temp": 30
        }, {
        	"date": "2015-10-26 19:26:07",
        	"temp": 26
        }, {
        	"date": "2015-10-26 20:26:07",
        	"temp": 33
        }, {
        	"date": "2015-10-26 21:26:07",
        	"temp": 24
        }, {
        	"date": "2015-10-26 22:26:07",
        	"temp": 30
        }, {
        	"date": "2015-10-26 23:26:07",
        	"temp": 20
        }, {
        	"date": "2015-10-27 00:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-27 01:26:07",
        	"temp": 31
        }, {
        	"date": "2015-10-27 02:26:07",
        	"temp": 16
        }, {
        	"date": "2015-10-27 03:26:07",
        	"temp": 23
        }, {
        	"date": "2015-10-27 04:26:07",
        	"temp": 20
        }, {
        	"date": "2015-10-27 05:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-27 06:26:07",
        	"temp": 26
        }, {
        	"date": "2015-10-27 07:26:07",
        	"temp": 24
        }, {
        	"date": "2015-10-27 08:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-27 09:26:07",
        	"temp": 21
        }, {
        	"date": "2015-10-27 10:26:07",
        	"temp": 22
        }, {
        	"date": "2015-10-27 11:26:07",
        	"temp": 32
        }, {
        	"date": "2015-10-27 12:26:07",
        	"temp": 25
        }, {
        	"date": "2015-10-27 13:26:07",
        	"temp": 20
        }, {
        	"date": "2015-10-27 14:26:07",
        	"temp": 31
        }, {
        	"date": "2015-10-27 15:26:07",
        	"temp": 30
        }, {
        	"date": "2015-10-27 16:26:07",
        	"temp": 24
        }, {
        	"date": "2015-10-27 17:26:07",
        	"temp": 30
        }, {
        	"date": "2015-10-27 18:26:07",
        	"temp": 34
        }, {
        	"date": "2015-10-27 19:26:07",
        	"temp": 19
        }, {
        	"date": "2015-10-27 20:26:07",
        	"temp": 25
        }, {
        	"date": "2015-10-27 21:26:07",
        	"temp": 28
        }, {
        	"date": "2015-10-27 22:26:07",
        	"temp": 21
        }, {
        	"date": "2015-10-27 23:26:07",
        	"temp": 24
        }, {
        	"date": "2015-10-28 00:26:07",
        	"temp": 24
        }, {
        	"date": "2015-10-28 01:26:07",
        	"temp": 24
        }, {
        	"date": "2015-10-28 02:26:07",
        	"temp": 30
        }, {
        	"date": "2015-10-28 03:26:07",
        	"temp": 31
        }, {
        	"date": "2015-10-28 04:26:07",
        	"temp": 14
        }, {
        	"date": "2015-10-28 05:26:07",
        	"temp": 17
        }, {
        	"date": "2015-10-28 06:26:07",
        	"temp": 18
        }, {
        	"date": "2015-10-28 07:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-28 08:26:07",
        	"temp": 29
        }, {
        	"date": "2015-10-28 09:26:07",
        	"temp": 19
        }, {
        	"date": "2015-10-28 10:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-28 11:26:07",
        	"temp": 22
        }, {
        	"date": "2015-10-28 12:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-28 13:26:07",
        	"temp": 26
        }, {
        	"date": "2015-10-28 14:26:07",
        	"temp": 26
        }, {
        	"date": "2015-10-28 15:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-28 16:26:07",
        	"temp": 20
        }, {
        	"date": "2015-10-28 17:26:07",
        	"temp": 26
        }, {
        	"date": "2015-10-28 18:26:07",
        	"temp": 25
        }, {
        	"date": "2015-10-28 19:26:07",
        	"temp": 20
        }, {
        	"date": "2015-10-28 20:26:07",
        	"temp": 26
        }, {
        	"date": "2015-10-28 21:26:07",
        	"temp": 25
        }, {
        	"date": "2015-10-28 22:26:07",
        	"temp": 15
        }, {
        	"date": "2015-10-28 23:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-29 00:26:07",
        	"temp": 29
        }, {
        	"date": "2015-10-29 01:26:07",
        	"temp": 29
        }, {
        	"date": "2015-10-29 02:26:07",
        	"temp": 25
        }, {
        	"date": "2015-10-29 03:26:07",
        	"temp": 24
        }, {
        	"date": "2015-10-29 04:26:07",
        	"temp": 26
        }, {
        	"date": "2015-10-29 05:26:07",
        	"temp": 25
        }, {
        	"date": "2015-10-29 06:26:07",
        	"temp": 20
        }, {
        	"date": "2015-10-29 07:26:07",
        	"temp": 35
        }, {
        	"date": "2015-10-29 08:26:07",
        	"temp": 23
        }, {
        	"date": "2015-10-29 09:26:07",
        	"temp": 26
        }, {
        	"date": "2015-10-29 10:26:07",
        	"temp": 16
        }, {
        	"date": "2015-10-29 11:26:07",
        	"temp": 28
        }, {
        	"date": "2015-10-29 12:26:07",
        	"temp": 37
        }, {
        	"date": "2015-10-29 13:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-29 14:26:07",
        	"temp": 28
        }, {
        	"date": "2015-10-29 15:26:07",
        	"temp": 21
        }, {
        	"date": "2015-10-29 16:26:07",
        	"temp": 35
        }, {
        	"date": "2015-10-29 17:26:07",
        	"temp": 19
        }, {
        	"date": "2015-10-29 18:26:07",
        	"temp": 21
        }, {
        	"date": "2015-10-29 19:26:07",
        	"temp": 28
        }, {
        	"date": "2015-10-29 20:26:07",
        	"temp": 24
        }, {
        	"date": "2015-10-29 21:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-29 22:26:07",
        	"temp": 33
        }, {
        	"date": "2015-10-29 23:26:07",
        	"temp": 31
        }, {
        	"date": "2015-10-30 00:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-30 01:26:07",
        	"temp": 29
        }, {
        	"date": "2015-10-30 02:26:07",
        	"temp": 24
        }, {
        	"date": "2015-10-30 03:26:07",
        	"temp": 15
        }, {
        	"date": "2015-10-30 04:26:07",
        	"temp": 17
        }, {
        	"date": "2015-10-30 05:26:07",
        	"temp": 22
        }, {
        	"date": "2015-10-30 06:26:07",
        	"temp": 19
        }, {
        	"date": "2015-10-30 07:26:07",
        	"temp": 18
        }, {
        	"date": "2015-10-30 08:26:07",
        	"temp": 30
        }, {
        	"date": "2015-10-30 09:26:07",
        	"temp": 8
        }, {
        	"date": "2015-10-30 10:26:07",
        	"temp": 26
        }, {
        	"date": "2015-10-30 11:26:07",
        	"temp": 29
        }, {
        	"date": "2015-10-30 12:26:07",
        	"temp": 18
        }, {
        	"date": "2015-10-30 13:26:07",
        	"temp": 15
        }, {
        	"date": "2015-10-30 14:26:07",
        	"temp": 35
        }, {
        	"date": "2015-10-30 15:26:07",
        	"temp": 22
        }, {
        	"date": "2015-10-30 16:26:07",
        	"temp": 30
        }, {
        	"date": "2015-10-30 17:26:07",
        	"temp": 32
        }, {
        	"date": "2015-10-30 18:26:07",
        	"temp": 21
        }, {
        	"date": "2015-10-30 19:26:07",
        	"temp": 15
        }, {
        	"date": "2015-10-30 20:26:07",
        	"temp": 28
        }, {
        	"date": "2015-10-30 21:26:07",
        	"temp": 18
        }, {
        	"date": "2015-10-30 22:26:07",
        	"temp": 25
        }, {
        	"date": "2015-10-30 23:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-31 00:26:07",
        	"temp": 21
        }, {
        	"date": "2015-10-31 01:26:07",
        	"temp": 24
        }, {
        	"date": "2015-10-31 02:26:07",
        	"temp": 24
        }, {
        	"date": "2015-10-31 03:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-31 04:26:07",
        	"temp": 27
        }, {
        	"date": "2015-10-31 05:26:07",
        	"temp": 15
        }, {
        	"date": "2015-10-31 06:26:07",
        	"temp": 24
        }, {
        	"date": "2015-10-31 07:26:07",
        	"temp": 17
        }, {
        	"date": "2015-10-31 08:26:07",
        	"temp": 29
        }, {
        	"date": "2015-10-31 09:26:07",
        	"temp": 25
        }, {
        	"date": "2015-10-31 10:26:07",
        	"temp": 21
        }, {
        	"date": "2015-10-31 11:26:07",
        	"temp": 21
        }, {
        	"date": "2015-10-31 12:26:07",
        	"temp": 21
        }, {
        	"date": "2015-10-31 13:26:07",
        	"temp": 29
        }, {
        	"date": "2015-10-31 14:26:07",
        	"temp": 23
        }, {
        	"date": "2015-10-31 15:26:07",
        	"temp": 21
        }, {
        	"date": "2015-10-31 16:26:07",
        	"temp": 25
        }, {
        	"date": "2015-10-31 17:26:07",
        	"temp": 18
        }, {
        	"date": "2015-10-31 18:26:07",
        	"temp": 16
        }, {
        	"date": "2015-10-31 19:26:07",
        	"temp": 35
        }, {
        	"date": "2015-10-31 20:26:07",
        	"temp": 20
        }, {
        	"date": "2015-10-31 21:26:07",
        	"temp": 23
        }, {
        	"date": "2015-10-31 22:26:07",
        	"temp": 28
        }, {
        	"date": "2015-10-31 23:26:07",
        	"temp": 27
        }, {
        	"date": "2015-11-01 00:26:07",
        	"temp": 22
        }, {
        	"date": "2015-11-01 01:26:07",
        	"temp": 23
        }, {
        	"date": "2015-11-01 01:26:07",
        	"temp": 20
        }, {
        	"date": "2015-11-01 02:26:07",
        	"temp": 34
        }, {
        	"date": "2015-11-01 03:26:07",
        	"temp": 30
        }, {
        	"date": "2015-11-01 04:26:07",
        	"temp": 29
        }, {
        	"date": "2015-11-01 05:26:07",
        	"temp": 20
        }, {
        	"date": "2015-11-01 06:26:07",
        	"temp": 30
        }, {
        	"date": "2015-11-01 07:26:07",
        	"temp": 28
        }, {
        	"date": "2015-11-01 08:26:07",
        	"temp": 17
        }, {
        	"date": "2015-11-01 09:26:07",
        	"temp": 28
        }, {
        	"date": "2015-11-01 10:26:07",
        	"temp": 20
        }, {
        	"date": "2015-11-01 11:26:07",
        	"temp": 30
        }, {
        	"date": "2015-11-01 12:26:07",
        	"temp": 25
        }, {
        	"date": "2015-11-01 13:26:07",
        	"temp": 27
        }, {
        	"date": "2015-11-01 14:26:07",
        	"temp": 23
        }, {
        	"date": "2015-11-01 15:26:07",
        	"temp": 27
        }, {
        	"date": "2015-11-01 16:26:07",
        	"temp": 29
        }, {
        	"date": "2015-11-01 17:26:07",
        	"temp": 32
        }, {
        	"date": "2015-11-01 18:26:07",
        	"temp": 35
        }, {
        	"date": "2015-11-01 19:26:07",
        	"temp": 20
        }, {
        	"date": "2015-11-01 20:26:07",
        	"temp": 27
        }, {
        	"date": "2015-11-01 21:26:07",
        	"temp": 29
        }, {
        	"date": "2015-11-01 22:26:07",
        	"temp": 21
        }, {
        	"date": "2015-11-01 23:26:07",
        	"temp": 17
        }, {
        	"date": "2015-11-02 00:26:07",
        	"temp": 20
        }, {
        	"date": "2015-11-02 01:26:07",
        	"temp": 22
        }, {
        	"date": "2015-11-02 02:26:07",
        	"temp": 16
        }, {
        	"date": "2015-11-02 03:26:07",
        	"temp": 19
        }, {
        	"date": "2015-11-02 04:26:07",
        	"temp": 25
        }, {
        	"date": "2015-11-02 05:26:07",
        	"temp": 21
        }, {
        	"date": "2015-11-02 06:26:07",
        	"temp": 21
        }, {
        	"date": "2015-11-02 07:26:07",
        	"temp": 23
        }, {
        	"date": "2015-11-02 08:26:07",
        	"temp": 25
        }, {
        	"date": "2015-11-02 09:26:07",
        	"temp": 19
        }, {
        	"date": "2015-11-02 10:26:07",
        	"temp": 34
        }, {
        	"date": "2015-11-02 11:26:07",
        	"temp": 25
        }
],
        keys: {
            value: ['temp', 'date']
        }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                  format: "%Y-%m-%d %H:%M:%S",
            }
        }
    },
        subchart: {
        show: true
    },
        zoom: {
        enabled: true
    },
      line:     {width: {ratio: 0.5}},
      tooltip:  {grouped: true},
      subchart: {show: true},
      zoom:     {enabled: true},
      grid:     {x: {show: true},
                 y: {show: true}},
});}
