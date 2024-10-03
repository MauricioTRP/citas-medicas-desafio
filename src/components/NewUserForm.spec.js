import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NewUserForm from "./NewUserForm.vue";

const patientDummy = {
  paciente: 'Juanito',
  fecha: '2020-10-03',
  hora: '10:00:30',
  motivo: 'Dolor estomacal',
  gravedad: 'Baja'
}

describe('NewUserForm.vue',async () => {
  const wrapper = mount(NewUserForm)
  
  // Encuentra los inputs
  const nameInput = wrapper.find('#paciente')
  const dateInput = wrapper.find('#fecha')
  const hourInput = wrapper.find('#hora')
  const motiveInput = wrapper.find('#motivo')
  const severityInput = wrapper.find('#gravedad')
  
  await nameInput.setValue(patientDummy.paciente)
  await dateInput.setValue(patientDummy.fecha)
  await hourInput.setValue(patientDummy.hora)
  await motiveInput.setValue(patientDummy.motivo)
  await severityInput.setValue(patientDummy.gravedad)
  
  it('Podemos definir los inputs del formulario', () => {

    // console.log(wrapper.vm) // -> revisar si la variablede estado paciente tiene info
    expect(wrapper.vm.paciente).toBe(patientDummy.paciente)
    expect(wrapper.vm.hora).toBe(patientDummy.hora)
    expect(wrapper.vm.fecha).toBe(patientDummy.fecha)
    expect(wrapper.vm.gravedad).toBe(patientDummy.gravedad)
    expect(wrapper.vm.motivo).toBe(patientDummy.motivo)
  })

  it('Podemos hacer emit desde el formulario', async () => {
    // activamos el evento submit
    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('submit-form')[0][0]).toEqual(patientDummy)
  })
})