import{a as b,S,i as u}from"./assets/vendor-06b1bbdf.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const M=15,g=async(t,a=1)=>{const n="43058085-482a34128d0dce777e17b7853";return(await b.get("https://pixabay.com/api/",{params:{key:n,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:M,page:a}})).data},q=document.querySelector(".gallery");function m(t){const a=t.map(s=>`<li class="gallery-item">
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
</li>`).join("");q.insertAdjacentHTML("beforeend",a),new S(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const E=document.getElementById("search-form");document.getElementById("search-input");const d=document.querySelector(".gallery"),p=document.querySelector(".loading"),c=document.querySelector(".btn-load-more");let i,r=1,f=0;const P=15;function h(){r>=f?(y(),u.warning({message:"This is the last photos from the collection.",color:"red",position:"topRight"})):$()}function $(){c.classList.remove("hidden")}function y(){c.classList.add("hidden")}function L(){p.classList.add("loader")}function w(){p.classList.remove("loader")}y();c.addEventListener("click",k);async function k(){r+=1,L();try{const t=await g(i,r);m(t.hits)}catch(t){console.error("Error fetching data:",t)}h(),w()}E.addEventListener("submit",v);async function v(t){if(t.preventDefault(),d.innerHTML="",r=1,i=t.target.elements.query.value.trim(),i==="")return u.warning({message:"Please try again! Write something.",position:"topRight",color:"red"});try{L();const a=await g(i,r);f=Math.ceil(a.totalHits/P),m(a.hits)}catch(a){console.error("Error fetching data:",a),d.innerHTML=""}h(),t.target.reset(),w()}
//# sourceMappingURL=commonHelpers.js.map
