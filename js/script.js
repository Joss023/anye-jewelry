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
            { nombre: 'Collar Sakura Romántica', precio: '$16.50', descripcion: 'Collar de Acero Inoxidable Dorado con Dije de Flor en Tono Rosa Pastel, giratorio', imagen: 'img/collar/Sakura Romántica.jpeg' },
            { nombre: 'Collar Radiant Bloom', precio: '$16.50', descripcion: 'Collar de Acero Inoxidable Dorado con Dije de Flor en Pétalos de Circonias Corte Marquise de Alto ', imagen: 'img/collar/badiant bloom.jpeg' },
            { nombre: 'Collar Golden Sunshine', precio: '$16.50', descripcion: 'Collar de Acero Inoxidable Dorado con Dije de Girasol Esmaltado, Centro de Circonias y Gota de Cristal Colgante, giratorio ', imagen: 'img/collar/Collar Girasol.jpeg' },
            { nombre: 'Collar Eternal Hope', precio: '$16.50', descripcion: 'Collar de Acero Inoxidable Dorado con Dije de Girasol en Pavé de Circonias, giratorio y Hojas con Cristales Verdes', imagen: 'img/collar/Girasol Eternal Hope.jpeg' },
            { nombre: 'Collar Vuelo de Mariposa', precio: '$16.50', descripcion: 'Collar de Acero Inoxidable Dorado con Dije Doble de Mariposa Calada y Pavé de Microcirconias Vuelo de Mariposa', imagen: 'img/collar/Vuelo de Mariposa.jpeg' },
            { nombre: 'Collar Trébol de la Suerte', precio: '$16.50', descripcion: 'Collar de Acero Inoxidable Dorado con Dije de Trébol de Cuatro Hojas , giratorio de Cristal Nacarado Efecto Ojo de Gato', imagen: 'img/collar/Trébol de la Suerte.jpeg' },
            { nombre: 'Collar Sol Celestial Jade', precio: '$16.50', descripcion: 'Collar de Acero Inoxidable Dorado con Dije de Sol de Rayos Esculpidos, giratorio y Piedra Verde Efecto Ojo de Gato', imagen: 'img/collar/Sol Celestial Jade.jpeg' }

        ]
    },
    {
        id: 'anillos',
        nombre: 'Anillos',
        descripcion: 'Compromiso y estilo en tus manos',
        imagen: 'img/anillo/fondo_anillo.jpeg',
        productos: [
            { nombre: 'Estrella del Mar', precio: '$6', descripcion: 'Sortija Regulable de Acero Inoxidable Dorada', imagen: 'img/anillo/Estrella del Mar.jpeg' },
            { nombre: 'Anillo Laurel Gold', precio: '$6', descripcion: 'Sortija Regulable de Acero Inoxidable Dorada con Diseño Calado de Hojas y Bordes Punteados', imagen: 'img/anillo/Laurel Gold.jpeg' },
            { nombre: 'Anillo Coquette Bow', precio: '$6', descripcion: 'Sortija Regulable de Acero Inoxidable Dorada', imagen: 'img/anillo/Coquette Bow.jpeg' },
            { nombre: 'Anillo Sweet Heart', precio: '$6', descripcion: 'Sortija Regulable de Acero Inoxidable Dorada con Silueta de Corazón Calado', imagen: 'img/anillo/sweet.jpeg' }
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
        id: 'Aretes',
        nombre: 'Aretes',
        descripcion: 'El toque perfecto para tu mirada',
        imagen: 'img/arete/fondo_arete.jpeg',
        productos: [
            { nombre: 'Aretes  Infinito Royale', precio: '$12.50', descripcion: 'Broqueles Escultóricos en Chape en Oro Xuping con Diseño de Nudo Tejido y Calado', imagen: 'img/arete/InfinitoRoyale.jpeg' },
            { nombre: 'Aretes Encaje Floral', precio: '$8.50', descripcion: 'Argollas en Arete Caladas en Chape en Oro Xuping con Patrón Geométrico Flora', imagen: 'img/arete/Encaje Floral.jpeg' },
            { nombre: 'Aretes Satin Gold', precio: '$8.80', descripcion: 'Argollas en Arete Anchas en Chape en Oro Xuping con Acabado Satinado y Líneas Lisas', imagen: 'img/arete/Satin Gold.jpeg' },
            { nombre: 'Aretes Facetas Geométricas', precio: '$8.50', descripcion: 'Argollas en Arete Anchas Facetadas en Chape en Oro Xuping de Estilo Escultórico', imagen: 'img/arete/Facetas Geométricas.jpeg' },
            { nombre: 'Aretes Canoas ', precio: '$8.50', descripcion: 'Argollas en Arete Gruesas Abombadas en Chape en Oro Xuping con Acabado Espejo', imagen: 'img/arete/Canoas Argollas.jpeg' },
            { nombre: 'Aretes Textura & Luz', precio: '$8.80', descripcion: 'Argolla en Arete en Chape en Oro Xuping con Acabado Diamantado y Ranuras Pulidas', imagen: 'img/arete/Textura Luz.jpeg' },
            { nombre: 'Aretes Rainbow Channel', precio: '$8.80', descripcion: 'Argollas en Arete en Chape en Oro Xuping con Circonias Multicolor en Engaste Cuadrado', imagen: 'img/arete/Rainbow Channel.jpeg' },
            { nombre: 'Aretes Bolines & Relieve', precio: '$8.80', descripcion: 'Argollas en Arete en Chape en Oro Xuping con Diseño de Esferas/Balines en Relieve', imagen: 'img/arete/Bolines Relieve.jpeg' }
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