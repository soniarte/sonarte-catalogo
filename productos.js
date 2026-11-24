const PRODUCTOS = [
    // --- LÍNEA AROMÁTICA ---
    {
        nombre: "Difusor 250ml",
        categoria: "Linea Aromática",
        precio: 4900,
        imagen: "difusor-250ml.jpg",
        descripcion: "Viene con varillas.",
        variantes: ["Vainilla", "Vainilla Limón", "Vainilla Naranja", "Coco Vainilla", "Naranja Pimienta", "Melocotón", "Limón", "Cony", "Flores Blancas", "Verbena", "Coco Lima", "Papaya", "Maracuyá", "Naranja Mango", "Papaya Azahar", "Flores de Cerezo", "Peras y Flores Blancas"],
        etiqueta: "Más vendido"
    },
    {
        nombre: "Difusor 150ml",
        categoria: "Linea Aromática",
        precio: 3700,
        imagen: "difusor-150ml.jpg",
        descripcion: "Viene con varillas.",
        variantes: ["Vainilla", "Vainilla Limón", "Vainilla Naranja", "Coco Vainilla", "Naranja Pimienta", "Melocotón", "Limón", "Cony", "Flores Blancas", "Verbena", "Coco Lima", "Papaya", "Maracuyá", "Naranja Mango", "Papaya Azahar", "Flores de Cerezo", "Peras y Flores Blancas"],
        etiqueta: ""
    },
    {
        nombre: "Home Spray 250ml",
        categoria: "Linea Aromática",
        precio: 2900,
        imagen: "home-spray-250ml.jpg",
        descripcion: "Atomizador práctico para ambientes y textiles.",
        variantes: ["Vainilla", "Coco Vainilla", "Vainilla Limón", "Cony", "Flores Blancas", "Melocotón", "Verbena", "Papaya", "Maracuyá", "Coco lima", "Papaya Azahar", "Peras y Flores Blancas", "Naranja Mango"],
        etiqueta: ""
    },
    {
        nombre: "Home Spray 150ml",
        categoria: "Linea Aromática",
        precio: 2200,
        imagen: "home-spray-150ml.jpg",
        descripcion: "Atomizador de 150ml.",
        variantes: ["Vainilla", "Coco Vainilla", "Vainilla Limón", "Melocotón", "Verbena", "Cony", "Flores Blancas", "Coco lima", "Papaya", "Maracuyá", "Papaya Azahar", "Peras y Flores Blancas", "Naranja Mango"],
        etiqueta: ""
    },
    {
        nombre: "Home Gatillo",
        categoria: "Linea Aromática",
        precio: 3200,
        imagen: "home-spray-250ml.jpg",
        descripcion: "Envase con gatillo rociador.",
        variantes: ["Vainilla", "Coco Vainilla", "Limón", "Verbena", "Cony", "Flores Blancas", "Melocotón", "Coco lima", "Maracuyá", "Papaya", "Papaya Azahar", "Peras y Flores Blancas", "Naranja Mango"],
        etiqueta: ""
    },
    {
        nombre: "Refill Home (500 ml)",
        categoria: "Linea Aromática",
        precio: 4400,
        imagen: "refill-500.jpg",
        descripcion: "Recarga económica de 500 ml.",
        variantes: ["Vainilla", "Coco Vainilla", "Limón", "Verbena", "Cony", "Flores Blancas", "Melocotón", "Coco lima", "Maracuyá", "Papaya", "Papaya Azahar", "Peras y Flores Blancas", "Naranja Mango"],
        etiqueta: ""
    },
    {
        nombre: "Refill Difusor (500 ml)",
        categoria: "Linea Aromática",
        precio: 8500,
        imagen: "refill-difusor.jpg",
        descripcion: "Recarga económica de 500 ml.",
        variantes: ["Vainilla", "Coco Vainilla", "Limón", "Verbena", "Cony", "Flores Blancas", "Melocotón", "Coco lima", "Maracuyá", "Papaya", "Vainilla Naranja", "Vainilla Limón", "Naranja Pimienta", "Naranja Mango", "Papaya Azahar", "Flores de Cerezo", "Peras y Flores Blancas"],
        etiqueta: ""
    },
    {
        nombre: "Vaso Difusor",
        categoria: "Linea Aromática",
        precio: 2800,
        imagen: "vaso-difusor.jpg",
        descripcion: "Vaso de vidrio con tapa de pino y varillas.",
        variantes: ["Vainilla", "Coco Vainilla", "Flores Blancas", "Cony", "Verbena", "Maracuyá"],
        etiqueta: ""
    },
    {
        nombre: "Flores de Tela",
        categoria: "Linea Aromática",
        precio: 1000,
        imagen: "flores-tela.jpg",
        descripcion: "Pack x2 unidades. Colores surtidos.",
        etiqueta: ""
    },
    {
        nombre: "Box Meli Chico",
        categoria: "Linea Aromática",
        precio: 6500,
        imagen: "box-meli.jpg",
        descripcion: "Contiene: caja, home 150ml, difusor 150ml, portasahumerio y 2 sahumerios.",
        variantes: ["Aromas Surtidos", "Aromas Dulces", "Aromas Cítricos/Florales"],
        etiqueta: "Nuevo"
    },
    {
        nombre: "Vela en Frasco",
        categoria: "Linea Aromática",
        precio: 3700,
        imagen: "vela-frasco.jpg",
        descripcion: "Vela aromática en frasco de vidrio.",
        variantes: ["Coco vainilla", "Lavanda tilo", "Mango maracuyá", "Flores blancas", "Peonías y oliva", "Sandía mango"],
        etiqueta: ""
    },
    {
        nombre: "Vela Vaso",
        categoria: "Linea Aromática",
        precio: 4800,
        imagen: "vela-vaso.jpg",
        descripcion: "Vela aromática en vaso de vidrio.",
        variantes: ["Coco vainilla", "Lavanda tilo", "Mango maracuyá", "Flores blancas", "Peonías y oliva", "Sandía mango"],
        etiqueta: ""
    },
    {
        nombre: "Vela Vaso con Tapa",
        categoria: "Linea Aromática",
        precio: 5500,
        imagen: "vela-vaso-tapa.jpg",
        descripcion: "Vela en vaso con tapa de madera.",
        variantes: ["Coco vainilla", "Lavanda tilo", "Mango maracuyá", "Flores blancas", "Peonías y oliva", "Sandía mango"],
        etiqueta: ""
    },
    {
        nombre: "Vela Bombé con Palabra",
        categoria: "Linea Aromática",
        precio: 4800,
        imagen: "vela-frasco-frase.jpg",
        descripcion: "Vinilo decorativo (Gratitud / Amor).",
        variantes: ["Coco vainilla", "Lavanda tilo", "Mango maracuyá", "Flores blancas", "Peonías y oliva"],
        etiqueta: ""
    },
    {
        nombre: "Vela Lata",
        categoria: "Linea Aromática",
        precio: 2500,
        imagen: "vela-lata.jpg",
        descripcion: "Vela aromática en lata metálica.",
        variantes: ["Coco vainilla", "Lavanda tilo", "Mango maracuyá", "Flores blancas", "Peonías y oliva", "Sandía melón"],
        etiqueta: ""
    },
    {
        nombre: "Vela Redonda de Madera",
        categoria: "Linea Aromática",
        precio: 2500,
        imagen: "vela-corazon.jpg",
        descripcion: "Medida: 6cm.",
        variantes: ["Aromas sin elección (Surtidos)"],
        etiqueta: ""
    },
    {
        nombre: "Vela Mandala",
        categoria: "Linea Aromática",
        precio: 4900,
        imagen: "vela-mandala.jpg",
        descripcion: "Medida: 10cm. Aromas sin elección (Surtidos)",
        variantes: ["Color:Marrón Claro", "Color:Negro"],
        etiqueta: ""
    },
    {
        nombre: "Vela Corazón",
        categoria: "Linea Aromática",
        precio: 4900,
        imagen: "vela-forma-corazon.jpg",
        descripcion: "Medida: 10cm. Aromas sin elección (Surtidos)",
        variantes: ["Color:Marrón Claro", "Color:Negro"],
        etiqueta: ""
    },
    {
        nombre: "Vela Estrella",
        categoria: "Linea Aromática",
        precio: 4900,
        imagen: "vela-estrella.jpg",
        descripcion: "Medida: 10cm. Aromas sin elección (Surtidos)",
        variantes: ["Color:Marrón Claro", "Color:Negro"],
        etiqueta: ""
    },
    {
        nombre: "Vela Mano Fátima",
        categoria: "Linea Aromática",
        precio: 4900,
        imagen: "vela-fatima.jpg",
        descripcion: "Medida: 10cm. Aromas sin elección (Surtidos)",
        variantes: ["Color:Marrón Claro", "Color:Negro"],
        etiqueta: ""
    },

    // --- PALABRAS DE MADERA ---
    {
        nombre: "Palabra Chica",
        categoria: "Palabras de Madera",
        precio: 1300,
        imagen: "palabra-chica-paz.jpg",
        descripcion: "Medida: 15x6 cm. Consultar colores disponibles.",
        variantes: ["Paz", "Ríe"],
        etiqueta: ""
    },
    {
        nombre: "Palabra Mediana",
        categoria: "Palabras de Madera",
        precio: 1500,
        imagen: "palabra-mediana-amor.jpg",
        descripcion: "Medida: 20x7 cm. Consultar colores disponibles.",
        variantes: ["Amor", "Calma", "Relax", "Love"],
        etiqueta: "Más vendido"
    },
    {
        nombre: "Palabra Doble",
        categoria: "Palabras de Madera",
        precio: 1800,
        imagen: "palabra-doble-love.jpg",
        descripcion: "Medida: 12x12 cm. Diseño con relieve.",
        variantes: ["Love", "Home"],
        etiqueta: ""
    },

    // --- BANDEJAS ---
    {
        nombre: "Bandeja Iris",
        categoria: "Bandejas",
        precio: 1600,
        imagen: "bandeja-iris.jpg",
        descripcion: "Medida: 24x11 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: "Más vendido"
    },
    {
        nombre: "Bandeja Nina",
        categoria: "Bandejas",
        precio: 1300,
        imagen: "bandeja-nina.jpg",
        descripcion: "Medida: 22x11 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Bandeja Cuore",
        categoria: "Bandejas",
        precio: 1500,
        imagen: "bandeja-cuore.jpg",
        descripcion: "Medida: 22x11 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Redonda Mandala",
        categoria: "Bandejas",
        precio: 2200,
        imagen: "redonda-mandala.jpg",
        descripcion: "Medida: 20 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Oval Corazón",
        categoria: "Bandejas",
        precio: 1300,
        imagen: "bandeja-corazon.jpg",
        descripcion: "Medida: 26x11 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Bandeja Helena",
        categoria: "Bandejas",
        precio: 2200,
        imagen: "bandeja-helena.jpg",
        descripcion: "Medida: 20 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Bandeja Cala",
        categoria: "Bandejas",
        precio: 1600,
        imagen: "bandeja-cala.jpg",
        descripcion: "Medida: 22x11 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },

    // --- PORTASAHUMERIOS ---
    {
        nombre: "Portasahumerio Bote",
        categoria: "Portasahumerios",
        precio: 1200,
        imagen: "portasahumerio-bote.jpg",
        descripcion: "Medida: 21x6 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Portasahumerio Redondo",
        categoria: "Portasahumerios",
        precio: 750,
        imagen: "portasahumerio-redondo.jpg",
        descripcion: "Medida: 10 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Portasahumerio Lina",
        categoria: "Portasahumerios",
        precio: 850,
        imagen: "portasahumerio-lina.jpg",
        descripcion: "Medida: 25x5,5 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Portasahumerio Octogonal",
        categoria: "Portasahumerios",
        precio: 750,
        imagen: "portasahumerio-octogonal.jpg",
        descripcion: "Medida: 10 cm. Consultar colores.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Portasahumerio Maui",
        categoria: "Portasahumerios",
        precio: 590,
        imagen: "portasahumerio-maui.jpg",
        descripcion: "Medida: 22x6 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },

    // --- CESTERIA NÓRDICA ---
    {
        nombre: "Posavaso Nórdico",
        categoria: "Cesteria Nordica",
        precio: 1800,
        imagen: "posavaso-nordico.jpg",
        descripcion: "Medida: 13 cm. Color natural (Precio por unidad).",
        variantes: ["Natural"],
        etiqueta: ""
    },
    {
        nombre: "Oval Rita",
        categoria: "Cesteria Nordica",
        precio: 6500,
        imagen: "oval-rita.jpg",
        descripcion: "Medida: 18 cm. Color natural.",
        variantes: ["Combinado"],
        etiqueta: ""
    },
    {
        nombre: "Rita Combinado",
        categoria: "Cesteria Nordica",
        precio: 5900,
        imagen: "rita-combinada.jpg",
        descripcion: "Medida: 18 cm. Color natural con rojo.",
        variantes: ["Natural"],
        etiqueta: ""
    },
    {
        nombre: "Imperial Chico",
        categoria: "Cesteria Nordica",
        precio: 7900,
        imagen: "imperial-chico.jpg",
        descripcion: "Medida: 23 cm. Color natural.",
        variantes: ["Natural"],
        etiqueta: ""
    },
    {
        nombre: "Imperial Grande",
        categoria: "Cesteria Nordica",
        precio: 12900,
        imagen: "imperial-grande.jpg",
        descripcion: "Medida: 30 cm. Color natural.",
        variantes: ["Natural"],
        etiqueta: ""
    },
    {
        nombre: "Redondo Magnolia",
        categoria: "Cesteria Nordica",
        precio: 5900,
        imagen: "redondo-magnolia.jpg",
        descripcion: "Medida: 15 cm.",
        variantes: ["Natural"],
        etiqueta: ""
    },
    {
        nombre: "Magnolia Combinado",
        categoria: "Cesteria Nordica",
        precio: 6500,
        imagen: "magnolia-combinado.jpg",
        descripcion: "Medida: 15 cm.",
        variantes: ["Combinado"],
        etiqueta: ""
    },
    {
        nombre: "Cesto Canela",
        categoria: "Cesteria Nordica",
        precio: 7500,
        imagen: "cesto-canela.jpg",
        descripcion: "Medida: 20 cm.",
        variantes: ["Natural"],
        etiqueta: ""
    },
    {
        nombre: "Plato de Sitio Combinado",
        categoria: "Cesteria Nordica",
        precio: 7900,
        imagen: "plato-sitio-combinado.jpg",
        descripcion: "Medida: 30 cm.",
        variantes: ["Natural con Rojo"],
        etiqueta: "Nuevo"
    },
    {
        nombre: "Canasta Corazón Chica",
        categoria: "Cesteria Nordica",
        precio: 5900,
        imagen: "canasta-corazon-chica.jpg",
        descripcion: "Medida: 8 cm. Color natural.",
        variantes: ["Natural"],
        etiqueta: ""
    },
    {
        nombre: "Canasta Corazón Mediana",
        categoria: "Cesteria Nordica",
        precio: 7500,
        imagen: "canasta-corazon-mediana.jpg",
        descripcion: "Medida: 10 cm. Color natural.",
        variantes: ["Natural"],
        etiqueta: "Nuevo"
    },
    {
        nombre: "Plato de Sitio Natural",
        categoria: "Cesteria Nordica",
        precio: 7500,
        imagen: "plato-sitio-natural.jpg",
        descripcion: "Medida: 30 cm.",
        variantes: ["Natural"],
        etiqueta: ""
    },
    {
        nombre: "Plato de Sitio Yute",
        categoria: "Cesteria Nordica",
        precio: 7900,
        imagen: "plato-sitio.jpg",
        descripcion: "Medida: 30 cm.",
        variantes: ["Color:Yute", "Color:Negro"],
        etiqueta: "Nuevo"
    },

    // --- PERCHEROS ---
    {
        nombre: "Recibidor Mica",
        categoria: "Percheros",
        precio: 6500,
        imagen: "recibidor-mica.jpg",
        descripcion: "Diseño con estante y ganchos. Consultar colores.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Perchero Tina",
        categoria: "Percheros",
        precio: 6500,
        imagen: "perchero-tina.jpg",
        descripcion: "Perchero de pared práctico y moderno.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Recibidor Iris",
        categoria: "Percheros",
        precio: 7500,
        imagen: "recibidor-iris.jpg",
        descripcion: "Modelo Iris con detalle en relieve y estante.",
        variantes: ["Consultar Colores"],
        etiqueta: "Más vendido"
    },
    {
        nombre: "Recibidor Hogar",
        categoria: "Percheros",
        precio: 7500,
        imagen: "recibidor-hogar.jpg",
        descripcion: "Frase grabada 'Hogar dulce hogar'.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Recibidor Home",
        categoria: "Percheros",
        precio: 7500,
        imagen: "recibidor-home.jpg",
        descripcion: "Diseño amplio con estante y frase 'Home'.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Perchero Bienvenidos",
        categoria: "Percheros",
        precio: 9500,
        imagen: "perchero-bienvenidos.jpg",
        descripcion: "Recibidor completo con ganchos.",
        variantes: ["Consultar Colores"],
        etiqueta: "Nuevo"
    },
    {
        nombre: "Perchero Home",
        categoria: "Percheros",
        precio: 9500,
        imagen: "perchero-home.jpg",
        descripcion: "Recibidor completo con ganchos.",
        variantes: ["Consultar Colores"],
        etiqueta: "Nuevo"
    },

    // --- POSA VASOS ---
    {
        nombre: "Posa Vaso Corazon",
        categoria: "Posa Vasos",
        precio: 490,
        imagen: "posavaso-corazon.jpg",
        descripcion: "Medida: 10 cm. Precio por unidad.",
        variantes: [],
        etiqueta: ""
    },
    {
        nombre: "Posa Vaso Chopp",
        categoria: "Posa Vasos",
        precio: 490,
        imagen: "posavaso-chopp.jpg",
        descripcion: "Medida: 10 cm. Precio por unidad.",
        variantes: [],
        etiqueta: ""
    },


    // --- PORTAVELAS ---
    {
        nombre: "Doble Rama",
        categoria: "Portavelas",
        precio: 1400,
        imagen: "portavela-doble-rama.jpg",
        descripcion: "Incluye velitas. Consultar colores.",
        variantes: ["Natural", "Blanco", "Negro"],
        etiqueta: ""
    },
    {
        nombre: "Fusta x3",
        categoria: "Portavelas",
        precio: 1900,
        imagen: "portavela-fusta-3.jpg",
        descripcion: "Incluye velitas. Consultar colores.",
        variantes: ["Natural", "Blanco", "Negro"],
        etiqueta: ""
    },
    {
        nombre: "Simple Redondo",
        categoria: "Portavelas",
        precio: 1200,
        imagen: "portavela-simple-redondo.jpg",
        descripcion: "Medida: 10 cm. Incluye velita.",
        variantes: ["Natural", "Blanco", "Negro"],
        etiqueta: ""
    },
    {
        nombre: "Simple Oval",
        categoria: "Portavelas",
        precio: 1200,
        imagen: "portavela-simple-oval.jpg",
        descripcion: "Medida: 10 cm. Incluye velita.",
        variantes: ["Natural", "Blanco", "Negro"],
        etiqueta: ""
    },
    {
        nombre: "Fusta x5",
        categoria: "Portavelas",
        precio: 4500,
        imagen: "portavela-fusta-5.jpg",
        descripcion: "Incluye velitas. Consultar colores.",
        variantes: ["Natural", "Blanco", "Negro"],
        etiqueta: ""
    },
    {
        nombre: "Portavela Atril",
        categoria: "Portavelas",
        precio: 1900,
        imagen: "portavela-atril.jpg",
        descripcion: "Incluye velita y frases decorativas.",
        variantes: ["Frase Paz", "Frase Amor", "Frase Familia"],
        etiqueta: "Nuevo"
    },
    {
        nombre: "Doble Mandala",
        categoria: "Portavelas",
        precio: 1400,
        imagen: "portavela-doble-mandala.jpg",
        descripcion: "Incluye velitas. Consultar colores.",
        variantes: ["Natural", "Blanco", "Negro"],
        etiqueta: ""
    },
    {
        nombre: "Simple Octogonal",
        categoria: "Portavelas",
        precio: 1200,
        imagen: "portavela-simple-octogonal.jpg",
        descripcion: "Medida: 10 cm. Incluye velita.",
        variantes: ["Natural", "Blanco", "Negro"],
        etiqueta: ""
    },
    {
        nombre: "Doble Love",
        categoria: "Portavelas",
        precio: 1400,
        imagen: "portavela-doble-love.jpg",
        descripcion: "Incluye velitas. Consultar colores.",
        variantes: ["Natural", "Blanco", "Negro"],
        etiqueta: ""
    },

    // --- PORTALLAVES ---
    {
        nombre: "Portallaves 'En está casa...'",
        categoria: "Portallaves",
        precio: 3900,
        imagen: "portallaves-en-esta-casa.jpg",
        descripcion: "Medida: 18x15 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Portallaves Home",
        categoria: "Portallaves",
        precio: 3900,
        imagen: "portallaves-home.jpg",
        descripcion: "Medida: 18x15 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: "Más vendido"
    },
    {
        nombre: "Portallaves Bienvenidos",
        categoria: "Portallaves",
        precio: 3900,
        imagen: "portallaves-bienvenidos.jpg",
        descripcion: "Medida: 18x15 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Portallaves Welcome Home",
        categoria: "Portallaves",
        precio: 3900,
        imagen: "portallaves-welcome.jpg",
        descripcion: "Medida: 18x15 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Portallaves Hello!",
        categoria: "Portallaves",
        precio: 3900,
        imagen: "portallaves-hello.jpg",
        descripcion: "Medida: 18x15 cm. Consultar colores disponibles.",
        variantes: ["Consultar Colores"],
        etiqueta: "Nuevo"
    },

    // --- CANASTAS MATERAS ---
    {
        nombre: "División con Tira",
        categoria: "Canastas Materas",
        precio: 7200,
        imagen: "division-con-tira.jpg",
        descripcion: "Canasta matera de eco cuero con división y tira.",
        variantes: ["Negro"],
        etiqueta: ""
    },
    {
        nombre: "División Rígida",
        categoria: "Canastas Materas",
        precio: 7200,
        imagen: "division-rigida.jpg",
        descripcion: "Canasta matera de eco cuero con división firme y manija rígida.",
        variantes: ["Negro"],
        etiqueta: "Más vendido"
    },
    {
        nombre: "Rígida Simple",
        categoria: "Canastas Materas",
        precio: 6800,
        imagen: "rigida-simple.jpg",
        descripcion: "Canasta de eco cuero con manija rígida.",
        variantes: ["Negro", "Verde", "Suela"],
        etiqueta: ""
    },
    {
        nombre: "Canasta Oval",
        categoria: "Canastas Materas",
        precio: 6200,
        imagen: "canasta-oval.jpg",
        descripcion: "Diseño ovalado en eco cuero.",
        variantes: ["Negro"],
        etiqueta: ""
    },
    {
        nombre: "Simple con Tira",
        categoria: "Canastas Materas",
        precio: 6200,
        imagen: "simple-con-tira.jpg",
        descripcion: "Canasta matera de eco cuero con tira.",
        variantes: ["Negro", "Verde", "Suela"],
        etiqueta: ""
    },

    // --- DETALLES DECO ---
    {
        nombre: "Cenicero Redondo",
        categoria: "Detalles Deco",
        precio: 3500,
        imagen: "cenicero-redondo.jpg",
        descripcion: "Medida: 6 cm.",
        variantes: ["Tostado"],
        etiqueta: ""
    },
    {
        nombre: "Cenicero Ovalado",
        categoria: "Detalles Deco",
        precio: 3500,
        imagen: "cenicero-ovalado.jpg",
        descripcion: "Medida: 10 cm.",
        variantes: ["Tostado"],
        etiqueta: ""
    },
    {
        nombre: "Jabonera Pino",
        categoria: "Detalles Deco",
        precio: 750,
        imagen: "jabonera-pino.jpg",
        descripcion: "Medida: 12,5x6,5 cm.",
        variantes: ["Madera Natural"],
        etiqueta: ""
    },

    // --- NAVIDAD ---
    {   
        nombre: "Combo Emprendedor Navidad",
        categoria: "Navidad",
        precio: 69000,
        imagen: "combo-emprendedor-navidad.jpg",
        descripcion: "El combo incluye:5 pack de renos, 5 arbolitos, 5 portavelas, 5 palabras paz, 5 velas latas chicas, 5 pack de adornitos",
        variantes: ["Consultar Colores. Aromas surtidos"],
        etiqueta: "Nuevo",
    },
    {
        nombre: "Combo Emprendedor Aromático Navidad",
        categoria: "Navidad",
        precio: 79000,
        imagen: "combo-emprendedor-aromatico-navidad.jpg",
        descripcion: "El combo incluye:3 velas whisky, 3 velas frasco, 3 velas lata, 4 Home 150ml, 4 Home 250 ml, 4 difusores 150 ml, 4 difusores 250ml",
        variantes: ["Aromas Surtidos"],
        etiqueta: "Nuevo",
    },
       {
        nombre: "Pack de Renos",
        categoria: "Navidad",
        precio: 3500,
        imagen: "reno-duo.jpg",
        descripcion: "Set de dos renos de madera en distintas medidas.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Árbol Pino Natural",
        categoria: "Navidad",
        precio: 4500,
        imagen: "arbol-calado-estrellas.jpg",
        descripcion: "Árbol de Pino decorativo con base.",
        variantes: ["Estrella", "Nevado", "Puntas"],
        etiqueta: ""
    },
    {
        nombre: "Árbol Melamina",
        categoria: "Navidad",
        precio: 4500,
        imagen: "arbol-navideno-blanco.jpg",
        descripcion: "Árbol de Melamina decorativo con base.",
        variantes: ["Estrella", "Nevado", "Puntas"],
        etiqueta: ""
    },
    {
        nombre: "Bandeja Navideña con Frase",
        categoria: "Navidad",
        precio: 1600,
        imagen: "bandeja-navidena.jpg",
        descripcion: "Bandeja decorativa con grabado láser festivo ('Ho Ho Ho' / 'Feliz Navidad').",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Árbol de pino con mensajes (estrellas)",
        categoria: "Navidad",
        precio: 5200,
        imagen: "arbol-pino-mensaje-estrellas.jpg",
        descripcion: "Árbol de pino decorativo con detalles de estrellas y base.",
        variantes: ["Pino Natural"],
        etiqueta: ""
    },    
    {
        nombre: "Árbol de pino con mensajes (nevado)",
        categoria: "Navidad",
        precio: 5200,
        imagen: "arbol-pino-mensaje-nevado.jpg",
        descripcion: "Árbol de pino decorativo con detalles de nevado y base.",
        variantes: ["Pino Natural"],
        etiqueta: ""
    },   
    {
        nombre: "Árbol de pino con mensajes (puntas)",
        categoria: "Navidad",
        precio: 5200,
        imagen: "arbol-pino-mensaje-puntas.jpg",
        descripcion: "Árbol de pino decorativo con detalles de puntas y base.",
        variantes: ["Pino Natural"],
        etiqueta: ""
    },   
    {
        nombre: "Portavela Atril de Navidad",
        categoria: "Navidad",
        precio: 1900,
        imagen: "portavela-atril-navidad.jpg",
        descripcion: "Incluye velita y frases decorativas.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Portavela Atril de Navidad con Tarjetas",
        categoria: "Navidad",
        precio: 1900,
        imagen: "portavela-atril-tarjeta.jpg",
        descripcion: "Incluye velita y frases decorativas.",
        variantes: ["Consultar Colores"],
        etiqueta: ""
    },
    {
        nombre: "Portavelas Navideños con Formas",
        categoria: "Navidad",
        precio: 1200,
        imagen: "portavelas-formas-navidad.jpg",
        descripcion: "Incluye velita. Consultar colores",
        variantes: ["Estrella", "Corazón", "Pino"],
        etiqueta: ""
    },
    {
        nombre: "Pack de Adornos Navideños",
        categoria: "Navidad",
        precio: 1400,
        imagen: "pack-adornos-navidad.jpg",
        descripcion: "Pack de 4 adornitos navideños surtidos",
        variantes: ["Dorado", "Plateado"],
        etiqueta: "Nuevo"
    },
    {
        nombre: "Pack de Adornos Navideños",
        categoria: "Navidad",
        precio: 1200,
        imagen: "pack-adornos-navidadeños.jpg",
        descripcion: "Pack de 4 adornitos navideños surtidos",
        variantes: ["Consultar Colores"],
        etiqueta: "Nuevo"
    },
    {
        nombre: "Pesebre María",
        categoria: "Navidad",
        precio: 3900,
        imagen: "pesebre-melamina.jpg",
        descripcion: "Pesebre de melamina. Medida aproximada: 20x15cm.",
        variantes: ["Color Único:Gris"],
        etiqueta: "Nuevo"
    },
];