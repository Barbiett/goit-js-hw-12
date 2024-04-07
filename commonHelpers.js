import{a as L,S as b,i as w}from"./assets/vendor-06b1bbdf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const S=15,u=async(r,e=1)=>{const n="43058085-482a34128d0dce777e17b7853";return(await L.get("https://pixabay.com/api/",{params:{key:n,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:S,page:e}})).data},M=document.querySelector(".gallery");function g(r){const e=r.map(a=>`<li class="gallery-item">
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
</li>`).join("");M.insertAdjacentHTML("beforeend",e),new b(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const q=document.getElementById("search-form");document.getElementById("search-input");const d=document.querySelector(".gallery"),m=document.querySelector(".loading"),c=document.querySelector(".btn-load-more");let i,o=1,p=0;const v=15;function f(){o>=p?h():E()}function E(){c.classList.remove("hidden")}function h(){c.classList.add("hidden")}function y(){m.classList.remove("hidden")}function P(){m.classList.add("hidden")}h();c.addEventListener("click",$);async function $(r){o+=1,y();try{const e=await u(i,o);g(e.hits)}catch(e){console.error("Error fetching data:",e)}f(),P()}q.addEventListener("submit",k);async function k(r){if(r.preventDefault(),d.innerHTML="",o=1,i=r.target.elements.query.value.trim(),i==="")return w.warning({message:"Please try again! Write something.",position:"topRight",color:"red"});try{y();const e=await u(i,o);p=Math.ceil(e.totalResults/v),g(e.hits)}catch(e){console.error("Error fetching data:",e),d.innerHTML=""}f(),r.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
