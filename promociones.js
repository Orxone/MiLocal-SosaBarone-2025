const CATALOGO = {
    //ACOLCHADOS
    
        //KING
        "acolchado_king_jacquard_flannel": { nombre: "Acolchado King Jacquard Flannel con Corderito", precio: 284990, img: "images/Acolchados/Acolchado King Jacquard Flannel con Corderito.png" },
        "acolchado_king_liso": { nombre: "Acolchado King Reversible Liso", precio: 119990, img: "images/Acolchados/Acolchado King Reversible Liso.png" },

        //QUEEN
        "acolchado_queen_hojas": { nombre: "Acolchado Queen Hojas", precio: 299990, img: "images/Acolchados/Acolchado Queen Hojas Embossed.png" },
        "acolchado_queen_plush": { nombre: "Acolchado Queen Plush", precio: 249990, img: "images/Acolchados/Acolchado Queen Plush Velvet Liso.png" },
        "acolchado_queen_plumon": { nombre: "Plumón Queen Reversible Ramas de Olivo", precio: 269990, img: "images/Acolchados/Plumón Queen Reversible Ramas de Olivo.png" },

        //TWIN
        "acolchado_twin_liso": { nombre: "Acolchado Twin Atraques de Puntos Liso", precio: 179990, img: "images/Acolchados/Acolchado Twin Atraques de Puntos Liso.png" },
        "acolchado_twin_flor": { nombre: "Acolchado Twin con Corderito Sensitive Plush Flor", precio: 189990, img: "images/Acolchados/Acolchado Twin con Corderito Sensitive Plush Flor.png" },

        //1 PLAZA
        "acolchado_1p_dragones": { nombre: "Acolchado 1 Plaza Dragones", precio: 129990, img: "images/Acolchados/Acolchado 1 Plaza con Corderito Repujado Dragones.png" },
        "acolchado_1p_liso": { nombre: "Acolchado 1 Plaza Reversible Liso", precio: 64990, img: "images/Acolchados/Acolchado 1 Plaza Reversible Liso.png" },

    //CUBRECAMAS

        //KING
        "cubrecama_king_hojas_cerezo":{ nombre: "Cubrecama King de Gasa Hojas de Cerezo", precio: 269990, img:"images/Cubrecamas/Cubrecama King de Gasa Hojas de Cerezo.png" },
        "cubrecama_king_heatpress_hojas":{ nombre: "Cubrecama King Heatpress Hojas", precio: 217990, img:"images/Cubrecamas/Cubrecama King Heatpress Hojas.png" },
        "cubrecama_king_reversible_palmeras":{ nombre: "Cubrecama King Reversible Palmeras", precio: 274990, img:"images/Cubrecamas/Cubrecama King Reversible Bordado Palmeras.png" },

        //QUEEN
        "cubrecama_queen_reversible_ondas":{ nombre: "Cubrecama Queen Extra Suave Reversible Ondas", precio: 217990, img:"images/Cubrecamas/Cubrecama Queen Extra Suave Reversible Ondas.png" },
        "cubrecama_queen_cuadros":{ nombre: "Cubrecama Queen Reversible a Cuadros", precio: 199990, img:"images/Cubrecamas/Cubrecama Queen Reversible Costuras a Cuadros.png" },

        //TWIN
        "cubrecama_twin_jazmin":{ nombre: "Cubrecama Twin Reversible Búlgaro Jazmín", precio: 99990, img:"images/Cubrecamas/Cubrecama Twin Reversible Búlgaro Jazmín.png" },


    //FRAZADAS
        //KING
        "frazada_king_jacquard_lisa":{ nombre: "Frazada King Jacquard Flannel Fleece", precio: 109990, img:"images/Frazadas/Frazada King Jacquard Flannel Fleece Lisa.png" },
        "frazada_king_baby":{ nombre: "Frazada King Baby Skin", precio: 109990, img:"images/Frazadas/Frazada King Baby Skin Lisa.png" },
        "frazada_king_coral":{ nombre: "Frazada King Coral Fleece", precio: 67990, img:"images/Frazadas/Frazada King Coral Fleece Lisa.png" },

        //QUEEN
        "frazada_queen_jacquard": { nombre: "Frazada Queen Jacquard", precio: 59994, img: "images/Frazadas/Frazada Queen Jacquard Flannel Fleece Lisa.png" },

        //1 PLAZA
        "frazada_1p_brilla_hojas":{ nombre: "Frazada 1 Plaza Brilla en la Oscuridad Hojas", precio: 64990, img:"images/Frazadas/Frazada 1 Plaza Brilla en la Oscuridad Hojas.png." },
        "frazada_1p_plush": { nombre: "Frazada 1 Plaza Plush Liso", precio: 59994, img: "images/Frazadas/Frazada 1 Plaza Plush y Polar Liso.png" },


    //SÁBANAS
        //KING
        "sabana_king_espiga":{ nombre: "Sábanas King Extra Suave Espiga Punteada", precio: 129990, img:"images/Sábanas/Juego de Sábanas King Extra Suave Espiga Punteada.png" },
        "sabana_king_flores":{ nombre: "Sábanas King Flores Orellanas ", precio: 84990, img:"images/Sábanas/Juego de Sábanas King Flores Orellanas.png" },

        //EXTRA QUEEN
        "sabana_extraqueen_liso":{ nombre: "Sábanas Extra Queen Liso", precio: 119990, img:"images/Sábanas/Juego de Sábanas Extra Queen Algodón Blend Liso.png" },

        //QUEEN
        "sabana_queen_bulgaro":{ nombre: "Sábanas Queen Búlgaro Cálido", precio: 69990, img:"images/Sábanas/Juego de Sábanas Queen Búlgaro Cálido.png" },

        //TWIN
        "sabana_twin_liso":{ nombre: "Sábanas Twin Algodón Liso", precio: 77990, img:"images/Sábanas/Juego de Sábanas Twin Algodón Blend Liso.png" },

        //1 PLAZA
        "sabana_1p_liso":{ nombre: "Sábanas 1 Plaza Algodón Liso", precio: 64990, img:"images/Sábanas/Juego de Sábanas 1 Plaza Algodón Blend Liso.png" },
};

