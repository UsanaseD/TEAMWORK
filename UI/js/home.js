const click = document.getElementById('klik');
const container = document.getElementById('cont');
const linkCarrer = document.getElementById('carree');
const link = document.getElementById('links');
const careers = document.getElementById('carrz');
const services = document.getElementById('serv');
const bann = document.getElementById('banner');
const menu = document.getElementById('men');
const more = document.getElementById('more');
const more1 = document.getElementById('more1');
const flag = document.getElementById('flag');
const flag1 = document.getElementById('flag1');
const own = document.getElementById('txt0');
const postbtn = document.getElementById('post');
const cmnt1 = document.getElementById('cmnt1');
const cmnt = document.getElementById('cmnt');
const delet0 = document.getElementById('del0');
const delet1 = document.getElementById('del1');
const delet2 = document.getElementById('del2');
const delet3 = document.getElementById('del3');
const add = document.getElementById('add');
const type = document.getElementById('ona');
const close = document.getElementById('close');
const less = document.getElementById('rctpst0');
const read = document.getElementById('less0');
const rdlss = document.getElementById('rd0');
const read1 = document.getElementById('less1');
const rdlss1 = document.getElementById('rd1');
const less1 = document.getElementById('rctpst1');


window.addEventListener('load', (e) =>{
container.style.display='block';
container.style.width='100%';
linkCarrer.style.display='none';
flag.style.display ='none';
flag1.style.display ='none';
type.style.display ='none';
less.rows = '10'
less1.rows = '10'
});

close.addEventListener('click',(e)=>{
    type.style.display='none';
});

add.addEventListener('click',(e)=>{
type.style.display='block';
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

  delet0.addEventListener('click',(e)=>{
    alert("Post Deleted succefully!");
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

postbtn.addEventListener('click',(e)=>{
    alert("Post Updated succefully!");
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

read1.addEventListener('mouseover',(e)=>{ 
    less1.rows='24';
    rdlss1.textContent ='Read less....'
    less1.style.overflow='scroll'
});

read1.addEventListener('click',(e)=>{ 
    less1.rows='7';
   rdlss1.textContent ='Read more....'
   less1.style.overflow='hidden'
});

