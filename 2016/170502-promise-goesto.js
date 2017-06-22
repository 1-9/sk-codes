function countDown(n) {
  // --> also known as goesto operator which decrements 'n' and
  // checks if 'n' is greater than 0
  while (n-- > 1) {
    console.log(n);
  }
}

countDown(8);
// <!-- and --> are valid single line comment in JavaScript
// used in the initial days when browsers didnot support JavaScript
<!-- I am a valid single line comment
--> I am a valid single line comment

let p = new Promise((resolve, reject) => {
  resolve('resolved promise');
});

p.then(data => console.log(data));

let r = new Promise((resolve, reject) => {
  reject(Error('rejected promise'));
});

r.then(data => console.log(data)).catch(err => console.log(err));
