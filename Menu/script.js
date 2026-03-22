export async function getMenu(){
  const response = await fetch('menu.json')
  if(!response.ok){
    throw new Error('failed to fetch JSON');
    const data = await response.json();
    return data;
  }
}





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
})