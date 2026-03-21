fetch('menu.json')
.then(response => response.json())
.then(menu => {

    const grid = document.querySelector('.grid');
    const adminGrid = document.querySelector('.gridAdmin')

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
        // grid.innerHTML += card;
    })

if (adminGrid) {
  Object.entries(menu).forEach(([category, items]) => {
    let adminCard = `
      <div class="card">
        <h3>${category}</h3>
        <button>Edit</button>
        <ul>
          ${items.map(item => `
            <li>
              <span>${item.name}</span>
              <span>₦${item.price.toLocaleString()}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    `;
    adminGrid.innerHTML += adminCard;
  });
}else{
    console.log("Admin grid not found. Skipping admin card generation.");
}
})