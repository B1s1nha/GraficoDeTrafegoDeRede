<script>

export default {
  name: 'ChartJs',
  data() {
    return {
      message: 'Vue + Canvas API',
      vueCanvas: null,
      rectWidth: 200
    }
  },
  mounted() {
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    this.vueCanvas = ctx;
  },
  methods: {
    drawRect() {
      // clear canvas
      this.vueCanvas.clearRect(0, 0, 400, 200);

      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.rect(20, 20, this.rectWidth, 100);
      this.vueCanvas.stroke();
    },
    addWidth() {
      this.rectWidth += 10
      this.drawRect()
    },
    subWidth() {
      this.rectWidth -= 10
      this.drawRect()
    }
  }

}
</script>


<template>
  <div>
    <canvas id="c" width="400" height="400"></canvas>
    <button @click="drawRect">Gerar Gráfico</button>
  </div>


</template>

<style scoped>
</style>