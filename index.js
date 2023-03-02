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
    console.log(technology);
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
     <i class="fa-solid fa-arrow-right mt-8"></i>
    </div>

 </div>
 </div>
 `
 containerSection.appendChild(div)
  });

    
}

dataLoad()

// show all data

const showAlltechonology = () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res => res.json())
    .then(data => dataDisplayed(data.data.tools))
   
}