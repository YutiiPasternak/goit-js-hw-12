import{a as g,S as b,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const L="49511859-e69d0a4b83e671b1fc0acb89e",w="https://pixabay.com/api/";async function p(e,t=1,i=15){try{return(await g.get(w,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:i}})).data}catch(n){throw console.error("Ошибка при завантаженнi зображення",n),n}}const f=document.querySelector(".gallery"),v=document.querySelector("#load-more"),y=document.querySelector("#loader");let E=new b(".gallery a",{captionData:"alt",captionDelay:250});function S(e){return e.map(t=>`
                <li class="gallery-item">
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
            </a>
            <div class="info">
                <p><b>Likes:</b> ${t.likes}</p>
                <p><b>Views:</b> ${t.views}</p>
                <p><b>Comments:</b> ${t.comments}</p>
                <p><b>Downloads:</b> ${t.downloads}</p>
            </div>
        </li>`).join("")}function h(e){if(!e||e.length===0){a.warning({title:"Oops",message:"No images found",position:"topRight"});return}f.insertAdjacentHTML("beforeend",S(e)),E.refresh()}function q(){f.innerHTML=""}function u(e){v.style.display=e?"block":"none"}function R(){const{height:e}=f.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}function m(){y.style.display="block"}function $(){y.style.display="none"}const M=document.querySelector(".form"),O=document.querySelector("#search-input"),B=document.querySelector("#load-more");let s=1,l="",d=0;M.addEventListener("submit",async e=>{if(e.preventDefault(),l=O.value.trim(),!l){a.error({title:"Error",message:"Enter a search query",position:"topRight"});return}q(),s=1,u(!1),m();try{const{hits:t,totalHits:i}=await p(l,s);d=i,h(t),t.length<d&&u(!0)}catch{a.error({title:"Error",message:"Failed to fetch images. Try again.",position:"topRight"})}finally{}});B.addEventListener("click",async()=>{s++,m();try{const{hits:e}=await p(l,s);h(e),R(),s*15>=d&&(u(!1),a.info({title:"End",message:"We're sorry, but you've reached the end of search results",position:"topRight"}))}catch{a.error({title:"Error",message:"Failed to fetch more images.",position:"topRight"})}finally{$()}});
//# sourceMappingURL=index.js.map
