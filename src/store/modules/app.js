const app = {
    state: {
        viewtag: 'menu',
        cart: {}
    },
    mutations: {
        SET_VIEWTAG: (state, viewtag) => {
            state.viewtag = viewtag;
        }
    },
    actions: {
        setViewtag({ commit }, viewtag) {
            commit('SET_VIEWTAG', viewtag)
        }
    }
}

export default app
