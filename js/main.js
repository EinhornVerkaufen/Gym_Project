'use strict'

// window.addEventListener('scroll',function(){
//     console.log(window.pageXOffset);
//     console.log(window.scrollX);
//     console.log(window.pageYOffset);
//     console.log(window.scrollY);
// })
window.onload = function(){ 
    // your code 


document.querySelector('.scroll-to-main').onclick = () => {
    
    window.scrollTo({
      top: 1200,
    
      behavior: 'smooth'
    });
  }
//   document.querySelector('.scroll-up-down').onclick = () => {
    
//     window.moveBy({
//         top: -10,
//         left:0,
//         behavior: 'smooth'
//     });
//   }
//   document.querySelector('.next').onclick = () => {
    
//     window.moveBy({
//         top: 10,
        
//         behavior:'smooth'
//     });
//   }

};
