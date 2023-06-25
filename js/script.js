const nav=document.querySelector('.nav');
const button=document.querySelector('.button');
const content=document.getElementById('content');
const next=document.querySelector('.next');
const searchinput=document.querySelector('.searchinput');
const sidebar=document.querySelector('.sidebar');
const history=document.querySelector('.history');

window.onscroll=function(){
    nav.classList.add('bg-white')
    content.classList.add('bg-white')
    button.classList.add('bg-white')
}

function showSideBar(){
    sidebar.classList.toggle('hidden')
}
function showHistory(){
    history.classList.remove('hidden')
}
searchinput.onchange=function (event){ 
    
   // if(event.target.value==''){
    //    history.classList.remove('hidden')
  //  }
   // else {
        history.classList.add('hidden')
   // }
}


function onscrollLeft(){
    
    content.scrollLeft -=20;

}

function onscrollRight(){
    
   content.scrollLeft +=20;
    
    document.querySelector('.prev').classList.remove('hidden');
    content.addEventListener('scrollend',(event)=>{
        console.log('next')
    })
    content.onscrollend = (event) => {
        next.classList.add('hidden')
        console.log('next')
      };

}