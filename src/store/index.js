import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartNumber: 0,
        numIncorrect: 0,
        Login: 'เข้าสู่ระบบ',
        pruduct:[]
    },
    mutations: {
        setCartNumber(state, value) {
            state.cartNumber += value
        },
        setLogin(state, value) {
            state.Login = value
            console.log(value);
        },
        setProduct(state, data){
            // console.log(data);
            state.pruduct.push(data);
        }
    },
    actions: {
        addAction(context, value) {
            context.commit('setState', value);
        },
        ShowLogin(context, value) {
            context.commit('setLogin', value);
        },
        addProduct(context, data){
            console.log(data);
            context.commit('setProduct', data);
            context.commit('setCartNumber', 1);
        },

    },
    getters:{
        getCartNumber(state){
            return state.cartNumber;
        },
        // getCartProduct(state){
        //     return state.pruduct;
        // },
        getCartProduct: state => {
            return state.pruduct;
          }
    },
    modules: {}
});


