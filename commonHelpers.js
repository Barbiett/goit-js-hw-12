import{a as y,S as L,i as b}from"./assets/vendor-06b1bbdf.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const w=15,d=async(t,a=1)=>{const n="43058085-482a34128d0dce777e17b7853";return(await y.get("https://pixabay.com/api/",{params:{key:n,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:w,page:a}})).data},S=document.querySelector(".gallery");function u(t){const a=t.map(s=>`<li class="gallery-item">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img
            src="${s.webformatURL}"
            alt="${s.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${s.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${s.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${s.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${s.downloads}</li>
     </ul>
  </a>
</li>`).join("");S.insertAdjacentHTML("beforeend",a),new L(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const q=document.getElementById("search-form");document.getElementById("search-input");const E=document.querySelector(".gallery"),g=document.querySelector(".loading"),c=document.querySelector(".btn-load-more");let i,o=1,m=0;const M=15;c.addEventListener("click",P);async function P(){o+=1,f();try{const t=await d(i,o);u(t)}catch(t){console.error("Error fetching data:",t)}p(),h()}function p(){o>=m?k():$()}function $(){c.classList.remove("hidden")}function k(){c.classList.add("hidden")}function f(){g.classList.remove("hidden")}function h(){g.classList.add("hidden")}q.addEventListener("submit",v);async function v(t){if(t.preventDefault(),o=1,i=t.target.elements.query.value.trim(),i==="")return b.warning({message:"Please try again! Write something.",position:"topRight",color:"red"});try{f();const a=await d(i,o);m=Math.ceil(a.totalResults/M),u(a.articles)}catch(a){console.error("Error fetching data:",a),E.innerHTML=""}h(),p(),t.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
