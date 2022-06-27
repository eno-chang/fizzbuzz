for (var i = 1; i <= 20; i++) //1から20までを繰り返す
{
  if (i % 3 == 0 && i % 5 ==0) //3と5の最小公倍数15で割り切れる数字の時
  {
    console.log('FizzBuzz');
  } 
  else if (i % 3 == 0) //3で割り切れる数字の時
  {
    console.log('Fizz');
  }
  else if (i % 5 == 0) //5で割り切れる数字の時
  {
    console.log('Buzz');
  } 
  else //そのほか
  {
    console.log(i);
  }
}