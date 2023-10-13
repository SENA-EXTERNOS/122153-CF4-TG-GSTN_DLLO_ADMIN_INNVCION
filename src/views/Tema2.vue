<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El servicio

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema2/img-1.png')

      .col-md-6.col-lg-8
        p.mb-5 Servicio se define como la actividad o actividades llevadas a cabo con el fin de ayudar a satisfacer las necesidades de otra persona y en términos comerciales, es el conjunto de actividades realizadas por un proveedor o empresa enfocadas en satisfacer las necesidades de sus clientes o consumidores.



    .row.justify-content-center
      .col-md-8.col-lg-10
        .tarjeta.p-3.mb-5.fnd-2
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img-2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-1.text-black Servicio al cliente
                  p.text-small Para complementar el tema lo invitamos a ver el video <b>“Servicio al cliente”. </b>
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="src='https://www.youtube.com/watch?v=EXp6G1ZZkpg'" target="_blank")
                    span Ver video
                    i.fas.fa-video

    h3.mb-5 Ciclo del servicio y momentos de verdad
    p.mb-5 El ciclo de servicio o ciclo de atención al cliente, representa la base de una experiencia omnicanal con los clientes. Se trata de la estructuración de todo el recorrido que el usuario/cliente debe realizar, desde su primer contacto con la empresa hasta que finaliza su experiencia.

    .row.justify-content-center.mb-5
      .col-md-9.col-lg-10.mb-3
        .bloque-texto-e.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            p.text-regular “El ciclo del servicio constituye una de las herramientas indispensables de la Gerencia del Servicio. En él se refleja la sucesión ordenada (secuencia repetible) de todos y cada uno de los contactos que tiene el cliente en la organización, bien sea con personas o con elementos. Estos pueden ser estelares (cuando el cliente queda satisfecho con el servicio), o amargos (cuando se produce contrariedad o no existe satisfacción por el servicio prestado).” (p. 86).

            i.fas.fa-quote-right
          .row.align-items-end
            .col
              .bloque-texto-e__autor
                b.mb-0 Vargas, M. & Aldana de Vega, L. (2006)


      .row.justify-content-center
        .col-lg-8
          .cajon.color-acento-botones.p-4.mb-4.fnd-8
            p Al implementar los ciclos de servicio, la empresa observa a través de los ojos del cliente y así mismo percibe la calidad del servicio.

    p.mb-5 Los ciclos de servicio se representan gráficamente en forma de circunferencia y se ubica cada punto crítico como “momento de verdad”.
    p.mb-5 Observe el siguiente ejemplo:
    .row.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 2
            p.mb-0 <em>Ejemplo ciclo del servicio</em>


        .col-lg-10.mb-5
          .row.justify-content-center.fnd-11
            .col-lg-10
              figure.my-5
                img(src='@/assets/curso/temas/tema2/img-3.svg')

    p.mb-5 Los “momentos de verdad” son todos los instantes en que el cliente tiene contacto con la empresa y sobre la base de este contacto se define un juicio sobre la calidad del servicio prestado.
    p.mb-5  Este “momento de verdad” también se puede dar cuando el cliente llega al lugar del servicio y se pone en contacto con algunos elementos de la empresa, y no necesariamente con el contacto humano; por ejemplo, la oficina, infraestructura en general, página web, robot de servicio, llamada, correo electrónico, entre otros.
    p.mb-5  Cabe aclarar que el servicio debe identificar y establecer una estrategia para que todos esos “momentos de verdad” se conviertan en necesidades satisfechas para sus clientes.
    .row.justify-content-center
      .col-lg-8
        .cajon.color-primario.p-4.mb-4.fnd-10

          p.text-black Recuerde
          p Los momentos de verdad no ocurren al azar, normalmente se dan en una secuencia lógica y medible, lo que posibilita identificar las mejoras necesarias para proporcionar servicios con calidad.

    p.mb-5 Dentro del ciclo del servicio se encuentran las siguientes etapas:
    .row.justify-content-center
      .col-lg-8
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-10.mb-4.mb-md-0
              p Identificar los puntos críticos en los “momentos de verdad”.
            .col-md-2
              figure
                img.img-50(src='@/assets/curso/temas/tema2/img-4.svg')
          .row
            .col-md-2
              figure.mb-3
                img.img-50(src='@/assets/curso/temas/tema2/img-5.svg')
            .col-md-10.mb-4.mb-md-0
              p.text-left Definir el requerimiento del cliente en cada punto crítico.

          .row
            .col-md-10.mb-4.mb-md-0
              p Crear la estrategia de servicio para cada punto crítico.
            .col-md-2
              figure
                img.img-50(src='@/assets/curso/temas/tema2/img-6.svg')
          .row
            .col-md-2
              figure.mb-3
                img.img-50(src='@/assets/curso/temas/tema2/img-8.svg')
            .col-md-10.mb-4.mb-md-0
              p.text-left Establecer las posibles soluciones o alternativas según requerimientos de los clientes.

          .row
            .col-md-10.mb-4.mb-md-0
              p Estructurar y formular la encuesta de satisfacción.
            .col-md-2
              figure
                img.img-50(src='@/assets/curso/temas/tema2/img-9.svg')


    h3(data-aos="fade-right").mb-4
      i.fas.fa-square.cac.me-3
      |Portafolio de servicios

    p Es un documento físico o una presentación digital en la cual una organización o persona natural presenta o describe la información más importante de su negocio.

    p.mb-5 A continuación, se describen algunos datos relevantes a incluir en un portafolio de servicios.

    figure.mb-5
      img(src='@/assets/curso/temas/tema2/img-10.svg')

    p Es importante tener presente que antes de iniciar la construcción del portafolio de servicios, se deben definir los servicios o productos que se quieren mostrar, ofrecer y promover; además, identificar el tipo de cliente al cual estará dirigido su contenido.

    p.mb-5 Conozca algunos aspectos a tener en cuenta en la elaboración de un portafolio de servicios.

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema2/img-11.svg')

      .col-md-6.col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-5-")
              .row(titulo="Cliente objetivo")
                p Se debe tener claro cuál es el mercado al que se pretende llegar (necesidades y características) con la estructuración del portafolio.
              .row(titulo="Contenido")
                p Definir qué información se incluirá en el portafolio, la cual debe ser concisa y clara, con el objetivo de generar aceptación y comprensión detallada de los productos o servicios.
              .row(titulo="Diseño")
                p Es necesario aclarar que el objetivo principal del portafolio es captar la atención e incentivar la decisión de compra, por tanto, se debe establecer un diseño llamativo e innovador acorde al modelo de negocio y la actividad de la empresa.
              .row(titulo="Formato o medio de divulgación")
                p Una vez finalizada la construcción del portafolio de servicios se debe definir el medio de divulgación, por ejemplo, presentarlo en forma de catálogo o compartirse de manera digital, bien sea por correo electrónico o por la página web de la compañía.


    h3(data-aos="fade-right").mb-4
      i.fas.fa-square.cac.me-3
      |Normas técnicas del servicio

    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-5.fnd-8

          p Las normas técnicas son documentos diseñados para establecer criterios técnicos y de calidad sobre un producto, proceso o servicio. Estos documentos deben estar aprobados por los organismos competentes y reconocidos en el ámbito nacional e internacional.
    p.mb-5 Las Normas ISO 9000 se crearon para asistir a las organizaciones en la implementación y la operación de sistemas de gestión de la calidad. A continuación, se describen cada una de ellas:

    .row.justify-content-flex-start
      .col-lg-1.img-c.d-none.d-lg-block
        figure
          img.img-h400(src='@/assets/curso/temas/tema2/img-line.svg')
      .col-lg-11.col-md-10
        .row.justify-content-center.mt-45.mb-36
          .col-lg-2.mb-sm-3
            figure
              img.img-136(src='@/assets/curso/temas/tema2/img-12.svg')
          .col-lg-10
            h3 Norma ISO 9000
            p Describe los fundamentos de los sistemas de gestión de la calidad y especifica la terminología de los sistemas de gestión de la calidad.
        .row.justify-content-center.mb-36
          .col-lg-2.mb-sm-3
            figure
              img.img-136(src='@/assets/curso/temas/tema2/img-13.svg')
          .col-lg-10
            h3 Norma ISO 9001
            p Especifica los requisitos para los sistemas de gestión de la calidad aplicables a toda organización que necesite demostrar su capacidad para proporcionar productos que cumplan los requisitos de sus clientes y los reglamentarios que le sean de aplicación. El objetivo de esta norma es aumentar la satisfacción del cliente.
        .row.justify-content-center.mb-36
          .col-lg-2.mb-sm-3
            figure
              img.img-136(src='@/assets/curso/temas/tema2/img-14.svg')
          .col-lg-10
            h3 Norma ISO 9004
            p Proporciona directrices que consideran tanto la eficacia como la eficiencia del sistema de gestión de la calidad. El objetivo de esta norma es la mejora del desempeño de la organización y la satisfacción de los clientes y de las partes interesadas.
        .row.mb-5.justify-content-center
          .col-lg-2.mb-sm-3
            figure
              img.img-136(src='@/assets/curso/temas/tema2/img-15.svg')
          .col-lg-10
            h3 Norma ISO 19011
            p Proporciona orientación relativa a las auditorías de sistemas de gestión de la calidad y de gestión ambiental.

    p.mb-5 Todas ellas forman un conjunto coherente de normas de sistemas de gestión de la calidad que facilitan la mutua comprensión en el comercio nacional e internacional.
    p.mb-5 Dentro de los principios de calidad de esta norma técnica se identifican:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-contenido.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-16.svg' alt='AvatarTop')
        h2.text-center Enfoque al cliente
        p.text-center La organización depende de sus clientes, por lo tanto, es fundamental comprender tanto sus necesidades actuales como las futuras y satisfacerlas.

      .tarjeta.color-acento-contenido.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-17.svg' alt='AvatarTop')
        h2.text-center Liderazgo
        p.text-center Los líderes deben establecer y mantener un ambiente interno agradable, para que las personas se involucren en el cumplimiento de los objetivos propuestos en la organización.
      .tarjeta.color-acento-contenido.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-18.svg' alt='AvatarTop')
        h2.text-center Participación del personal
        p.text-center El personal es la esencia de la compañía, por tanto, su compromiso permite que sus habilidades y competencias sean usadas en beneficio de la organización.

      .tarjeta.color-acento-contenido.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-19.svg' alt='AvatarTop')
        h2.text-center Enfoque basado en procesos
        p.text-center Cuando las actividades y los recursos se relacionan como un proceso se alcanzan resultados de manera eficiente.
      .tarjeta.color-acento-contenido.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-20.svg' alt='AvatarTop')
        h2.text-center Enfoque de sistema para la gestión
        p.text-center Identificar, entender y gestionar los procesos interrelacionados como un sistema.

      .tarjeta.color-acento-contenido.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-21.svg' alt='AvatarTop')
        h2.text-center Mejora continua
        p.text-center La mejora continua debe ser un objetivo permanente en la organización.
      .tarjeta.color-acento-contenido.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-22.svg' alt='AvatarTop')
        h2.text-center Enfoque basado en hechos para la toma de decisión
        p.text-center La toma de decisiones se debe basar en los análisis de la información y los datos.

      .tarjeta.color-acento-contenido.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-23.svg' alt='AvatarTop')
        h2.text-center Relaciones mutuamente beneficiosas con el proveedor
        p.text-center Las empresas y sus proveedores deben establecer relaciones sólidas de mutuo beneficio.



    h3(data-aos="fade-right").mb-4
      i.fas.fa-square.cac.me-3
      |Procedimientos y políticas

    p.mb-5 Teniendo como base la norma ISO 9001, dentro de las organizaciones se deben establecer procesos y procedimientos enfocados en el servicio al cliente, los cuales se describen a continuación:


    ImagenInfografica.t-w.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img-24.svg')

      .tarjeta.color-acento-contenido.p-3(x="50%" y="6.3%" numero="4")
        .h5.mb-2 Finalización y despedida
        p La despedida debe generar una sensación positiva, cortés, amable y constatar que el problema o necesidad quedó satisfecha.

      .tarjeta.color-acento-contenido.p-3(x="8.6%" y="50%" numero="1")
        .h5.mb-2 Establecimiento de contacto
        p El primer contacto con el cliente debe ser un momento estratégico, con un trato diligente, eficiente y amable.

      .tarjeta.color-acento-contenido.p-3(x="92.9%" y="49.8%" numero="3")
        .h5.mb-2 Resolución de problemas
        p Después de establecida la conexión positiva con el cliente y conocer su necesidad, se debe brindar una solución oportuna, exponerle cada situación por pequeña que sea y hacerle sentir que la organización se interesa por ofrecer una solución eficiente.

      .tarjeta.color-acento-contenido.p-3(x="50%" y="93.6%" numero="2")
        .h5.mb-2 Escucha activa y recopilación de la información
        p El cliente debe sentirse escuchado y que sus necesidades son importantes. Una buena estrategia es hacerle preguntas precisas para profundizar en su necesidad.








</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
