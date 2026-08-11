const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('navMenu');
menuBtn?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex'});
document.querySelectorAll('#navMenu a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=900)nav.style.display='none'}));

const filters=document.querySelectorAll('.filter');
const figures=document.querySelectorAll('#galleryGrid figure');
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(x=>x.classList.remove('active'));btn.classList.add('active');
  const cat=btn.dataset.filter;
  figures.forEach(fig=>fig.classList.toggle('hide',cat!=='all'&&fig.dataset.cat!==cat));
}));

document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  document.getElementById('formResult').textContent=`Terima kasih, ${name}. Pesan berhasil dicatat pada demo website.`;
  e.target.reset();
});
const topBtn=document.getElementById('topBtn');
window.addEventListener('scroll',()=>topBtn.classList.toggle('show',window.scrollY>450));
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
