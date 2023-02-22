<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Normativa seguridad y salud en el trabajo

    .row.justify-content-between.mb-5
      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema7/img-1.png')

      .col-md-6.col-lg-8
        p El trabajo y la salud están estrechamente relacionados, porque a través del trabajo, se logra conseguir metas o satisfacer necesidades.

        p Ahora, la buena salud permite el desarrollo de las funciones laborales; esto, traducido en el logro de los objetivos de las organizaciones, según la planeación y las funciones de cada cargo.

        p Sin embargo, si el trabajo se desarrolla en condiciones que pueda causar daño a la integridad física, existirá un deterioro en la salud del trabajador y, por lo tanto, se verán afectados los resultados. de la empresa.

        p En Colombia, existe reglamentación que define y exige la aplicación y cumplimiento en temas de seguridad y salud en el trabajo; estas leyes, decretos y normas, son de estricto cumplimiento, sin importar la categoría de la organización.


    h3(data-aos="fade-right").mb-4
      i.fas.fa-square.cac.me-3
      |Posturas ergonómicas

    p.mb-4 Las posturas de trabajo son uno de los componentes asociados a los trastornos músculo esqueléticos, cuya aparición es dependiente de diversos puntos entre los cuales se destaca lo forzada que sea la postura, del tiempo que se mantenga, la frecuencia con que se realice o de la duración en exposición a posturas semejantes durante la jornada.
    p.mb-5 Para evitar cualquier dolencia o perjuicio en la salud física por posiciones incorrectas en el sitio de trabajo, se invita a tener en cuenta las siguientes recomendaciones:
    .row.justify-content-center.mb-5
      SlyderA.fnd-3.fl-a.p-5(tipo="b")
        .row
          .col-md-8.mb-4.mb-md-0.p-y-5
            h3 Adoptar una buena postura
            p Tener una buena postura inicia por conservar una postura recta, la espalda debe estar lo más derecha posible y bien pegada al respaldo de la silla para que no hayan huecos al nivel del área lumbar.


          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema7/img-2.png')

        .row
          .col-md-8.mb-4.mb-md-0.p-y-5
            h3 Elegir un asiento ergonómico
            p Deberá tener un asiento que le posibilite regular la elevación y conservar la distancia correcta entre el cuerpo y la pantalla.


          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema7/img-3.png')

        .row
          .col-md-8.mb-4.mb-md-0.p-y-5
            h3 Optimizar el área de trabajo
            p Para eludir molestias musculares se aconseja conservar los objetos que más use cerca del alcance de su mano. Si tiene que hacer un trabajo que necesite manejar documentos en papel, se deben situar entre la pantalla y el teclado, además se deben situar los objetos que utilice frecuentemente fuera del alcance, así se le obliga a levantarse, cambiar de postura e incentivar la circulación.


          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema7/img-4.png')

        .row
          .col-md-8.mb-4.mb-md-0.p-y-5
            h3 Adaptar la postura de la pantalla
            p Es imprescindible posicionar bien la pantalla para reducir los inconvenientes de fatiga visual, se debe colocar al nivel de los ojos y sutilmente dirigida hacia atrás.


          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema7/img-5.png')

        .row
          .col-md-8.mb-4.mb-md-0.p-y-5
            h3 Revisar su ergonomía en el trabajo
            p ¿La espalda está derecha y tiene los hombros echados hacia atrás?<br>
            p ¿La elevación del teclado conserva el brazo y el antebrazo en ángulo recto?<br>
            p ¿Las rodillas conforman un ángulo recto?<br>
            p ¿Tiene al alcance de su mano todos los objetos que utiliza habitualmente?<br>
            p ¿Realiza pausas activas para estirarse y moverse regularmente?



          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema7/img-3.png')


    ul.lista-ul--color.mor
      li
        i.fas.fa-square
        |
        h3.text-black Ejercicios compensatorios

    p Las exigencias físicas de una jornada, implican componentes de peligros ergonómicos; por ejemplo, posturas fijas, obligadas y repetitivas, las mismas que están afectando, de forma rápida, el sistema músculo esquelético.
    p La actividad física compensatoria es la acción de movimientos eficientes que controlan, disminuyen y eliminan la tensión secundaria de trabajos obligados, malas posturas y jornadas continuas de más de 3 horas, donde se trabaje en una postura pasiva.
    p Los ejercicios compensatorios también son conocidos como pausas activas para mejorar la movilidad, funcionamiento y confort de la salud física, mental y emocional. De manera complementaria, colaboran con la prevención de alteraciones musculares, dolores e indisposiciones laborales.
    p.mb-5 La orientación de una pausa activa, debe ser hacia las extremidades menores e inferiores como: el cuello, la espalda, la cintura escapular y la zona torácica, que han de ser las que más reciben el efecto de cargas en el trabajo.


    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4

          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.



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
