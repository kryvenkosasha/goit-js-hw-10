import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as h}from"./assets/vendor-651d7991.js";const u=document.getElementById("datetime-picker"),o=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),T=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),w=document.querySelector("[data-seconds]"),I={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0],t=new Date;n<t?(alert("Please choose a date in the future"),o.disabled=!0):o.disabled=!1}};h(u,I);let c;function b(){const e=new Date(u.value).getTime(),n=new Date().getTime(),t=e-n;if(t<=0){clearInterval(c),alert("Timer has ended!"),o.disabled=!0;return}d(t),c=setInterval(()=>{const a=new Date().getTime(),r=e-a;if(r<=0){clearInterval(c),alert("Timer has ended!"),o.disabled=!0;return}d(r)},1e3)}function d(e){const{days:n,hours:t,minutes:a,seconds:r}=p(e);y.innerText=s(n),T.innerText=s(t),D.innerText=s(a),w.innerText=s(r)}function s(e){return e<10?`0${e}`:`${e}`}function p(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}o.addEventListener("click",()=>{b(),o.disabled=!0});
//# sourceMappingURL=commonHelpers.js.map