import { GET_ARTICLESLIST, GET_CLASSIFYLIST } from "./types.ts"
export const state = () => ({
  articlesList: [],
  classifyList: []
})
export const mutations = {
  [GET_ARTICLESLIST](state, data) {
    state.articlesList = data
  },
  [GET_CLASSIFYLIST](state, data) {
    state.classifyList = data
  }
}
export const actions = {
  async getArticlesList({ commit }) {
    let result = await this.$axios.get('/web/api/articles/list')

    if (result) {
      commit(GET_ARTICLESLIST, result)
    }
  },
  async getClassifylist({ commit }, tags) {
    let result = await this.$axios.get(`/mine/api/classify/${tags}`);
    if (result) {
      commit(GET_CLASSIFYLIST, result)
    }
  }
}
export const getters = {

}
