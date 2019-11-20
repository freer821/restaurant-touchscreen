const app = {
    state: {
        redirect: '',
        eatway: 'here',
        payment: 'card',
        cart: {}
    },
    mutations: {
        SET_EATWAY: (state, eatway) => {
            state.eatway = eatway;
        },
        SET_PAYMENT: (state, payment) => {
            state.payment = payment;
        }
    },
    actions: {
        setEatWay({ commit }, eatway) {
            commit('SET_EATWAY', eatway)
        },
        setPayment({ commit }, payment) {
            commit('SET_PAYMENT', payment)
        },
    }
}

export default app
