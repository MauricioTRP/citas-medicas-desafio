import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NewUserForm from "./NewUserForm.vue";
import { warn } from "vue";

const patientDummy = {
  name: 'Juanito',
  date: '2020-10-03',
  hour: '10:00:30',
  motive: 'Dolor estomacal',
  severity: 'Baja'
}

describe('NewUserForm.vue', () => {
  const wrapper = mount(NewUserForm)
  
  // Encuentra los inputs
  const nameInput = wrapper.find('#paciente')
  const dateInput = wrapper.find('#fecha')
  const hourInput = wrapper.find('#hora')
  const motiveInput = wrapper.find('#motivo')
  const severityInput = wrapper.find('#gravedad')
  
  it('Podemos definir los inputs del formulario', async () => {
    await nameInput.setValue(patientDummy.name)
    await dateInput.setValue(patientDummy.date)
    await hourInput.setValue(patientDummy.hour)
    await motiveInput.setValue(patientDummy.motive)
    await severityInput.setValue(patientDummy.severity)

    console.log(wrapper.vm) // -> revisar si la variablede estado paciente tiene info
    expect(wrapper.vm.paciente).toBe(patientDummy.name)
    expect(wrapper.vm.hora).toBe(patientDummy.hour)
    expect(wrapper.vm.fecha).toBe(patientDummy.date)
    expect(wrapper.vm.gravedad).toBe(patientDummy.severity)
    expect(wrapper.vm.motivo).toBe(patientDummy.motive)
  })
})