const eliminarProducto = (filaId) => {
    const fila = document.getElementById(filaId);
    if (fila) {
        fila.remove();
        calcularTotal(); //Vuelve a calcular el total otra vez después de eliminar
    }
};

//Definición de promociones
const PROMOCIONES = [
    { id: 'promo1', descripcion: 'Llevá 2 productos y conseguí 20% en el segundo (No Acumulable).', aplicar: aplicar20EnSegundoNoAcumulable },
    { id: 'promo2', descripcion: '3x2 en productos seleccionados (menores a $70.000).', aplicar: aplicar3x2 },
    { id: 'promo3', descripcion: '15% de descuento por compras superiores a $200.000.', aplicar: aplicar15PorCientoMonto } 
];

let contadorProductos = 1; 

const formatearMoneda = (numero) => {
    return new Intl.NumberFormat('es-AR', { 
        style: 'currency', 
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(Math.max(0, numero)); //asegura que nunca se muestren números negativos si hay un error
};

//GESTIÓN DEL FORMULARIO

//Función auxiliar para crear las opciones del select desde el catalogo
const generarOpcionesHTML = () => {
    let opciones = '<option value="" disabled selected>Seleccioná un producto</option>';

    for (const id in CATALOGO) {
        const prod = CATALOGO[id];
        //Se usa el ID como valor, no el precio.
        opciones += `<option value="${id}">${prod.nombre} (${formatearMoneda(prod.precio)})</option>`;
    }
    return opciones;
};

//Función para actualizar la imagen cuando el usuario cambia el select

const actualizarImagenFila = (selectElement, imgId) => {
    const productoId = selectElement.value;
    const imgElement = document.getElementById(imgId);
    
    if (CATALOGO[productoId]) {
        imgElement.src = CATALOGO[productoId].img;
        imgElement.style.display = 'block'; //Muestra la imagen

    } else {
        imgElement.style.display = 'none'; //Oculta si no hay selección
    }

    calcularTotal(); //Recalcula precios
};

// Función agregar producto
const agregarProducto = () => {
    contadorProductos++;
    const contenedor = document.getElementById('productos-agregados');
    
    const nuevaFila = document.createElement('div');
    const nuevaFilaId = `fila-${contadorProductos}`;
    const imgId = `img-${contadorProductos}`; // ID único para la imagen
    
    nuevaFila.classList.add('producto-fila');
    nuevaFila.id = nuevaFilaId;
    
    nuevaFila.innerHTML = `
        <img src="" alt="Producto" id="${imgId}" class="img-preview" style="display:none;">

        <div style="flex-grow: 1; display:flex; flex-direction:column; gap:5px;">
            <label for="producto-${contadorProductos}">Producto:</label>
            <select id="producto-${contadorProductos}" class="select-producto" onchange="actualizarImagenFila(this, '${imgId}')">
                ${generarOpcionesHTML()}
            </select>
        </div>
        
        <div style="display:flex; flex-direction:column; gap:5px; margin-left: 10px;">
            <label for="cantidad-${contadorProductos}">Cant:</label>
            <input type="number" id="cantidad-${contadorProductos}" class="input-cantidad" value="1" min="1" onchange="calcularTotal()">
        </div>
        
        <button type="button" class="btn-eliminar" onclick="eliminarProducto('${nuevaFilaId}')" title="Eliminar">
            X
        </button>
    `;
    
    contenedor.appendChild(nuevaFila);
};

//LÓGICA DE CÁLCULO DE PROMOCIONES

//Se ordena de mayor a menor y se descuenta el 50% de cada segundo ítem.
function aplicar20EnSegundoNoAcumulable(productosCompra) {
    let descuento = 0;
    
    let preciosUnitarios = [];
    productosCompra.forEach(p => {
        for (let i = 0; i < p.cantidad; i++) {
            preciosUnitarios.push(p.precio);
        }
    });
    
    //Ordena de mayor a menor (para que el 50% se aplique al más caro)
    preciosUnitarios.sort((a, b) => b - a); 
    
    //Verifica si hay 2 o más productos en la compra total
    if (preciosUnitarios.length >= 2) {
        preciosUnitarios.sort((a, b) => b - a); 
        
        const precioSegundoProducto = preciosUnitarios[1];
        descuento = precioSegundoProducto * 0.20;
    }

    return descuento;
}

//Aplica 3x2 a productos seleccionados (precio < $70.000).
function aplicar3x2(productosCompra) {
    let descuento = 0;
    
    //Crea una lista solo con los precios de productos que aplican
    let preciosUnitarios = [];
    productosCompra.forEach(p => {
        
        //Restricción para que solo se aplique a productos menores a $70.000
        if (p.precio < 70000) { 
            for (let i = 0; i < p.cantidad; i++) {
                preciosUnitarios.push(p.precio);
            }
        }
    });
    
    if (preciosUnitarios.length < 3) {
        return 0;
    }

    //Ordena de menor a mayor (para regalar el más barato del grupo de 3)
    preciosUnitarios.sort((a, b) => a - b); 
    
    /*Aplica descuento (regalar el tercero, sexto, noveno...)
    El índice 2 corresponde al tercer ítem (0, 1, 2)*/
    for (let i = 2; i < preciosUnitarios.length; i += 3) {
        descuento += preciosUnitarios[i];
    }

    return descuento;
}

//15% de descuento si el total es >= $200.000.
function aplicar15PorCientoMonto(productosCompra, totalSinDesc) {
    if (totalSinDesc >= 200000) {
        return totalSinDesc * 0.15;
    }
    return 0;
}

//CÁLCULO DE TOTAL

const calcularTotal = () => {
    const productosFilas = document.querySelectorAll('.producto-fila');
    let totalSinDescuento = 0;
    let productosCompra = []; 

    productosFilas.forEach(fila => {
        const select = fila.querySelector('.select-producto');
        const input = fila.querySelector('.input-cantidad');
        
        const productoId = select.value; //Se consigue el ID (ej: "acolchado_queen_hojas")
        const cantidad = parseInt(input.value);
        
        //Se busca el precio en el CATALOGO usando el ID
        if (CATALOGO[productoId] && cantidad > 0) {
            const precio = CATALOGO[productoId].precio;
            
            totalSinDescuento += precio * cantidad;
            productosCompra.push({ precio, cantidad });
        }
    });

    //Se determina el mejor descuento
    let mejorDescuento = 0;
    let mejorPromoDescripcion = 'Ninguna';

    PROMOCIONES.forEach(promo => {
        //Se ejecuta la función de cálculo de descuento para cada promoción
        const descuentoActual = promo.aplicar(productosCompra, totalSinDescuento);
        
        //Se elige el mayor descuento
        if (descuentoActual > mejorDescuento) {
            mejorDescuento = descuentoActual;
            mejorPromoDescripcion = promo.descripcion;
        }
    });

    const totalFinal = totalSinDescuento - mejorDescuento;

    //ACTUALIZACIÓN DEL DOM
    document.getElementById('total-sin-descuento').textContent = formatearMoneda(totalSinDescuento);
    
    //Se muestra la promoción aplicada
    const elemPromo = document.getElementById('descuento-aplicado');

    if (mejorDescuento > 0) {

        elemPromo.textContent = "✅ " + mejorPromoDescripcion;
        elemPromo.style.color = "#2aa848"; //Verde para indicar éxito
        elemPromo.style.fontWeight = "bold";

    } else {

        elemPromo.textContent = "Sin promociones aplicables";
        elemPromo.style.color = "#685A73";
        elemPromo.style.fontWeight = "normal";
    }

    document.getElementById('total-final').textContent = formatearMoneda(totalFinal);
    document.getElementById('descuento-de').textContent = formatearMoneda(mejorDescuento);
};

//Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const listaPromosHTML = document.getElementById('lista-promociones');
    listaPromosHTML.innerHTML = '<ul>' + PROMOCIONES.map(p => `<li>${p.descripcion}</li>`).join('') + '</ul>';
    
    //Agrega la primera fila automáticamente al cargar
    agregarProducto(); 
});