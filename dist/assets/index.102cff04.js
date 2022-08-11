(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();class i{constructor(t,n,s){this.name=t,this.price=n,this.year=s}}class d{addProduct(t){const n=document.createElement("div");n.classList.add("card"),n.innerHTML=`
            <div>
                <strong class="strong">Product</strong>: <span class="mr-6" >${t.name}</span>
                <strong class="strong">Price</strong>: <span class="mr-6" >${t.price}$</span>
                <strong class="strong">Year</strong>: <span class="mr-6" >${t.year}</span>    
            </div>

            <a name="delete"  class="px-3 py-4 font-medium text-white bg-red-700 hover:bg-red-500 transition duration-200  rounded-lg" href="#"> Delete </a>
        `,document.getElementById("product-list").appendChild(n)}deleteProduct(t){t.name==="delete"&&t.parentElement.remove()}resetForm(){document.getElementById("product-form").reset()}}document.getElementById("product-form").addEventListener("submit",o=>{const t=document.getElementById("name").value,n=document.getElementById("price").value,s=document.getElementById("year").value,e=new d,r=new i(t,n,s);e.addProduct(r),e.resetForm(),o.preventDefault()});document.getElementById("product-list").addEventListener("click",o=>{new d().deleteProduct(o.target)});