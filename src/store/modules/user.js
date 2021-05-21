export default {
    state: () => ({
        name: 'Juan Camilo'
    }),
    getters: {},
    mutations: {
        SET_NAME(state, payload){
            state.name = payload
        },
    },
    actions: {
        saveName({ commit }, data){
            commit('SET_NAME', data)
        }
    }
}