// Puedes dejar esto o borrarlo. Solo para comprobar que el JS se carga.
console.log('🛒 ANYE - Tienda de joyas cargada correctamente.');
// ============================================================
// BASE DE DATOS DE CATEGORÍAS Y PRODUCTOS
// ============================================================
const categorias = [
    {
        id: 'collares',
        nombre: 'Collares',
        productos: [
            { nombre: 'Collar Solitario', precio: '$1,200', descripcion: 'Oro 18k · Diamante talla brillante', imagen: 'img/collar-oro.jpg' },
            { nombre: 'Collar Perla', precio: '$850', descripcion: 'Perlas de agua dulce', imagen: 'img/collar-perla.jpg' },
            { nombre: 'Collar Lágrima', precio: '$1,450', descripcion: 'Oro blanco con perla', imagen: 'img/collar-lagrima.jpg' }
        ]
    },
    {
        id: 'anillos',
        nombre: 'Anillos',
        productos: [
            { nombre: 'Anillo Eterno', precio: '$450', descripcion: 'Plata 925 · Zirconia', imagen: 'img/anillo-plata.jpg' },
            { nombre: 'Anillo Solitario', precio: '$2,100', descripcion: 'Oro 18k con diamante', imagen: 'img/anillo-oro.jpg' },
            { nombre: 'Anillo Alianza', precio: '$780', descripcion: 'Plata con oro rosa', imagen: 'img/anillo-rosa.jpg' }
        ]
    },
    {
        id: 'pulseras',
        nombre: 'Pulseras',
        productos: [
            { nombre: 'Pulsera Mística', precio: '$890', descripcion: 'Chapado en oro · Perlas', imagen: 'img/pulsera-perlas.jpg' },
            { nombre: 'Pulsera Cadena', precio: '$350', descripcion: 'Plata con dije corazón', imagen: 'img/pulsera-cadena.jpg' },
            { nombre: 'Pulsera Charm', precio: '$620', descripcion: 'Oro rosa con perla', imagen: 'img/pulsera-charm.jpg' }
        ]
    },
    {
        id: 'aros',
        nombre: 'Aros',
        productos: [
            { nombre: 'Aros Clásicos', precio: '$1,550', descripcion: 'Oro blanco · Perla', imagen: 'img/aros-perla.jpg' },
            { nombre: 'Aros Aro', precio: '$280', descripcion: 'Plata 925', imagen: 'img/aros-plata.jpg' },
            { nombre: 'Aros Colgantes', precio: '$690', descripcion: 'Oro rosa · Perlas', imagen: 'img/aros-rosa.jpg' }
        ]
    },
    {
        id: 'collaresxuping',
        nombre: 'Collares XUPING',
        productos: [
            { nombre: 'Reloj Elegancia', precio: '$2,300', descripcion: 'Acero dorado · Esfera perlada', imagen: 'img/reloj-dorado.jpg' },
            { nombre: 'Reloj Clásico', precio: '$1,800', descripcion: 'Acero plateado · Cuarzo', imagen: 'img/reloj-plata.jpg' }
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