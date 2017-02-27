//Return true if point is inside poly, and false if it is not
function pointInPoly(poly, point) {
  var minx = +Infinity,
    miny = +Infinity,
    maxx = -Infinity,
    maxy = -Infinity;
  for (var i = 0; i < poly.length; i++) {
    for (var j = 0; j < poly[i].length; j++) {
      if (poly[i][0] < minx) {
        minx = poly[i][0];
      } else if (poly[i][0] > maxx) {
        maxx = poly[i][0];
      }
      if (poly[i][1] < miny) {
        miny = poly[i][1];
      } else if (poly[i][1] > maxy) {
        maxy = poly[i][1];
      }
    }

  }
  return minx < point[0] && point[0] < maxx && miny < point[1] && point[1] < maxy;
}

//Test a square
var poly = [
  [-25, -18],
  [5, -1],
  [-8, 5],
  [-5, 15]
];

console.log(34, '170226-point-in-polygon.js', pointInPoly(poly, [-26, 0], false));
console.log(35, '170226-point-in-polygon.js', pointInPoly(poly, [1, 1], true));
