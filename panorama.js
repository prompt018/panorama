const circle = document.querySelector("#circle");
//아이디가 circle인 요소를 찾아 변수 circle 에 저장

const article = circle.querySelectorAll("article");
//태그명이 article인 요소를 찾아 변수 article 에 저장


//article 전체 개수만큼 반복하면서 mouseenter,mouseleave 이벤트 연결
for (let el of article) {


 //article 에 마우스 포인터를 올리면 부모인 #circle의 animation-Play-State 값을 'paused'로 변경
 el.addEventListener("mouseenter",e=>{
  circle.computedStyleMap.animationPlayState = "paused";
 });


 //article 에 마우스 포인터가 떠나면 부모인 #circle의 animation-Play-State 값을 'running'로 변경
 el.addEventListener("mouseleave",e=>{
  circle.computedStyleMap.animationPlayState = "running";
 });
};

article 박스마다 마우스 포인터를 올리면 전체 section 의 모션이 멈추었다가 마우스 포인터를 내리면 모션을 이어서 다시 실행