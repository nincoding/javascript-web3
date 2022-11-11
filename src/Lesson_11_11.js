/*
다섯개의 변수를 선언하고 (a, b, c, d, e)
4개의 변수에는 값을 입력받고(a, b, c, d)
1개의 변수에는 {(a + b) * c} * d 의 결과값을 담고
결과값을 출력하시오

//{}를 연산 할 수 없다.
*/


var num1 = Number(prompt('숫자를 입력해주세요.'));
var num2 = Number(prompt('숫자를 입력해주세요.'));
var num3 = Number(prompt('숫자를 입력해주세요.'));
var num4 = Number(prompt('숫자를 입력해주세요.'));

var sum = ((num1 + num2) * num3) * num4;
alert(sum);

/* 
4개의 변수를 선언하고
그 중 3개의 변수에는 값을 입력받고
첫번째 입력값은 0으로 변경시켜서
입력받은 변수 3개의 곱을 연산하여 출력하시오.
*/

let num1 = Number(prompt('숫자를 입력해주세요.'));
let num2 = Number(prompt('숫자를 입력해주세요.'));
let num3 = Number(prompt('숫자를 입력해주세요.'));
num1 = 0;
let sum = num1 * num2 * num3;
alert(sum);

/*
5개의 변수를 선언하고 그 중 3개의 변수에는 값을 입력받고
첫번째 입력값은 보존시키고 0으로 변경시켜서
입력받은 변수3개의 곱을 연산하여 출력

출력예시:
a(변수), b(변수), c(변수) 중에서 d(변수)의 값은 0으로 변경해서 곱한 값은? (변수)
*/

let num1 = Number(prompt('숫자를 입력해주세요.'));
let num2 = Number(prompt('숫자를 입력해주세요.'));
let num3 = Number(prompt('숫자를 입력해주세요.'));
let num4 = num1; //num1의 값을 보존하기 위해 담아둠
num1 = 0; //a의 값은 0으로 변경, 보존되어 있기 때문에 기존 a의 값은 유지
let sum = num1 * num2 * num3;
alert(`${num4},${num2},${num3}중에서 ${num4}의 값은 0으로 변경해서 곱한값은?${sum}`);

//비교 연산자
let a = 5, b = 10, c = 0;
c = a < b
document.write(c + '<br/>') //true 출력
c = a > b
document.write(c + '<br/>') //false 출력
c = a <= b
document.write(c + '<br/>') //true 출력
c = a >= b
document.write(c + '<br/>') //false 출력
c = a == b
document.write(c + '<br/>') //false 출력
c = a != b
document.write(c + '<br/>') //true 출력

//대입 연산자
let num1 = 10, num2 = 20;
num1 += 5; //저장된 10에 5를 더하여 저장함
document.write(num1 + '<br/>') //15출력

num1 -= 5; //저장된 15에 5를 빼서 저장함
document.write(num1 + '<br/>') //10 출력

num1 *= 5; //저장된 10에 5를 곱해서 저장함
document.write(num1 + '<br/>') //50 출력

num1 /= 5; //저장된 50에 5를 나눠서 저장함
document.write(num1 + '<br/>') //10 출력

num2 %= 3; //저장된 20에 3를 나눈 나머지를 저장함
document.write(num1 + '<br/>') //2 출력

//증감 연산자
let num1 = 10, num2 = 30;

num1++ //저장된 10에 1을 더해서 저장함
document.write(num1) // 11 출력

num2-- //저장된 30에 1을 빼서 저장함
document.write(num1) // 29 출력

/*
3개의 변수에는 값을 입력받아
나누기 3을 하여, 평균이 70점이상
국어가 60점 이상
영어가 60점이상
수학이 60점이상
그래야 true 나오게 출력한다.
*/

let korean = Number(prompt('점수를 입력해주세요.'));
let english = Number(prompt('점수를 입력해주세요.'));
let math = Number(prompt('점수를 입력해주세요.'));
let average = (korean + english + math) / 3;
let cutLine = korean >= 60 && english >= 60 && math >= 60 && average >= 70;
alert(cutLine);

/*
조건 연산문
true와 false일때 각각 다르게 실행문을 실행(조건문에 따라서)
*/

var num1 = 30;
var num2 = 20;
num1 > num2 ? alert('yes') : alert('no'); // yes가 출력됨

/*
confirm() 메서드를 활용해서 확인, 취소창
*/

var result = confirm('제이쿼리 좋아하니?'); //confirm()메소드는 확인누르면 true, 취소누르면 false에 저장
var text = result ? 'good' : 'bad';
alert(text); 