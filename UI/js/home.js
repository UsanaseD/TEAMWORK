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
const rdlss = document.getElementById('rd');
const read1 = document.getElementById('less1');
const rdlss1 = document.getElementById('rd1');
const less1 = document.getElementById('rctpst1');
const title1 = document.getElementById('tit1');
const story1 = document.getElementById('stry1');
const head1 = document.getElementById('hd1');
const title2= document.getElementById('tit2');
const story2 = document.getElementById('stry2');
const head2 = document.getElementById('hd2');
const rdlss2 = document.getElementById('rd2');

window.addEventListener('load', (e) =>{
    type.style.display='none';
 
});
more.addEventListener('mouseover',(e)=>{
    flag.style.display='block'
   });
   more.addEventListener('click',(e)=>{
       flag.style.display='none'
      });
postbtn.addEventListener('click',(e)=>{
    alert("Post Updated succefully!");
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
rdlss2.addEventListener('mouseover',(e)=>{ 
    title2.style.height='450px'
    story2.style.display='block'
    head2.style.height='30%'
    rdlss2.textContent ='Read less....'
    more2.style.display='block'
});
rdlss2.addEventListener('click',(e)=>{ 
    title2.style.height='15%'
    story2.style.display='none'
    head2.style.height='100%'
    rdlss2.textContent ='Read more....'
    more2.style.display='none'
    flag2.style.display='none'
});
more2.addEventListener('mouseover',(e)=>{
    flag2.style.display='block'
   });
   more2.addEventListener('click',(e)=>{
       flag2.style.display='none'
      });

   more1.addEventListener('mouseover',(e)=>{
    flag1.style.display='block'
   });
   more1.addEventListener('click',(e)=>{
       flag1.style.display='none'
      });

rdlss.addEventListener('mouseover',(e)=>{ 
    title1.style.height='450px'
    story1.style.display='block'
    head1.style.height='30%'
    rdlss.textContent ='Read less....'
    more.style.display='block'
});
rdlss.addEventListener('click',(e)=>{ 
    title1.style.height='15%'
    story1.style.display='none'
    head1.style.height='100%'
    rdlss.textContent ='Read more....'
    more.style.display='none'
    flag.style.display='none'
});
rdlss1.addEventListener('mouseover',(e)=>{ 
    title.style.height='450px'
    story.style.display='block'
    head.style.height='30%'
    rdlss1.textContent ='Read less....'
    more1.style.display='block'
});
rdlss1.addEventListener('click',(e)=>{ 
    title.style.height='15%'
    story.style.display='none'
    head.style.height='100%'
    rdlss1.textContent ='Read more....'
    more1.style.display='none'
    flag1.style.display='none'
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

