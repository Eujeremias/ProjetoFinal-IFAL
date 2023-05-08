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

function addHTML(item, url){
     const div = document.createElement("div")
    const a = document.createElement('a')
    a.innerHTML = item 
    a.setAttribute('href', `${url}`)
    div.appendChild(a)
   
    content.appendChild(div)
}

fetch("https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome")
.then((data) => data.json())
.then((users) =>{
     console.log(users)
    users.dados.forEach((user) =>{
        addHTML(user.nome, user.uri)
        items.push(user.nome)
    })
})

