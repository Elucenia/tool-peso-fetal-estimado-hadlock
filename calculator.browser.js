/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"peso-fetal-estimado-hadlock","title":"Peso fetal estimado (Hadlock)","fields":[["cc","Circunferência cefálica (CC)","num",{"min":8,"max":40,"step":0.1,"unit":"cm","ph":"30"}],["ca","Circunferência abdominal (CA)","num",{"min":8,"max":45,"step":0.1,"unit":"cm","ph":"30"}],["cf","Comprimento do fêmur (CF)","num",{"min":1,"max":9,"step":0.01,"unit":"cm","ph":"6,0"}],["ig_sem","Idade gestacional: semanas <small>(opcional, para o percentil)</small>","num",{"min":20,"max":42,"step":1,"unit":"semanas","ph":"34","opt":true}],["ig_dias","Idade gestacional: dias","num",{"min":0,"max":6,"step":1,"unit":"dias","ph":"0","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
a.def("peso-fetal-estimado-hadlock",function(a){var e,r,i,n,t=a.cc,d=a.ca,s=a.cf,l=1.326-.00326*d*s+.0107*t+.0438*d+.158*s,c=Math.pow(10,l),m={main:[o(c,0),"g"],label:"Peso fetal estimado (Hadlock 1985: CC, CA e CF)",level:"info",verdict:"Compare com a curva de crescimento para a idade gestacional",rows:[],raw:{pfe:c}};if(null!=a.ig_sem){var u=a.ig_sem+(a.ig_dias||0)/7,p=Math.exp(.578+.332*u-.00354*u*u),g=100*(r=(e=(c-p)/(.127*p))<0?-1:1,i=Math.abs(e)/Math.SQRT2,.5*(1+r*(1-((((1.061405429*(n=1/(1+.3275911*i))-1.453152027)*n+1.421413741)*n-.284496736)*n+.254829592)*n*Math.exp(-i*i))));m.rows.push(["Peso mediano para "+a.ig_sem+"s "+(a.ig_dias||0)+"d (Hadlock 1991)",o(p,0)+" g"],["Percentil estimado",g<1?"&lt; 1":g>99?"&gt; 99":o(g,0)]),m.raw.mediana=p,m.raw.percentil=g,g<10?(m.level="mid",m.verdict="Abaixo do percentil 10: pequeno para a idade gestacional",m.note=g<3?"Abaixo do percentil 3: pelo consenso de Delphi, é restrição de crescimento fetal mesmo sem Doppler alterado.":"Investigue restrição de crescimento (Doppler, líquido amniótico, curva de crescimento)."):g>90?(m.level="mid",m.verdict="Acima do percentil 90: grande para a idade gestacional"):(m.level="low",m.verdict="Entre os percentis 10 e 90: adequado para a idade gestacional")}return m});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},...(typeof r.level==='string'?{level:r.level}:{}),...(typeof r.verdict==='string'?{verdict:r.verdict}:{}),...(Array.isArray(r.rows)?{rows:r.rows}:{}),...(typeof r.note==='string'&&r.note?{note:r.note}:{}),clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
