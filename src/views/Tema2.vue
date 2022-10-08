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
        p.mb-5 Servicio se define como la actividad o actividades llevadas a cabo con el fin de ayudar a satisfacer las necesidades de otra persona y en términos comerciales es el conjunto de actividades realizadas por un proveedor o empresa enfocadas en satisfacer las necesidades de sus clientes o consumidores. 



    .row.justify-content-center
      .col-md-8.col-lg-10
        .tarjeta.p-3.mb-5.fnd-2
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img-2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video “La Ley de Protección de Datos”
                  p.text-small Para profundizar esta información, se invita a revisar el material complementario donde encontrará el video “La Ley de Protección de Datos”.  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="src='https://www.youtube.com/embed/2L91WMqw96A'" target="_blank")
                    span Ver video
                    i.fas.fa-video

    h3 Ciclo del servicio y momentos de verdad
    p.mb-5 El ciclo de servicio o ciclo de atención al cliente representa la base de una experiencia omnicanal con los clientes. Se trata de la estructuración de todo el recorrido que el usuario/cliente debe hacer desde su primer contacto con la empresa hasta que finaliza su experiencia.
    .row.justify-content-center.mb-5
      .col-md-9.col-lg-10.mb-3
        .bloque-texto-e.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            h2.text-regular Según Vargas, M. & Aldana de Vega, L. (2006):  “El ciclo del servicio constituye una de las herramientas indispensables de la Gerencia del servicio. En él se refleja la sucesión ordenada (secuencia repetible) de todos y cada uno de los contactos que tiene el cliente en la organización, bien sea con personas o con elementos. Estos pueden ser estelares (cuando el cliente queda satisfecho con el servicio), o amargos (cuando se produce contrariedad o no existe satisfacción por el servicio prestado)” (p. 86).

            i.fas.fa-quote-right
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                .h3.mb-0 Vargas, M. & Aldana de Vega, L. (2006)


      .row.justify-content-center 
        .col-lg-8
          .cajon.color-acento-botones.p-4.mb-4.fnd-8
            p Al implementar los ciclos de servicio, la empresa observa a través de los ojos del cliente y así mismo percibe la calidad del servicio.

    p.mb-5 Los ciclos de servicio se representan gráficamente en forma de circunferencia y se ubica cada punto crítico como “momento de verdad”.
    p.mb-5 Observe el siguiente ejemplo:
    .row.justify-content-center 
        .col-lg-10
          .titulo-sexto.color-acento-contenido                
            h5 Figura 2. 
            span Ejemplo ciclo del servicio
        .row.justify-content-center 
          h3.text-center Ejemplo ciclo del servicio
          .col-lg-8
            figure.mb-5
            img(src='@/assets/curso/temas/tema2/img-3.svg')

    p.mb-5 Los “momentos de verdad” son todos los instantes en que el cliente tiene contacto con la empresa y sobre la base de este contacto se define un juicio sobre la calidad del servicio prestado.
    p.mb-5  Este “momento de verdad” también se puede dar cuando el cliente llega al lugar del servicio y se pone en contacto con algunos elementos de la empresa, y no necesariamente con el contacto humano; por ejemplo, la oficina, infraestructura en general, página web, robot de servicio, llamada, correo electrónico, entre otros.
    p.mb-5  Cabe aclarar que el servicio debe identificar y establecer una estrategia para que todos esos “momentos de verdad” se conviertan en necesidades satisfechas para sus clientes.      
    .row.justify-content-center 
      .col-lg-8
        .cajon.color-primario.p-4.mb-4.fnd-1

          p.text-black Recuerde 
          p los momentos de verdad no ocurren al azar, normalmente se dan en una secuencia lógica y medible, lo que posibilita identificar las mejoras necesarias para proporcionar servicios con calidad.

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


    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Portafolio de servicios

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
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-5")
              .row(titulo="Cliente objetivo")
                p Se debe tener claro cuál es el mercado al que se pretende llegar (necesidades y características) con la estructuración del portafolio.
              .row(titulo="Contenido")
                p Definir qué información se incluirá en el portafolio está debe ser concisa y clara, a modo de generar aceptación y compresión detallada de los productos o servicios.          
              .row(titulo="Diseño")
                p Es necesario aclarar que el objetivo principal del portafolio es captar la atención e incentivar la decisión de compra, por tanto, se debe establecer un diseño llamativo e innovador acorde al modelo de negocio y la actividad de la empresa.      
              .row(titulo="Formato o medio de divulgación")
                p Una vez finalizada la construcción del portafolio de servicios se debe definir el medio de divulgación, por ejemplo, presentarlo en forma de catálogo o compartirse de manera digital, bien sea por correo electrónico o por la página web de la compañía.  
    
    
    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Normas técnicas del servicio

    .row.justify-content-center 
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-5.fnd-8

          p Las normas técnicas son documentos diseñados para establecer criterios técnicos y de calidad sobre un producto, proceso o servicio. Estos documentos deben estar aprobados por los organismos competentes y reconocidos en el ámbito nacional e internacional.
    p.mb-5 Las Normas ISO 9000 se crearon para asistir a las organizaciones en la implementación y la operación de sistemas de gestión de la calidad. A continuación, se describen cada una de ellas:
    
    br
    br
    br
    br
    br

    br
    br
    br


    p.mb-5 Para ampliar la información, lo invitamos a ver los siguientes videos:


    .row.justify-content-center.mb-5
      .col-md-6.col-lg-6
        a.anexo.mb-4.mb-lg-0(href="https://youtu.be/a-BgD2Cb0po" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace video.</b> Video "Normas de etiqueta y protocolo"

      .col-md-6.col-lg-6
        a.anexo.mb-4.mb-lg-0(href="https://youtu.be/4EabquNz0ME" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace video.</b>  Video "Protocolo de servicio"


    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Elementos corporativos

    p.mb-5 Son todos aquellos componentes que permiten que una organización u empresa sea diferente de las demás, por tanto, es vital su estructuración y de esta forma tener claridad en su direccionamiento.

    .row.justify-content-center 
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4.fnd-8

          p La manifestación física de la marca es de gran valor para la empresa, por medio de ella, los usuarios generan un reconocimiento visual y auditivo, estos elementos construyen la imagen corporativa de la empresa, siendo esta el conjunto de creencias, actitudes, y conocimientos propios de la organización; además de ser el reflejo de cómo es una empresa, su personalidad, su calidad, su prestigio, sus valores y emociones con los cuales los clientes se pueden sentir identificados.

    p.mb-3 Por el contrario, la identidad empresarial son todas aquellas estrategias que se establecen en cuanto a señales textuales y visuales que conforman el “TODO” de una marca o empresa (elementos corporativos), es la forma de proyectar la organización hacia los consumidores y la sociedad.
    p.mb-5 Como elementos corporativos encontramos:

    .tarjeta.tarjeta--gris.p-4.mb-5.ln-am
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="Nombre")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema3/img-2.svg')
          .col-md-6
            p.text-black Nombre
            p Es la principal identidad verbal. La marca se debe leer y entender de esta forma se puede nombrar, recordar, buscar y recomendar.
        
        .row(titulo="El isotipo")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema3/img-3.png')
          .col-md-6
            p.text-black El isotipo
            p Conocido como símbolo o imagotipo, es un elemento utilizado para identificar una marca, ya sea de una empresa, un producto, un servicio, un evento, una campaña de comunicación o de una consigna ideológica, este símbolo no incluye el nombre de la entidad identificada. 

        .row(titulo="El logotipo")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema3/img-4.png')
          .col-md-6
            p.text-black El logotipo
            p Viene a ser el nombre de la empresa o marca con una tipografía y composición visual concreta.   

        .row(titulo="El isologotipo")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema3/img-5.png')
          .col-md-6
            p.text-black El isologotipo
            p Es un identificador gráfico que se utiliza para firmar las comunicaciones de una entidad (organización, institución, producto, servicio, etc.). El isologotipo se forma al unir un símbolo gráfico y un estímulo textual representado con signos tipográficos. 

        .row(titulo="Slogan")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema3/img-6-.png')
          .col-md-6
            p.text-black Slogan
            p Es una frase o palabra corta, un lema original e impactante, este suele ser fácil de recordar en los consumidores cuando es innovador y creativo, además puede hablar de los beneficios del producto.      
        
        .row(titulo="Colores institucionales")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema3/img-6.png')
          .col-md-6
            p.text-black Colores institucionales
            p Los colores corporativos son un aspecto que ayudan a definir la identidad corporativa de una empresa. El uso de un color predominante o la combinación de algunos (en sus diferentes elementos, logo, página web, nombre, etc.), ayuda a definir la personalidad o el estilo de una empresa.  

        .row(titulo="Misión")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema3/img-7.png')
          .col-md-6
            p.text-black Misión
            p Se define como la razón de ser del negocio, a qué se dedica, quién es, cuál es su propósito y quién es su mercado objetivo. 

        .row(titulo="Visión")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema3/img-8.png')
          .col-md-6
            p.text-black Visión
            p Es la meta o proyección que la organización se propone a largo plazo, en ella se plantean las aspiraciones y expectativas que se pretender alcanzar en un futuro. 

        .row(titulo="Políticas")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema3/img-9-.png')
          .col-md-6
            p.text-black Políticas
            p Son criterios organizacionales en la que se determinan normas de cada área o unidad de la organización. Las políticas pueden ser de carácter particular (para una solo dependencia) y de carácter general (para toda la organización).  

        .row(titulo="Planes")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema3/img-9.png')
          .col-md-6
            p.text-black Planes
            p Son proyecciones futuras que surgen como resultado de la planeación estratégica, se estructuran a largo plazo y suelen ser de carácter corporativo. 
       

        .row(titulo="Programas")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema3/img-10.png')
          .col-md-6
            p.text-black Programas
            p Se fijan con la intención de ayudar al logro de los objetivos y de los planes.   

        .row(titulo="Proyectos")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema3/img-11.png')
          .col-md-6
            p.text-black Proyectos
            p Son estructuras a mediano plazo que permiten una acción concreta y ayudan al logro de las metas establecidas.    


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
