import { GET_TXTINFO, GET_LIKECOUNT } from "./types.ts"
export const state = () => {
  txtInfo: {}
  count: 0
}
export const mutations = {
  [GET_TXTINFO](state, data) {
    state.txtInfo = data
    // debugger
  },
  [GET_LIKECOUNT](state, data) {
    state.count = data
  }
}
export const actions = {
  async getTxtInfo({ commit }, id) {
    let result = await this.$axios.get(`/web/api/articles/list/${id}`)
    if (result) {
      commit(GET_TXTINFO, result)
    }
    // debugger
  }
}
export const getters = {}
