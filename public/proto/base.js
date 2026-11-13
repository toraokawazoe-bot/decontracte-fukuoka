if(location.search.includes('static')){document.documentElement.classList.add('static','is-in')}else{requestAnimationFrame(()=>setTimeout(()=>document.documentElement.classList.add('is-in'),120))}
const cur=document.querySelector('.cur');
if(cur){addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px'});
document.querySelectorAll('[data-cur]').forEach(el=>{el.addEventListener('mouseenter',()=>{cur.textContent=el.dataset.cur;cur.classList.add('on')});el.addEventListener('mouseleave',()=>cur.classList.remove('on'))})}
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const sc=[...document.querySelectorAll('[data-scroll]')];
function tick(){const vh=innerHeight;sc.forEach(el=>{const r=el.getBoundingClientRect();const p=Math.min(1,Math.max(-1,(vh/2-(r.top+r.height/2))/vh));const k=el.dataset.scroll;
 if(k==='zoom')el.style.transform=`scale(${1.15-p*0.15})`;
 else if(k==='slideL')el.style.transform=`translateX(${p*-30}vw)`;
 else if(k==='slideR')el.style.transform=`translateX(${p*30}vw)`;
 else if(k==='rise')el.style.transform=`translateY(${p*-12}vh)`;});requestAnimationFrame(tick)}
if(!rm&&sc.length)tick();
