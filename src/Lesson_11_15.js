/*
변수 2개를 선언하고 두수의 합이 숫자인지 아닌지
그리고 홀수인지 짝수인지 판별하시오.
 */

let a = Number(prompt("",""));
let b = Number(prompt("",""));
let sum = a + b;
if(isNaN(sum)) alert('숫자아님');
if(!isNaN(sum)) alert('숫자');
if(sum % 2 === 0) alert('짝수');
if(sum % 2 !== 0) alert('홀수');


/*
하나의 변수를 선언하고 값을 선언받아 숫자인지 아닌지 구분하고,
숫자라면 1~20은 학생
21~40은 직장인
41~60은 부모님
61~100은 노년기
그 외 숫자는 올바른 나이가 아닙니다 출력
*/


let answer = Number(prompt("",""));
if(!isNaN(answer)) {
  if(answer > 0 && answer < 21) alert('학생');
  if(answer > 20 && answer < 41) alert('직장인');
  if(answer > 40 && answer < 61) alert('부모님');
  if(answer > 60 && answer < 101) alert('노년기');
}
if(isNaN(answer)) alert('올바른 나이가 아닙니다');

let input = prompt("","");
if(!isNaN(input)) {
  if(input > 0 && input <101) {
    if(input < 21) {
      alert('학생');
    } else if(input < 41) {
      alert('직장인');
    } else if(input < 61) {
      alert('부모님');
    } else if(input < 101) {
      alert('노년기');
    }
  } 
  else {
    alert('올바른 나이가 아닙니다.');
  }
} 
else {
  alert('숫자x');
}

/*
주민등록번호 자리를 입력받아
성인인지 미성년인지 구분하시오.

02년생 이상의 경우도 생각해서 짜보시오.
*/

let answerNumber = prompt('주민등록번호 앞 두자리를 입력하세요','');
if(answerNumber > 2 && answerNumber < 23) alert('미성년자');
if(answerNumber < 3 || answerNumber <= 99 && answerNumber > 22) alert('성인');

let input2 = prompt('출생년도를 입력해주세요.','');
if(input2 > 2022 || isNaN(input2)) alert('올바른 나이를 입력하세요.');
if(input2 < 2022 && input2 >= 2003) alert('미성년자');
if(input2 < 2003) alert('성인');

/*
월을 입력받아
입력받은 월의 계절을 판별하시오

3~5 봄
6~8 여름
9~11 가을
12,1,2 겨울
그외숫자 올바른 월이 아닙니다
그외모든것 올바른 값을 입력해주세요
*/

let answer2 = prompt('');
if(isNaN(answer2)) alert('올바른 값을 입력해주세요');
if(answer2 < 1 || answer2 > 12) alert('올바른 월이 아닙니다');
if(answer2 > 2 && answer2 < 6) alert('봄');
if(answer2 > 5 && answer2 < 9) alert('여름');
if(answer2 > 8 && answer2 < 12) alert('가을');
if(answer2 === 12 || answer2 > 0 && answer2 < 3) alert('겨울');