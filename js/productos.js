// ============================================================
// BASE DE DATOS DE CATEGORÍAS Y PRODUCTOS
// ============================================================

const categorias = [
    {
        id: 'collares',
        nombre: 'Collares',
        descripcion: 'Elegancia que realza tu cuello',
        imagen: 'img/categorias/collares.jpg',  // imagen de la categoría (opcional)
        productos: [
            {
                nombre: 'Collar Solitario',
                precio: '$1,200',
                descripcion: 'Oro 18k con diamante talla brillante. Ideal para ocasiones especiales.',
                imagen: 'img/productos/collar-solitario.jpg'
            },
            {
                nombre: 'Collar Perla',
                precio: '$850',
                descripcion: 'Perlas de agua dulce con cierre de plata. Un clásico atemporal.',
                imagen: 'img/productos/collar-perla.jpg'
            },
            {
                nombre: 'Collar Lágrima',
                precio: '$1,450',
                descripcion: 'Oro blanco con una perla en forma de lágrima. Diseño único.',
                imagen: 'img/productos/collar-lagrima.jpg'
            }
        ]
    },
    {
        id: 'anillos',
        nombre: 'Anillos',
        descripcion: 'Compromiso y estilo en tus manos',
        imagen: 'img/categorias/anillos.jpg',
        productos: [
            {
                nombre: 'Anillo Eterno',
                precio: '$450',
                descripcion: 'Plata 925 con zirconia cúbica. Brillo duradero.',
                imagen: 'img/productos/anillo-eterno.jpg'
            },
            {
                nombre: 'Anillo Solitario',
                precio: '$2,100',
                descripcion: 'Oro 18k con diamante central. Para siempre.',
                imagen: 'img/productos/anillo-solitario.jpg'
            },
            {
                nombre: 'Anillo Alianza',
                precio: '$780',
                descripcion: 'Plata con detalles en oro rosa. Elegancia sutil.',
                imagen: 'img/productos/anillo-alianza.jpg'
            }
        ]
    },
    {
        id: 'pulseras',
        nombre: 'Pulseras',
        descripcion: 'Detalles que enamoran en tu muñeca',
        imagen: 'img/categorias/pulseras.jpg',
        productos: [
            {
                nombre: 'Pulsera Mística',
                precio: '$890',
                descripcion: 'Chapado en oro con perlas de agua dulce. Sofisticación.',
                imagen: 'img/productos/pulsera-mistica.jpg'
            },
            {
                nombre: 'Pulsera Cadena',
                precio: '$350',
                descripcion: 'Cadena de plata con dije de corazón. Ideal para regalar.',
                imagen: 'img/productos/pulsera-cadena.jpg'
            },
            {
                nombre: 'Pulsera Charm',
                precio: '$620',
                descripcion: 'Charms de oro rosa con perla. Personalizable.',
                imagen: 'img/productos/pulsera-charm.jpg'
            }
        ]
    },
    {
        id: 'aros',
        nombre: 'Aros',
        descripcion: 'El toque perfecto para tu mirada',
        imagen: 'img/categorias/aros.jpg',
        productos: [
            {
                nombre: 'Aros Clásicos',
                precio: '$1,550',
                descripcion: 'Oro blanco con perla natural. Elegancia pura.',
                imagen: 'img/productos/aros-clasicos.jpg'
            },
            {
                nombre: 'Aros Aro',
                precio: '$280',
                descripcion: 'Aros de plata 925. Sencillos y modernos.',
                imagen: 'img/productos/aros-aro.jpg'
            },
            {
                nombre: 'Aros Colgantes',
                precio: '$690',
                descripcion: 'Oro rosa con pequeñas perlas. Movimiento y luz.',
                imagen: 'img/productos/aros-colgantes.jpg'
            }
        ]
    },
    {
        id: 'relojes',
        nombre: 'Relojes',
        descripcion: 'Precisión y estilo en tu muñeca',
        imagen: 'img/categorias/relojes.jpg',
        productos: [
            {
                nombre: 'Reloj Elegancia',
                precio: '$2,300',
                descripcion: 'Acero dorado con esfera perlada. Clásico y sofisticado.',
                imagen: 'img/productos/reloj-elegancia.jpg'
            },
            {
                nombre: 'Reloj Deportivo',
                precio: '$1,200',
                descripcion: 'Acero inoxidable con cronómetro. Resistente y moderno.',
                imagen: 'img/productos/reloj-deportivo.jpg'
            }
        ]
    }
];