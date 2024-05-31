import { database } from './fishData.js';

 // Generate an HTML representation of each fish

export const fishList = () => {
   
    let fishHTML = '';
    
    for (const fish of database.fish) {
        fishHTML += `
            <article class="fish">
            <img src="${fish.image}" alt="${fish.name}" class="fish_picture">
                <div class="fish_details">
                    <h2 class="fish_name">${fish.name}</h2>
                    <p class="fish_info">"${fish.name} is a ${fish.species} that is approximately ${fish.length} inches long. They are a(n) ${fish.diet} that can be found in the ${fish.location}."</p>
                </div>
                </article>
        
        `;
        
    }
    return fishHTML
};

// 
// Some code I tried originally

// export const renderFishToDOM = (fishHTML) => {
//     const fishList = document.getElementById('fishList');
 
//     if (fishList) {
//         fishList.innerHTML = fishHTML;
//     } else {
//         console.error('Could not find element with id "fishList"');
//     }
//  };

{/* <div class="fish_details">
<h2 class="fish_name">${fish.name}</h2>
<h3 class="fish_species">${fish.species}</h3>
</div> */}

// export const renderFishToDOM = (fishHTML) => {
    //     const fishList = document.getElementById('fishList')
    //     fishList.innerHTML = fishHTML
    // }