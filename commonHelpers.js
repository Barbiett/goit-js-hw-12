import{a as u,S as m,i as l}from"./assets/vendor-06b1bbdf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();let p=1,d=15;const f=async o=>{const s="43058085-482a34128d0dce777e17b7853";return(await u.get("https://pixabay.com/api/",{params:{key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:p}})).data},h=document.querySelector(".gallery");function y(o){const s=o.map(r=>`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
            src="${r.webformatURL}"
            alt="${r.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${r.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${r.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${r.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${r.downloads}</li>
     </ul>
  </a>
</li>`).join("");h.insertAdjacentHTML("beforeend",s),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const L=document.getElementById("search-form"),c=document.getElementById("search-input"),i=document.querySelector(".gallery"),g=document.querySelector(".loading");L.addEventListener("submit",b);function b(o){o.preventDefault();const s=c.value.trim();if(s==="")return l.warning({message:"Please try again! Write something.",position:"topRight",color:"red"});g.classList.add("loader"),f(s).then(a=>{if(a.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),i.innerHTML="";return}i.innerHTML="",y(a.hits)}).catch(a=>{console.error("Error fetching data:",a),i.innerHTML=""}).finally(()=>{g.classList.remove("loader")}),c.value=""}
//# sourceMappingURL=commonHelpers.js.map
