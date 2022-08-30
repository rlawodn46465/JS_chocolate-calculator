let 계산식 = document.querySelector(".calc");
let 결과값 = document.getElementsByClassName("value")[0];
let 전값 = 0;
let 후값 = "";
let 기호 = [];
let 숫자체크 = false;

console.log("전값 : " + 전값);
console.log("후값 : " + 후값);
console.log(기호);

function 입력(num) {
  if (num >= 0) {
    //숫자
    후값 = ''+후값 + num;
    숫자체크 = true;
  } else {
    //기호
    // if (기호[0] !== num) {  //같은 기호를 두번 누르면 안된다.
      if(숫자체크 === true){  //숫자가 있음
        if (전값 === 0) { //전값이 0 이면
          전값 = 후값;
        } else{ //2번째 연산
          전값 = eval(Number(전값) + 기호[0] + Number(후값)); //계산
        }
        기호[0] = num;  //중복이 아닌 기호 저장
        console.log(기호);
        후값 = "";  //후값 비운다.
        숫자체크 = false; 
      } else{ //기호에서 기호로 바뀜
        기호[0] = num //기호에서 기호로 바뀐다
        숫자체크 = false;
      }
    // }
  }
  if (전값 === 0) {
    //처음 쓸때
    계산식.value = 후값 + " " + 기호;
    결과값.innerHTML = 후값;
  } else {
    //2번째 부터
    if (후값 === "") {
      계산식.value = 전값 + " " + 기호;
      결과값.innerHTML = 전값;
    } else {
      계산식.value = 전값 + " " + 기호 + " " + 후값;
      결과값.innerHTML = 후값;
    }
  }
  console.log("전값 : " + 전값);
  console.log("후값 : " + 후값);
}

function 결과() {
  if (전값 === 0 && 후값 === "") {
    //아무것도 안눌렀을때 NaN 오류 방지
    return;
  } else if(전값 === 0){
    return;
  }
  후값 = eval(Number(전값) + 기호[0] + Number(후값));
  전값 = 0;
  기호[0] = [];
  계산식.value = 후값;
  결과값.innerHTML = 후값;
  console.log("전값 : " + 전값);
  console.log("후값 : " + 후값);
}

function 전체제거() {
  전값 = 0;
  후값 = "";
  기호 = [];
  계산식.value = 0;
  결과값.innerHTML = 0;
  console.log("전값 : " + 전값);
  console.log("후값 : " + 후값);
  console.log(기호);
}

function 뒤로가기() {
  후값 = 후값.slice(0, -1);
  if (전값 === 0 && 후값 === "") {
    계산식.value = 0;
    결과값.innerHTML = 0;
  } else if (전값 === 0) {
    계산식.value = 후값 + " " + 기호;
    결과값.innerHTML = 후값;
  } else if (후값 === "") {
    계산식.value = 전값 + " " + 기호;
    결과값.innerHTML = 전값;
  } else {
    계산식.value = 전값 + " " + 기호 + " " + 후값;
    결과값.innerHTML = 후값;
  }
}
