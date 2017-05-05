var generator = function (num)
{
  return function ()
  {
    return num++;
  };
};

var index = generator(0);

var spanElement = document.getElementById('number');
spanElement.innerHTML = index();

var buttonElement = document.getElementById('increment');

buttonElement.addEventListener('click', function ()
{
  spanElement.innerHTML = index();
});
