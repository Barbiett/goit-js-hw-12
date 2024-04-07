import{a as b,S,i as d}from"./assets/vendor-06b1bbdf.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const M=15,m=async(t,a=1)=>{const i="43058085-482a34128d0dce777e17b7853";return(await b.get("https://pixabay.com/api/",{params:{key:i,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:M,page:a}})).data},q=document.querySelector(".gallery");function h(t){const a=t.map(r=>`<li class="gallery-item">
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
</li>`).join("");q.insertAdjacentHTML("beforeend",a),new S(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const P=document.getElementById("search-form");document.getElementById("search-input");const c=document.querySelector(".gallery"),p=document.querySelector(".loading"),u=document.querySelector(".btn-load-more");let n,o=1,f=0;const E=15;function y(){o>=f?(L(),d.warning({message:"This is the last photos from the collection.",color:"red",position:"topRight"})):$()}function $(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}function w(){p.classList.add("loader")}function g(){p.classList.remove("loader")}L();u.addEventListener("click",k);async function k(){o+=1,w();try{const t=await m(n,o);h(t.hits)}catch(t){console.error("Error fetching data:",t)}y(),g()}P.addEventListener("submit",T);async function T(t){if(t.preventDefault(),c.innerHTML="",o=1,n=t.target.elements.query.value.trim(),n==="")return d.warning({message:"Please try again! Write something.",position:"topRight",color:"red"});try{w();const a=await m(n,o);if(a.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),c.innerHTML="",t.target.reset(),g();return}f=Math.ceil(a.totalHits/E),h(a.hits)}catch(a){console.error("Error fetching data:",a),c.innerHTML=""}y(),t.target.reset(),g()}
//# sourceMappingURL=commonHelpers.js.map
