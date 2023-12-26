import {createStore} from 'vuex'

export const store = createStore({
    state() {
        return {
            minutes: 10,
            secondes: 0,
            chrono: 0,
        }
    },
    actions: {
        decrementChrono(context) {
            const newSecondes = context.getters.getSecondes - 1
            if (newSecondes === -1) {
                context.commit('setMinutes', context.getters.getMinutes - 1)
                context.commit('setSecondes', 59)
            } else {
                context.commit('setSecondes', newSecondes)
            }
        }
    },
    getters: {
        getMinutes(state) {
            return state.minutes
        },
        getSecondes(state) {
            return state.secondes
        },
        getChrono(state){
            return state.chrono
        }
    },
    mutations: {
        setMinutes(state, minutes) {
            state.minutes = minutes
        },
        setSecondes(state, secondes) {
            state.secondes = secondes
        },
        setChrono(state, chrono) {
            state.chrono = chrono
        },
        restartChrono(state) {
            state.minutes = 10
            state.secondes = 0
        },
    }
})
