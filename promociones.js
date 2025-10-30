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

//Función para agregar una nueva fila de producto y al final botón de eliminar producto
const agregarProducto = () => {
    contadorProductos++;
    const contenedor = document.getElementById('productos-agregados');
    
    const nuevaFila = document.createElement('div');
    const nuevaFilaId = `fila-${contadorProductos}`;
    nuevaFila.classList.add('producto-fila');
    nuevaFila.id = nuevaFilaId;
    nuevaFila.innerHTML = `
        <label for="producto-${contadorProductos}">Producto:</label>
        <select id="producto-${contadorProductos}" class="select-producto" onchange="calcularTotal()">
                <option value="299990">Acolchado Queen Hojas ($299.990)</option>
                <option value="249990">Acolchado Queen Plush ($249.990)</option>
                <option value="129990">Acolchado 1 Plaza Dragones ($129.990)</option>
                <option value="64990">Acolchado 1 Plaza Liso ($64.990)</option>
                <option value="269990">Cubrecama King de Gasa Hojas de Cerezo ($269.990)</option>
                <option value="217990">Cubrecama King Heatpress Hojas ($217.990)</option>
                <option value="274990">Cubrecama King Reversible Bordado Palmeras ($274.990)</option>
                <option value="217990">Cubrecama Queen Extra Suave Reversible Ondas ($217.990)</option>
                <option value="99990">Cubrecama Twin Reversible Búlgaro Jazmín ($99.990)</option>
                <option value="199990">Cubrecama Queen Reversible Costuras a Cuadros ($199.990)</option>
                <option value="64990">Frazada 1 Plaza Brilla en la Oscuridad Hojas ($64.990)</option>
                <option value="59994">Frazada Queen Jacquard Flannel Fleece Lisa ($59.994)</option>
                <option value="109990">Frazada King Jacquard Flannel Fleece Lisa ($109.990)</option>
                <option value="109990">Frazada King Baby Skin Lisa ($109.990)</option>
                <option value="67990">Frazada King Coral Fleece Lisa ($67.990)</option>
                <option value="59994">Frazada 1 Plaza Plush y Polar Liso ($59.994)</option>
                <option value="119990">Juego de Sábanas Extra Queen Algodón Blend Liso ($119.990)</option>
                <option value="77990">Juego de Sábanas Twin Algodón Blend Liso ($77.990)</option>
                <option value="64990">Juego de Sábanas 1 Plaza Algodón Blend Liso ($64.990)</option>
                <option value="69990">Juego de Sábanas Queen Búlgaro Cálido ($69.990)</option>
                <option value="129990">Juego de Sábanas King Extra Suave Espiga Punteada ($129.990)</option>
                <option value="84990">Juego de Sábanas King Flores Orellanas ($84.990)</option>
        </select>
        
        <label for="cantidad-${contadorProductos}">Cantidad:</label>
        <input type="number" id="cantidad-${contadorProductos}" class="input-cantidad" value="1" min="1" onchange="calcularTotal()">
        
        <button type="button" class="btn-eliminar" onclick="eliminarProducto('${nuevaFilaId}')">
            X
        </button>
        `;
    
    contenedor.appendChild(nuevaFila);
    calcularTotal();
};

//LÓGICA DE CÁLCULO DE PROMOCIONES

//Se ordena de mayor a menor y se descuenta el 50% de cada segundo ítem.//
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

//Aplica 3x2 a productos seleccionados (precio < $70.000).//
function aplicar3x2(productosCompra) {
    let descuento = 0;
    
    //Crea una lista SÓLO con los precios de productos que aplican
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

    //Ordenar de menor a mayor (para regalar el más barato del grupo de 3)
    preciosUnitarios.sort((a, b) => a - b); 
    
    /*Aplica descuento (regalar el tercero, sexto, noveno...)
    El índice 2 corresponde al tercer ítem (0, 1, 2) */
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

const calcularTotal = () => {
    
    //Se consiguen los datos
    const productosFilas = document.querySelectorAll('.producto-fila');
    let totalSinDescuento = 0;
    let productosCompra = []; //Array de objetos (precio, cantidad)

    productosFilas.forEach(fila => {
        //Se agarran los select y inputs dentro de cada fila
        const select = fila.querySelector('.select-producto');
        const input = fila.querySelector('.input-cantidad');
        
        //Se confirma que los valores sean números
        const precio = parseFloat(select.value);
        const cantidad = parseInt(input.value);
        
        if (cantidad > 0 && !isNaN(precio) && !isNaN(cantidad)) {
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
    const descuentoDe = mejorDescuento;

    document.getElementById('total-sin-descuento').textContent = formatearMoneda(totalSinDescuento);
    document.getElementById('descuento-aplicado').textContent = mejorPromoDescripcion;    document.getElementById('total-final').textContent = formatearMoneda(totalFinal);
    document.getElementById('descuento-de').textContent = formatearMoneda(descuentoDe);
};

document.addEventListener('DOMContentLoaded', () => {
    const listaPromosHTML = document.getElementById('lista-promociones');
    listaPromosHTML.innerHTML = '<ul>' + PROMOCIONES.map(p => `<li>${p.descripcion}</li>`).join('') + '</ul>';
    
    calcularTotal();
});