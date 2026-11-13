gsap.registerPlugin(ScrollTrigger);
// load cover fade-out
gsap.to('#cover',{opacity:0,duration:.8,delay:.2,ease:'power1.out',onComplete:()=>document.getElementById('cover').style.display='none'});
// hero slider: autoplay 5s, fade 140ms
const sl=[...document.querySelectorAll('.visual__slide')];let si=0;sl[0].classList.add('is-active');
setInterval(()=>{sl[si].classList.remove('is-active');si=(si+1)%sl.length;sl[si].classList.add('is-active')},5000);
// header: hide on scroll down, show on up; category bar collapses past 30px
const hd=document.getElementById('header'),cats=document.querySelector('.s-header__products');let ly=0;
addEventListener('scroll',()=>{const y=scrollY;hd.classList.toggle('is-hide',y>ly&&y>200);
 cats.style.maxHeight=y<=30?'4rem':'0';cats.style.opacity=y<=30?1:0;ly=y},{passive:true});
// fade-up reveal on scroll
gsap.utils.toArray('.rv').forEach((el,i)=>gsap.to(el,{opacity:1,y:0,duration:.8,ease:'power2.out',delay:(i%4)*.08,scrollTrigger:{trigger:el,start:'top 90%'}}));
gsap.utils.toArray('.s-collections__unit,.c-head,.blog__main,.insta__heads').forEach(el=>gsap.from(el,{opacity:0,y:30,duration:.8,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%'}}));
// custom cursor circle follows mouse, grows over links
const cur=document.querySelector('.c-cursor__pointer'),cx=gsap.quickTo('#cursor',"x",{duration:.3}),cy=gsap.quickTo('#cursor',"y",{duration:.3});
addEventListener('mousemove',e=>{cx(e.clientX-innerWidth/2);cy(e.clientY-innerHeight/2);gsap.to(cur,{opacity:.5,duration:.3})});
document.querySelectorAll('a').forEach(a=>{a.addEventListener('mouseenter',()=>gsap.to(cur,{scale:1.6,duration:.3}));a.addEventListener('mouseleave',()=>gsap.to(cur,{scale:.4,duration:.3}))});
// blog slider arrows
const bs=document.getElementById('bslider'),n=bs.children.length;let bi=0;
const go=d=>{bi=Math.max(0,Math.min(n-3,bi+d));bs.style.transform=`translateX(${-bi*bs.children[0].offsetWidth}px)`};
bnext.onclick=e=>{e.preventDefault();go(1)};bprev.onclick=e=>{e.preventDefault();go(-1)};
// menu / totop
const m=document.getElementById('menu');menubtn.onclick=e=>{e.preventDefault();m.classList.add('is-open')};menuclose.onclick=e=>{e.preventDefault();m.classList.remove('is-open')};
totop.onclick=e=>{e.preventDefault();scrollTo({top:0,behavior:'smooth'})};
