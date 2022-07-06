const stock = [
    {
        "id": 1,
        "nombre": 'Buzo Red Bull',
        "precio": 10000,
        "img": "Fotos/buzorb.jpg"
    },
    {
        "id": 2,
        "nombre": 'Gorra Red Bull',
        "precio": 3000,
        "img": "Fotos/gorra.jpg"

    },
    {
        "id": 3,
        "nombre": 'Taza Red Bull',
        "precio": 2000,
        "img":"Fotos/tazarb.jpg"
    },
    {
        "id": 4,
        "nombre": 'Botella Red Bull',
        "precio": 2500,
        "img":"Fotos/botellarb.jpg"
    },
    {
        "id": 5,
        "nombre": 'Campera Ferrari',
        "precio": 15000,
        "img":"Fotos/camperaferrari.jpg"
    },
    {
        "id": 6,
        "nombre": 'Chomba Ferrari',
        "precio": 8500,
        "img": "Fotos/chombaferrari.jpg"
    },
    {
        "id": 7,
        "nombre": 'Gorra Ferrari',
        "precio": 2800,
        "img": "Fotos/gorraferrari.jpg"
    },
    {
        "id": 8,
        "nombre": 'Mochila Ferrari',
        "precio": 4500,
        "img": "Fotos/mochilaferrari.jpg"
    },
    {
        "id": 9,
        "nombre": 'Canguro Mercedes Benz',
        "precio": 12000,
        "img": "Fotos/canguromb.jpg"
    },
    {
        "id": 10,
        "nombre": 'Remera Mercedes Benz',
        "precio": 6000,
        "img": "Fotos/remeramb.jpg"
    },
    {
        "id": 11,
        "nombre": 'Billetera Mercedes Benz',
        "precio": 2500,
        "img":"Fotos/billeteramb.jpg"
    },{
        "id": 12,
        "nombre": 'Gorra Mercedes Benz',
        "precio": 3000,
        "img": "Fotos/gorramb.jpg"
    }
];

let carrito

let total= 0


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










    












