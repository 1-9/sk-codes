function combineFetcher(fetchers) {
  return function(query, cb) {
    let ans = [],
      count = 0;
    function done(result) {
      ans.push(...result);
      count++;
      if (count === fetchers.length) {
        return cb(ans);
      }
    }
    for (let fetcher of fetchers) {
      fetcher(url, done);
    }
  };
}
