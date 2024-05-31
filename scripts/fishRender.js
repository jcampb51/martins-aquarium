export const renderFishToDOM = (fishHTML) => {
    const fishList = document.getElementById('fishList');
 
    if (fishList) {
        fishList.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "fishList"');
    }
 };