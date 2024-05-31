// import { fishList } from './fishList.js'
import { renderFishToDOM } from './fishRender.js';
import { tipList } from './tipList.js'
import { locationList } from './locationList.js';
import { mostHolyFish, soldierFish, regularFish } from './holyFish.js';
// import { locationList } from './locationList.js'

// Generate the fish list

// const fishHTML = fishList();

const holyFish = mostHolyFish()
const fightingFish = soldierFish()
const normalFish = regularFish()

const renderHolyToDom = (holyFish,fightingFish,normalFish) => {
    const fishList = document.getElementById('fishList');
    fishList.innerHTML = `${holyFish}${fightingFish}${normalFish}`
}

// renderFishToDOM(fishHTML);
renderHolyToDom(holyFish,fightingFish,normalFish)
// Generate the care tips

const tipHTML = tipList();

const renderTipsToDOM = (tipHTML) => {
    const tipList = document.getElementById('tipList');
 
    if (tipList) {
        tipList.innerHTML = tipHTML;
    } else {
        console.error('Could not find element with id "tipList"');
    }
 };

 renderTipsToDOM(tipHTML);

// Generate the location list

const locationHTML = locationList();

// Render each HTML string to the correct DOM element
const renderLocToDom = (locationHTML) => {
    const locationList = document.getElementById('locationList');
    locationList.innerHTML = locationHTML
}

renderLocToDom(locationHTML)


// Old stuff
// document.getElementById("fishList");
// fishList(fishHTML)

// const renderFishToDOM = (fishHTML) => {
//     const fishList = document.getElementById('fishList');
 
//     if (fishList) {
//         fishList.innerHTML = fishHTML;
//     } else {
//         console.error('Could not find element with id "fishList"');
//     }
//  };