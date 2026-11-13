(function(){
  if(location.hash==='#shot')document.documentElement.classList.add('shot');
  var root=document.documentElement;
  function setVw(){root.style.setProperty('--vw',window.innerWidth+'px')}
  setVw();window.addEventListener('resize',setVw);
  var $=function(s,c){return (c||document).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
  // loading mask -> siteReady
  setTimeout(function(){document.body.classList.add('siteReady');startFV()},900);
  // lenis (live site: lerp/duration 1.5)
  var lenis=null;
  if(window.Lenis){lenis=new Lenis({duration:1.5});gsap.registerPlugin(ScrollTrigger);lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(function(t){lenis.raf(t*1000)});gsap.ticker.lagSmoothing(0)}
  else if(window.gsap){gsap.registerPlugin(ScrollTrigger)}
  // menu
  var menu=$('.menu');$('.menu__toggle').addEventListener('click',function(){menu.classList.toggle('open')});
  // arrow hover (animhover 500ms)
  $$('.linelink,.gbtn,.footer__backtop').forEach(function(el){var t=null;el.addEventListener('mouseenter',function(){if(el.classList.contains('animhover'))return;clearTimeout(t);t=setTimeout(function(){el.classList.remove('animhover')},500);el.classList.add('animhover')})});
  // anchors
  $$('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var h=a.getAttribute('href');e.preventDefault();menu.classList.remove('open');var tgt=h.length>1?$(h):0;if(lenis)lenis.scrollTo(tgt||0,{offset:1});else window.scrollTo({top:tgt?tgt.offsetTop:0,behavior:'smooth'})})});
  // FV: 4 slides x 5s, progress over 20s
  var fv=$('.fv'),bar=$('.fv__progress i');
  function startFV(){var t0=performance.now(),L=20000,last=0;(function loop(now){var t=((now-t0)%L),p=Math.min(1,t/(L-600));fv.setAttribute('data-position',Math.floor(t/5000));bar.style.transform='scaleX('+p+')';if(p>=1)bar.classList.add('rewind');if(last>t){bar.classList.remove('rewind')}last=t;requestAnimationFrame(loop)})(t0)}
  fv.setAttribute('data-position',0);
  // scroll effects
  if(window.ScrollTrigger){
    gsap.fromTo('.fv__video>img',{yPercent:0},{yPercent:(1.4-1)/1.4*100,ease:'none',scrollTrigger:{trigger:fv,start:'top top',endTrigger:'.fv__video',end:'bottom top',scrub:true,invalidateOnRefresh:true}});
    // halfblock image: fullhight is not parallaxed on live; keep subtle drift on inner img only
    var mm=gsap.matchMedia();
    mm.add('(min-width: 768px)',function(){
      ScrollTrigger.create({trigger:'#fhead',start:'top top+='+(84*window.innerWidth/1440),endTrigger:'.footer',end:'bottom bottom',pin:true,pinSpacing:false});
      gsap.fromTo('#fvis',{yPercent:-(1.4-1)/1.4*100},{yPercent:0,ease:'none',scrollTrigger:{trigger:'.footer',start:'top bottom',end:'bottom bottom',scrub:true,invalidateOnRefresh:true}});
    });
  }
  // gallery
  var gal=$('#gal'),imgs=$$('.gallery__img',gal),caps=$$('.gcap div',gal),thumbBox=$('#gthumb'),n=imgs.length,cur=0,thumbs=[];
  imgs.forEach(function(im,i){var s=document.createElement('span');s.appendChild(im.firstElementChild.cloneNode(true));thumbBox.appendChild(s);thumbs.push(s)});
  function go(i,dir){cur=(i+n)%n;imgs.forEach(function(im,k){im.classList.remove('on');if(k===cur){void im.offsetWidth;im.classList.add('on')}});caps.forEach(function(c,k){c.classList.toggle('on',k===cur)});
    thumbs.forEach(function(s,k){var rel=(k-cur+n)%n;s.style.visibility=(rel===0||rel===1)?'visible':'hidden';s.style.transform='translateX('+(rel===0?0:rel===1?3:0)+'rem)'})}
  $('.gbtn.next').addEventListener('click',function(){go(cur+1)});$('.gbtn.prev').addEventListener('click',function(){go(cur-1)});
  go(0);var gtimer=null;if('IntersectionObserver' in window){new IntersectionObserver(function(es){es.forEach(function(e){clearInterval(gtimer);if(e.isIntersecting)gtimer=setInterval(function(){go(cur+1)},5000)})},{threshold:.4}).observe(gal)}
})();
