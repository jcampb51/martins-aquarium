import { database } from "./fishData.js"

// const holies = []
// const soldiers = []
// const normies = []

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""
    const holies = []
    for (const chosen of database.fish) {
        if (chosen.length % 3 === 0) {
            holies.push(chosen)
        }
    } 
    for (const fish of holies) {
        holyFish += `
        <article class="fish">
            <img src="${fish.image}" alt="${fish.name}" class="fish_picture">
                <div class="fish_details">
                    <h2 class="fish_name">${fish.name}</h2>
                    <p class="fish_info">"${fish.name} is a chosen of Jutz'kar! All hail ${fish.name}!"</p>
                </div>
                </article>
        `
        
    }
    

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let fightingFish = ""
    const soldiers = []
    for (const elect of database.fish) {
        if (elect.length % 5 === 0 && elect.length % 3 !== 0 ) {
            soldiers.push(elect)
        }
        
    }
    for (const fish of soldiers) {
        fightingFish += `
        <article class="fish">
            <img src="${fish.image}" alt="${fish.name}" class="fish_picture">
                <div class="fish_details">
                    <h2 class="fish_name">${fish.name}</h2>
                    <p class="fish_info">"${fish.name} is a soldier of Jutz'kar! Onward to glorious battle, ${fish.name}!"</p>
                </div>
                </article>
        `
    }
    return fightingFish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let normalFish = ""
    const normies = []
    for (const normal of database.fish) {
        if (normal.length % 3 !== 0 && normal.length %5 !== 0 ) {
            normies.push(normal)
        }
        
    }
    for (const fish of normies) {
        normalFish += `
        <article class="fish">
            <img src="${fish.image}" alt="${fish.name}" class="fish_picture">
                <div class="fish_details">
                    <h2 class="fish_name">${fish.name}</h2>
                    <p class="fish_info">"${fish.name} is but a lowly commoner worthy of no further comment."</p>
                </div>
                </article>
        `
    }
    return normalFish
}