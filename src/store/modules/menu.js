import {calcExtraPrice, getCartMen, calcTotalPrice} from "../../utils"

const menu = {
    state: {
        current_menu: {},
        current_cart: {
            total_price : 0,
            products: {}
        }
    },
    mutations: {
        SET_CURRENT_MENU: (state, menu) => {
            state.current_menu = menu;
        },
        UPDATE_CURRENT_MENU_PRICE: (state) => {
            state.current_menu.price = state.current_menu.basic_price + calcExtraPrice(state.current_menu.content);
        },
        CLEAN_CURRENT_MENU:  (state) => {
            state.current_menu = {}
        },
        CLEAN_CURRENT_CART:  (state) => {
            state.current_menu = {};
            state.current_cart = {
                total_price : 0,
                products: {}
            }
        },
        ADD_MENU_INTO_CART: (state) => {
            let cart_menu = getCartMen(state.current_menu);
            state.current_cart.products[cart_menu.id]= cart_menu;
            state.current_cart.total_price = calcTotalPrice(state.current_cart.products)
        },
        DELETE_MENU_FROM_CART : (state, product_id) => {
            if (state.current_cart.products.hasOwnProperty(product_id)) {
                delete state.current_cart.products[product_id];
                state.current_cart.total_price = calcTotalPrice(state.current_cart.products)
            }
        },
        UPDATE_MENU_NUM_IN_CART: (state, product) => {
            if (state.current_cart.products.hasOwnProperty(product.id)) {
                state.current_cart.products[product.id]= product;
                state.current_cart.total_price = calcTotalPrice(state.current_cart.products)
            }
        },
    },
    actions: {
        setCurrentMenu({ commit }, menu) {
            commit('SET_CURRENT_MENU', menu)
        },
        updateCurrentMenuPrice({ commit }) {
            commit('UPDATE_CURRENT_MENU_PRICE')
        },
        cleanCurrentMenu({ commit }) {
            commit('CLEAN_CURRENT_MENU')
        },
        cleanCurrentCart({ commit }) {
            commit('CLEAN_CURRENT_CART')
        },
        addMenuIntoCart({ commit }) {
            commit('ADD_MENU_INTO_CART')
        },
        delMenuFromCart({ commit }, product_id) {
            commit('DELETE_MENU_FROM_CART', product_id)
        },
        updateMenuNumInCart({ commit }, product) {
            commit('UPDATE_MENU_NUM_IN_CART', product)
        }
    }
}

export default menu
