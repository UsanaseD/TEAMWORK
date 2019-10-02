const click = document.getElementById('klik');
const container = document.getElementById('cont');
const linkCarrer = document.getElementById('carree');
const link = document.getElementById('links');
const careers = document.getElementById('carrz');
const services = document.getElementById('serv');
const bann = document.getElementById('banner');
const menu = document.getElementById('men');
const own = document.getElementById('txt0');
const postbtn = document.getElementById('post');
const delet0 = document.getElementById('del0');
const delet1 = document.getElementById('del1');
const delet2 = document.getElementById('del2');
const delet3 = document.getElementById('del3');
const add = document.getElementById('add');
const type = document.getElementById('ona');
const close = document.getElementById('close');
const title = document.getElementById('tit');
const title1 = document.getElementById('tit1');
const title2 = document.getElementById('tit2');
const title3= document.getElementById('tit3');
const title4 = document.getElementById('tit4');
const title5 = document.getElementById('tit5');


window.addEventListener('load', (e) =>{
    type.style.display='none';

});
title.addEventListener('click',(e)=>{
    window.location.href='./read.html'
});
title1.addEventListener('click',(e)=>{
    window.location.href='./read.html'
});
title2.addEventListener('click',(e)=>{
    window.location.href='./read.html'
});
title3.addEventListener('click',(e)=>{
    window.location.href='./read.html'
});
title4.addEventListener('click',(e)=>{
    window.location.href='./read.html'
});
title5.addEventListener('click',(e)=>{
    window.location.href='./read.html'
});


postbtn.addEventListener('click',(e)=>{
    alert("Post Updated succefully!");
});
add.addEventListener('click',(e)=>{
    type.style.display='block';
    });
    close.addEventListener('click',(e)=>{
        type.style.display='none';
    });

delet0.addEventListener('click',(e)=>{
    alert("Post Deleted succefully!");
});
delet1.addEventListener('click',(e)=>{
    alert("Post Deleted succefully!");
});
delet2.addEventListener('click',(e)=>{
    alert("Post Deleted succefully!");
});

click.addEventListener('mouseover',(e)=>{
 linkCarrer.style.display='none';
container.style.marginLeft='25%';
bann.style.width='125%';
menu.style.width='125%';
careers.style.color='white';
services.style.display='white';
container.style.top='37%';
});

container.addEventListener('mouseover',(e)=>{
    container.style.marginLeft ='0%';
    bann.style.width='100%';
    menu.style.width='100%';
    container.style.top='35%';
    link.style.top='37%';
});


careers.addEventListener('mouseover',(e)=>{
    linkCarrer.style.display='block';
    container.style.marginLeft='25%';
    careers.style.color='grey';
    services.style.color='white';
    linkCarrer.style.color='grey';
});
services.addEventListener('mouseover',(e)=>{
    container.style.marginLeft='25%';
    linkCarrer.style.display='none';
    services.style.color='grey';
    careers.style.color='white';
});
  cmnt.addEventListener('click',(e)=>{
      alert('comment updated successfully!')
  });
  cmnt1.addEventListener('click',(e)=>{
    alert('comment updated successfully!')
});

more.addEventListener('mouseover',(e)=>{
    flag.style.display='block';
});
more.addEventListener('click',(e)=>{
    flag.style.display='none';
});

more1.addEventListener('mouseover',(e)=>{
    flag1.style.display='block';
});
more1.addEventListener('click',(e)=>{
    flag1.style.display='none';
});



delet1.addEventListener('click',(e)=>{
    alert("Post Deleted succefully!");
});

delet2.addEventListener('click',(e)=>{
    alert("Post Deleted succefully!");
});

delet3.addEventListener('click',(e)=>{
    alert("Post Deleted succefully!");
});



read.addEventListener('mouseover',(e)=>{ 
    less.rows='24';
    rdlss.textContent ='Read less....'
    less.style.overflow='scroll'
});

read.addEventListener('click',(e)=>{ 
    less.rows='7';
   rdlss.textContent ='Read more....'
   less.style.overflow='hidden'
});



read1.addEventListener('click',(e)=>{ 
    less1.rows='7';
   rdlss1.textContent ='Read more....'
   less1.style.overflow='hidden'
});

