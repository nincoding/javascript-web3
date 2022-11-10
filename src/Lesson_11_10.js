/*4개의 변수를 선언하고 그 중 3개의 변수에는 값을 입력받아, 3개의 변수가 더해진 값을 연산하여 출력한다.
출력값: 변수이름(변수),변수이름(변수),변수이름(변수)를 더한 값은 변수이름(변수)입니다.*/

var num1 = Number(prompt('숫자를 입력해 주세요.'));
var num2 = Number(prompt('숫자를 입력해 주세요.'));
var num3 = Number(prompt('숫자를 입력해 주세요.'));
var sum = num1+num2+num3;
alert(`${num1}+${num2}+${num3}를 더한 값은 ${sum}입니다.`);

/*세개의 변수를 선언하고 두개의 변수에는 값을 입력받아,
남은 하나의 변수에는 입력받은 두개의 변수를 뺀값을 출력한다.*/

var num1 = Number(prompt('숫자를 입력해 주세요.'));
var num2 = Number(prompt('숫자를 입력해 주세요.'));
alert(num1 - num2);

/*4개의 변수를 선언하고(a,b,c,d),
3개의 변수에는 값을 선언받고(a,b,c),
하나의 변수에는 a+b*c를 담고 연산된 결과값을 출력하시오.*/

function answer()  {
  let num = Number(prompt('숫자를 입력해 주세요.'));
  return num;
}
let num1 = answer();
let num2 = answer();
let num3 = answer();
let sum = num1 + (num2 * num3);
alert(sum);