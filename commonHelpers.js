import{a as S,S as q,i as u}from"./assets/vendor-06b1bbdf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const M=15,h=async(e,r=1)=>{const i="43058085-482a34128d0dce777e17b7853";return(await S.get("https://pixabay.com/api/",{params:{key:i,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:M,page:r}})).data},P=document.querySelector(".gallery");function p(e){const r=e.map(a=>`<li class="gallery-item">
  <a class="gallery-link" href="${a.largeImageURL}">
    <img
            src="${a.webformatURL}"
            alt="${a.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${a.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${a.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${a.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${a.downloads}</li>
     </ul>
  </a>
</li>`).join("");P.insertAdjacentHTML("beforeend",r),new q(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const v=document.getElementById("search-form");document.getElementById("search-input");const d=document.querySelector(".gallery"),f=document.querySelector(".loading"),m=document.querySelector(".btn-load-more"),E=document.querySelector(".gallery-item");let l,n=1,y=0;const $=15;function L(){n>=y?(s(),u.warning({message:"Were sorry, but youve reached the end of search results.",color:"red",position:"topRight"})):w()}function w(){m.classList.remove("hidden")}function s(){m.classList.add("hidden")}function b(){f.classList.add("loader")}function g(){f.classList.remove("loader")}s();m.addEventListener("click",k);async function k(){n+=1,s(),b();try{const e=await h(l,n);p(e.hits)}catch(e){console.error("Error fetching data:",e),s()}O(),L(),g(),w()}v.addEventListener("submit",x);async function x(e){if(e.preventDefault(),d.innerHTML="",n=1,l=e.target.elements.query.value.trim(),l==="")return u.warning({message:"Please try again! Write something.",position:"topRight",color:"red"});try{b();const r=await h(l,n);if(r.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),d.innerHTML="",e.target.reset(),g(),s();return}y=Math.ceil(r.totalHits/$),p(r.hits)}catch(r){console.error("Error fetching data:",r),d.innerHTML="",s()}L(),e.target.reset(),g()}function O(){const e=E.getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
