import{a as b,S as w,i as u}from"./assets/vendor-06b1bbdf.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const S=15,g=async(t,a=1)=>{const n="43058085-482a34128d0dce777e17b7853";return(await b.get("https://pixabay.com/api/",{params:{key:n,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:S,page:a}})).data},M=document.querySelector(".gallery");function m(t){const a=t.map(r=>`<li class="gallery-item">
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
</li>`).join("");M.insertAdjacentHTML("beforeend",a),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const q=document.getElementById("search-form");document.getElementById("search-input");const c=document.querySelector(".gallery"),h=document.querySelector(".loading"),d=document.querySelector(".btn-load-more");let i,o=1,p=0;const P=15;function f(){o>=p?y():E()}function E(){d.classList.remove("hidden")}function y(){d.classList.add("hidden")}function L(){h.classList.remove("hidden")}function $(){h.classList.add("hidden")}y();d.addEventListener("click",k);async function k(){o+=1,L();try{const t=await g(i,o);m(t.hits)}catch(t){console.error("Error fetching data:",t)}f(),$()}q.addEventListener("submit",v);async function v(t){if(t.preventDefault(),c.innerHTML="",o=1,i=t.target.elements.query.value.trim(),i==="")return u.warning({message:"Please try again! Write something.",position:"topRight",color:"red"});try{L();const a=await g(i,o);p=Math.ceil(a.totalHits/P),m(a.hits)}catch(a){console.error("Error fetching data:",a),c.innerHTML=""}if(data.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),c.innerHTML="";return}f(),t.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
