const content = document.querySelector('.content')
const inputSearch = document.querySelector("input[type='search']")
const h1 = document.querySelector('#h1')

let items = []

inputSearch.oninput = () =>{
    content.innerHTML = "";
    
    items
    .filter((item) =>
    item.toLowerCase().includes(inputSearch.value.toLowerCase()))
    .forEach((item) => addHTML(item))
}

function addHTML(item){
    const div = document.createElement("div")
    div.innerHTML = item;
    content.append(div)
}

fetch("https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome")
.then((data) => data.json())
.then((users) =>{
     console.log(users)
    users.dados.forEach((user) =>{
        addHTML(user.nome)
        items.push(user.nome)
    })
})

