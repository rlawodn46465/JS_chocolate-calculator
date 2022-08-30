let 계산식 = document.querySelector(".calc");
let 결과값 = document.getElementsByClassName("value")[0];
let 전값 = 0;
let 후값 = "";
let 기호 = [];

console.log("전값 : " + 전값);
console.log("후값 : " + 후값);
console.log(기호);

function 입력(num) {
  if (num >= 0) { //숫자
    후값 = 후값 + num;
  } else {  //기호
    if (전값 === 0) {
      전값 = 후값;
    } else {
      전값 = eval(Number(전값) + 기호[0] + Number(후값));
    }
    기호[0] = num;
    console.log(기호);
    후값 = "";
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
