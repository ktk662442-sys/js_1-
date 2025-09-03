// const loading = document.querySelector('#loading');

// window.addEventListener('load', () => {
//     // 로딩이 끝났을 때의 처리
//     // load : 로딩이 보여주고 종료되는 것을 해주는 이벤트 메서드

//     loading.classList.add('loaded');
//     // '#loading'에 '.loaded' 클래스 추가(css에소는 존재하지만 html에서 존재하지 않는 선택자)
//     console.log('hu')
// });

const loading = document.querySelector('#loading');

window.addEventListener('load',() => {
   loading.classList.add('loaded');
})