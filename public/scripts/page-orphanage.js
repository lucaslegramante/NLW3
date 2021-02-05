// opcões de vizualização 
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-23.7549757,-46.6801523], 17)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)


// create icon 
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    Anchor: [170, 2]
})


// create and add marker 
L
.marker([-23.7549757,-46.6801523],{icon})
.addTo(map)



/* image gallery*/

function selectImage(event) {
    const button = event.currentTarget
    console.log(button.children)
    
    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecionar a imagem clicada 
    const image = button.children[0] 
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de imagem
    imageContainer.src = image.src

    // adicionar a classe .active para este botao
    button.classList.add('active');
}