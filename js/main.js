"use strict";

const newForm = document.querySelector('.new-form');

/* newForm.classList.remove("collapsed"); */


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

const kitten1= `<li class="card">
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
const kitten2= `<li class="card">
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
const kitten3= `<li class="card">
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

 


