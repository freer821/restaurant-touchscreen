const menu = {
    state: {
        current_menu: {}
    },
    mutations: {
        SET_CURRENT_MENU: (state, menu) => {
            state.current_menu = menu;
        }
    },
    actions: {
        setCurrentMenu({ commit }, menu) {
            commit('SET_CURRENT_MENU', menu)
        }
    }
}

export default menu
