"use strict";

const newForm = document.querySelector('.js-new-form');

newForm.classList.remove("collapsed");


const data=document.querySelector (".data");
//newData.classList.add("js-list");

const jsList=document.querySelector(".js-list");

const kittenImage1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenImage2 = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenImage3 = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";

const kittenName1 = "Anastacio";
const kittenName2 = "Fiona";
const kittenName3 = "Cielo";
const kittenDesc1= `Risueño, juguetón, le guta estar tranquilo y que nadie le
moleste. Es una maravilla acariciarle!`;
const kittenDesc2= `Risueño, juguetón, le guta estar tranquilo y que nadie le
moleste. Es una maravilla acariciarle!`;
const kittenDesc3= `Risueño, juguetón, le guta estar tranquilo y que nadie le
moleste. Es una maravilla acariciarle!`;

const kittenRace1="British Shorthair";
const kittenRace2="British Shorthair";
const kittenRace3="British Shorthair";

const kitten1= `<li class="card1 card">
<article>
  <img
    class="card_img"
    src= ${kittenImage1}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">${kittenRace1}</h4>
  <p class="card_description">
  ${kittenDesc1}
  </p>
</article>
</li>`;
const kitten2= `<li class="card2 card">
<img
  class="card_img"
  src=${kittenImage2}
  alt="gatito"
/>
<h3 class="card_title">${kittenName2}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description">
${kittenDesc2}
</p>
</li>`;
const kitten3= `<li class="card3 card">
<img
  class="card_img"
  src=${kittenImage3}
  alt="gatito"
/>
<h3 class="card_title">${kittenName3}</h3>
<h4 class="card_race">${kittenRace3}</h4>
<p class="card_description">
${kittenDesc3}
</p>
</li>`;

jsList.innerHTML = kitten1 + kitten2 + kitten3;

/*const input = document.querySelector(".input");
input.classList.add("js_in_search_desc");*/



const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'guta';
const descrSearchText = input_search_desc.value;


const kitten1li = document.querySelector(".card1");
const kitten2li = document.querySelector(".card2");
const kitten3li = document.querySelector(".card3");

//kitten1
if( kittenDesc1.includes(descrSearchText) ) {
  console.log("aparece mi descripción");
}
else { 
  kitten1li.classList.add("collapsed");
}

//kitten2
if( kittenDesc2.includes(descrSearchText) ) {
  console.log("aparece mi descripción");
}
else { 
  kitten2li.classList.add("collapsed");
}

//kitten3
if( kittenDesc3.includes(descrSearchText) ) {
  console.log("aparece mi descripción");
}
else { 
  kitten3li.classList.add("collapsed");
}



//colapsed formulario

const item = document.querySelector('.item');
item.addEventListener('click',()=>{
  newForm.classList.toggle("collapsed");
});


//campos obligatorios
const btn =document.querySelector('.js-btn-add');
item.addEventListener('click',(event)=>{
  event.preventDefault();
  console.log("he pulsado añadir");
  
  /*const inputDesc = document.querySelector(".js-input-desc");
  const inputPhoto = document.querySelector(".js-input-photo");
  const inputName = document.querySelector(".js-input-name");
  const labelMesageError = document.querySelector(".js-label-error");


  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === "" && valuePhoto === "" && valueName === "") {
    console.log("da error");
  } else {
    console.log("ya lo hemos rellenado");
    //completa el código
  }*/

});