// 1. btn 선택
// 2. h1 선택

// 3. btn 클릭시 이벤트 함수 생성
// 클릭 시 랜덤 컬러 변경
// h1 텍스트 변경

// 4. 랜덤 컬러 함수 생성

const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = randomColor();
  h1.innerText = randomColor();
});

const randomColor = function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};
