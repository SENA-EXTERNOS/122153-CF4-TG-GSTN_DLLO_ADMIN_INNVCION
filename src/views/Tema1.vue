<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El cliente 

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema1/img-1.png')

      .col-md-6.col-lg-8
        p.mb-5 El cliente se puede definir como la persona natural o jurídica que compra un producto o adquiere un servicio de manera voluntaria. El producto o servicio adquirido puede ser para uso propio o para terceros; estableciendo de esta manera, una relación comercial con la empresa vendedora.


    .row.justify-content-center.mb-5
      .col-md-8.col-lg-10
        .tarjeta.p-3.fnd-10
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img-2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 El cliente y tipo
                  p.text-small Para profundizar en la definición de cliente, lo invitamos a ver el video <b>“El cliente y tipo”. </b> 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://youtu.be/MKWwZYf8hSA')" target="_blank")
                    span Ver video
                    i.fas.fa-video

    p.mb-3 La planeación organizacional se debe establecer según los resultados obtenidos en la  identificación y análisis de las características de los clientes y la determinación de sus perfiles;  de este modo, se pueden establecer acciones de atención específicas.

    p.mb-5 El análisis de las necesidades, los gustos, las preferencias y las expectativas de los clientes  permitirán la estructuración y establecimiento de las actividades más adecuadas para el alcance  de un servicio de calidad. Este análisis debe realizarse de manera periódica, teniendo en cuenta los  diferentes cambios del mercado para así lograr una estructuración y actuación.

    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Necesidades


    .row.justify-content-center.mb-5
      .col-md-9.col-lg-10
        .bloque-texto-e.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            h2.text-regular Boeree, G. (2003), en su texto “La teoría de la personalidad” alude a la jerarquía de las necesidades, propuesta por Abraham Maslow (1943), para establecer que en el ser humano hay unas necesidades que prevalecen sobre otras; haciendo claridad que las personas inician con satisfacer las necesidades del primer nivel para poder llegar a las de nivel superior. 

            i.fas.fa-quote-right
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                .h3.mb-0 Boeree, G. (2003),


    p.mb-5 El autor expone “La pirámide de Maslow” (1943) en 5 grandes bloques: necesidades fisiológicas, de seguridad y reaseguramiento, de amor y pertenencia, de estima, y la necesidad de actualizar el sí mismo; como se muestra en la siguiente imagen: 
    .titulo-sexto.color-acento-contenido.mb5
      h5 Figura 1
      span <em> Pirámide de Maslow</em>
    .row.fnd-11.mb-5
      h3.text-center.mb-5.mt-5 La pirámide de Maslow
      .row.justify-content-center.mb-5
        .col-md-8.col-lg-10
          igure
            img(src='@/assets/curso/temas/tema1/img-3.svg', alt='Texto que describa la imagen')
    p.mb-5 Analizando la pirámide se evidencia que las empresas se ubicarán en el tercer nivel. Esta necesidad de pertenencia adopta una característica netamente social; lo que implica una relación entre el cliente y la organización; vínculo que repercute directamente en la sociedad.

    ul.lista-ul--color.mor.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Tipos de clientes

    p.mb-5 Es así como los clientes se pueden clasificar en internos y externos. Conozcamos cada uno de ellos:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-botones.p-5.fnd-4
        .row.justify-content-center.mb-4
          .col-12.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img-4.png')
          
        h2.text-center Clientes internos   
        p.text-center Son aquellas personas que están vinculadas con la organización por alguna relación laboral.
      .col-md.tarjeta.color-acento-botones.p-5.fnd-4-
        .row.justify-content-center.mb-4
          .col-12.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img-5.png')
          
        h2.text-center Clientes externos
        p.text-center Se refiere a las personas u organizaciones que pagan por un producto o servicio de una empresa o se relacionan comercialmente con esta.

    p.mb-5 Las empresas pueden tener diferentes tipos de clientes externos. Algunos de ellos son:

    .tarjeta.tarjeta--gris.p-4.px-5.mb-5.ln-am.fnd-3
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="Clientes directos")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema1/img-6.png')
          .col-md-6
            p.text-black Clientes directos
            p Son los que adquieren directamente el producto o servicio, pueden ser esporádicos, iniciales o habituales.
        .row(titulo="Proveedores")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema1/img-7.png')
          .col-md-6
            p.text-black Proveedores
            p Son aquellas personas naturales o jurídicas que proveen de materias primas o productos a la empresa para el desarrollo de su actividad.   
        .row(titulo="Entorno social")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema1/img-8.png')
          .col-md-6
            p.text-black Entorno social
            p Está conformado por la competencia y el entorno general (la sociedad).
        .row(titulo="El Estado")
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-400(src='@/assets/curso/temas/tema1/img-9.png')
          .col-md-6
            p.text-black El Estado
            p La empresa debe mantener relación de legalidad con el Estado, aplicando cada una de las normas tributarias y legales.              









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
