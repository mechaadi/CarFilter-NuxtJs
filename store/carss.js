import axios from 'axios'
export const strict = false

// const states = {
//   cars: [],
//   condition: 'new',
//   gearBox: 'manual',
//   body: 'convertible'
// }

// const getters = {
//   allCars: (states) => states.cars
// }

// const actions = {
//   async fetchCars({ commit }) {
//     const response = await axios.get(
//       'https://dms.automix.com/api/v1/it/vehicles'
//     )
//     console.log(response.data.data)
//     commit('setCars', response.data.data)
//   },

//   filterCondition({ commit }, condition) {
//     console.log(
//       condition.target.options[condition.target.options.selectedIndex]
//         .textContent
//     )
//     commit(
//       'setCondition',
//       condition.target.options[condition.target.options.selectedIndex]
//         .textContent
//     )
//   },

//   filterBody({ commit }, body) {
//     console.log(
//       body.target.options[body.target.options.selectedIndex].textContent
//     )
//     commit(
//       'setBody',
//       body.target.options[body.target.options.selectedIndex].textContent
//     )
//   },

//   filterGearbox({ commit }, gearBox) {
//     console.log(
//       gearBox.target.options[gearBox.target.options.selectedIndex].textContent
//     )
//     commit(
//       'setGearbox',
//       gearBox.target.options[gearBox.target.options.selectedIndex].textContent
//     )
//   }
// }

// export const state = () => ({
//   states,
//   getters,
//   actions,
//   mutations
// })

export const state = () => ({
  cars: [],
  fuel: ''
})

export const mutations = {
  setCars: (state, cars) => (state.cars = cars),
  setFuel: (state, fuel) => (state.fuel = fuel),
  async fetchCars({ commit }, state) {
    const response = await axios.get(
      `https://dms.automix.com/api/v1/it/vehicles?filter[fuel]=${this.fuel}`
    )
    console.log('from the store')
    console.log(response.data.data)
    state.cars = response.data.data
  }
}
