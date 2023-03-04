const dataLoad = () => {
  const url = 'https://openapi.programming-hero.com/api/ai/tools'
  fetch(url)
  .then(res => res.json())
  .then(data => dataDisplayed(data.data.tools.slice(0, 6)))
 
}

const dataDisplayed = (technologies) =>{
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML =''
   
    // display all phones
    technologies.forEach(technology =>{
        const phoneDiv  = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
            <img src="${technology.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"></h5>
                <h4>Features</h4>
                <ul class="a">
                ${technology.features.map(a => {
                  return `<li>${a}</li>`
                  }).join("")}
                  </ul>
                  <hr>
                  <div class="d-flex justify-content-between">
                  <div>
                  
                  <h5>${technology.name}</h5>
                  <span> <i class="fa-solid fa-calendar-days"></i> ${technology.published_in}</span>
                  </div>
                <span onclick="dataLoadSingleTechnology('${technology.id}')" href="#" class="pt-4 mt-1" data-bs-toggle="modal" data-bs-target="#phoneDetailModal"><i  class="fa-solid fa-arrow-right mt-8"></i></span>
                </div>
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    });


    // stop spinner or loader
    toggleSpinner(false);
}

// show all data

const showAlltechonology = () => {
 const showAllButton = document.getElementById('showAllBtn')
 showAllButton.classList.add('d-none')
  const url = 'https://openapi.programming-hero.com/api/ai/tools'
  fetch(url)
  .then(res => res.json())
  .then(data => dataDisplayed(data.data.tools))
 
}




const dataLoadSingleTechnology = (id) =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySingleTechnologyModal(data.data))
}

const displaySingleTechnologyModal = (tech) => {
  console.log(tech);
  const modalContainer = document.getElementById('model-container')
  modalContainer.innerHTML = ''
  const div = document.createElement("div");
  div.classList.add("row");
  div.innerHTML = `
 
  <div class="col-md-6 bgColor p-5">
  <h4>${tech.description}</h4>
  <div class="row">
    <div class="col-md-4 m-0 p-1 ">
    <div class="bg-light p-2 text-center text-success">
    <h6 class=" m-0 p-0">${tech.pricing[0].price}</h6>
    <h6 class=" ">${tech.pricing[0].plan}</h6>
    </div>
    </div>
    <div class="col-md-4 p-1 ">
    <div class="bg-light p-2 text-warning text-center">
    <h6 class=" m-0 p-0">${tech.pricing[1].price}</h6>
    <h6 class=" ">${tech.pricing[1].plan}</h6>
    </div>
    </div>
    <div class="col-md-4 p-1  ">
    <div class="bg-light p-2 text-danger text-center ">
    <h6 class=" m-0 p-0">${tech.pricing[2].price}</h6>
    <h6 class=" ">${tech.pricing[2].plan}</h6>
    </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 ms-auto">
    <div>
    <h4 class="text-black font-bold">Features</h4>
    <ul class="list-disc pl-6">
        ${Object.values(tech.features).map(a => {
          return `<li>${a.feature_name}</li>`
        }).join('')}  
    </ul>
  </div>
    </div>
    <div class="col-md-6 ms-auto">
    <div>
          <h4 class="text-black font-bold">Integrations</h4>
          
          <div class=" pl-6">
          <ul class="list-disc">
           ${tech.integrations.map(a => {
           return `<li>${a}</li>`
           }).join("")}
            
          </ul></div>
        </div>
    </div>
  </div>
</div>
<div class="col-md-6 position-relative">
<div class="card" style="width: 18rem;">
<img src="${tech.image_link[0]}" class="card-img-top" alt="...">
<div class="card-body">
<h2 class="card-title font-bold text-black">${tech.input_output_examples[0].input}</h2>
<p class="text-inherit">${tech.input_output_examples[0].output}</p>
</div>
</div> 
<h6 class=" position-absolute top-0 start-50 bg-danger text-light py-1 rounded">${tech.accuracy.score}%<span>accurancy</span></h6>
</div>
  `

  modalContainer.appendChild(div)
  
}



const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}


dataLoad();