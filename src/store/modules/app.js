const app = {
    state: {
        viewtag: 'category'
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
