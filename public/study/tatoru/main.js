/* Study replica motion for tatoru: no smooth-scroll lib. Native scroll + IntersectionObserver + CSS transitions. */
(function(){
  var head=document.querySelector('[data-head]');
  var on=function(){head.classList.toggle('is-solid',window.scrollY>24)};on();
  window.addEventListener('scroll',on,{passive:true});

  var root=document.documentElement,btn=document.querySelector('[data-menu-btn]'),menu=document.querySelector('[data-menu]');
  function setMenu(o){root.classList.toggle('menu-open',o);btn.setAttribute('aria-expanded',String(o))}
  btn.addEventListener('click',function(){setMenu(!root.classList.contains('menu-open'))});
  menu.addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false)});
  addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});

  // new-dojo stage: radial "light" mask opens when 35% in view (IntersectionObserver)
  var st=document.querySelector('[data-stage]');
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es,io){es.forEach(function(e){if(e.isIntersecting){st.classList.add('is-on');io.disconnect()}})},{threshold:.35}).observe(st);
  }else st.classList.add('is-on');

  // movie modal
  var mv=document.querySelector('[data-movie-modal]');
  document.querySelector('[data-movie-open]').addEventListener('click',function(){mv.showModal&&mv.showModal()});
  document.querySelector('[data-movie-close]').addEventListener('click',function(){mv.close()});
  mv.addEventListener('click',function(e){if(e.target===mv)mv.close()});

  // rail: drag + arrows
  var rail=document.querySelector('[data-rail]'),down=false,sx=0,sl=0,moved=0;
  rail.addEventListener('pointerdown',function(e){if(e.pointerType==='touch')return;down=true;moved=0;sx=e.clientX;sl=rail.scrollLeft;rail.setPointerCapture(e.pointerId)});
  rail.addEventListener('pointermove',function(e){if(!down)return;var d=e.clientX-sx;moved=Math.abs(d);if(moved>4)rail.classList.add('is-drag');rail.scrollLeft=sl-d});
  function up(){down=false;rail.classList.remove('is-drag')}
  rail.addEventListener('pointerup',up);rail.addEventListener('pointercancel',up);
  var step=function(d){var c=rail.querySelector('.cls');rail.scrollBy({left:d*(c.offsetWidth+24),behavior:'smooth'})};
  document.querySelector('[data-rail-prev]').addEventListener('click',function(){step(-1)});
  document.querySelector('[data-rail-next]').addEventListener('click',function(){step(1)});

  // tabs
  var tabs=document.querySelectorAll('[data-td-day]'),panels=document.querySelectorAll('[data-td-panel]');
  function show(i){tabs.forEach(function(t){t.classList.toggle('is-on',t.dataset.tdDay==i);t.setAttribute('aria-pressed',t.dataset.tdDay==i)});panels.forEach(function(p){p.hidden=p.dataset.tdPanel!=i})}
  tabs.forEach(function(t){t.addEventListener('click',function(){show(t.dataset.tdDay)})});show(0);
  document.querySelectorAll('.wgx-switch button').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.wgx-switch button').forEach(function(x){x.classList.remove('on')});b.classList.add('on')})});
})();
