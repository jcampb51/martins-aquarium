import { database } from "./fishData.js"

export const locationList = () => {
    let locationHTML = "";
    for (const local of database.locations) {
        locationHTML += `
        <article class="locations">
            <section class="location">
                <h2>${local.name}</h2>
                <p>${local.name} is ${local.description} and can be found in ${local.region} </p>
            </section>

        </article>`;
    }
    return locationHTML
}