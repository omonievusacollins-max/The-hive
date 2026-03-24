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

function order() {
  const orderButton = document.getElementById('orderBtn');
  orderButton.addEventListener('click', function () {
    const url = "https://wa.link/qr0d6l"; // Generated with tool wa.link
    alert(url)
    window.location.href = url; // Generated with tool wa.link
  });
  
}

order();

