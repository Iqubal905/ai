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
  <div class="relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    

    <section class="flex items-center justify-center  ">
  <div class="grid lg:grid-cols-2 max-w-4xl gap-4 bg-white p-16  rounded-md">
    <div class="bg-red-50 border border-red-200 p-4 rounded-lg">
      <h2 class="font-bold text-xl text-black">${tech.data.description}</h2>
      <div class="grid md:grid-cols-3 gap-4 mt-4 font-bold">
        <div class="bg-white p-4 text-green-500 rounded font-bold">
        <h2 class="text-center ">${tech.data.pricing[0].price}</h2>
        <h2 class="text-center ">${tech.data.pricing[0].plan}</h2>
       </div>
       <div class="bg-white p-4 text-green-500 rounded font-bold">
        <h2 class="text-center ">${tech.data.pricing[1].price}</h2>
        <h2 class="text-center ">${tech.data.pricing[1].plan}</h2>
       </div>
       <div class="bg-white p-4 text-green-500 rounded font-bold">
        <h2 class="text-center ">${tech.data.pricing[2].price}</h2>
        <h2 class="text-center ">${tech.data.pricing[2].plan}</h2>
       </div>
       
        
      </div>
      <div class="grid md:grid-cols-2 gap-4 ">
        <div>
          <h2 class="text-black font-bold">Features</h2>
          <ul class="list-disc pl-6">
            <li>${tech.data.features.feature_name}</li>
            
          </ul>
        </div>
        <div>
          <h2 class="text-black font-bold">Integrations</h2>
          <div class=" pl-6">
          <ul class="list-disc">
            <li>nura</li>
            <li>nura</li>
            <li>nura</li>
          </ul></div>
        </div>
         
      </div>
    </div>
    
      <div class="card bg-white border relative">
        <figure class="px-10 pt-10">
          <img src="${tech.data.image_link}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold text-black">Shoes!</h2>
          <p class="text-inherit">If a dog chews shoes whose shoes does he choose?</p>
         
        </div>
       <h2 class="bg-red-400 w-32 p-1 rounded-md pl-2 text-white font-bold absolute top-0 right-0">20% accurancy</h2>
 
      </div>
   
  </div>
</section>
 </div>
  `
  modalContainer.appendChild(div)
}






dataLoad()