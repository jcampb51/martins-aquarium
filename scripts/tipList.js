import { database } from './fishData.js';

export const tipList = () => {
    let tipHTML = `
        <ul class="tips">
    `;
    
    for (const tip of database.tips) {
        tipHTML += `
            <div class="fish_tips">
                <h3 class="tip_header">Tips for caring for your ${tip.id}</h3>
                <li class="tip">
                    ${tip.food}<br>
                    For tank mates: ${tip.enemies}<br>
                    The volume of your tank should be ${tip.tankVolume}<br>
                    ${tip.temperature}<br>
                    ${tip.decorations}
                </li>
            </div>
        `;
    }
    
    tipHTML += `
        </ul>
    `;
    
    return tipHTML;
};







// original failed code
// const tipList = () => {
//     tipHTML = '';
//     for (const tip of database.tips) {
//         tipHTML += `
//         <ul class="tips">
//             <div class="fish_tips">
//                 <h3 class="tip_header">Tips for caring for your ${tip.id}</h3>
//                 <li class="tip">
// ${tip.food}
// For tank mates: ${tip.enemies}
// The volume of your tank should be a ${tip.tankVolume}
// ${tip.temperature}
// ${tip.decorations}
//                 </li>
//             </div>
//         </ul>
//         `;
//     }
//     return tipHTML
// };