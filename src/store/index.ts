import { createStore } from 'vuex'

import {
    POWER_ON,
    POWER_OFF,
    TURN_UP,
    TURN_DOWN,
    CHANGE_WINDSHIELD
} from './mutation-types'

const store = createStore({
    state: {
        power: false,
        temperature: 26,
        cording: true,
        heating: false,
        verticalSweeping: false,
        horizontalSweeping: false
    },
    mutations: {
        [POWER_ON](state): void {
            state.power = true
            state.verticalSweeping = true
            state.horizontalSweeping = true
        },
        [POWER_OFF](state): void {
            state.power = false
            state.verticalSweeping = false
            state.horizontalSweeping = false
        },
        [TURN_UP](state): void {
            if (state.power) {
                state.temperature++
            }
        },
        [TURN_DOWN](state): void {
            if (state.power) {
                state.temperature--
            }
        },
        [CHANGE_WINDSHIELD](state): void {
            state.verticalSweeping = !state.verticalSweeping
            state.horizontalSweeping = !state.horizontalSweeping
        }
    }
})

export default store