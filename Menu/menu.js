import {getMenu} from './script.js';
getMenu().then(menu => {
    const grid = document.querySelector('.grid');
    Object.entries(menu).forEach(([category, items]) =>{
        let card = `
        <div class="card">
          <h3>${category}</h3>
          <ul>
            ${items.map(item => `
              <li>
                <span>${item.name}</span>
                <span>₦${item.price.toLocaleString()}</span>
              </li>
            `).join("")}
          </ul>
        </div>
        `
        grid.innerHTML += card;
    })
});