const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.gNKDmbkK-7il0v-15_8XXQHaHa%3Fpid%3DApi&f=1&ipt=9d8609feb522d9edc8b7a3c1cc2c26f38c41d53373b729c35b3d9eae0636a75c&ipo=images",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_773526-MLA96525627109_102025-O.webp&f=1&nofb=1&ipt=0be7e6f1007fc858499738d60ad144661e8c3ea3f12f6710790c17c315be9b3f&ipo=images",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dandosports.com%2Fstorage%2Fphotos%2Fshares%2Ftusah%2Ftusah-premium-sparring-black-v-neck-dobok.png&f=1&nofb=1&ipt=bf6f0b800045416a2d277fdb507e8cfe78abeaa0e9b5ebc78233ecd5543fbd6b&ipo=images",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_684301-MLA93424010521_092025-O.webp&f=1&nofb=1&ipt=46aa610eb7b5eaf7be9d54f6cbf94dbc26430cdf862d099b0fbe1fd3f6239004&ipo=images",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_663292-MLA75837573450_042024-O.webp&f=1&nofb=1&ipt=635f10d55fbd148d8f350ddd777ca3bfaf303b2bdff4c6a6791b34c7a297a86c&ipo=images",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_773526-MLA96525627109_102025-O.webp&f=1&nofb=1&ipt=0be7e6f1007fc858499738d60ad144661e8c3ea3f12f6710790c17c315be9b3f&ipo=images",
  },
];

let mostrarModal = (id) => {
  document.getElementById("titulo-producto").innerText = productos[id].nombre;
  document.getElementById("descr-producto").innerText = productos[id].description;
  document.getElementById("modal").style.display = "block";
};

let cerrarModal = () => {
  document.getElementById("modal").style.display = "none";
};

let cargarProductos = (prod = productos) => {
  let contenido = "";

  prod.forEach((elemento, id) => {
    contenido += `<div>
        <img
          src="${elemento.imagen}"
          alt="${elemento.nombre}"
        />
        <h3>${elemento.nombre}</h3>
        <p>${formatPrice(elemento.precio)}</p>
        <button type="button" onclick="mostrarModal(${id})">
          Ver Detalle del Producto
        </button>
        <button type="button" onclick="agregarAlcarrito(${id})">
          Agregar al Carrito
        </button>
      </div>`

    document.getElementById("mostrar-catalogo").innerHTML = contenido;

  })

};

let agregarAlcarrito = (id) => {
  let carritoList = localStorage.getItem("carrito");

  if(carritoList == null){
    carritoList = [];
  } else {
    carritoList = JSON.parse(carritoList);
  }

  carritoList.push(id);

  console.log(carritoList);

  localStorage.setItem("carrito", JSON.stringify(carritoList));

  contarProductos();
};

let cargarCarrito = () => {
  let carritoList = localStorage.getItem("carrito");
  let contenido = "";

  if(carritoList == null){
    contenido = "<div>Su carrito está vacío.</div>"
  } else {
    carritoList = JSON.parse(carritoList);

    carritoList.forEach((num, id) => {
      contenido += `<div>
        <h3>${productos[num].nombre}</h3>
        <p>${formatPrice(productos[num].precio)}</p>
        <button type="button" onclick="eliminarProducto(${id})">Eliminar Producto</button>
        </div>`;
    });
    contenido += `<button type="button" onClick="vaciarCarrito()">Vaciar Carrito</button>`;
  }
  
  document.getElementById("mostrar-carrito").innerHTML = contenido;
};

let vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  contarProductos();
  window.location.reload();
};

let eliminarProducto = (id) => {
  let carritoList = localStorage.getItem("carrito");
  carritoList = JSON.parse(carritoList);
  carritoList.splice(id, 1);

  if(carritoList?.length > 0){
    localStorage.setItem("carrito", JSON.stringify(carritoList));
  } else {
    localStorage.removeItem("carrito");
  }

  contarProductos();
  window.location.reload();
};

let filtrarProductos = () => {
  let searchWord = document.getElementById("search").value;
  let min = document.getElementById("minimo").value;
  let max = document.getElementById("maximo").value;
  let marca = document.getElementById("marca").value;
  let prot = document.getElementById("protectores").checked;
  let entr = document.getElementById("entrenamiento").checked;
  let dob = document.getElementById("dobok").checked;

  let newLista = productos;

  if(searchWord){
    newLista = newLista.filter((prod) => 
      prod.nombre.toLowerCase().includes(searchWord.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchWord.toLowerCase())
    );
  }

  if(min){
    newLista = newLista.filter((prod) => prod.precio >= min);
  }

  if(max){
    newLista = newLista.filter((prod) => prod.precio <= max);
  }

  if(marca !== "Todas") {
    newLista = newLista.filter((prod) => prod.marca === marca);
  }

  let category = [];

  prot ? category.push("Protectores") : "";
  entr ? category.push("Entrenamiento") : "";
  dob ? category.push("Dobok") : "";

  if (category.length > 0) {
    newLista = newLista.filter((prod) => category.includes(prod.categoria));
  }


  cargarProductos(newLista);
};

let formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    currency: "ARS",
    style: "currency"
  }).format(price);
};

let contarProductos = () => {
  const getCart = JSON.parse(localStorage.getItem("carrito"));

  if(getCart != null){
    document.getElementById("cant-prod").innerText = getCart.length;
  }

};