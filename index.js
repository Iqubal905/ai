const dataLoad = () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res => res.json())
    .then(data => dataDisplayed(data.data.tools.slice(0, 6)))
   
}

const dataDisplayed = (technologies) => {
const containerSection = document.getElementById('container')
containerSection.innerHTML = ''
technologies.forEach(technology => {
   // console.log(technology);
 const div = document.createElement("div");
 div.innerHTML = `
 <div class="card  w-full text-black bg-white border border-lime-400 ">
 <figure class="px-10 pt-10">
 <img src="${technology.image}" class="rounded-xl">
 </figure>
 <div class="card-body  text-left">
 <h2 class="card-title">Features</h2>
 <ul>
    <li>1.${technology.features[0]}</li>
    <li>2.${technology.features[1]}</li>
    <li>3.${technology.features[2]}</li>
 </ul>
<hr>
<div class="card-actions justify-between">
     <div>
     <h1>${technology.name}</h1>
    <span> <i class="fa-solid fa-calendar-days"></i> ${technology.published_in}</span>
     </div>
     <label onclick="dataLoadSingleTechnology()" for="my-modal-3"><i  class="fa-solid fa-arrow-right mt-8"></i></label>
     
    </div>

 </div>
 </div>
 `
 containerSection.appendChild(div)
  });

    
}



// show all data

const showAlltechonology = () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res => res.json())
    .then(data => dataDisplayed(data.data.tools))
   
}

// get and show single info of technology in modal

const dataLoadSingleTechnology = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tool/01')
    .then(res => res.json())
    .then(data => displaySingleTechnologyModal(data))
}

const displaySingleTechnologyModal = (tech) => {
  const modalContainer = document.getElementById('modal-info')
  const div = document.createElement("div");
  div.classList.add("modal");
  div.innerHTML = `
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
  `
  modalContainer.appendChild(div)
}






dataLoad()