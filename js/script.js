for (var i = 1; i <= 20; i++) //1から20までを繰り返す
{
  if (i % 3 == 0 && i % 5 ==0) //3と5の最小公倍数15で割り切れる数字の時
  {
    let moji = document.createElement('p');
    moji.innerHTML = 'FizzBuzz','<br>';
    document.body.appendChild(moji);
  } 
  else if (i % 3 == 0) //3で割り切れる数字の時
  {
    let moji = document.createElement('p');
    moji.innerHTML = 'Fizz','<br>';
    document.body.appendChild(moji);
  }
  else if (i % 5 == 0) //5で割り切れる数字の時
  {
    let moji = document.createElement('p');
    moji.innerHTML = 'Buzz','<br>';
    document.body.appendChild(moji);
  } 
  else //そのほか
  {
    let moji = document.createElement('p');
    moji.innerHTML = i,'<br>';
    document.body.appendChild(moji);
  }
}
