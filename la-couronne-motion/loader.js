(function(){
  "use strict";
  const LC={version:"0.1.0-tech-poc"};
  const CSS=`
  :root{--lc-ink:#0B111F;--lc-paper:#F1F2F2;--lc-blue:#638CC6;--lc-navy:#2A3E5B;--lc-yellow:#F6C308}
  .lc-tech{background:var(--lc-ink);color:var(--lc-paper);font-family:Inter,Arial,sans-serif;border:1px solid rgba(99,140,198,.22);border-radius:18px;padding:24px;overflow:hidden;position:relative}
  .lc-tech *{box-sizing:border-box}.lc-tech h3{margin:0 0 12px;font-size:clamp(26px,5vw,42px);line-height:1;letter-spacing:-.04em;text-transform:uppercase}
  .lc-tech p{color:rgba(241,242,242,.68);line-height:1.55}.lc-k{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--lc-blue);font-weight:800}
  .lc-q{display:none}.lc-q.is-active{display:block}.lc-answers{display:grid;gap:10px;margin-top:18px}.lc-a{appearance:none;border:1px solid rgba(241,242,242,.14);background:rgba(255,255,255,.025);color:var(--lc-paper);padding:13px 14px;border-radius:9px;text-align:left;cursor:pointer}
  .lc-a:hover{border-color:var(--lc-blue);background:rgba(99,140,198,.09)}.lc-result{display:none}.lc-result.is-active{display:block}.lc-signal{color:var(--lc-yellow)}
  .lc-bar{height:2px;background:rgba(255,255,255,.08);margin:14px 0 24px}.lc-bar i{display:block;height:100%;background:var(--lc-yellow);width:0;transition:width .25s ease}
  .lc-cta{display:inline-block;margin-top:16px;background:var(--lc-yellow);color:var(--lc-ink);padding:13px 16px;border-radius:6px;font-weight:800;text-decoration:none}
  @media(min-width:720px){.lc-answers{grid-template-columns:1fr 1fr}}
  @media(prefers-reduced-motion:reduce){.lc-bar i{transition:none}}
  `;
  function style(){
    if(document.getElementById("lc-tech-style")) return;
    const s=document.createElement("style"); s.id="lc-tech-style"; s.textContent=CSS; document.head.appendChild(s);
  }
  const questions=[
    ["clarity","Quand plusieurs priorités arrivent en même temps, vous...",["Tranchez vite selon ce qui compte vraiment","Avancez mais gardez trop de choses ouvertes","Changez souvent de priorité","Commencez par ce qui crie le plus fort"]],
    ["execution","Quand vous savez quoi faire, votre difficulté est...",["Passer rapidement à l'action","Garder le rythme quand la semaine se charge","Commencer sans attendre le bon moment","Transformer l'intention en action régulière"]],
    ["energy","À la fin d'une semaine chargée, vous avez surtout l'impression...",["D'avoir mis votre énergie au bon endroit","D'avoir avancé avec trop de dispersion","D'avoir beaucoup fait sans assez de résultat","D'avoir couru partout pour maintenir le minimum"]],
    ["adapt","Quand un plan cesse de fonctionner...",["Vous changez la méthode sans toucher au cap","Vous testez autre chose après quelques ajustements","Vous poussez encore longtemps","Vous hésitez entre abandonner et forcer"]]
  ];
  const copy={
    clarity:["VOUS DEVEZ TRANCHER.","Votre friction dominante se situe dans les priorités et les arbitrages.","#recalibrage"],
    execution:["VOTRE SYSTÈME DOIT TENIR SANS MOTIVATION.","Votre friction dominante se situe dans la répétabilité de l'exécution.","#fondations"],
    energy:["VOUS N'AVEZ PAS BESOIN DE PLUS DE TEMPS.","Votre friction dominante se situe dans l'allocation de votre temps et de votre énergie.","#huitieme"],
    adapt:["LE CAP PEUT RESTER. LA MÉTHODE DOIT BOUGER.","Votre friction dominante se situe dans le recalibrage quand le contexte change.","#adaptabilite"]
  };
  function mount(root){
    if(!root || root.dataset.lcMounted) return;
    root.dataset.lcMounted="1"; style();
    let idx=0,scores={clarity:0,execution:0,energy:0,adapt:0};
    root.innerHTML='<div class="lc-tech"><div class="lc-k">AUDIT EXPRESS · POC TECHNIQUE</div><div class="lc-bar"><i></i></div><div class="lc-stage"></div></div>';
    const stage=root.querySelector(".lc-stage"),bar=root.querySelector(".lc-bar i");
    function render(){
      if(idx<questions.length){
        const [axis,title,answers]=questions[idx];
        stage.innerHTML='<div class="lc-q is-active"><h3>'+title+'</h3><div class="lc-answers">'+answers.map((a,i)=>'<button class="lc-a" data-v="'+(3-i)+'">'+a+'</button>').join("")+'</div></div>';
        bar.style.width=((idx/questions.length)*100)+"%";
        stage.querySelectorAll(".lc-a").forEach(b=>b.onclick=()=>{scores[axis]+=Number(b.dataset.v);idx++;render();});
      }else{
        bar.style.width="100%";
        const weakest=Object.entries(scores).sort((a,b)=>a[1]-b[1])[0][0];
        const c=copy[weakest];
        stage.innerHTML='<div class="lc-result is-active"><div class="lc-k lc-signal">APERÇU DE VOTRE PROFIL</div><h3>'+c[0]+'</h3><p>'+c[1]+'</p><p><strong>Le rapport complet et le plan d\'action seront débloqués après capture email.</strong></p><a class="lc-cta" href="'+c[2]+'">CONTINUER →</a></div>';
      }
    }
    render();
  }
  function boot(){
    style();
    document.querySelectorAll("[data-la-couronne-audit],#lc-audit").forEach(mount);
    document.documentElement.setAttribute("data-lc-loader",LC.version);
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",boot); else boot();
})();