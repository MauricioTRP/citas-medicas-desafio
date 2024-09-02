<script>
export default {
  name: 'NewUserForm',
  data() {
    return {
      paciente: '',
      hora: '',
      fecha: '',
      gravedad: '',
      optionGravedad: ['Baja', 'Media', 'Alta'],
      motivo: ''
    }
  },
  methods: {
    addPaciente() {
      this.$emit('submit-form', {
        paciente: this.paciente,
        hora: this.hora,
        fecha: this.fecha,
        gravedad: this.gravedad,
        motivo: this.motivo
      })

      // Limpiamos formulario
      this.paciente = ''
      this.fecha = ''
      this.hora = ''
      this.gravedad = ''
      this.motivo = ''
    },
    isFormValid() {
      console.log('Validando form')
      return this.paciente && this.fecha && this.hora && this.gravedad && this.motivo
    }
  },
  emits: ['submit-form']
}
</script>
<template>
  <form @submit.prevent="addPaciente">
    <div class="form-box">
      <div class="form-group">
        <label for="paciente" :style="{ color: paciente === '' ? 'red' : 'black' }">Paciente</label>
        <input type="text" id="paciente" v-model="paciente" />
      </div>
      <div class="form-group">
        <label for="fecha" :style="{ color: fecha === '' ? 'red' : 'black' }">Fecha</label>
        <input type="date" id="fecha" v-model="fecha" />
      </div>
      <div class="form-group">
        <label for="hora" :style="{ color: hora === '' ? 'red' : 'black' }">Hora</label>
        <input type="time" id="hora" v-model="hora" />
      </div>
      <div class="form-group">
        <label for="gravedad" :style="{ color: gravedad === '' ? 'red' : 'black' }">Gravedad</label>
        <select id="gravedad" v-model="gravedad">
          <option v-for="(option, idx) in optionGravedad" :key="idx">{{ option }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="motivo" :style="{ color: motivo === '' ? 'red' : 'black' }">Motivo</label>
        <input type="text" v-model="motivo" />
      </div>
    </div>
    <div>
      <button class="btn" type="submit" :disabled="!isFormValid()">Agregar</button>
    </div>
  </form>
</template>
<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

button {
  margin-top: 1.5rem;
}

.form-box {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
