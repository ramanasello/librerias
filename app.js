

let carrito

let total= 0

let stock= []


const carritoEnLS=JSON.parse (localStorage.getItem('carrito'))


function renderizarProductos(){
    let tienda= document.getElementById("flex-cards")

    stock.forEach((e) => {
        console.log(e)
    });    
}



const containerProducts=document.querySelector(".productContainer")

const listaProductos=document.querySelector(".listadoProductos")

const sumaTotal= document.getElementById("total")

const btnVaciar= document.getElementById("boton-vaciar")
btnVaciar.addEventListener("click", () => {
    carrito.length=0
    localStorage.setItem("carrito",JSON.stringify(carrito))
    renderCarrito()
    renderTotal()
})

const butVaciar=document.getElementById("boton-vaciar")
butVaciar.addEventListener("click", () => {
    Swal.fire({
        title:"Estas seguro que desea vaciar el carrito?",
        showDenyButton:true,
        showCancelButton:true,
        confirmButtonText:"Si",
        denyButtonText:"No",
    }).then((result) =>{
        if (result.isConfirmed) {
        Swal.fire("Vaciado","", "con exito")
    } else if (result.isDenied) {
        Swal.fire("los cambios no fueron guardados"," ", "info")
    }    
})
})

fetch('./stock.json')
    .then((resp) => resp.json())
    .then((data) => {
        stock = data
    
  

        stock.forEach((producto) => {
            const div = document.createElement('div')
            div.classList.add('flexCards')

            div.innerHTML = `
                    <div id="card${producto.id}">
                    <img src=${producto.img} alt="">
                    <p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" id="btn${producto.id}">Comprar</button>
                    </div>
                `

            containerProducts.append(div)
    })

})    

const agregarAlCarrito = (id) => {
    const item = stock.find( (producto) => producto.id === id)
    carrito.push(item)



    localStorage.setItem("carrito",JSON.stringify(carrito))

    renderCarrito()
    
    renderTotal()
}
const renderCarrito = () => {
    listaProductos.innerHTML = ''

    carrito.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                    <p>${item.nombre}</p>
                    <p>Precio: $${item.precio}</p>
                    `
        
        listaProductos.append(div)
    })
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio
    })

    sumaTotal.innerText = total
}

if (carritoEnLS) {
    carrito = carritoEnLS

    renderCarrito()
    renderTotal()
} else {
    carrito = []
}

Swal.fire("Bienvenidos a la Pagina Oficial de la F1")










    












