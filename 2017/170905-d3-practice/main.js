window.onload = function () {

  let viratKholiCenturies = [{
      "No.": 1,
      "Score": 107,
      "Man of the match": "",
      "Captain": "",
      "Not Out": "",
      "Against": " Sri Lanka",
      "Pos.": 4,
      "Inn.": 2,
      "S/R": 93.85,
      "Venue": "Eden Gardens, Kolkata",
      "H/A/N": "Home",
      "Date": "24-Dec-09",
      "Result": "Won"
    },
    {
      "No.": 2,
      "Score": 102,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "TRUE",
      "Against": " Bangladesh",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 107.36,
      "Venue": "Shere Bangla National Stadium, Dhaka",
      "H/A/N": "Away",
      "Date": "11-Jan-10",
      "Result": "Won"
    },
    {
      "No.": 3,
      "Score": 118,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "",
      "Against": " Australia",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 97.52,
      "Venue": "APCA-VDCA Stadium, Visakhapatnam",
      "H/A/N": "Home",
      "Date": "20-Oct-10",
      "Result": "Won"
    },
    {
      "No.": 4,
      "Score": 105,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "",
      "Against": " New Zealand",
      "Pos.": 3,
      "Inn.": 1,
      "S/R": 100.96,
      "Venue": "Nehru Stadium, Guwahati",
      "H/A/N": "Home",
      "Date": "28-Nov-10",
      "Result": "Won"
    },
    {
      "No.": 5,
      "Score": 100,
      "Man of the match": "",
      "Captain": "",
      "Not Out": "TRUE",
      "Against": " Bangladesh",
      "Pos.": 4,
      "Inn.": 1,
      "S/R": 120.48,
      "Venue": "Shere Bangla National Stadium, Dhaka",
      "H/A/N": "Away",
      "Date": "19-Feb-11",
      "Result": "Won"
    },
    {
      "No.": 6,
      "Score": 107,
      "Man of the match": "",
      "Captain": "",
      "Not Out": "",
      "Against": " England",
      "Pos.": 4,
      "Inn.": 1,
      "S/R": 115.05,
      "Venue": "Sophia Gardens, Cardiff",
      "H/A/N": "Away",
      "Date": "16-Sep-11",
      "Result": "Lost (D/L)"
    },
    {
      "No.": 7,
      "Score": 112,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "TRUE",
      "Against": " England",
      "Pos.": 4,
      "Inn.": 2,
      "S/R": 114.28,
      "Venue": "Feroz Shah Kotla Ground, Delhi",
      "H/A/N": "Home",
      "Date": "17-Oct-11",
      "Result": "Won"
    },
    {
      "No.": 8,
      "Score": 117,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "",
      "Against": " West Indies",
      "Pos.": 4,
      "Inn.": 2,
      "S/R": 95.12,
      "Venue": "APCA-VDCA Stadium, Visakhapatnam",
      "H/A/N": "Home",
      "Date": "2-Dec-11",
      "Result": "Won"
    },
    {
      "No.": 9,
      "Score": 133,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "TRUE",
      "Against": " Sri Lanka",
      "Pos.": 4,
      "Inn.": 2,
      "S/R": 154.65,
      "Venue": "Bellerive Oval, Hobart",
      "H/A/N": "Neutral",
      "Date": "28-Feb-12",
      "Result": "Won"
    },
    {
      "No.": 10,
      "Score": 108,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "",
      "Against": " Sri Lanka",
      "Pos.": 3,
      "Inn.": 1,
      "S/R": 90,
      "Venue": "Shere Bangla National Stadium, Dhaka",
      "H/A/N": "Neutral",
      "Date": "13-Mar-12",
      "Result": "Won"
    },
    {
      "No.": 11,
      "Score": 183,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "",
      "Against": " Pakistan",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 123.64,
      "Venue": "Shere Bangla National Stadium, Dhaka",
      "H/A/N": "Neutral",
      "Date": "18-Mar-12",
      "Result": "Won"
    },
    {
      "No.": 12,
      "Score": 106,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "",
      "Against": " Sri Lanka",
      "Pos.": 3,
      "Inn.": 1,
      "S/R": 93.8,
      "Venue": "MRIC Stadium, Hambantota",
      "H/A/N": "Away",
      "Date": "21-Jul-12",
      "Result": "Won"
    },
    {
      "No.": 13,
      "Score": 128,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "TRUE",
      "Against": " Sri Lanka",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 107.56,
      "Venue": "R. Premadasa Stadium, Colombo",
      "H/A/N": "Away",
      "Date": "31-Jul-12",
      "Result": "Won"
    },
    {
      "No.": 14,
      "Score": 102,
      "Man of the match": "TRUE",
      "Captain": "TRUE",
      "Not Out": "",
      "Against": " West Indies",
      "Pos.": 3,
      "Inn.": 1,
      "S/R": 122.89,
      "Venue": "Queen's Park Oval, Port of Spain",
      "H/A/N": "Away",
      "Date": "5-Jul-13",
      "Result": "Won"
    },
    {
      "No.": 15,
      "Score": 115,
      "Man of the match": "TRUE",
      "Captain": "TRUE",
      "Not Out": "",
      "Against": " Zimbabwe",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 106.48,
      "Venue": "Harare Sports Club, Harare",
      "H/A/N": "Away",
      "Date": "24-Jul-13",
      "Result": "Won"
    },
    {
      "No.": 16,
      "Score": 100,
      "Man of the match": "",
      "Captain": "",
      "Not Out": "TRUE",
      "Against": " Australia",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 192.3,
      "Venue": "Sawai Mansingh Stadium, Jaipur",
      "H/A/N": "Home",
      "Date": "16-Oct-13",
      "Result": "Won"
    },
    {
      "No.": 17,
      "Score": 115,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "TRUE",
      "Against": " Australia",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 174.24,
      "Venue": "VCA Stadium, Nagpur",
      "H/A/N": "Home",
      "Date": "30-Oct-13",
      "Result": "Won"
    },
    {
      "No.": 18,
      "Score": 123,
      "Man of the match": "",
      "Captain": "",
      "Not Out": "",
      "Against": " New Zealand",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 110.81,
      "Venue": "McLean Park, Napier",
      "H/A/N": "Away",
      "Date": "19-Jan-14",
      "Result": "Lost"
    },
    {
      "No.": 19,
      "Score": 136,
      "Man of the match": "TRUE",
      "Captain": "TRUE",
      "Not Out": "",
      "Against": " Bangladesh",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 111.47,
      "Venue": "Khan Shaheb Osman Ali Stadium, Fatullah",
      "H/A/N": "Away",
      "Date": "26-Feb-14",
      "Result": "Won"
    },
    {
      "No.": 20,
      "Score": 127,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "",
      "Against": " West Indies",
      "Pos.": 3,
      "Inn.": 1,
      "S/R": 111.4,
      "Venue": "HPCA Stadium, Dharamsala",
      "H/A/N": "Home",
      "Date": "17-Oct-14",
      "Result": "Won"
    },
    {
      "No.": 21,
      "Score": 139,
      "Man of the match": "",
      "Captain": "TRUE",
      "Not Out": "TRUE",
      "Against": " Sri Lanka",
      "Pos.": 4,
      "Inn.": 2,
      "S/R": 110.31,
      "Venue": "JSCA International Stadium, Ranchi",
      "H/A/N": "Home",
      "Date": "16-Nov-14",
      "Result": "Won"
    },
    {
      "No.": 22,
      "Score": 107,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "",
      "Against": " Pakistan",
      "Pos.": 3,
      "Inn.": 1,
      "S/R": 84.9,
      "Venue": "Adelaide Oval, Adelaide",
      "H/A/N": "Neutral",
      "Date": "15-Feb-15",
      "Result": "Won"
    },
    {
      "No.": 23,
      "Score": 138,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "",
      "Against": " South Africa",
      "Pos.": 3,
      "Inn.": 1,
      "S/R": 98.57,
      "Venue": "M. A. Chidambaram Stadium, Chennai",
      "H/A/N": "Home",
      "Date": "22-Oct-15",
      "Result": "Won"
    },
    {
      "No.": 24,
      "Score": 117,
      "Man of the match": "",
      "Captain": "",
      "Not Out": "",
      "Against": " Australia",
      "Pos.": 3,
      "Inn.": 1,
      "S/R": 100,
      "Venue": "Melbourne Cricket Ground, Melbourne",
      "H/A/N": "Away",
      "Date": "17-Jan-16",
      "Result": "Lost"
    },
    {
      "No.": 25,
      "Score": 106,
      "Man of the match": "",
      "Captain": "",
      "Not Out": "",
      "Against": " Australia",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 115.21,
      "Venue": "Manuka Oval, Canberra",
      "H/A/N": "Away",
      "Date": "20-Jan-16",
      "Result": "Lost"
    },
    {
      "No.": 26,
      "Score": 154,
      "Man of the match": "TRUE",
      "Captain": "",
      "Not Out": "TRUE",
      "Against": " New Zealand",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 114.92,
      "Venue": "Punjab Cricket Association IS Bindra Stadium, Mohali",
      "H/A/N": "Home",
      "Date": "23-Oct-16",
      "Result": "Won"
    },
    {
      "No.": 27,
      "Score": 122,
      "Man of the match": "",
      "Captain": "TRUE",
      "Not Out": "",
      "Against": " England",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 116.19,
      "Venue": "Maharashtra Cricket Association Stadium, Pune",
      "H/A/N": "Home",
      "Date": "15-Jan-17",
      "Result": "Won"
    },
    {
      "No.": 28,
      "Score": 111,
      "Man of the match": "TRUE",
      "Captain": "TRUE",
      "Not Out": "TRUE",
      "Against": " West Indies",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 96.52,
      "Venue": "Sabina Park, Kingston",
      "H/A/N": "Away",
      "Date": "6-Jul-17",
      "Result": "Won"
    },
    {
      "No.": 29,
      "Score": 131,
      "Man of the match": "TRUE",
      "Captain": "TRUE",
      "Not Out": "",
      "Against": " Sri Lanka",
      "Pos.": 3,
      "Inn.": 1,
      "S/R": 136.45,
      "Venue": "R. Premadasa Stadium, Colombo",
      "H/A/N": "Away",
      "Date": "31-Aug-17",
      "Result": "Won"
    },
    {
      "No.": 30,
      "Score": 110,
      "Man of the match": "",
      "Captain": "TRUE",
      "Not Out": "TRUE",
      "Against": " Sri Lanka",
      "Pos.": 3,
      "Inn.": 2,
      "S/R": 94.82,
      "Venue": "R. Premadasa Stadium, Colombo",
      "H/A/N": "Away",
      "Date": "3-Sep-17",
      "Result": "Won"
    }
  ];

  // d3.select('body')
  //   .append('div')
  //   .style('display', 'flex')
  //   .style('align-items', 'flex-end')
  //   .selectAll('section')
  //   .data(viratKholiCenturies)
  //   .enter()
  //   .append('section')
  //   .style('background-color', 'green')
  //   .style('width', '190px')
  //   .style('height', function (match) {
  //     return match.Score + 'px';
  //   })
  //   .text(function (d, i, val) {
  //     return d.Score;
  //   });

  const data = [90, 70, 50, 30, 10]

  d3.select('body')
    .selectAll('div')
    .data(data) // pair each number in the array with an empty div
    .enter()
    .append('div')
    .style('background-color', 'green')
    .style('width', function (d) {
      return d + 'px' // use the data items as pixel widths
    })
    .text(function (d) {
      return d;
    })
}
