fetch('menu.json')
.then(response => response.json())
.then(data => {
    for(category in data){
        data[category].forEach(element=>{
            console.log(element)
        })
    }
})