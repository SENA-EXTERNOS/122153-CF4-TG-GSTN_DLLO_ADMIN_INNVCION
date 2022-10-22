export default {
  global: {
    componenteFormativo:
      'Los clientes, el servicio y la comunicación organizacional',
    descripcionCurso:
      'Prestar un excelente servicio al cliente se ha convertido en la llave estratégica para la mayoría de los negocios, pues conseguir y mantener los clientes implica calidad, imagen, rentabilidad y competitividad. Es así como este componente formativo presenta una descripción desglosada sobre cada uno de los elementos necesarios para la estructuración de un plan de servicios empresarial completo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3-.svg/'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2-.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Etiqueta y protocolo empresarial',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'La comunicación empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Comunicación interna y externa',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Plan estratégico de comunicaciones',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Confidencialidad en el manejo de la información y datos personales',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Canales de atención al cliente',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Medios tecnológicos en el servicio al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Normativa seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Blanco García, C. (2013). <em>Comunicación y atención al cliente.</em> Macmillan Iberia, S.A. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/42955?page=9 ',
    },
    {
      referencia:
        'Boeree, G. (2003).<em> Teoría de la personalidad.</em> Traducción al castellano: Dr. Rafael Gautier. Artículo en línea ',
      link: 'http://webspace.ship.edu/cgboer/maslowesp.html ',
    },

    {
      referencia:
        'Bueno, A. (2021).<em> La tecnología</em>, una herramienta de servicio al cliente (Trabajo de grado, Universidad Militar Nueva Granada). Repositorio Universidad Militar Nueva Granada. ',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/39544/BuenoRodriguezAdrianaLissette2021.pdf?sequence=3&isAllowed=y ',
    },

    {
      referencia:
        'Camacho Castellanos, J. C. (2012).<em> Marketing de servicios.</em> B - EUMED.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/34494?page=17 ',
    },
    {
      referencia:
        'Mateos de Pablo Blanco, M. Á. (2019). <em>Atención al cliente y calidad en el servicio.</em> COMM002PO. IC Editorial. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/124251?page=5',
    },
    {
      referencia:
        'O´Brien, James (2001). <em>Sistemas de Información Gerencial. </em>McGraw-Hill/Interamericana. 4ta Edición. Colombia. ',
    },
    {
      referencia:
        'Pérez Rodríguez, M. D. (Coord.). (2012). <em>Calidad de servicio y Atención al Cliente </em>(2a. ed.). Editorial ICB. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/113201?page=1 ',
    },
    {
      referencia:
        'Tur-Viñes, V. & Monserrat-Gauchi, J. (2014). <em> El plan estratégico de comunicación. Estructura y Funciones. Razón y Palabra,</em> (88). ',
      link:
        'http://www.razonypalabra.org.mx/N/N88/Varia/46_VinesGauchi_V88.pdf ',
    },
    {
      referencia:
        'Vargas, M. & Aldana de Vega, L. (2006).<em> Calidad y servicio. Conceptos y herramientas.</em> Universidad de La Sabana. Ecoe Ediciones. 2006. ',
      link:
        'http://190.116.26.93:2171/mdv-biblioteca-virtual/libro/documento/eJXNoCbVAnZ8hFKYtJzja._CALIDAD_Y_SERVICIOS_-_CONCEPTOS_Y_HERRAMIENTAS.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        'elemento especial del servicio que consiste en el contacto directo del personal encargado del servicio al cliente con los consumidores, compradores o clientes.',
    },
    {
      termino: 'Brochure',
      significado:
        'folleto o documentos gráfico físico o digital, que permite mostrar los productos o servicios que ofrece una empresa.',
    },
    {
      termino: 'Call center',
      significado:
        'centro de atención por canal telefónico que permite la unión entre la organización y el cliente.',
    },
    {
      termino: 'Control de calidad',
      significado:
        'aplicación de técnicas y medios para lograr, mejorar o mantener la calidad de un producto o servicio.',
    },
    {
      termino: 'Encuesta de satisfacción',
      significado:
        'es un instrumento de recolección de información, que permite a la empresa conocer el nivel de satisfacción del cliente frente a la experiencia vivida en la recepción de un servicio o la adquisición de un producto.',
    },
    {
      termino: 'Fidelización de clientes',
      significado:
        'conjunto de estrategias y técnicas enfocadas en lograr que los clientes que han llegado a la empresa sigan comprando de manera continua y recurrente.',
    },
    {
      termino: 'Mailing',
      significado:
        'herramienta de comunicación que consiste en enviar información vía correo electrónico a los clientes, posibles clientes o usuarios.',
    },
    {
      termino: 'Marketing digital',
      significado:
        'es una nueva forma de hacer mercadeo, se aplica por medio del uso de herramientas tecnológicas y por medio de canales virtuales.',
    },
    {
      termino: 'Mercado',
      significado:
        'sitio físico o virtual donde se encuentran los clientes y los vendedores para realizar una transacción comercial.',
    },
    {
      termino: 'Omnicanal',
      significado:
        'estrategia de comunicación aplicada con los clientes donde se usan diferentes canales de comunicación.',
    },
    {
      termino: 'Producto',
      significado:
        'bien tangible o intangible que puede satisfacer las necesidades de un cliente.',
    },
    {
      termino: 'Publicidad',
      significado:
        'información utilizada para persuadir o motivar al acercamiento o adquisición de un producto, programa o servicio.',
    },
  ],
  complementario: [
    {
      tema: 'Etiqueta y protocolo empresarial',
      referencia:
        'Educaton Colombia. (2019). Etiqueta y Protocolo Empresarial (video). YouTube. https://www.youtube.com/watch?v=VGziKUKzC4E ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VGziKUKzC4E ',
    },

    {
      tema: 'Comunicación interna y externa',
      referencia:
        'GCFAprendeLibre. (2022). Tipo de comunicación organizacional Comunicación empresarial (Video). YouTube. https://youtu.be/eb0kP8iMpWI',
      tipo: 'Video',
      link: 'https://youtu.be/eb0kP8iMpWI',
    },

    {
      tema: 'Plan estratégico de comunicaciones',
      referencia:
        'Burneo, P. (2014). Metodología para realizar un Plan Estratégico de Comunicación (video). YouTube. https://www.youtube.com/watch?v=w-HlVQ0PBOg ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=w-HlVQ0PBOg ',
    },

    {
      tema:
        'Confidencialidad en el manejo de la información y datos personales',
      referencia:
        'Explicamos. (2014). La Ley de Protección de Datos (Video). YouTube. https://www.youtube.com/watch?v=Z1MAFgf6KoQ ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z1MAFgf6KoQ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
