<script>
export default {
  name: 'PatientCard',
  props: ['paciente', 'fecha', 'hora', 'gravedad', 'motivo', 'idx'],
  methods: {
    removeCard() {
      this.$emit('remove-card')
    }
  },
  emits: 'remove-card'
}
</script>
<template>
  <div
    class="card"
    :class="gravedad === 'Baja' ? 'green' : gravedad === 'Media' ? 'yellow' : 'red'"
  >
    <b>Paciente</b>
    <p>{{ paciente }}</p>
    <b>Fecha</b>
    <p>{{ fecha }}</p>
    <b>Hora</b>
    <p>{{ hora }}</p>
    <b>Motivo</b>
    <p>{{ motivo }}</p>
    <button @click="removeCard">Eliminar</button>
  </div>
</template>
<style scoped>
.card {
  min-width: 10rem;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
}

.yellow {
  background-color: rgb(247, 247, 129);
}
.green {
  background-color: rgb(140, 226, 140);
}
.red {
  background-color: rgb(238, 125, 125);
}
</style>
