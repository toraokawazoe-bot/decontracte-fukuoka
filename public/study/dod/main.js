(function(){
  var $=function(s,c){return (c||document).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
  var shot=location.hash==='#shot';
  gsap.registerPlugin(ScrollTrigger);
  var lenis=new Lenis({duration:1.2});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(function(t){lenis.raf(t*1000)});gsap.ticker.lagSmoothing(0);
  // hero entrance (live: y40 -> 0, 1.2s power3.out, stagger .15)
  function heroIn(){gsap.set(['#hTitle','#hCatch','#hVis','#hScroll'],{y:40});gsap.to(['#hTitle','#hCatch','#hVis','#hScroll'],{y:0,autoAlpha:1,duration:1.2,ease:'power3.out',stagger:.15,clearProps:'transform'})}
  // loading: bar 1.2s -> logo up -> radial mask reveal 1.5s
  var L=$('#loading'),v={v:-30};
  function mask(){var a=Math.max(0,v.v),b=Math.max(0,v.v+30),g='radial-gradient(circle at 50% 100%, transparent '+a+'%, black '+b+'%)';L.style.webkitMaskImage=g;L.style.maskImage=g}
  mask();
  gsap.timeline({onComplete:function(){L.remove()}}).to('#loadingBar',{width:'100%',duration:1.2,ease:'power2.inOut'})
   .to('#loadingIn',{y:-20,opacity:0,duration:.4,ease:'power2.out'},'+=0.2')
   .to(v,{v:150,duration:1.5,ease:'power2.inOut',onStart:function(){document.body.classList.remove('lock');heroIn()},onUpdate:mask},'-=0.2');
  // hero fade slider (6s interval, 2.5s fade) + scale 1.15 -> 1
  var sl=$$('.hero__slide'),si=0;
  function kb(i){var im=sl[i].firstElementChild;gsap.killTweensOf(im);gsap.fromTo(im,{scale:1.15},{scale:1,duration:6,ease:'none'})}
  kb(0);setInterval(function(){sl[si].classList.remove('on');si=(si+1)%sl.length;sl[si].classList.add('on');kb(si)},6000);
  // hero pin + expand visual to full viewport (live: pin +=2000, scrub 1.5, spacer 1200)
  var hero=$('#hero'),vis=$('#hVis'),sp=$('#spacer');
  gsap.matchMedia().add('(min-width: 768px)',function(){
    sp.style.height='1200px';
    var tl=gsap.timeline({scrollTrigger:{trigger:hero,start:function(){return 'top '+$('.hd').offsetHeight+'px'},end:'+=2000',scrub:1.5,pin:true,pinSpacing:false,anticipatePin:1,invalidateOnRefresh:true}});
    tl.fromTo(['#hTitle','#hCatch','#hScroll'],{opacity:1,y:0},{opacity:0,y:-30,duration:.8,stagger:.1,ease:'none',immediateRender:false},0);
    tl.to(vis,{width:'100vw',height:'100vh',marginLeft:'calc(50% - 50vw)',y:function(){return -(vis.getBoundingClientRect().top-hero.getBoundingClientRect().top)},ease:'none',duration:1},0);
    tl.to({},{duration:1});
    tl.to(vis,{opacity:0,scale:.95,ease:'none',duration:1});
    tl.to(hero,{autoAlpha:0,duration:.01});
  });
  // floating news hides after 50px
  ScrollTrigger.create({trigger:'body',start:'top -50',onEnter:function(){gsap.to('#fnews',{autoAlpha:0,y:20,duration:.4,ease:'power2.out'})},onLeaveBack:function(){gsap.to('#fnews',{autoAlpha:1,y:0,duration:.4,ease:'power2.out'})}});
  // section reveal: y40 -> 0, 1.5s power3.out, stagger .15 at top 75%
  $$('[data-reveal]').forEach(function(sec){var it=$$('.js-i',sec);if(!it.length)return;gsap.set(it,{y:40,autoAlpha:0});ScrollTrigger.create({trigger:sec,start:'top 75%',once:true,onEnter:function(){gsap.to(it,{y:0,autoAlpha:1,duration:1.5,ease:'power3.out',stagger:.15,clearProps:'transform'})}})});
  var ab=$$('.js-i2');gsap.set(ab,{y:40,autoAlpha:0});ScrollTrigger.create({trigger:'#aboutTeaser',start:'top 75%',once:true,onEnter:function(){gsap.to(ab,{y:0,autoAlpha:1,duration:1.5,ease:'power3.out',stagger:.15,clearProps:'transform'})}});
  // about marquee: slide in x100 then xPercent -25 loop 40s
  var mq=$('#marquee');
  gsap.timeline({scrollTrigger:{trigger:'#aboutTeaser',start:'top 80%',once:true}}).fromTo(mq,{opacity:0,x:100},{opacity:1,x:0,duration:1.5,ease:'power2.out'}).add(function(){gsap.to(mq,{xPercent:-25,ease:'none',duration:40,repeat:-1})});
  // tiny slider (stand-in for Splide: type slide, gap 24, progress bar)
  function Slider(root){
    var tr=$('.slider__tr',root),items=$$('.slide',tr),bar=$('.sctl__p i',root),prev=$('.prev',root),next=$('.next',root),idx=0;
    function pp(){var w=innerWidth,p=+root.dataset.pp;[['1024','pp1024'],['768','pp768'],['500','pp500'],['480','pp480']].forEach(function(c){if(w<=+c[0]&&root.dataset[c[1]])p=+root.dataset[c[1]]});return p}
    function vis(){return items.filter(function(i){return i.style.display!=='none'})}
    function upd(){var P=pp(),n=vis().length,end=Math.max(0,n-P);idx=Math.min(idx,end);root.style.setProperty('--pp',P);var w=vis()[0]?vis()[0].offsetWidth+24:0;tr.style.transform='translateX('+(-idx*w)+'px)';if(bar)bar.style.width=Math.min(1,(idx+1)/(end+1))*100+'%'}
    if(next)next.onclick=function(){idx++;upd()};
    if(prev)prev.onclick=function(){idx=Math.max(0,idx-1);upd()};
    var sx=0;root.addEventListener('pointerdown',function(e){sx=e.clientX});
    root.addEventListener('pointerup',function(e){var d=e.clientX-sx;if(Math.abs(d)>40){idx=Math.max(0,idx+(d<0?1:-1));upd()}});
    window.addEventListener('resize',upd);
    root._filter=function(f){items.forEach(function(i){i.style.display=(f==='all'||i.dataset.cat===f)?'':'none'});idx=0;upd()};
    upd();
  }
  $$('.slider').forEach(Slider);
  // tabs (filter new products)
  $$('.tabs').forEach(function(t){$$('.tab',t).forEach(function(tab){tab.addEventListener('click',function(){$$('.tab',t).forEach(function(x){x.classList.remove('is-active')});tab.classList.add('is-active');if(t.id==='tabs')$('#npSlider')._filter(tab.dataset.f)})})});
  // anchors
  $$('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var h=a.getAttribute('href');if(h.length>1&&$(h)){e.preventDefault();lenis.scrollTo(h)}else if(h==='#'){e.preventDefault()}})});
  if(shot){document.documentElement.classList.add('shot');gsap.set('.js-i,.js-i2,#marquee',{autoAlpha:1,y:0,x:0});if(L)L.remove();document.body.classList.remove('lock');gsap.set(['#hTitle','#hCatch','#hVis','#hScroll'],{autoAlpha:1})}
})();
