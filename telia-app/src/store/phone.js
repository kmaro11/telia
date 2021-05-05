import axios from "axios"
import router from "../router/index"

const state = {
  allBrands: [],
  allPhones: {},
}

const actions = {
  getBrands({ commit }) {
    axios({
      url:
        "https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/brands.json"
    })
      .then((res) => {
        commit("setBrands", res.data.options)
      })
      .catch((err) => {
        router.push({ name: "error" })
      })
  },
  getPhones({ commit }) {
    axios({
      url:
        "https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/phones.json"
    })
      .then((res) => {
        let phones = res.data.reduce(function (r, a) {
          r[a.brand] = r[a.brand] || []
          r[a.brand].push(a)
          return r
        }, Object.create(null))
        commit("setPhones", phones)
      })
      .catch((err) => {
        router.push({ name: "error" })
      })
  },
  removePhoneFromList({ commit }, data) {
    commit("removePhone", data)
  }
}

const getters = {
  allPhonesList: (state) => {
    return state.allPhones
  }
}

const mutations = {
  setPhones(state, data) {
    state.allPhones = { ...data }
  },
  setBrands(state, data) {
    state.allBrands = { ...data }
  },
  removePhone(state, { brand, phone }) {
    state.allPhones[brand] = state.allPhones[brand].filter(
      (item) => item.contentKey !== phone
    )
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
