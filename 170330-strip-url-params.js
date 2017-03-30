// Complete the method so that it does the following:

// Removes any duplicate query string parameters from the url
// Removes any query string parameters specified within the 2nd argument (optional array)

// stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'

function stripUrlParams(url, paramsToStrip) {
  let urlParameters = url.split('?'),
    paramsUnique = {},
    cleanParams = [];
  paramsToStrip = paramsToStrip || [];
  if (urlParameters[1]) {
    urlParameters[1].split('&').forEach((param) => {
      let splitParam = param.split('=');
      if (paramsToStrip.indexOf(splitParam[0]) < 0 && !paramsUnique.hasOwnProperty(splitParam[0])) {
        paramsUnique[splitParam[0]] = splitParam[1];
        if (cleanParams.length) {
          cleanParams.push('&' + param);
        } else {
          cleanParams.push('?' + param);
        }
      }
    });
    urlParameters[0] += cleanParams.join('');
    return urlParameters[0];
  } else {
    return url;
  }
}

stripUrlParams('www.codewars.com?a=1&b=2&a=2'); // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']); // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']); // returns 'www.codewars.com'
