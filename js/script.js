// Puedes dejar esto o borrarlo. Solo para comprobar que el JS se carga.
console.log('🛒 ANYE - Tienda de joyas cargada correctamente.');
// ============================================================
// BASE DE DATOS DE CATEGORÍAS Y PRODUCTOS
// ============================================================
const categorias = [
    {
        id: 'collares',
        nombre: 'Collares',
        descripcion: 'Elegancia que realza tu cuello',
        imagen: 'img/collar/fondo_collar.jpeg',
        productos: [
            { nombre: 'Collar Solitario', precio: '$1,200', descripcion: 'Oro 18k · Diamante talla brillante', imagen: 'img/collar/fondo_collar.jpeg' },
            { nombre: 'Collar Perla', precio: '$850', descripcion: 'Perlas de agua dulce', imagen: 'img/collar/fondo_collar.jpeg' },
            { nombre: 'Collar Lágrima', precio: '$1,450', descripcion: 'Oro blanco con perla', imagen: 'img/collar/fondo_collar.jpeg' }
        ]
    },
    {
        id: 'anillos',
        nombre: 'Anillos',
        descripcion: 'Compromiso y estilo en tus manos',
        imagen: 'img/anillo/fondo_anillo.jpeg',
        productos: [
            { nombre: 'Anillo Eterno', precio: '$450', descripcion: 'Plata 925 · Zirconia', imagen: 'img/anillo/fondo_anillo.jpeg' },
            { nombre: 'Anillo Solitario', precio: '$2,100', descripcion: 'Oro 18k con diamante', imagen: 'img/anillo/fondo_anillo.jpeg' },
            { nombre: 'Anillo Alianza', precio: '$780', descripcion: 'Plata con oro rosa', imagen: 'img/anillo/fondo_anillo.jpeg' }
        ]
    },
    {
        id: 'pulseras',
        nombre: 'Pulseras',
        descripcion: 'Detalles que enamoran en tu muñeca',
        imagen: 'img/pulseras/fondo_pulsera.jpeg',
        productos: [
            { nombre: 'Pulsera Mística', precio: '$890', descripcion: 'Chapado en oro · Perlas', imagen: 'img/pulseras/fondo_pulsera.jpeg' },
            { nombre: 'Pulsera Cadena', precio: '$350', descripcion: 'Plata con dije corazón', imagen: 'img/pulseras/fondo_pulsera.jpeg' },
            { nombre: 'Pulsera Charm', precio: '$620', descripcion: 'Oro rosa con perla', imagen: 'img/pulseras/fondo_pulsera.jpeg' }
        ]
    },
    {
        id: 'aros',
        nombre: 'Aros',
        descripcion: 'El toque perfecto para tu mirada',
        imagen: 'img/arete/fondo_arete.jpeg',
        productos: [
            { nombre: 'Aros Clásicos', precio: '$1,550', descripcion: 'Oro blanco · Perla', imagen: 'img/arete/fondo_arete.jpeg' },
            { nombre: 'Aros Aro', precio: '$280', descripcion: 'Plata 925', imagen: 'img/arete/fondo_arete.jpeg' },
            { nombre: 'Aros Colgantes', precio: '$690', descripcion: 'Oro rosa · Perlas', imagen: 'img/arete/fondo_arete.jpeg' }
        ]
    },
    {
        id: 'collaresxuping',
        nombre: 'Collares Xuping',
        descripcion: 'Elegancia que eleva cualquier look',
        imagen: 'img/collar xuping/fondo_collar_xuping.jpeg',
        productos: [
            { nombre: 'Collar Selene', precio: '$18.60', descripcion: ' Collar Media Luna Brillo Xuping  ', imagen: 'img/collar xuping/Collar Selene.jpeg' },
            { nombre: 'Collar Corazón de Luz', precio: '$19.50', descripcion: ' Collar Corazón Cristal De Piedra Xuping ', imagen: 'img/collar xuping/Collar Corazón de Luz.jpeg' },
            { nombre: 'Corazón Puffy Snake Chain', precio: '$19.20', descripcion: ' Collar Corazón Liso con Cadena de Esferas xuping', imagen: 'img/collar xuping/Corazón Puffy Snake Chain.jpeg' },
            { nombre: 'Collar Amore Brillante', precio: '$19.50', descripcion: 'Collar Corazón Pave Doble xuping', imagen: 'img/collar xuping/Collar Amore Brillante.jpeg' },
            { nombre: 'Collar Amore Clásico', precio: '$18.80', descripcion: 'Corazón Liso xuping ', imagen: 'img/collar xuping/Collar Amore Clásico.jpeg' }
        ]
    }
];

// ============================================================
// REDIRECCIÓN AL HACER CLIC EN "VER MÁS"
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.joya button[data-categoria]');
    botones.forEach(boton => {
        boton.addEventListener('click', function(e) {
            const categoria = this.getAttribute('data-categoria');
            window.location.href = `categoria.html?tipo=${categoria}`;
        });
    });
});