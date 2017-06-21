function highlight(strings, ...values) {
  console.log(strings, values);
  let ans = '';
  strings.forEach((val, ind) => {
    ans += val + (values[ind] || '');
  });
  console.log(ans);
  return ans;
}

let city = 'New York',
  name = 'Logan';

let sentence = highlight `Hello ${name}, welcome to ${city}`;
