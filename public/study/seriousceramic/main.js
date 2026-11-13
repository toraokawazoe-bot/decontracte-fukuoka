/* Study replica motion: Lenis (stand-in for ScrollSmoother) + GSAP ScrollTrigger.
   Mirrors: intro mask -> hero layer slide-up (2.5s cubic-bezier(.7,.1,0,1)); wipe text lines (2s expo-like);
   prlximg yPercent scrub; hero layer parallax via --fvScrollProgress; footer 300lvh pinned frames scrubbed by --progress. */
(function(){
  gsap.registerPlugin(ScrollTrigger);
  var touch = matchMedia('(hover:none)').matches; if(touch) document.body.classList.add('touch');
  var lenis = new Lenis({lerp:.1,smoothWheel:true});
  lenis.on('scroll',ScrollTrigger.update);
  gsap.ticker.add(function(t){lenis.raf(t*1000)});
  gsap.ticker.lagSmoothing(0);
  lenis.stop();

  // intro
  var b=document.body;
  requestAnimationFrame(function(){requestAnimationFrame(function(){b.classList.add('logoin')})});
  setTimeout(function(){b.classList.add('active')},2200);
  setTimeout(function(){document.getElementById('tagline').classList.add('show');lenis.start()},2600);
  setTimeout(function(){b.classList.add('done')},3600);

  // menu
  var menu=document.getElementById('menu');
  document.getElementById('menuToggle').addEventListener('click',function(){
    var o=menu.classList.toggle('open'); o?lenis.stop():lenis.start();
  });
  document.querySelectorAll('.menu__main__nav a').forEach(function(a){a.addEventListener('click',function(e){
    e.preventDefault();menu.classList.remove('open');lenis.start();var t=document.querySelector(a.getAttribute('href'));lenis.scrollTo(t,{duration:1.2});
  })});
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    if(a.closest('.menu__main'))return;
    a.addEventListener('click',function(e){var h=a.getAttribute('href');if(h.length>1&&document.querySelector(h)){e.preventDefault();lenis.scrollTo(h,{duration:1.4})}});
  });

  // hero: slide crossfade (data-position) every 5.5s
  var hero=document.getElementById('hero'),pos=0;
  setInterval(function(){pos=1-pos;hero.setAttribute('data-position',pos)},5500);
  // hero layer parallax progress
  ScrollTrigger.create({trigger:hero,start:'top top',end:'bottom top',scrub:true,onUpdate:function(s){hero.style.setProperty('--fvScrollProgress',s.progress)}});

  // prlximg
  document.querySelectorAll('.prlximg').forEach(function(el){
    var tg=el.querySelector('.prlximg__target'),n=el.classList.contains('img')?1.2:1.4;
    gsap.fromTo(tg,{yPercent:0},{yPercent:(n-1)/n*100,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:true,invalidateOnRefresh:true}});
  });
  // wipe text
  document.querySelectorAll('.wipetext').forEach(function(el){
    ScrollTrigger.create({trigger:el,start:'top 80%',onEnter:function(){el.classList.add('show')}});
  });
  // image reveal-lift for product bg parallax (background-position)
  document.querySelectorAll('.index__product__section').forEach(function(s){
    gsap.fromTo(s,{backgroundPositionY:'0%'},{backgroundPositionY:'30%',ease:'none',scrollTrigger:{trigger:s,start:'top bottom',end:'bottom top',scrub:true}});
  });
  // footer pinned frames
  var f=document.getElementById('footer');
  ScrollTrigger.create({trigger:f,start:'top top',end:'bottom bottom',scrub:true,onUpdate:function(s){f.style.setProperty('--progress',s.progress)}});
})();
