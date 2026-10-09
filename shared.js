// Chispas doradas laterales (compartido)
(()=>{const sc=document.getElementById('side');if(!sc)return;const sx=sc.getContext('2d');let W,H,P=[];
const rs=()=>{const d=devicePixelRatio||1;W=innerWidth;H=innerHeight;sc.width=W*d;sc.height=H*d;sx.setTransform(d,0,0,d,0,0)};rs();addEventListener('resize',rs);
const mk=()=>{const l=Math.random()<.5,w=Math.min(W*.2,160);return{x:l?Math.random()*w:W-Math.random()*w,y:H+10,v:.35+Math.random()*1,r:.7+Math.random()*2,a:Math.random()*6}};
for(let i=0;i<(W<700?24:45);i++){const p=mk();p.y=Math.random()*H;P.push(p)}
(function f(){sx.clearRect(0,0,W,H);for(const p of P){p.y-=p.v;p.a+=.03;p.x+=Math.sin(p.a)*.35;if(p.y<-10)Object.assign(p,mk());
sx.fillStyle=`rgba(240,194,122,${.25+.55*Math.abs(Math.sin(p.a))})`;sx.shadowColor='rgba(240,194,122,.8)';sx.shadowBlur=8;sx.beginPath();sx.arc(p.x,p.y,p.r,0,7);sx.fill();sx.shadowBlur=0}
requestAnimationFrame(f)})()})();
