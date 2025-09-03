// const btn = document.querySelector('#btn'); 

// btn.addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme');
//     if(버튼의 텍스트가 '다크 모드  만들기'로 되오 있으며){
//          버튼의 텍스트 = '라이트 모드'로 변경
//      }else if('라이드 모드'로 되어있으며){
//           버튼의 텍스트 = '다크 모드'로 변경
//      }
// });

// const btn = document.querySelector('#btn');
// const h = document.querySelector('h1');

// window.addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme');

//     if(btn.textContent === '다크 모드'){
//         btn.textContent = '라이트 모드'
//         h.textContent = '다크 모드'
//     }else if(btn.textContent === '라이트 모드'){
//          btn.textContent = '다크 모드'
//          h.textContent = '라이트 모드'
//     }
// });

const btn = document.querySelector('#btn');
const text = document.querySelector('h1');

window.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');

    if(text.textContent == '다크 모드'){
        text.textContent = '라이듵 모드'
        btn.textContent = '다크 모드'
    }else{
        text.textContent = '다크 모드'
        btn.textContent = '라이트 모드'
    }
})