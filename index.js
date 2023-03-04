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
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="dataLoadSingleTechnology('${technology.id}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
                
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
 
  const url = 'https://openapi.programming-hero.com/api/ai/tools'
  fetch(url)
  .then(res => res.json())
  .then(data => dataDisplayed(data.data.tools))
 
}


// const processSearch = () =>{
//     toggleSpinner(true);
//     const searchField = document.getElementById('search-field');
//     const searchText = searchField.value;
//     loadPhones(searchText);
// }


//get and show single info of technology in modal

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
    <div class="col-md-4 ms-auto">
    <div class="bg-light py-3 text-success">
    <h6 class=" m-0 p-0">${tech.pricing[0].price}</h6>
    <h6 class=" ">${tech.pricing[0].plan}</h6>
    </div>
    </div>
    <div class="col-md-4 ms-auto">
    <div class="bg-light py-3 text-warning">
    <h6 class=" m-0 p-0">${tech.pricing[1].price}</h6>
    <h6 class=" ">${tech.pricing[1].plan}</h6>
    </div>
    </div>
    <div class="col-md-4 ms-auto ">
    <div class="bg-light py-3 text-danger ">
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
<div class="col-md-6 ">
<div class="card" style="width: 18rem;">
<img src="${tech.image_link[0]}" class="card-img-top" alt="...">
<div class="card-body">
<h2 class="card-title font-bold text-black">${tech.input_output_examples[0].input}</h2>
<p class="text-inherit">${tech.input_output_examples[0].output}</p>
</div>
</div> 
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








// // not the best way to load show All
// document.getElementById('btn-show-all').addEventListener('click', function(){
//     processSearch();
// })







// const loadPhoneDetails = async id =>{
//     const url =`https://openapi.programming-hero.com/api/phone/${id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayPhoneDetails(data.data);
// }




// const displayPhoneDetails = phone =>{
//     console.log(phone);
//     const modalTitle = document.getElementById('phoneDetailModalLabel');
//     modalTitle.innerText = phone.name;
//     const phoneDetails = document.getElementById('phone-details');
//     console.log(phone.mainFeatures.sensors[0]);
//     phoneDetails.innerHTML = `
//         <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>
//         <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage Information '}</p>
//         <p>Others: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth Information'}</p>
//         <p>Sensor: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'no sensor'}</p>
//     `
// }

dataLoad();