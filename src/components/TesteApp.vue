<script>


export default {
  name: 'TesteApp'
}
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const x = 75;
    const y = 75;
    ctx.font = "10px serif";
    ctx.fillText("192.168.0.8",x-25, y);
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2, true); // Outer circle

    ctx.moveTo(110, 75);
    ctx.stroke();
  }
}

draw();
</script>

<template>
  <h1>Ola mundinho</h1>
  <canvas id="canvas" width="150" height="150"></canvas>
</template>

<style scoped>

</style>