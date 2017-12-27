  function reducer(arr, fn, acc) {
    acc = acc || arr.shift();
    arr.forEach((v) => {
      acc = fn(acc, v);
    })
    return acc;
  }

  console.log(reducer([1, 2, 3], (acc, val) => acc + val))

  function mapper(arr, fn) {
    return reducer(arr, (acc, val) => {
      return acc.concat(fn(val))
    }, [])
  }

  console.log(mapper([1, 2, 3], (v) => v * v));

  function filter(arr, fn) {
    return reducer(arr, (acc, val) => {
      if (fn(val)) {
        acc.push(val)
      }
      return acc;
    }, [])
  }

  console.log(filter([1, 2, 3, 4], (v) => v % 2 === 0));
