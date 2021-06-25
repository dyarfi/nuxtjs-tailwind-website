// top level states
const state = () => {}
// top level getters
const getters = {
  getMenus: (state) => state.menus
}
// top level actions
const actions = {
  /* async getMenus({ commit, context }, payload, callback) { }, */
  async nuxtServerInit({ commit }, { req }) {
    const menus = await this.$content('pages')
      .only(['title', 'slug'])
      .where({ showInMenu: true, status: 'publish' })
      .sortBy('indexOrder', 'asc')
      .limit(5)
      .fetch()
    // .catch((err) => {
    // error({ statusCode: 404, message: 'Page not found' })
    // console.log(err)
    // })
    commit('GET_MENUS', menus)
  }
}
// top level mutations
const mutations = {
  GET_MENUS(state, payload) {
    state.menus = payload
  }
}

// export store modules
export default {
  // namespace: true,
  state,
  getters,
  actions,
  mutations,
  modules: {}
}
