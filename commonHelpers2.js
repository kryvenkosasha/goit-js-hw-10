(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function l(r,o){return isNaN(r)||o===""?console.error("Введені невалідні значення"):new Promise((i,n)=>{setTimeout(()=>{o==="fulfilled"?i(r):n(r)},r)})}document.querySelector(".form").addEventListener("submit",r=>{r.preventDefault();const o=document.querySelector('[name = "delay"]'),i=document.querySelector('[name = "state"]'),n=o.value,e=i.value;l(n,e).then(t=>{console.log(`✅ Fulfilled promise in ${t}ms`)}).catch(t=>{console.log(`❌ Rejected promise in ${t}ms`)})});
//# sourceMappingURL=commonHelpers2.js.map
