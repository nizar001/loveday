/* ===== PENGATURAN UMUM =====
   Foto, pesan, dan lagu tiap kenangan diatur di file memories.js */
const PHONE = "6283171710493";          // nomor WhatsApp tujuan (tanpa + dan 0 di depan)
const MUSIC_FILE = "music/5.mp3";   // taruh lagu kamu di folder music, lalu samakan nama filenya
const MUSIC_TITLE = "Musik romantis";  // tulisan di tombol musik
/* ===================================== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let name="",cur=0;const photos={};
const story1=[
"Aku sengaja membuat web ini buat kamuu, {n}. akuu mauu kamuu tauu bahwa kamuu itu sangatt berharga buatkuuu. 💗",
"{n}, kamu tahu nggaa? semenjakk ada kamuu, hari-hariku jadi lebih berwarnaa. Yang tadinya biasa saja, jadi lucuu, hangatt, dan penuh cintaaaaaww.",
"aku suka saatt kamu senyumm ke akuuu, suka caramu cerewet kalau lagi ngambekk, dan saat kamu marah atau emosi jangan sampe diemin akuu,akuu sedii tauuu,akuu kaloo liatt kamuu emosi akuu suka nyalahin diri sendirii.",
"akuuu bersamaa kamuu akuuu merasakan kasih sayangg,ketenangan,dan kebahagiaann yang ngga bisa akuu dapetin dari orang lainn,akuu bersyukur bangetttttt {n} akuu bersyukur bangetttttt akuu punya kamuuu cayaangggg.",
"makassiii cayangg, udaaa sabarr dengann akuu yangg banyak drama,posesif,ngatur ngatur teruss, akuu seperii itu karenaa akuu sayangg bangett samaa kamuu aayy kaloo kamuu mau tauu,akuu lebihh mentingin diri kamuu sayangg dibanding diri akuu sendiri karenaa sesayang ituu akuu sama kamu,kamuuu itu rumahh akuu sayangg jadii jikaa akuu kehilangan kamuu akuu jugaa bakalan kehilangan rumah akuu... jangann tinggalin akuuu yahh sayangggg. ☹️☹️",
"lanjuttt yukkk, {n}... siapp lanjuttt? Yuk lanjutt. 💗"];
const story3=[
"{n} sayang, ini bagian yang paling ingin aku sampaikan langsung dari hati. 💌",
"Aku nggak janji jadi pasangan yang sempurnaaa. Tapi aku janji akan terus berusahaa: mendengarkanmuu, menjagamuu, tuluss, dan membuatmu tertawaa, akuu sukaa liatt kamuu ketawaa. 😂",
"Kalooo suatu hari kamu capeee, ingat ya: ada aku yang siap jadi pendengarr yangg baikk dan menjadi tempat kamuu bersandarr selamanyaa. kaloo kamu lagi senanggg, aku jugaaa ikutann senengggggggggg.",
"aku mau terus tumbuh bersamaa kamuuu, belajar bareng, jajan bareng, jalan-jalan bareng, dan menua dengan cerita yang kita tulis berduaaa. 🌷",
"kamuuu kalooo marahhh jangann pakee bahasa kasar yahh😞,apalagii pakee sunda kasarr☹️, kamuu haruss bisaa sabarr dann jagaa lisann aayyy,akuu sebagaii cowok kamuu akuu bakall ajarin kamuu bahasa yangg baikk sayanggg😘, {n}: AKU SAYANG KAMU. Bukan cuma hari inii doanggg, tapi selamanyaaaaaaa. 💞",
"I love you, I love you, I love you! Lebih banyak dari bintangg di langitt. Aku sayang kamu, {n}. 💖"];

// hati melayang
const em=["💗","💖","💕","💘","❤️","🌸","I ❤ U","I Love You","Love U 💋"];
function spawn(){const d=document.createElement("div");d.className="fh";const t=em[Math.random()*em.length|0];d.textContent=t;
 d.style.left=Math.random()*95+"%";d.style.fontSize=(t.length>3?14+Math.random()*8:18+Math.random()*30)+"px";
 d.style.fontFamily=t.length>3?"Pacifico,cursive":"inherit";d.style.color="#ff3d85";
 d.style.animationDuration=(32+Math.random()*14)+"s";$("#hearts").appendChild(d);setTimeout(()=>d.remove(),47000)}
setInterval(spawn,3400);for(let i=0;i<5;i++)setTimeout(spawn,i*900);

function prog(i){const w=Math.min(i/5,1)*100;$("#pf").style.width=w+"%";$("#pt").style.left=w+"%"}
function show(i){cur=i;prog(i);$$(".screen").forEach((s,k)=>s.classList.toggle("on",k===i));window.scrollTo(0,0);
 $$(".dots").forEach(d=>d.innerHTML=[1,2,3,4].map(n=>`<i class="${n===i?"a":""}"></i>`).join(""));
 if(i===1)type("#t1",story1);if(i===3)type("#t3",story3)}
let run=0;
function type(sel,arr){const el=$(sel),id=++run,w=ms=>new Promise(r=>setTimeout(r,ms));el.innerHTML="";el.scrollTop=0;
 const items=arr.map(t=>Array.from(t.replaceAll("{n}",name)));
 el.onclick=()=>{if(id!==run)return;run++;el.innerHTML="";items.forEach(ch=>{const p=document.createElement("p");p.textContent=ch.join("");p.className="show";el.appendChild(p)})};
 (async()=>{for(const ch of items){if(id!==run)return;
  const p=document.createElement("p"),a=document.createElement("span"),b=document.createElement("span");
  a.className="cur";b.textContent=ch.join("");b.style.visibility="hidden";p.append(a,b);el.appendChild(p);
  await w(60);p.classList.add("show");await w(600);
  for(let i=1;i<=ch.length;i++){if(id!==run)return;a.textContent=ch.slice(0,i).join("");b.textContent=ch.slice(i).join("");await w(/[.,!?]/.test(ch[i-1])?280:34)}
  a.classList.remove("cur");await w(700)}})()}

const mem={};
function frames(id){const box=$(id),list=(typeof MEMORIES!=="undefined"&&MEMORIES[id])||[];box.innerHTML="";
 let pending=list.length,shown=0;
 const done=()=>{if(--pending===0&&!shown){const p=document.createElement("p");p.className="gempty";p.textContent="Foto belum ditambahkan 📷";box.appendChild(p)}};
 if(!list.length)done.call(null,pending=1);
 list.forEach((m,k)=>{const key=id+k,el=document.createElement("div"),ph=document.createElement("div"),cap=document.createElement("small");
  mem[key]={...m,img:m.photo};
  el.className="pol";el.hidden=true;el.tabIndex=0;el.setAttribute("role","button");el.setAttribute("aria-label","Buka kenangan: "+m.title);
  el.style.setProperty("--r",[-5,4,-3][k%3]+"deg");ph.className="ph has";cap.textContent=m.title;el.append(ph,cap);box.appendChild(el);
  el.onclick=()=>openMem(key);
  el.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openMem(key)}};
  const im=new Image();
  im.onload=()=>{ph.style.backgroundImage=`url("${m.photo}")`;el.hidden=false;shown++;done()};
  im.onerror=()=>{console.warn("Foto tidak ditemukan:",m.photo);el.remove();done()};
  im.src=m.photo})}
frames("#g2");frames("#g4");

// ---- jendela pesan + lagu per foto ----
const sa=new Audio();sa.loop=true;let cm=null,bgWas=false,mr=0;
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function fade(a,to,ms,done){const id=a._f=(a._f||0)+1,from=a.volume,st=performance.now();(function f(t){if(id!==a._f)return;const k=Math.min(Math.max((t-st)/ms,0),1);a.volume=Math.min(1,Math.max(0,from+(to-from)*k));k<1?requestAnimationFrame(f):done&&done()})(st)}
async function typeMsg(el,t){const id=++mr,ch=Array.from(t),a=document.createElement("span"),b=document.createElement("span");
 a.className="cur";b.textContent=t;b.style.visibility="hidden";el.innerHTML="";el.append(a,b);await wait(1000);
 for(let i=1;i<=ch.length;i++){if(id!==mr)return;a.textContent=ch.slice(0,i).join("");b.textContent=ch.slice(i).join("");await wait(/[.,!?]/.test(ch[i-1])?280:34)}
 a.classList.remove("cur")}
function openMem(key){const m=cm=mem[key];
 $("#mph").style.backgroundImage=`url("${m.img}")`;$("#mt").textContent=m.title;$("#mst").textContent=m.songTitle||"Lagu";
 $("#msn").textContent="Sedang diputar";
 bgWas=!au.paused;if(bgWas)fade(au,0,1200,()=>au.pause());
 sa.volume=0;sa.src=m.song;sa.play().catch(()=>{});fade(sa,.7,2500);
 $("#md").classList.add("open");$("#mx").focus();typeMsg($("#mm"),m.msg)}
function closeMem(){const md=$("#md");if(!md.classList.contains("open"))return;md.classList.remove("open");mr++;
 fade(sa,0,900,()=>{if(!md.classList.contains("open"))sa.pause()});
 if(bgWas){au.volume=0;au.play().catch(()=>{});fade(au,.6,2500)}}
sa.onplay=()=>$(".np").classList.add("on");sa.onpause=()=>$(".np").classList.remove("on");
sa.onerror=()=>{if(!cm||!$("#md").classList.contains("open"))return;$("#msn").textContent="File lagu belum ditemukan di folder music"};
$("#mpl").onclick=()=>{if(sa.paused){sa.volume=.7;sa.play().catch(()=>{})}else sa.pause()};
$("#mx").onclick=$("#mc").onclick=closeMem;
$("#md").addEventListener("click",e=>{if(e.target.id==="md")closeMem()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMem()});

const au=new Audio(MUSIC_FILE);au.loop=true;au.volume=.6;
$("#go").onclick=()=>{const v=$("#nm").value.trim();if(!v){$("#e0").textContent="Isi namamu dulu ya sayang 🥺";return}
 name=v;$$(".nm").forEach(e=>e.textContent=v);$("#fn").value=v;
 for(let i=0;i<7;i++)setTimeout(spawn,i*450);au.play().catch(()=>{});show(1)};
$("#nm").addEventListener("keydown",e=>{if(e.key==="Enter")$("#go").click()});
$$("[data-n]").forEach(b=>b.onclick=()=>show(cur+1));
$$("[data-p]").forEach(b=>b.onclick=()=>show(cur-1));
$("#fin").onclick=()=>{for(let i=0;i<16;i++)setTimeout(spawn,i*350);show(5)};
$("#again").onclick=()=>show(1);
// mascot lucu di tiap kartu
$$(".card").forEach((c,i)=>{const m=document.createElement("div");m.className="mascot";m.textContent=["🧸","🐰","🐱","🦋","🐻","💌"][i];c.prepend(m)});
// hiasan lucu di sekitar kartu
const dec=[["🎀","🌷"],["🍓","🧁"],["🌸","🎀"],["🍭","☁️"],["🧸","🌷"],["💝","🍓"]];
$$(".card").forEach((c,i)=>{[["bottom:-16px;left:-8px","0s"],["bottom:-12px;right:-8px","3s"]].forEach(([pos,dl],k)=>{
 const d=document.createElement("span");d.className="deco";d.textContent=dec[i][k];d.style.cssText=pos+";animation-delay:"+dl;c.appendChild(d)})});
// gumpalan cahaya lembut di latar
for(let i=0;i<5;i++){const b=document.createElement("div");b.className="blob";const z=120+Math.random()*120;
 b.style.cssText=`width:${z}px;height:${z}px;left:${Math.random()*80}%;top:${Math.random()*85}%;animation-delay:-${Math.random()*20}s`;$("#hearts").prepend(b)}
// bintang kelap-kelip
for(let i=0;i<16;i++){const t=document.createElement("span");t.className="tw";t.textContent=i%3?"✨":"💫";t.style.cssText=`left:${Math.random()*92}%;top:${Math.random()*92}%;animation-delay:${Math.random()*5}s;font-size:${12+Math.random()*14}px`;$("#hearts").appendChild(t)}
// ledakan hati saat disentuh
$("#app").addEventListener("pointerdown",e=>{const a=$("#app").getBoundingClientRect();
 for(let i=0;i<7;i++){const b=document.createElement("span");b.className="bt";b.textContent=["💗","💖","✨","💕","🌸"][i%5];
  b.style.left=e.clientX-a.left+"px";b.style.top=e.clientY-a.top+"px";
  b.style.setProperty("--dx",(Math.random()*120-60)+"px");b.style.setProperty("--dy",(-30-Math.random()*90)+"px");
  $("#app").appendChild(b);setTimeout(()=>b.remove(),2700)}});
// musik: pakai file dari folder music/
$("#send").onclick=()=>{const n=$("#fn").value.trim(),m=$("#fm").value.trim();
 if(!n||!m){$("#e5").textContent="Nama dan pesannya diisi dulu ya 💕";return}$("#e5").textContent="";
 const txt=`Halo sayang 💗\nDari: ${n}\n\nPesan:\n${m}\n\n(Hari I Love You 14 Februari 💌)`;
 window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(txt)}`,"_blank")};