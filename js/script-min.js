var link=document.querySelector(".feedback-button"),popup=document.querySelector(".modal-login"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),login=popup.querySelector("[name=login]"),email=popup.querySelector("[name=email]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage?(login.value=storage,email.focus()):login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){login.value&&email.value?isStorageSupport&&localStorage.setItem("login",login.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))}),ymaps.ready(function(){var e=new ymaps.Map("map",{center:[59.939647,30.328728],zoom:16,controls:["zoomControl"]},{searchControlProvider:"yandex#search"}),o=new ymaps.Placemark([59.938631,30.323055],{hintContent:"Glacy здесь!",balloonContent:"Большая Конюшенная ул., 19/8, Санкт-Петербург"},{iconLayout:"default#image",iconImageHref:"img/pointer.svg",iconImageSize:[80,140],iconImageOffset:[-40,-140]});e.geoObjects.add(o)});
